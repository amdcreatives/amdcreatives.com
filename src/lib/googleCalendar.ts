import { google } from "googleapis";

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  GOOGLE_CALENDAR_ID,
} = process.env;

export const BOOKING_TIME_ZONE = "Asia/Dhaka";
export const BOOKING_START_HOUR = 10;
export const BOOKING_END_HOUR = 18;

export function getGoogleCalendar() {
  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REFRESH_TOKEN ||
    !GOOGLE_CALENDAR_ID
  ) {
    throw new Error(
      "Google Calendar environment variables are missing. Check .env.local."
    );
  }

  const auth = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  auth.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  return {
    calendar: google.calendar({
      version: "v3",
      auth,
    }),
    calendarId: GOOGLE_CALENDAR_ID,
  };
}
