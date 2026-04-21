import { redirect } from "next/navigation";

export default function Page() {
  redirect("/coming-soon");
  return (
    <>
    <main className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Welcome to Amd Creatives</h1>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">
        We create high-performance short-form video content designed to scale your brand.
      </p>
      {/* Add your agency sections, portfolio, and CTA here */}
    </main>
    </>
  );
}
