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
      desc: "每周进行 A/B 测试和策略调整，确保您的增长引擎始终保持最佳状态。",
      icon: <Rocket className="text-red-600" size={24} />
    },
    {
      title: "专属团队",
      desc: "为您配备专门的策略专家、数据研究员和文案撰写人，全天候服务。",
      icon: <Users className="text-blue-600" size={24} />
    },
    {
      title: "成果保障",
      desc: "我们以活跃用户数和转化为核心指标，确保您的投资获得可衡量的回报。",
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
      title: "用户画像与素材",
      desc: "智能匹配高价值用户，并制作高转化率的营销素材与文案。",
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
      <section className="px-6 py-16 lg:py-24 bg-mauve-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          >
            全托管应用增长服务
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 font-nunito"
          >
            我们为您搭建并管理整个应用增长引擎。从精准用户画像到用户唤醒与留存，让您的团队只需专注于产品开发。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
          >
            <span className="text-black">预约战略咨询</span>
          </motion.button>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-16">为什么选择全托管？</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-6 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-black/60 font-nunito leading-relaxed text-sm sm:text-base">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process/Workflow */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-16">我们的工作流程</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="aspect-auto sm:aspect-square bg-white rounded-xl border border-black/5 p-6 flex flex-col justify-end min-h-[200px] overflow-hidden">
                  <div className="absolute -top-10 -right-4 text-mauve-900/5 flex items-center justify-center font-nunito font-bold text-[120px] sm:text-[150px] lg:text-[175px] leading-[1.1] select-none pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-mauve-900">{step.icon}</div>
                      <h3 className="font-bold text-base sm:text-lg">{step.title}</h3>
                    </div>
                    <p className="text-black/60 font-nunito text-sm sm:text-base">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">全方位覆盖的服务内容</h2>
            <p className="text-base sm:text-lg text-black/60 mb-8 font-nunito">
              我们不仅仅是发送邮件，我们是在为您构建一个可持续的增长资产。
            </p>
            <ul className="space-y-4">
              {[
                "深度目标用户画像与增长模型验证",
                "高转化率的多渠道消息策略",
                "专业的基础设施管理与预热",
                "全生命周期数据监测与留存优化",
                "详细的每周报告与战略会议",
                "与您的 CRM 深度集成"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <span className="font-bold text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-mauve-900 rounded-xl py-8 px-6 text-white">
            <div className="space-y-6">
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <div className="opacity-60 uppercase tracking-widest mb-2 text-xs sm:text-sm">平均表现</div>
                <div className="text-3xl sm:text-4xl font-bold">每月 10,000+</div>
                <div className="opacity-60 text-sm sm:text-base mt-2">高质量活跃用户新增</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl border border-white/10">
                <div className="opacity-60 uppercase tracking-widest mb-2 text-xs sm:text-sm">时间节省</div>
                <div className="text-3xl sm:text-4xl font-bold">每周 35+ 小时</div>
                <div className="opacity-60 text-sm sm:text-base mt-2">运营团队无需再繁杂操作</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-14 px-6 bg-mauve-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed italic">
            “Scalero 的自动化策略让我们每天都能稳定获取高质量的新用户。他们处理了所有繁琐的工作，让我们可以专注于最重要的产品打磨。”
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />
            <div className="text-left">
              <div className="font-bold text-sm sm:text-base">Niklas Gerlach</div>
              <div className="opacity-60 text-xs sm:text-sm">首席商务官, INNOO App</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 lg:mb-8">准备好启动您的增长引擎了吗？</h2>
          <p className="text-lg sm:text-xl text-white/70 mb-10 lg:mb-12 font-nunito">
            预约一次免费的战略咨询，我们将为您展示如何构建可预测的用户增长渠道。
          </p>
          <Link href="/book-call">
            <button className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full
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
