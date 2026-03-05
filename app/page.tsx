"use client";
import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  BarChart3,
  Zap,
  Users,
  Database,
  MessageSquare,
  Target,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Clock,
  Search,
  Filter,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import Stats from '@/components/Stats';

const ComparisonSection = () => (
  <section className="bg-brand-dark text-white py-24 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold mb-20">
        Most tools overwhelm.<br />Most agencies disappoint.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <div className="h-48 mb-8 relative flex items-end justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-[1px] bg-white/20" />
            </div>
            <div className="flex items-end gap-2 w-full h-full pb-8">
              {[40, 60, 30, 80, 50, 90, 40].map((h, i) => (
                <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-[10px] font-bold uppercase whitespace-nowrap">
              25 emails sent
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">SDRs</span> are slow to ramp and need handholding.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <div className="h-48 mb-8 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-40">
              <Clock size={14} /> Time Spent on Outbound
            </div>
            <div className="space-y-3">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-brand-purple" />
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-bold">24 <span className="opacity-40 font-normal">hours</span> 34 <span className="opacity-40 font-normal">minutes in total</span></span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" /> Testing
              </div>
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Tinkering
              </div>
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Fixing Issues
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Tools</span> require tinkering, testing, & fixing issues.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <div className="h-48 mb-8 bg-black/40 rounded-xl overflow-hidden border border-white/5">
            <div className="p-3 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">04 Mon</div>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-red-500/20 border border-red-500/30 p-2 rounded-lg">
                <div className="text-[8px] font-bold uppercase text-red-400 mb-1">Low Quality Lead</div>
                <div className="text-[10px] opacity-60">9:00 - 9:30 AM</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-2 rounded-lg opacity-40">
                <div className="text-[8px] font-bold uppercase mb-1">Unqualified Lead</div>
                <div className="text-[10px]">9:30 - 10:00 AM</div>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Agencies</span> promise results, but deliver poor leads.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TechSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div>
        <div className="flex items-center gap-3 mb-8 opacity-50">
          <div className="w-8 h-[1px] bg-brand-dark" />
          <span className="text-[10px] font-bold uppercase tracking-widest">For hard-to-crack traditional industries</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          The outbound partner with custom-built tech & managed execution
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="font-bold mb-2">We built our own outbound tech</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Our custom-built outbound system generates curated databases, runs niche-specific outreach, and improves every week.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
            <h3 className="font-bold mb-2">We manage it for you</h3>
            <p className="text-sm opacity-60 leading-relaxed">
              Our fully managed service handles your entire pipeline. From strategy to messaging, infrastructure to booking.
            </p>
          </div>
        </div>

        <button className="group bg-brand-purple text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:shadow-lg hover:shadow-brand-purple/20 transition-all">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          Apply for a Strategy Call
        </button>
      </div>

      <div className="relative">
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl space-y-8">
          <div className="space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Strategic Plan</div>
            <div className="space-y-2">
              {[
                { icon: <Target size={14} />, text: 'ICP | MID-MARKET LOGISTICS COMPANIES' },
                { icon: <Users size={14} />, text: 'PERSONA | DIRECTOR OF OPERATIONS' },
                { icon: <Zap size={14} />, text: 'TRIGGER | FLEET EXPANSION' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-black/5 text-[10px] font-bold">
                  <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-black/5">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-dark text-white p-4 rounded-xl space-y-4">
              <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">Finding Messaging-Market Fit</div>
              <div className="bg-white/10 p-3 rounded-lg text-[8px] leading-relaxed">
                Hi Alex, <br /><br />
                Congrats on your DHL partnership. Is ABC company looking to scale their fleet? <br /><br />
                We help logistic companies break into new areas with strategic fleet expansion solutions. <br /><br />
                Is this relevant at the moment?
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">Context Aware Personalization</div>
              <div className="bg-brand-dark text-white p-3 rounded-lg flex items-center gap-2">
                <Linkedin size={12} className="opacity-40" />
                <div className="flex-1">
                  <div className="text-[6px] opacity-40 uppercase">Scraped Linkedin</div>
                  <div className="text-[8px] font-bold">SAW YOUR RECENT <span className="text-brand-green">FLEET EXPANSION</span></div>
                </div>
              </div>
              <div className="bg-brand-dark text-white p-3 rounded-lg flex items-center gap-2">
                <Mail size={12} className="opacity-40" />
                <div className="flex-1">
                  <div className="text-[6px] opacity-40 uppercase">Scraped Website</div>
                  <div className="text-[8px] font-bold">CONGRATS ON YOUR <span className="text-brand-purple">DHL PARTNERSHIP</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LeadListSection = () => {
  const [activeTab, setActiveTab] = useState('Data Sources');
  const tabs = ['DATA SOURCES', 'MESSAGING', 'ICP MATCHING', 'MANAGED DELIVERABILITY', 'LOOP OPTIMIZATION', 'FULLY MANAGED'];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-8 mb-12 border-b border-black/5 pb-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] font-bold uppercase tracking-widest pb-4 relative transition-all ${activeTab === tab ? 'text-brand-dark' : 'text-black/30 hover:text-black/60'}`}
            >
              {tab}
              {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark" />}
            </button>
          ))}
        </div>

        <div className="bg-brand-dark text-white rounded-3xl p-12 overflow-hidden relative">
          <div className="max-w-xl relative z-10">
            <h2 className="text-4xl font-bold mb-6">Build better lead lists with custom databases, not generic data providers</h2>
            <p className="opacity-60 mb-12">Most tools rely on stale data or firmographic filters. We build tailored prospect databases from scratch based on your exact ICP.</p>
            <button className="flex items-center gap-4 text-sm font-bold group">
              Book Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-20 space-y-4 opacity-20">
            {[0.8, 0.6, 0.9, 0.4, 0.7, 0.5, 0.85, 0.3, 0.65].map((w, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-1 bg-brand-green rounded-full" style={{ width: `${w * 100}%` }} />
                <div className="h-1 bg-white/20 rounded-full flex-1" />
              </div>
            ))}
          </div>

          {/* Abstract data grid overlay */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 p-12 flex flex-col justify-end pointer-events-none">
            <div className="space-y-2">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, j) => (
                    <div key={j} className={`h-1 flex-1 rounded-sm ${Math.random() > 0.7 ? 'bg-brand-purple' : 'bg-white/10'}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategySection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-20 max-w-2xl">
      Your outbound strategy, execution, and optimization, completely done for you
    </h2>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: 'WEEK 1: ONBOARDING & STRATEGY',
          text: 'We gather insights about your ICP, messaging, and goals.',
          visual: (
            <div className="bg-gray-100 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 text-[8px] font-bold">
                <Target size={12} /> ICP | MID-MARKET LOGISTICS
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 text-[8px] font-bold">
                <Users size={12} /> PERSONA | DIRECTOR OF OPS
              </div>
            </div>
          )
        },
        {
          step: 'WEEK 2: CAMPAIGN BUILDOUT',
          text: 'We research, scrape, and enrich your lead list. Then we build and QA your first messaging campaign.',
          visual: (
            <div className="bg-gray-100 p-4 rounded-xl">
              <div className="bg-white p-2 rounded border border-black/5">
                <div className="text-[6px] opacity-40 uppercase mb-1">Glassdoor</div>
                <div className="h-2 w-full bg-gray-100 rounded-sm mb-1" />
                <div className="h-2 w-2/3 bg-gray-100 rounded-sm" />
              </div>
            </div>
          )
        },
        {
          step: 'WEEK 3: LAUNCH & MANAGE',
          text: 'Outreach begins. You get replies, we qualify and pass only the good ones.',
          visual: (
            <div className="bg-brand-dark text-white p-4 rounded-xl">
              <div className="bg-white/10 p-2 rounded text-[6px] leading-relaxed">
                Hi Alex, <br />
                Congrats on your DHL partnership...
              </div>
            </div>
          )
        },
        {
          step: 'ONGOING',
          text: 'Weekly updates, live feedback, and booked meetings, all managed for you.',
          visual: (
            <div className="bg-gray-100 p-4 rounded-xl grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`h-6 rounded-sm ${[2, 4, 7].includes(i) ? 'bg-brand-purple/20' : 'bg-white'}`} />
              ))}
            </div>
          )
        }
      ].map((item, i) => (
        <div key={i} className="space-y-6">
          <div className="aspect-square bg-white rounded-2xl border border-black/5 p-6 flex flex-col justify-center shadow-sm">
            {item.visual}
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-3">{item.step}</div>
            <p className="text-sm opacity-60 leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const PromiseSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto border-t border-black/5">
    <div className="grid md:grid-cols-2 gap-20">
      <h2 className="text-5xl font-bold">Our Promise</h2>
      <div className="space-y-8 text-sm opacity-70 leading-relaxed">
        <p>
          We started 斯凯勒罗 with a clear belief: outbound sales is broken, and AI will redefine how companies connect with their customers.
        </p>
        <p>
          斯凯勒罗 exists to solve this problem. We won't be just another sales platform, we're your outbound growth partner, combining proprietary technology, rich data intelligence, and human expertise to connect you with perfect-fit prospects others simply can't reach.
        </p>
        <p>
          Our promise is simple: we deliver qualified meetings with decision-makers in hard-to-reach, lucrative industries. No dashboards to manage. No systems to learn. No resources to hire. Just a steady, predictable flow of high-value conversations that convert.
        </p>
        <p>
          We take the entire prospecting burden off your plate, finding targets, crafting personalized outreach, managing replies, and booking meetings. So your team can focus exclusively on closing deals. And the longer we work together, the more our system learns and optimizes for your specific business.
        </p>
        <p>
          With 斯凯勒罗, outbound sales becomes what it should be: predictable, profitable, and painless.
        </p>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "DO I NEED TO SET ANYTHING UP?", a: "No. We handle everything from technical infrastructure (domains, ESPs) to lead research and messaging." },
    { q: "DO YOU COLD CALL?", a: "Yes. We combine automated outreach with human cold calling to maximize conversion rates in traditional industries." },
    { q: "CAN I USE MY CRM OR PIPELINE TOOLS?", a: "Absolutely. We integrate with all major CRMs to ensure a seamless handoff of qualified leads." },
    { q: "WHAT IF I'M IN A NICHE OR TRADITIONAL INDUSTRY?", a: "That's our specialty. We excel in hard-to-crack markets where generic tools fail." },
    { q: "HOW FAST WILL I SEE MEETINGS?", a: "Typically, campaigns go live in Week 3, with the first meetings appearing shortly after." },
    { q: "HOW IS THIS DIFFERENT FROM A TRADITIONAL LEAD GEN AGENCY?", a: "We use proprietary tech to build custom databases from scratch, rather than buying stale lists. Plus, we manage the entire process end-to-end." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-20">FAQs</h2>
      <div className="border-t border-black/5">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-black/5">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-8 flex justify-between items-center text-left group"
            >
              <span className="text-xs font-bold uppercase tracking-widest group-hover:opacity-60 transition-opacity">{faq.q}</span>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-sm opacity-60 max-w-2xl leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-24">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-brand-dark rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tighter">斯凯勒罗</span>
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">Company</div>
          <ul className="space-y-4 text-xs font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Home</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">About Us</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">Solutions</div>
          <ul className="space-y-4 text-xs font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Lead Finding and Qualification</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Cold Calling</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Messaging</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Deliverability</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Closed Loop Optimisation</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Done For You</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">Resources</div>
          <ul className="space-y-4 text-xs font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Blog</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Tools</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Glossary</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-8">
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <span>© 2025 斯凯勒罗. All rights reserved.</span>
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Cookie Settings</a>
        </div>
        <div className="flex gap-6 opacity-40">
          <Linkedin size={20} className="hover:opacity-100 cursor-pointer transition-opacity" />
          <Twitter size={20} className="hover:opacity-100 cursor-pointer transition-opacity" />
          <Github size={20} className="hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
      </div>
    </div>
  </footer>
);

const OutboundPartnerCard = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-brand-dark text-white p-16 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-8 leading-tight">
          The outbound partner built for hard-to-crack markets. Powered by our own tech.
        </h2>
        <p className="opacity-60 mb-12 leading-relaxed">
          斯凯勒罗 is the only outbound partner combining proprietary outbound tech with fully managed execution. We're your unfair advantage in markets where outbound is hard, ignored, or broken.
        </p>
        <button className="group bg-white text-brand-dark px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-opacity-90 transition-all w-fit">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          Apply for a Strategy Call
        </button>
      </div>
      <div className="bg-brand-purple/20 p-16 flex flex-col justify-center gap-6 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-lg flex items-center gap-4 relative z-10">
          <div className="w-10 h-10 rounded bg-brand-purple/10 flex items-center justify-center text-brand-purple">
            <Target size={20} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Custom Lead Targeting</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-lg flex items-center gap-4 relative z-10 translate-x-8">
          <div className="w-10 h-10 rounded bg-brand-purple/10 flex items-center justify-center text-brand-purple">
            <Layers size={20} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Custom Infrastructure</div>
        </div>
        <div className="bg-brand-dark text-white p-6 rounded-2xl shadow-lg flex items-center gap-4 relative z-10 translate-x-16">
          <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
            <RefreshCw size={20} />
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest">Fully Managed Service</div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      {/*
      <ComparisonSection />
      <TechSection />
      <LeadListSection />
      <StrategySection />
      <OutboundPartnerCard />
      <PromiseSection />
      <FAQSection />
      <Footer /> */}
    </>
  );
}
