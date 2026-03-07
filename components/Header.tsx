"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, TrendingUp, Phone, ShieldCheck, Crosshair, Server, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  width: string;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  id: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, width, activeDropdown, setActiveDropdown, id }) => (
  <div
    className="relative"
    onMouseEnter={() => setActiveDropdown(id)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    <button className="flex items-center gap-1 hover:opacity-70 transition-opacity py-2 font-bpmf">
      {label}
      <ChevronDown
        size={14}
        className={`transition-transform duration-200 ${activeDropdown === id ? "rotate-180" : ""}`}
      />
    </button>

    <AnimatePresence>
      {activeDropdown === id && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${width} bg-white rounded-2xl shadow-2xl border border-black/5 p-2 grid gap-4`}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              className="group flex flex-col gap-2 p-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="flex gap-2 items-start">
                <div className={`min-w-6 min-h-6 rounded-lg flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <div className="font-bold text-lg font-bpmf">{item.title}</div>
              </div>
              <div className="text-black/50 leading-relaxed font-nunito">{item.desc}</div>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutions: DropdownItem[] = [
    {
      title: "全托管服务",
      desc: "我们为您搭建并管理整个应用增长引擎，省心省力。",
      icon: <TrendingUp size={14} />,
      color: "bg-purple-100 text-purple-700",
      url: "/solutions/full-managed-service",
    },
    {
      title: "深度互动触达",
      desc: "深度触达高净值用户，提升核心付费与忠诚度。",
      icon: <Phone size={14} />,
      color: "bg-red-100 text-red-700",
      url: "/solutions/phone-outreach",
    },
    {
      title: "高潜用户洞察",
      desc: "智能生成精准目标用户画像，提高买量ROI。",
      icon: <ShieldCheck size={14} />,
      color: "bg-blue-100 text-blue-700",
      url: "/solutions/lead-research",
    },
    {
      title: "智能营销策略",
      desc: "为不同生命周期的用户定制唤醒与转化方案。",
      icon: <Crosshair size={14} />,
      color: "bg-green-100 text-green-700",
      url: "/solutions/messaging-strategy",
    },
  ];

  const resources: DropdownItem[] = [
    {
      title: "案例研究",
      desc: "客户成功故事展示。",
      icon: <Server size={14} />,
      color: "bg-indigo-100 text-indigo-700",
      url: "/resources/case-studies",
    },
    {
      title: "博客",
      desc: "了解最新应用增长与AI营销洞察。",
      icon: <ShieldCheck size={14} />,
      color: "bg-teal-100 text-teal-700",
      url: "/blog",
    },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 relative z-[60]">
        <svg width="20" height="20" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="black" strokeWidth="6" transform="rotate(45 50 50)" />
        </svg>
        <span className="text-xl font-bold tracking-tighter font-bpmf">斯卡莱罗</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 font-medium">
        <Dropdown
          label="解决方案"
          items={solutions}
          width="w-[800px] grid-cols-4"
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="solutions"
        />

        <Link href="/about" className="hover:opacity-70 transition-opacity font-bpmf">
          关于我们
        </Link>

        <Dropdown
          label="资源"
          items={resources}
          width="w-[500px] grid-cols-2"
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="resources"
        />

        {/* CTA */}
        <Link href="/book-call">
          <button className="flex h-fit w-fit items-center justify-center gap-2 rounded-full
            bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
            px-8 py-3 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
            transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
            active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2] font-bpmf text-sm">
            <span className="text-white">预约战略咨询</span>
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden p-2 text-black relative z-[60]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full bg-white shadow-xl z-50 lg:hidden flex flex-col pt-20 pb-6 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 font-bpmf">

              <div className="space-y-4">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">解决方案</div>
                {solutions.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    className="flex items-center gap-3 text-lg font-semibold hover:text-brand-purple"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-4 mt-2">
                <div className="font-bold text-gray-400 text-xs uppercase tracking-widest border-b border-gray-100 pb-2">公司与资源</div>
                <Link
                  href="/about"
                  className="block text-lg font-semibold hover:text-brand-purple"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  关于我们
                </Link>
                {resources.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    className="block text-lg font-semibold hover:text-brand-purple"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href="/book-call" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="flex w-full h-fit items-center justify-center gap-2 rounded-full
                    bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
                    px-8 py-4 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
                    font-bpmf text-base active:translate-y-1">
                    <span className="text-white">预约战略咨询</span>
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
