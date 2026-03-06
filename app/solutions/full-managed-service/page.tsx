"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Zap, BarChart3, ShieldCheck, Target, Rocket } from 'lucide-react';
import FAQ from '@/components/FAQ';
import Link from 'next/link';

export default function FullManagedService() {
  const benefits = [
    {
      title: "无需设置",
      desc: "我们负责从域名购买、邮件预热到基础设施搭建的所有技术细节。",
      icon: <Zap className="text-purple-600" size={24} />
    },
    {
      title: "持续优化",
      desc: "每周进行 A/B 测试和策略调整，确保您的外呼引擎始终保持最佳状态。",
      icon: <Rocket className="text-red-600" size={24} />
    },
    {
      title: "专属团队",
      desc: "为您配备专门的策略专家、数据研究员和文案撰写人，全天候服务。",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      title: "成果保障",
      desc: "我们以会议预约数量为核心指标，确保您的投资获得可衡量的回报。",
      icon: <ShieldCheck className="text-green-600" size={24} />
    }
  ];

  const steps = [
    {
      title: "入职与策略",
      desc: "深入了解您的产品、目标市场和理想客户画像 (ICP)。",
      icon: <Target size={20} />
    },
    {
      title: "基础设施搭建",
      desc: "配置专用域名和邮件服务器，确保极高的送达率。",
      icon: <BarChart3 size={20} />
    },
    {
      title: "线索研究与文案",
      desc: "智能筛选精准线索，并撰写高度个性化的沟通话术。",
      icon: <Users size={20} />
    },
    {
      title: "启动与优化",
      desc: "活动上线后实时监控，根据反馈不断迭代优化。",
      icon: <Zap size={20} />
    }
  ];

  return (
    <main className="font-bpmf">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-mauve-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            全托管外呼增长服务
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-10 font-nunito"
          >
            我们为您搭建并管理整个外呼销售引擎。从潜在客户研究到会议预约，让您的销售团队只需专注于成交。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-black">预约战略咨询</span>
          </motion.button>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">为什么选择全托管？</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              </div>
              <p className="text-black/60 font-nunito leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process/Workflow */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">我们的工作流程</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="aspect-square bg-white rounded-xl border border-black/5 p-4 flex flex-col justify-end">
                  <div className="absolute top-0 right-0 text-mauve-900/5 flex items-center justify-center font-nunito font-bold text-[175px] leading-[1.1]">
                    0{i + 1}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-mauve-900">{step.icon}</div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                  </div>
                  <p className=" text-black/60 font-nunito">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">全方位覆盖的服务内容</h2>
            <p className="text-lg text-black/60 mb-8 font-nunito">
              我们不仅仅是发送邮件，我们是在为您构建一个可持续的增长资产。
            </p>
            <ul className="space-y-4">
              {[
                "深度潜在客户研究与 ICP 验证",
                "高转化率的多渠道消息策略",
                "专业的基础设施管理与预热",
                "实时回复管理与线索筛选",
                "详细的每周报告与战略会议",
                "与您的 CRM 深度集成"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-mauve-900 rounded-xl py-8 px-6 text-white">
            <div className="space-y-6">
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <div className=" opacity-60 uppercase tracking-widest mb-2">平均表现</div>
                <div className="text-4xl font-bold">每周 3-5 次</div>
                <div className=" opacity-60">高质量决策者会议</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <div className=" opacity-60 uppercase tracking-widest mb-2">时间节省</div>
                <div className="text-4xl font-bold">每周 35+ 小时</div>
                <div className=" opacity-60">销售团队无需再手动拓客</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-6 bg-mauve-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed italic">
            “Scalero 自动运行活动，让我们每周生成 3-5 次会议。他们处理了所有繁琐的工作，让我们可以专注于最重要的成交环节。”
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div className="text-left">
              <div className="font-bold">Niklas Gerlach</div>
              <div className=" opacity-60">首席商务官, INNOO</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">准备好启动您的外呼引擎了吗？</h2>
          <p className="text-xl text-white/70 mb-12 font-nunito">
            预约一次免费的战略咨询，我们将为您展示如何构建可预测的销售渠道。
          </p>
          <Link href="/book-call">
            <button className="mx-auto flex h-fit w-fit items-center justify-center gap-2 rounded-full
            bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
            px-8 py-4 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
            transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
            active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2] font-bpmf">
              <span className="text-white">预约战略咨询</span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
