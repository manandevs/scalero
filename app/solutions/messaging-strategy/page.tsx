"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Target, Zap, BarChart3, Users, Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MessagingStrategy() {
  const elements = [
    { title: "高点击的推送文案", desc: "通过 A/B 测试确定的高打开率主题，确保您的应用推送被点开。", icon: <Target className="text-red-500" /> },
    { title: "贴合用户的使用场景", desc: "将您的消息与用户当前的交互行为或兴趣阶段直接挂钩。", icon: <BarChart3 className="text-blue-500" /> },
    { title: "清晰的价值主张", desc: "用最简练的语言说明该功能能为用户带来的具体收益。", icon: <Zap className="text-yellow-500" /> },
    { title: "强有力的行动号召", desc: "低门槛且明确的下一步指引，提高唤醒率与活跃度。", icon: <Crosshair className="text-green-500" /> }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24 bg-white overflow-hidden relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider inline-flex justify-center items-center gap-2 mb-6 lg:mb-8"
          >
            <MessageSquare size={14} /> 个性化营销与唤醒策略
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8"
          >
            为核心用户定制，<br className="hidden sm:block" />
            让每一次触达都转化为活跃
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-black/60 max-w-3xl mx-auto mb-10 lg:mb-12 font-nunito leading-relaxed"
          >
            拒绝千篇一律的推送模板。我们深入研究您的用户行为，制定能触动用户需求的高度个性化推送与站内信，建立真正的互动。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>

      {/* The Power of Personalization */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 leading-tight">为什么个性化是唯一的出路？</h2>
            <p className="text-base sm:text-lg text-black/60 mb-8 font-nunito leading-relaxed">
              用户每天会收到数十条甚至上百条应用推送。如果您的通知缺乏相关性，它会被直接忽略或导致应用卸载。
            </p>
            <div className="space-y-6">
              {[
                { title: "建立即时信任", desc: "精准命中用户痛点，展示您对他们喜好的了解，而不是无脑打扰。" },
                { title: "提高回复与点击率", desc: "高度相关的消息通常比通用群发的打开率高出 3-5 倍。" },
                { title: "塑造品牌专业度", desc: "每一次细腻的推送体验，都在潜移默化提升应用的专业形象。" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <div>
                    <div className="font-bold mb-1 text-sm sm:text-base">{item.title}</div>
                    <div className="text-sm text-black/50 font-nunito">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-4 lg:mt-0">
            <div className="bg-mauve-900 rounded-xl p-6 sm:p-8 text-white shadow-xl">
              <div className="font-bold text-xs sm:text-sm opacity-40 uppercase tracking-widest mb-6">对比示例</div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 opacity-50">
                  <div className="text-xs opacity-40 mb-2">通用模板 (不推荐)</div>
                  <div className="text-sm">“您好，我们上线了新功能，快来看看吧...”</div>
                </div>
                <div className="p-4 bg-green-600/20 rounded-lg border border-green-500/50">
                  <div className="text-xs text-green-400 mb-2">Scalero 定制 (推荐)</div>
                  <div className="text-sm leading-relaxed">“根据您上次浏览的记录，我们为您推荐了专属的高级功能，立即体验效率翻倍！”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy Development Process */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-20">策略开发流程</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-8">
            {[
              { title: "受众行为分析", desc: "深入研究目标活跃用户的痛点、偏好习惯和流失节点。" },
              { title: "价值梳理", desc: "将您的产品特性转化为能够解决特定需求场景的价值主张。" },
              { title: "文案创作", desc: "撰写多套不同维度的推送话术，确保覆盖不同生命周期场景。" },
              { title: "测试优化", desc: "通过小规模 A/B 测试获取数据，不断迭代表现最佳的版本。" }
            ].map((item, i) => (
              <div key={i} className="text-center relative max-w-sm mx-auto p-6 bg-white sm:bg-transparent rounded-xl shadow-sm sm:shadow-none border sm:border-transparent border-black/5">
                <div className="text-6xl sm:text-8xl absolute top-4 sm:top-14 right-4 sm:right-0 opacity-[0.03] sm:opacity-5 pointer-events-none">
                  0{i + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative z-10">{item.title}</h3>
                <p className="text-black/60 font-nunito leading-relaxed text-sm sm:text-base relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Elements of Effective Messaging */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-16">高效触达的四大要素</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {elements.map((element, i) => (
            <div key={i} className="p-6 lg:p-8 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                {element.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">{element.title}</h3>
              <p className="text-sm text-black/60 font-nunito leading-relaxed">{element.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Channel Integration */}
      <section className="py-16 lg:py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">多渠道一致性体验</h2>
          <p className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto mb-12 lg:mb-16 font-nunito">
            我们确保您的应用声音在推送通知、应用内弹窗和邮件中保持一致。这种多维度的触达能够显著增强您的产品形象并提高转化。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">推送通知</div>
              <div className="text-xs opacity-40 uppercase">强效唤醒</div>
            </div>
            <div className="p-5 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">应用内弹窗</div>
              <div className="text-xs opacity-40 uppercase">深度引导</div>
            </div>
            <div className="p-5 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="font-bold mb-1 sm:mb-2 text-base sm:text-lg">邮件与短信</div>
              <div className="text-xs opacity-40 uppercase">长效促活</div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics/Improvements */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">可预见的增长</h2>
              <p className="text-base sm:text-lg text-black/60 mb-8 font-nunito">
                通过优化唤醒策略，我们的应用客户通常能看到留存率和日活跃度的显著提升。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-black/5 sm:border-none sm:bg-transparent sm:p-0">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-sm sm:text-base">点击率平均提升 200%</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-black/5 sm:border-none sm:bg-transparent sm:p-0">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-sm sm:text-base">用户唤醒成本降低 40%</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-black/5 sm:border-none sm:bg-transparent sm:p-0">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="font-bold text-sm sm:text-base">转化周期缩短 15%</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-sm border border-black/5 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">2.5×</div>
                <div className="text-xs opacity-40 uppercase tracking-widest mt-2">点击转化率</div>
              </div>
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-sm border border-black/5 text-center">
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-xs opacity-40 uppercase tracking-widest mt-2">唤醒成本降低</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">让您的推送不再被无视</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 lg:mb-12 font-nunito">
            预约战略咨询，让我们为您打造专属的营销与唤醒策略。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
