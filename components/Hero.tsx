"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="px-6 py-8 lg:py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center font-bpmf">

      {/* Left Column: Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
            全球创业加速器背书
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[1.05] tracking-tight mb-6 lg:mb-8">
          专属定制应用增长引擎，结合智能算法，实现指数级用户爆发
        </h1>

        <p className="text-base sm:text-lg text-black/60 max-w-md mb-8 lg:mb-10 leading-relaxed">
          利用我们的自研技术和增长专家团队，全程管理您的应用增长链路：精准洞察目标受众、多渠道自动化触达、优化用户全生命周期留存，助力您的产品团队专注于核心体验优化。
        </p>

        <button className="group w-full sm:w-fit justify-center bg-brand-purple text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:shadow-lg hover:shadow-brand-purple/20 transition-all">
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          立即申请战略咨询
        </button>
      </motion.div>

      {/* Right Column: Calendar / Schedule */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-lg shadow-2xl shadow-black/5 border border-black/5 overflow-hidden"
      >
        {/* Weekdays */}
        <div className="p-2 sm:p-4 border-b border-black/5 bg-gray-50 text-xs sm:text-base">
          <div className="grid grid-cols-7 gap-px text-center">
            <span>日</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
          </div>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 bg-white">
          {Array.from({ length: 31 }).map((_, i) => {
            const bookedCalls = [3, 8, 14, 19, 22, 26];
            const readingGoals = [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 23, 24, 25, 27, 28, 29, 30];
            const isBooked = bookedCalls.includes(i);
            const isReadingGoal = readingGoals.includes(i);
            const isGreen = [3, 19].includes(i);

            return (
              <div key={i} className="bg-white min-h-[4.5rem] sm:min-h-[5.5rem] lg:min-h-[6.5rem] p-1.5 sm:p-3 relative group transition-colors hover:bg-gray-50">
                <span className="text-[10px] sm:text-xs font-medium opacity-30">{i + 1}</span>

                {isBooked && (
                  <div className={`mt-1 sm:mt-2 p-1 sm:p-2 rounded-md sm:rounded-lg ${isGreen ? 'bg-green-100 text-green-800' : 'bg-brand-purple/10 text-brand-purple'} text-[8px] lg:text-[10px] font-bold leading-tight`}>
                    <div className="opacity-80 uppercase tracking-tighter mb-0.5 truncate">转化高峰</div>
                    <div className="uppercase tracking-widest text-[6px] lg:text-[8px] hidden sm:block truncate">核心用户增长</div>
                  </div>
                )}

                {isReadingGoal && !isBooked && (
                  <div className="mt-1 sm:mt-2 p-1 sm:p-2 rounded-md sm:rounded-lg bg-yellow-50 text-yellow-800 text-[8px] lg:text-[10px] font-bold leading-tight">
                    <div className="opacity-80 uppercase tracking-tighter mb-0.5 truncate">阅读目标</div>
                    <div className="uppercase tracking-widest text-[6px] lg:text-[8px] hidden sm:block truncate">自我提升</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;