import AuditSection from "../components/AuditSection";
import FallingLogos from "../components/FallingLogos";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import MarkupSection from "../components/MarkupSection";
import MidBanner from "../components/MidBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MidBanner />
      <FallingLogos />
      <MarkupSection />
      <AuditSection />
      <Footer />
    </>
  );
}
