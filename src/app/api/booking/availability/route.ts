import { NextRequest, NextResponse } from "next/server";
import {
  getGoogleCalendar,
  BOOKING_END_HOUR,
  BOOKING_START_HOUR,
  BOOKING_TIME_ZONE,
} from "../../../../lib/googleCalendar";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getDhakaDate(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: BOOKING_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0"
  )}`;
}

export async function GET(request: NextRequest) {
  try {
    const month = request.nextUrl.searchParams.get("month");
    const duration = Number(
      request.nextUrl.searchParams.get("duration") ?? "30"
    );

    if (!month || !/^\d{4}-\d{2}$/.test(month)) {
      return NextResponse.json(
        { error: "Please provide a month in YYYY-MM format." },
        { status: 400 }
      );
    }

    if (![15, 30].includes(duration)) {
      return NextResponse.json(
        { error: "Duration must be 15 or 30 minutes." },
        { status: 400 }
      );
    }

    const [year, monthNumber] = month.split("-").map(Number);

    if (monthNumber < 1 || monthNumber > 12) {
      return NextResponse.json(
        { error: "Invalid month." },
        { status: 400 }
      );
    }

    const start = new Date(
      `${month}-01T00:00:00+06:00`
    );

    const end = new Date(
      `${year}-${String(monthNumber + 1).padStart(2, "0")}-01T00:00:00+06:00`
    );

    // Handle December correctly.
    if (monthNumber === 12) {
      end.setUTCFullYear(year + 1);
    }

    const { calendar, calendarId } = getGoogleCalendar();

    const availability = await calendar.freebusy.query({
      requestBody: {
        timeMin: start.toISOString(),
        timeMax: end.toISOString(),
        timeZone: BOOKING_TIME_ZONE,
        items: [{ id: calendarId }],
      },
    });

    const busyPeriods =
      availability.data.calendars?.[calendarId]?.busy ?? [];

    const today = getDhakaDate(new Date());
    const now = Date.now();

    const dates: Record<string, string[]> = {};

    const daysInMonth = new Date(
      Date.UTC(year, monthNumber, 0)
    ).getUTCDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(monthNumber).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;

      if (date < today) continue;

      // Monday to Friday only.
      const weekday = new Date(
        Date.UTC(year, monthNumber - 1, day)
      ).getUTCDay();

      if (weekday === 0 || weekday === 6) continue;

      const slots: string[] = [];

      for (
        let minutes = BOOKING_START_HOUR * 60;
        minutes + duration <= BOOKING_END_HOUR * 60;
        minutes += 15
      ) {
        const time = formatTime(minutes);
        const slotStart = new Date(`${date}T${time}:00+06:00`);
        const slotEnd = new Date(
          slotStart.getTime() + duration * 60_000
        );

        if (slotStart.getTime() <= now) continue;

        const busy = busyPeriods.some((period) => {
          if (!period.start || !period.end) return false;

          return (
            slotStart.getTime() < new Date(period.end).getTime() &&
            slotEnd.getTime() > new Date(period.start).getTime()
          );
        });

        if (!busy) slots.push(time);
      }

      if (slots.length > 0) dates[date] = slots;
    }

    return NextResponse.json(
      {
        month,
        duration,
        timeZone: BOOKING_TIME_ZONE,
        dates,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Google Calendar availability error:", error);

    return NextResponse.json(
      { error: "Unable to retrieve Google Calendar availability." },
      { status: 500 }
    );
  }
}
