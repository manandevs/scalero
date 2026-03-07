import { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "首页 | Scalero - 专属定制应用增长引擎",
  description: "利用我们的自研技术和增长专家团队，全程管理您的应用增长链路：精准洞察目标受众、多渠道自动化触达、优化用户全生命周期留存。",
};

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
    </>
  );
}