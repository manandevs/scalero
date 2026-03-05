"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center font-bpmf">

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

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
          专属定制销售系统，结合人工外呼，实现高效拓客
        </h1>

        <p className="text-lg text-black/60 max-w-md mb-10 leading-relaxed">
          利用我们的自研技术和专业团队，全程管理您的外呼流程：精准挖掘潜在客户、批量发送个性化消息、确保每封邮件安全到达收件箱，助力您的销售团队专注于成交。
        </p>

        <button className="group bg-brand-purple text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:shadow-lg hover:shadow-brand-purple/20 transition-all">
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
        <div className="p-4 border-b border-black/5 bg-gray-50">
          <div className="grid grid-cols-7 gap-px">
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
              <div key={i} className="bg-white h-26 p-3 relative group transition-colors hover:bg-gray-50">
                <span className="text-xs font-medium opacity-30">{i + 1}</span>

                {isBooked && (
                  <div className={`mt-2 p-2 rounded-lg ${isGreen ? 'bg-green-100 text-green-800' : 'bg-brand-purple/10 text-brand-purple'} text-[10px] font-bold leading-tight`}>
                    <div className="opacity-80 uppercase tracking-tighter mb-0.5">已预约会议</div>
                    <div className="uppercase tracking-widest text-[8px]">销售机会</div>
                  </div>
                )}

                {isReadingGoal && !isBooked && (
                  <div className="mt-2 p-2 rounded-lg bg-yellow-50 text-yellow-800 text-[10px] font-bold leading-tight">
                    <div className="opacity-80 uppercase tracking-tighter mb-0.5">阅读目标</div>
                    <div className="uppercase tracking-widest text-[8px]">自我提升</div>
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