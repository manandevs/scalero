import Hero from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import Stats from '@/components/Stats';
import Comparison from '@/components/Comparison';
import Tech from '@/components/Tech';
import LeadList from '@/components/LeadList';
import Strategy from '@/components/Strategy';
import OutboundPartnerCard from '@/components/OutboundPartnerCard';
import Promise from '@/components/Promise';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Comparison />
      <Tech />
      <LeadList />
      <Strategy />
      <OutboundPartnerCard />
      <Promise />
      <FAQ />
      <Footer />
    </>
  );
}
