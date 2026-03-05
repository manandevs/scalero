"use client"
import React, { useState } from 'react';
import {
  ChevronDown,
  TrendingUp,
  Phone,
  ShieldCheck,
  Crosshair,
  Server,
  BoxSelect,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
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
      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />
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
            <a
              key={i}
              href="#"
              className="group flex flex-col gap-2 p-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className='flex gap-2 items-start'>
                <div className={`min-w-6 min-h-6 rounded-lg flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <div className="font-bold text-lg font-bpmf">{item.title}</div>
              </div>
              <div className="text-xs text-black/50 leading-relaxed font-nunito">{item.desc}</div>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutions: DropdownItem[] = [
    { title: '全托管服务', desc: 'We build and manages your entire outbound engine.', icon: <TrendingUp size={14} />, color: 'bg-purple-100 text-purple-700' },
    { title: '电话开发', desc: 'Real humans picking up the phone.', icon: <Phone size={14} />, color: 'bg-red-100 text-red-700' },
    { title: '潜在客户查找与筛选', desc: 'We builds smarter, more targeted lead lists.', icon: <ShieldCheck size={14} />, color: 'bg-blue-100 text-blue-700' },
    { title: '信息策略', desc: 'We write cold emails tailored to the decision-maker.', icon: <Crosshair size={14} />, color: 'bg-green-100 text-green-700' },
    { title: '邮件送达率', desc: 'We set up and maintain robust email infrastructures.', icon: <Server size={14} />, color: 'bg-yellow-100 text-yellow-700' },
    { title: '闭环优化', desc: 'We use AI to optimize your campaign for better results.', icon: <BoxSelect size={14} />, color: 'bg-pink-100 text-pink-700' },
  ];

  const resources: DropdownItem[] = [
    { title: '案例研究', desc: 'View our customer success stories.', icon: <FileCheck2 size={14} />, color: 'bg-indigo-100 text-indigo-700' },
    { title: '博客', desc: 'Learn how AI is changing outbound.', icon: <Sparkles size={14} />, color: 'bg-teal-100 text-teal-700' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            fill="none"
            stroke="black"
            stroke-width="6"
            transform="rotate(45 50 50)" />
        </svg>
        <span className="text-xl font-bold tracking-tighter font-bpmf">斯卡莱罗</span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Dropdown
          label="解决方案"
          items={solutions}
          width="w-[800px] grid-cols-4"
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="solutions"
        />
        <a href="#" className="hover:opacity-70 transition-opacity font-bpmf">关于我们</a>
        <Dropdown
          label="资源"
          items={resources}
          width="w-[500px] grid-cols-2"
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          id="resources"
        />

        <button
          className={`
            flex h-fit w-fit items-center justify-center gap-2 rounded-full
            bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
            px-8 py-4 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
            transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
            active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2] font-bpmf
          `}
        >
          <span className="text-white">预约战略咨询</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;