"use client"

import React from "react"
import { ArrowRight, Target, Users, Zap, Linkedin, Mail } from "lucide-react"

function Tech() {

  const personalizationCards = [
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自 LinkedIn",
      text: <>看到您最近的 <span className="text-brand-green">车队扩张</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自官网",
      text: <>祝贺您与 <span className="text-brand-purple">DHL 合作</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自 LinkedIn",
      text: <>看到您发布的 <span className="text-brand-green">行业报告</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自新闻",
      text: <>贵公司正在 <span className="text-brand-purple">拓展欧洲市场</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自 LinkedIn",
      text: <>注意到您最近 <span className="text-brand-green">招聘运营主管</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自官网",
      text: <>贵公司宣布新的 <span className="text-brand-purple">物流中心</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自 LinkedIn",
      text: <>看到您的团队 <span className="text-brand-green">规模扩大</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自新闻",
      text: <>祝贺完成 <span className="text-brand-purple">B轮融资</span></>
    }
  ]

  const strategyItems = [
    { icon: <Target size={14} />, text: "目标客户 | 中型物流公司" },
    { icon: <Users size={14} />, text: "目标角色 | 运营总监" },
    { icon: <Zap size={14} />, text: "触发事件 | 车队扩张" }
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-8 opacity-60">
            <div className="w-8 h-[1px] bg-brand-dark" />
            <span className="font-bold tracking-widest uppercase">
              适用于传统且难以突破的行业
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            结合自研技术与专业执行的<br />
            外呼增长合作伙伴
          </h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-bold mb-2">
                我们打造了自己的外呼技术平台
              </h3>
              <p className="opacity-60 leading-relaxed">
                自研系统可构建精准数据库、执行行业定向触达，
                并通过持续优化每周提升效果。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-bold mb-2">
                全流程由我们为您管理
              </h3>
              <p className="opacity-60 leading-relaxed">
                从增长策略、信息撰写到技术基础设施和会议预约，
                我们提供完整的托管式外呼增长服务。
              </p>
            </div>
          </div>

          <button className="group bg-brand-purple text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:shadow-lg hover:shadow-brand-purple/20 transition-all">
            预约战略咨询
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Panel */}
        <div className="relative">
          <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-xl space-y-8">

            {/* Strategy */}
            <div className="space-y-4">
              <div className="font-bold tracking-widest opacity-40 uppercase">
                战略规划
              </div>

              <div className="space-y-2">
                {strategyItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-black/5 font-bold"
                  >
                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-black/5">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4">

              {/* Message */}
              <div className="bg-brand-dark text-white p-4 rounded-xl space-y-4">
                <div className="font-bold uppercase tracking-widest opacity-40">
                  寻找最佳信息匹配
                </div>

                <div className="bg-white/10 p-3 rounded-lg text-sm leading-relaxed">
                  你好 Alex，<br /><br />
                  看到你们最近与 DHL 建立合作关系，祝贺！<br /><br />
                  想了解 ABC 公司是否正在计划扩大车队规模？<br /><br />
                  我们帮助物流企业通过战略车队扩张进入新市场。<br /><br />
                  这对你们目前是否相关？
                </div>
              </div>

              {/* Personalization */}
              <div className="space-y-4">
                <div className="font-bold uppercase tracking-widest opacity-40">
                  上下文感知个性化
                </div>

                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-2">
                  {personalizationCards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-mauve-900 text-white p-3 rounded-lg flex items-center gap-2"
                    >
                      <div className="flex-1">
                        <div className="opacity-40 uppercase font-nunito">
                          {card.source}
                        </div>

                        <div className="font-bold flex  justify-center items-start gap-2">
                          {card.icon}
                          <div className="">{card.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Tech