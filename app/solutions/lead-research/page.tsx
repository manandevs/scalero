"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, CheckSquare, Filter, Cpu, Users, ArrowRight, AlertCircle } from 'lucide-react';

export default function LeadResearch() {
  const filters = [
    { title: "设备与网络环境", desc: "从机型到操作系统，精准锁定目标圈层。", icon: <Database size={18} /> },
    { title: "消费能力", desc: "筛选具有高频应用内购行为的高价值群体。", icon: <Users size={18} /> },
    { title: "应用偏好", desc: "识别正在使用同类竞品或相关应用的用户。", icon: <Search size={18} /> },
    { title: "社交属性", desc: "直接触达具有强裂变能力的社交节点节点用户。", icon: <Cpu size={18} /> }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider inline-flex justify-center items-center gap-2 mb-6 lg:mb-8"
          >
            <CheckSquare size={14} /> 精准高净值用户洞察
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight mb-6 lg:mb-8"
          >
            告别无效买量，<br className="hidden sm:block" />
            拥抱高价值用户
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-black/60 max-w-3xl mx-auto mb-10 lg:mb-12 font-nunito leading-relaxed"
          >
            盲目的广告投放已经失效。我们通过 AI 驱动的智能数据分析，为您精准锁定 100% 契合产品定位的高意向用户群体。
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#1e3a8a] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>

      {/* The Problem with Old Data */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bg-white p-6 sm:p-10 rounded-xl border border-black/5 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertCircle className="text-red-500 shrink-0" /> 传统买量的痛点
            </h2>
            <ul className="space-y-6">
              {[
                { title: "数据虚假", desc: "30% 的投放预算往往浪费在虚假流量上。" },
                { title: "定位模糊", desc: "泛泛的标签筛选无法触及真正的核心付费用户。" },
                { title: "高卸载风险", desc: "向错误的人群进行大量投放会导致极高的卸载率。" },
                { title: "资源浪费", desc: "运营团队花费 40% 的时间在无效的渠道优化上。" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold shrink-0 mt-0.5">!</div>
                  <div>
                    <div className="font-bold mb-1 text-sm sm:text-base">{item.title}</div>
                    <div className="text-black/50 font-nunito text-sm">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8 leading-tight">为什么精准度决定了您的 ROI？</h2>
            <p className="text-base sm:text-lg text-black/60 mb-8 font-nunito leading-relaxed">
              在应用推广中，用户的质量比下载量更重要。如果您的优质产品推给了错误的用户，留存率依然是零。
            </p>
            <div className="p-6 sm:p-8 bg-blue-600 text-white rounded-xl">
              <div className="text-4xl sm:text-5xl font-bold mb-2 font-nunito">95%+</div>
              <div className="opacity-80 uppercase tracking-widest text-sm sm:text-base">数据准确率保证</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lead Research Process */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-20">我们的研究流程</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "多源行为抓取",
              desc: "从应用商店评价、社群动态、兴趣图谱等多维度实时抓取最新信息。",
              icon: <Database className="text-blue-600" />
            },
            {
              title: "AI 智能清洗",
              desc: "利用自研 AI 模型对数据进行初步筛选和标准化处理。",
              icon: <Cpu className="text-purple-600" />
            },
            {
              title: "深度数据校验",
              desc: "每一条行为路径都经过专业算法的人工核实，确保 100% 准确。",
              icon: <Users className="text-green-600" />
            }
          ].map((item, i) => (
            <div key={i} className="relative p-6 lg:p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 lg:gap-2 mb-4 lg:mb-0">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center lg:mb-6 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold lg:mb-4">{item.title}</h3>
              </div>
              <p className="text-black/60 font-nunito leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Data Points/Filters */}
      <section className="py-16 lg:py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">精细化的筛选维度</h2>
              <p className="text-base sm:text-lg text-white/60 mb-10 lg:mb-12 font-nunito">
                我们不仅提供设备号和来源，还提供深度的上下文数据，让您的营销更具针对性。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {filters.map((filter, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-3 lg:mb-4">
                      <div className="text-blue-400 shrink-0">{filter.icon}</div>
                      <div className="font-bold text-sm sm:text-base">{filter.title}</div>
                    </div>
                    <div className="text-white/40 font-nunito text-xs sm:text-sm">{filter.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 text-black shadow-2xl">
              <div className="font-bold opacity-40 uppercase tracking-widest mb-6 text-sm">用户画像示例</div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5">
                  <div className="font-bold text-sm sm:text-base">资深手游玩家 | 高频付费</div>
                  <div className="text-black/75 mb-3 text-xs sm:text-sm">热爱策略类与角色扮演</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] sm:text-xs rounded">最新旗舰机型</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] sm:text-xs rounded">夜间活跃高频</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5 opacity-50">
                  <div className="font-bold text-sm sm:text-base">职场精英 | 效率工具控</div>
                  <div className="text-black/75 text-xs sm:text-sm">订阅多款办公软件</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5 opacity-30">
                  <div className="font-bold text-sm sm:text-base">大学生群体 | 社交达人</div>
                  <div className="text-black/75 text-xs sm:text-sm">图片视频重度分享者</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Human Curation */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">AI 的速度，人工的温度</h2>
        <p className="text-base sm:text-xl text-black/60 max-w-3xl mx-auto mb-12 lg:mb-16 font-nunito">
          我们不相信纯粹的自动化。每一份人群包在交付前，都会由我们的研究团队进行人工审核，确保每一个用户池都是真实的、活跃的，并且符合您的业务逻辑。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-16">
          <div className="p-6 sm:p-0 bg-gray-50 sm:bg-transparent rounded-xl">
            <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2 font-nunito">100%</div>
            <div className="tracking-widest text-sm sm:text-base uppercase">人工审核</div>
          </div>
          <div className="p-6 sm:p-0 bg-gray-50 sm:bg-transparent rounded-xl">
            <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2 font-nunito">4×</div>
            <div className="tracking-widest text-sm sm:text-base uppercase">留存率提升</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">停止在无效流量上浪费时间</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 lg:mb-12 font-nunito">
            让我们为您构建一个真正精准的核心活跃用户数据库。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#1e3a8a] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
