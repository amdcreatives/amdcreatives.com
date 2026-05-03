// import { redirect } from "next/navigation";
import Header from "@/src/components/common/Header";
import AboutAmdCreatives from "@/src/components/ui/AboutAmdCreatives";
import BannerPrimary from "@/src/components/ui/BannerPrimary";
import Comparison from "@/src/components/ui/Comparison";
import LatestWork from "@/src/components/ui/LatestWork";
import ClientsWithUs from "@/src/components/ui/ClientsWithUs";
import Testimonials from "@/src/components/ui/Testimonials";
import ContactSection from "@/src/components/ui/ContactSection";
import FAQSection from "@/src/components/ui/FAQSection";
import CoreServices from "@/src/components/ui/CoreServices";
import Footer from "@/src/components/common/Footer";

export default function Page() {
  // redirect("/coming-soon");
  return (
    <>
      <Header />
      <main>
        <BannerPrimary />
        <AboutAmdCreatives />
        <LatestWork />
        <Comparison />
        <ClientsWithUs />
        <CoreServices />
        <Testimonials />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
