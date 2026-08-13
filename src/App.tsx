import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ServicePrices from './components/ServicePrices';
import AboutUs from './components/AboutUs';
import InstagramFeed from './components/InstagramFeed';
import GoogleReviews from './components/GoogleReviews';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import CostEstimator from './components/CostEstimator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-800 flex flex-col font-sans selection:bg-rose-200 selection:text-stone-900 pb-16 sm:pb-0 overflow-x-hidden">
      <Navbar onOpenContact={scrollToContact} />
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <TrustStrip />
        <ServicePrices onOpenContact={scrollToContact} />
        <AboutUs />
        <InstagramFeed />
        <GoogleReviews />
        <BeforeAfterSlider />
        <CostEstimator onOpenContact={scrollToContact} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar onOpenContact={scrollToContact} />
    </div>
  );
}
