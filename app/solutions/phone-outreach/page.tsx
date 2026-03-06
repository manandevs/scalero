"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Zap, ShieldCheck, Heart, MessageSquare, BarChart3, ArrowRight } from 'lucide-react';

export default function PhoneOutreach() {
  const stats = [
    { label: "平均接通率", value: "25%+", color: "text-blue-600" },
    { label: "会议转化率", value: "15%+", color: "text-green-600" },
    { label: "月均通话量", value: "5000+", color: "text-purple-600" }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-white overflow-hidden relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-6">
              真实人工，拒绝机器人
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              有温度的电话开发，建立真实的商业连接
            </h1>
            <p className="text-xl text-black/60 mb-10 font-nunito leading-relaxed">
              在自动化泛滥的时代，真实的对话比以往任何时候都更有价值。我们的专业电话开发团队代表您的品牌，与决策者进行高质量的深度沟通。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-black/5 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-bold">正在通话中...</div>
                    <div className="text-xs text-black/40">正在与 某物流公司 运营总监 沟通</div>
                  </div>
                </div>
                <div className="p-4 bg-mauve-900 text-white rounded-xl">
                  <div className="text-xs opacity-60 mb-2">实时反馈</div>
                  <div className="italic">“对方对我们的车队管理方案非常感兴趣，已预约下周二下午 2 点演示。”</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Why Phone Outreach Matters */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">为什么电话开发依然不可替代？</h2>
          <p className="text-lg text-black/60 font-nunito">
            对于高价值或复杂的 B2B 交易，直接的人际互动是建立信任和处理复杂异议的最快方式。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "即时反馈",
              desc: "在对话中即时捕捉客户的痛点和疑虑，并给出针对性的解答。",
            },
            {
              title: "深度建立信任",
              desc: "人类的声音和情感共鸣是任何自动化邮件或机器人无法模拟的。",
            },
            {
              title: "高效处理异议",
              desc: "专业的开发代表能够巧妙化解“没时间”或“不需要”等常见拒绝。",
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-black/60 font-nunito leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics/Success Stories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">实战数据表现</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 rounded-xl bg-gray-50 border border-black/5 text-center">
              <div className="text-sm text-black/40 uppercase tracking-widest mb-4">{stat.label}</div>
              <div className={`text-6xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-black/60 font-nunito">基于过去 12 个月的客户平均表现</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">技术赋能，人工主导</h2>
          <p className="text-lg text-black/60 mb-12 font-nunito">
            我们使用先进的 CRM 和通话追踪技术来支持我们的团队，确保每一次通话都有据可查，每一条线索都能实时同步到您的销售漏斗中。
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale font-nunito">
            {/* Placeholder for CRM logos */}
            <div className="font-bold text-2xl">Salesforce</div>
            <div className="font-bold text-2xl">HubSpot</div>
            <div className="font-bold text-2xl">Pipedrive</div>
            <div className="font-bold text-2xl">Zoho</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">想让您的销售额更上一层楼吗？</h2>
          <p className="text-xl text-white/70 mb-12 font-nunito">
            让我们为您展示专业电话开发如何改变您的业务增长轨迹。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-black">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
