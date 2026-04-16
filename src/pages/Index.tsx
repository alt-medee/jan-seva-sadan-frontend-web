import { Helmet } from "react-helmet";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import AboutSection from "@/components/AboutSection";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import AppointmentForm from "@/components/AppointmentForm";
// import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen">

    {/* SEO Meta Tags */}
    <Helmet>
      <title>
        J.P Seva Sadan Hospital – Best Hospital in Gawpur & Korbadha Patali, Bihar
      </title>

      <meta
        name="description"
        content="J.P Seva Sadan Hospital provides trusted healthcare services in Gawpur and Korbadha Patali, Bihar. Offering emergency care, OPD services, diagnostics, and specialist doctors with affordable and quality medical treatment."
      />

      <meta
        name="keywords"
        content="J.P Seva Sadan Hospital, hospital in Gawpur Bihar, hospital in Korbadha Patali Bihar, best hospital near me, healthcare services Bihar, emergency hospital Bihar, OPD services, diagnostics center Bihar, specialist doctors Bihar, affordable hospital Bihar, medical services hospital"
      />

      <meta property="og:title" content="J.P Seva Sadan Hospital – Best Hospital in Bihar" />
      <meta property="og:description" content="Trusted healthcare services with emergency care, OPD, diagnostics & specialist doctors in Samastipur, Bihar." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jan-seva-sadan-frontend-web.vercel.app/" />
      <meta property="og:image" content="https://jan-seva-sadan-frontend-web.vercel.app/logo.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="J.P Seva Sadan Hospital" />
      <meta name="twitter:description" content="Affordable and quality healthcare in Bihar." />
      <meta name="twitter:image" content="https://jan-seva-sadan-frontend-web.vercel.app/logo.png" />
    </Helmet>

    {/* Layout */}
    <TopBar />
    <Navbar />
    <HeroSection />
    <QuickActions />
    <AboutSection />
    <SpecialitiesSection />
    <DoctorsSection />
    <ServicesSection />
    <WhyChooseSection />
    <FacilitiesSection />
    <TestimonialsSection />
    {/* <AppointmentForm /> */}
    {/* <GallerySection /> */}
    <FAQSection />
    <ContactSection />
    <Footer />
    <FloatingButtons />

  </div>
);

export default Index;