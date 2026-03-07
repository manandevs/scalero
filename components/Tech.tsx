"use client"

import React from "react"
import { ArrowRight, Target, Users, Zap, Linkedin, Mail } from "lucide-react"

function Tech() {

  const personalizationCards =[
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自应用内行为",
      text: <>发现您解锁了 <span className="text-brand-green">全新成就</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自系统记录",
      text: <>恭喜您 <span className="text-brand-purple">连续打卡 7 天</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自偏好分析",
      text: <>注意到您喜欢 <span className="text-brand-green">阅读科幻小说</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自账单提醒",
      text: <>您的高级订阅 <span className="text-brand-purple">即将到期</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自社交媒体",
      text: <>发现您最近频繁 <span className="text-brand-green">使用视频编辑功能</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自活动推荐",
      text: <>您收藏的商品 <span className="text-brand-purple">现已降价</span></>
    },
    {
      icon: <Linkedin size={28} className="opacity-75" />,
      source: "来自社交图谱",
      text: <>您的好友也 <span className="text-brand-green">加入了这个社区</span></>
    },
    {
      icon: <Mail size={28} className="opacity-75" />,
      source: "来自个性化推荐",
      text: <>为您推荐了专属的 <span className="text-brand-purple">运动课程</span></>
    }
  ]

  const strategyItems =[
    { icon: <Target size={14} />, text: "目标受众 | 中重度游戏玩家" },
    { icon: <Users size={14} />, text: "目标角色 | 运营总监" },
    { icon: <Zap size={14} />, text: "触发事件 | 连续三天活跃" }
  ]

  return (
    <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-6 lg:mb-8 opacity-60">
            <div className="w-8 h-[1px] bg-brand-dark" />
            <span className="font-bold tracking-widest uppercase text-sm sm:text-base">
              适用于竞争激烈且买量成本高昂的红海应用市场
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 leading-tight">
            结合自研数据平台与专业操盘执行的<br className="hidden lg:block" />
            应用增长合作伙伴
          </h2>

          <div className="space-y-4 lg:space-y-6 mb-10 lg:mb-12">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-bold mb-2 text-lg lg:text-base">
                我们自主研发了新一代增长分析引擎
              </h3>
              <p className="opacity-60 leading-relaxed text-sm lg:text-base">
                自研系统可构建精准用户数据中台（CDP）、执行自动化全渠道触达，
                并通过持续的A/B测试每周拉升留存指标。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h3 className="font-bold mb-2 text-lg lg:text-base">
                全流程由我们为您管理
              </h3>
              <p className="opacity-60 leading-relaxed text-sm lg:text-base">
                从增长模型搭建、营销素材制作到数据中台部署和核心用户转化，
                我们提供完整的托管式应用增长服务。
              </p>
            </div>
          </div>

          <button className="group w-full sm:w-fit justify-center bg-brand-purple text-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:shadow-lg hover:shadow-brand-purple/20 transition-all">
            预约战略咨询
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Panel */}
        <div className="relative mt-8 lg:mt-0">
          <div className="bg-white p-4 sm:p-6 lg:p-4 rounded-2xl border border-black/5 shadow-xl space-y-6 lg:space-y-8">

            {/* Strategy */}
            <div className="space-y-4">
              <div className="font-bold tracking-widest opacity-40 uppercase text-sm lg:text-base">
                战略规划
              </div>

              <div className="space-y-2">
                {strategyItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-black/5 font-bold text-sm lg:text-base"
                  >
                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center border border-black/5 shrink-0">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2">

              {/* Message */}
              <div className="bg-brand-dark text-white p-4 rounded-xl space-y-4">
                <div className="font-bold uppercase tracking-widest opacity-40 text-xs sm:text-sm">
                  寻找最佳信息匹配
                </div>

                <div className="bg-white/10 p-3 rounded-lg text-sm leading-relaxed">
                  你好 Alex，<br /><br />
                  注意到您最近完成了新手教程！<br /><br />
                  想了解您是否正在寻找更具挑战性的关卡？<br /><br />
                  我们刚刚更新了全新的赛季副本。<br /><br />
                  这对您目前的进度一定很有帮助，立即上线挑战吧！
                </div>
              </div>

              {/* Personalization */}
              <div className="space-y-4">
                <div className="font-bold uppercase tracking-widest opacity-40 text-xs sm:text-sm">
                  上下文感知个性化
                </div>

                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                  {personalizationCards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-mauve-900 text-white p-3 rounded-lg flex items-center gap-2"
                    >
                      <div className="flex-1">
                        <div className="opacity-40 uppercase font-nunito text-xs mb-1">
                          {card.source}
                        </div>

                        <div className="font-bold flex items-start gap-2 text-sm">
                          <span className="shrink-0 mt-0.5">{card.icon}</span>
                          <div>{card.text}</div>
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