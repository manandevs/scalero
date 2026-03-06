"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Target, Zap, BarChart3, Users, Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MessagingStrategy() {
  const elements = [
    { title: "引人注目的主题行", desc: "通过 A/B 测试确定的高打开率主题，确保您的邮件被看到。", icon: <Target className="text-red-500" /> },
    { title: "相关的行业洞察", desc: "将您的方案与客户当前的业务挑战或行业趋势直接挂钩。", icon: <BarChart3 className="text-blue-500" /> },
    { title: "清晰的价值主张", desc: "用最简练的语言说明您能为客户带来的具体收益。", icon: <Zap className="text-yellow-500" /> },
    { title: "强有力的行动号召", desc: "低门槛且明确的下一步指引，提高会议预约率。", icon: <Crosshair className="text-green-500" /> }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-white overflow-hidden relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider inline-flex justify-center items-center gap-2 mb-8"
          >
            <MessageSquare size={14} /> 个性化沟通策略
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            为决策者定制，<br />
            让每一条信息都有回响
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black/60 max-w-3xl mx-auto mb-12 font-nunito leading-relaxed"
          >
            拒绝千篇一律的模板。我们深入研究您的受众，撰写能够触动决策者痛点的高度个性化消息，建立真正的对话。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>

      {/* The Power of Personalization */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">为什么个性化是唯一的出路？</h2>
            <p className="text-lg text-black/60 mb-8 font-nunito leading-relaxed">
              决策者每天会收到数十封甚至上百封销售邮件。如果您的消息看起来像群发的，它会直接进入垃圾箱。
            </p>
            <div className="space-y-6">
              {[
                { title: "建立即时信任", desc: "展示您对他们业务的了解，而不是仅仅在推销。" },
                { title: "提高回复率", desc: "高度相关的消息通常比通用消息的回复率高出 3-5 倍。" },
                { title: "塑造品牌专业度", desc: "每一条发出的消息都代表了您公司的专业形象。" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</div>
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div className="text-sm text-black/50 font-nunito">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-mauve-900 rounded-xl p-8 text-white shadow-xl">
              <div className="font-bold text-sm opacity-40 uppercase tracking-widest mb-6">对比示例</div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 opacity-50">
                  <div className="text-xs opacity-40 mb-2">通用模板 (不推荐)</div>
                  <div className="text-sm">“您好，我们是一家领先的物流软件公司，希望能为您提供服务...”</div>
                </div>
                <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/50">
                  <div className="text-xs text-green-400 mb-2">Scalero 定制 (推荐)</div>
                  <div className="text-sm">“看到您最近在 LinkedIn 上分享了关于车队扩张的见解，非常受启发。考虑到贵司目前在华东地区的布局...”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy Development Process */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">策略开发流程</h2>
          <div className="grid md:grid-cols-2 gap-8 space-y-10">
            {[
              { title: "受众分析", desc: "深入研究目标决策者的痛点、语言风格和关注点。" },
              { title: "价值梳理", desc: "将您的产品特性转化为能够解决特定痛点的价值主张。" },
              { title: "文案创作", desc: "撰写多套不同角度的沟通话术，确保覆盖不同场景。" },
              { title: "测试优化", desc: "通过小规模测试获取数据，不断迭代表现最佳的版本。" }
            ].map((item, i) => (
              <div key={i} className="text-center relative max-w-2xs mx-auto">
                <div className="text-8xl absolute top-14 right-0 opacity-5">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-black/60 font-nunito leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Elements of Effective Messaging */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">高效沟通的四大要素</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {elements.map((element, i) => (
            <div key={i} className="p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {element.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{element.title}</h3>
              <p className="text-sm text-black/60 font-nunito leading-relaxed">{element.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Channel Integration */}
      <section className="py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">多渠道一致性体验</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16 font-nunito">
            我们确保您的品牌声音在邮件、LinkedIn 和电话中保持一致。这种多维度的触达能够显著增强您的专业形象并提高转化。
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="font-bold mb-2">邮件</div>
              <div className="text-xs opacity-40 uppercase">深度触达</div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="font-bold mb-2">LinkedIn</div>
              <div className="text-xs opacity-40 uppercase">社交背书</div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="font-bold mb-2">电话</div>
              <div className="text-xs opacity-40 uppercase">直接对话</div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics/Improvements */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">可预见的增长</h2>
              <p className="text-lg text-black/60 mb-8 font-nunito">
                通过优化消息策略，我们的客户通常能看到回复率和会议预约率的显著提升。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold">回复率平均提升 200%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold">会议预约成本降低 40%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold">销售周期缩短 15%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-white rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2.5×</div>
                <div className="text-xs opacity-40 uppercase tracking-widest">回复率</div>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-xs opacity-40 uppercase tracking-widest">提效</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">让您的消息不再被忽视</h2>
          <p className="text-xl text-white/70 mb-12 font-nunito">
            预约战略咨询，让我们为您打造专属的沟通策略。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
