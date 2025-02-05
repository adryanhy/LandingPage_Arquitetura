import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection'
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}