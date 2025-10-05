import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import HowToEarnGP from '@/components/sections/HowToEarnGP';
import CommunitySharing from '@/components/sections/CommunitySharing';
import FAQ from '@/components/sections/FAQ';
import FooterCTA from '@/components/sections/FooterCTA';
import Footer from '@/components/sections/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <HowToEarnGP />
        <CommunitySharing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
