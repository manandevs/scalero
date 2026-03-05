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
import Comparison from '@/components/Comparison';
import Tech from '@/components/Tech';
import LeadList from '@/components/LeadList';
import Strategy from '@/components/Strategy';

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
      <Comparison />
      <Tech />
      <LeadList />
      <Strategy />
      {/*
      <OutboundPartnerCard />
      <PromiseSection />
      <FAQSection />
      <Footer /> */}
    </>
  );
}
