"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Zap, ShieldCheck, Heart, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

export default function PhoneOutreach() {
  const stats = [
    { label: "平均互动率", value: "25%+", color: "text-blue-600" },
    { label: "VIP付费转化率", value: "15%+", color: "text-green-600" },
    { label: "月均深度沟通量", value: "5000+", color: "text-purple-600" }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24 bg-white overflow-hidden relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block bg-red-100 text-red-700 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider mb-6">
              真实专属服务，提升用户忠诚度
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8">
              有温度的深度互动，<br className="hidden sm:block lg:hidden" />建立真实的高净值用户连接
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-black/60 mb-8 lg:mb-10 font-nunito leading-relaxed">
              在自动化推送泛滥的时代，真实的对话对于高价值用户更为关键。我们的专属用户运营团队代表您的应用，与核心VIP进行高质量的深度沟通。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xl sm:shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-black/5">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base">正在通话中...</div>
                    <div className="text-xs sm:text-sm text-black/40 mt-0.5">正在与 核心VIP付费用户 沟通</div>
                  </div>
                </div>
                <div className="p-4 sm:p-5 bg-mauve-900 text-white rounded-xl shadow-md">
                  <div className="text-xs opacity-60 mb-2 uppercase tracking-wider">实时反馈</div>
                  <div className="italic text-sm sm:text-base leading-relaxed">“对方对我们新推出的高级订阅功能非常感兴趣，已收集了宝贵的产品建议。”</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Why Phone Outreach Matters */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">为什么专属触达依然不可替代？</h2>
          <p className="text-base sm:text-lg text-black/60 font-nunito leading-relaxed">
            对于高客单价或复杂业务模式的应用，直接的人际互动是建立信任和处理复杂异议的最快方式。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "即时反馈",
              desc: "在对话中即时捕捉用户的痛点和需求，并给出针对性的解答。",
            },
            {
              title: "深度建立信任",
              desc: "人类的声音和情感共鸣是任何自动化推送或机器人客服无法模拟的。",
            },
            {
              title: "高效处理异议",
              desc: "专业的运营代表能够巧妙化解用户的顾虑，直接提升续费与付费转化率。",
            }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 sm:bg-transparent rounded-xl border border-black/5 sm:border-none">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-black/60 font-nunito leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics/Success Stories */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-16">实战数据表现</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 lg:p-10 rounded-xl bg-gray-50 border border-black/5 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs sm:text-sm text-black/40 uppercase tracking-widest mb-3 sm:mb-4">{stat.label}</div>
              <div className={`text-5xl lg:text-6xl font-bold mb-3 sm:mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs sm:text-sm text-black/60 font-nunito">基于过去 12 个月的客户平均表现</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">技术赋能，人工主导</h2>
          <p className="text-base sm:text-lg text-black/60 mb-10 lg:mb-12 font-nunito leading-relaxed max-w-3xl mx-auto">
            我们使用先进的移动分析工具（CDP）和互动追踪技术来支持我们的团队，确保每一次触达都有据可查，每一条用户反馈都能实时同步到您的产品迭代漏斗中。
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 opacity-40 grayscale font-nunito select-none">
            {/* Placeholder for CRM logos */}
            <div className="font-bold text-xl sm:text-2xl">AppsFlyer</div>
            <div className="font-bold text-xl sm:text-2xl">Mixpanel</div>
            <div className="font-bold text-xl sm:text-2xl">Amplitude</div>
            <div className="font-bold text-xl sm:text-2xl">Braze</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">想让您的应用留存更上一层楼吗？</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 lg:mb-12 font-nunito">
            让我们为您展示深度互动触达如何改变您的核心高净值用户群。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-black">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
