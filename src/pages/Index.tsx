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
import AppointmentForm from "@/components/AppointmentForm";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen">
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
    <AppointmentForm />
    <GallerySection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
