"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, CheckSquare, Filter, Cpu, Users, ArrowRight, AlertCircle } from 'lucide-react';

export default function LeadResearch() {
  const filters = [
    { title: "行业细分", desc: "从物流到高科技，精准锁定垂直领域。", icon: <Database size={18} /> },
    { title: "公司规模", desc: "根据员工人数、营收规模进行筛选。", icon: <Users size={18} /> },
    { title: "关键角色", desc: "直接触达决策者（如运营总监、创始人）。", icon: <Search size={18} /> },
    { title: "技术栈", desc: "识别正在使用特定软件或服务的公司。", icon: <Cpu size={18} /> }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider inline-flex justify-center items-center gap-2 mb-8"
          >
            <CheckSquare size={14} /> 精准潜在客户挖掘
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold leading-tight mb-8"
          >
            告别过时数据库，<br />
            拥抱精准线索
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-black/60 max-w-3xl mx-auto mb-12 font-nunito leading-relaxed"
          >
            通用的名单已经失效。我们通过 AI 驱动的智能搜索与人工二次校验，为您提供 100% 符合 ICP 的高意向客户名单。
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#1e3a8a] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>

      {/* The Problem with Old Data */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-10 rounded-xl border border-black/5 shadow-xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertCircle className="text-red-500" /> 传统名单的痛点
            </h2>
            <ul className="space-y-6">
              {[
                { title: "数据陈旧", desc: "30% 的联系人信息在一年内会失效。" },
                { title: "定位模糊", desc: "泛泛的行业分类无法触及真正的决策者。" },
                { title: "垃圾邮件风险", desc: "向错误的名单发送大量邮件会导致域名被封。" },
                { title: "资源浪费", desc: "销售团队花费 40% 的时间在无效线索上。" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold ">!</div>
                  <div>
                    <div className="font-bold mb-1">{item.title}</div>
                    <div className=" text-black/50 font-nunito">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">为什么精准度决定了您的 ROI？</h2>
            <p className="text-lg text-black/60 mb-8 font-nunito leading-relaxed">
              在外呼销售中，名单的质量比消息的质量更重要。如果您把完美的消息发给了错误的人，转化率依然是零。
            </p>
            <div className="p-8 bg-blue-600 text-white rounded-xl">
              <div className="text-5xl font-bold mb-2 font-nunito">95%+</div>
              <div className=" opacity-80 uppercase tracking-widest">数据准确率保证</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Lead Research Process */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">我们的研究流程</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "多源数据抓取",
              desc: "从 LinkedIn、行业协会、新闻动态等多维度实时抓取最新信息。",
              icon: <Database className="text-blue-600" />
            },
            {
              title: "AI 智能清洗",
              desc: "利用自研 AI 模型对数据进行初步筛选和标准化处理。",
              icon: <Cpu className="text-purple-600" />
            },
            {
              title: "人工二次校验",
              desc: "每一条线索都经过专业研究员的人工核实，确保 100% 准确。",
              icon: <Users className="text-green-600" />
            }
          ].map((item, i) => (
            <div key={i} className="relative p-4 rounded-xl border border-black/5 bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              </div>
              <p className="text-black/60 font-nunito leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Data Points/Filters */}
      <section className="py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">精细化的筛选维度</h2>
              <p className="text-lg text-white/60 mb-12 font-nunito">
                我们不仅提供姓名和邮箱，还提供深度的上下文数据，让您的外呼更具针对性。
              </p>
              <div className="grid grid-cols-2 gap-6">
                {filters.map((filter, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-blue-400">{filter.icon}</div>
                      <div className="font-bold">{filter.title}</div>
                    </div>
                    <div className=" text-white/40 font-nunito">{filter.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-black">
              <div className="font-bold  opacity-40 uppercase tracking-widest mb-6">线索示例</div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5">
                  <div className="font-bold">张三 | 运营总监</div>
                  <div className=" text-black/75 mb-2">某某物流有限公司</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded">车队扩张</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded">B轮融资</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5 opacity-50">
                  <div className="font-bold">李四 | 创始人</div>
                  <div className=" text-black/75 mb-2">某某科技</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-black/5 opacity-30">
                  <div className="font-bold">王五 | 采购经理</div>
                  <div className=" text-black/75 mb-2">某某制造</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Human Curation */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">AI 的速度，人工的温度</h2>
        <p className="text-xl text-black/60 max-w-3xl mx-auto mb-16 font-nunito">
          我们不相信纯粹的自动化。每一份名单在交付前，都会由我们的研究团队进行人工审核，确保每一个联系人都是真实的、活跃的，并且符合您的业务逻辑。
        </p>
        <div className="flex justify-center gap-16">
          <div>
            <div className="text-5xl font-bold text-blue-600 mb-2 font-nunito">100%</div>
            <div className="tracking-widest">人工审核</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-600 mb-2 font-nunito">4×</div>
            <div className="tracking-widest">转化率提升</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">停止在无效名单上浪费时间</h2>
          <p className="text-xl text-white/70 mb-12 font-nunito">
            让我们为您构建一个真正精准的潜在客户数据库。
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#1e3a8a] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-white">预约战略咨询</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
