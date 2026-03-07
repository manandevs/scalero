"use client"
import React from 'react'
import { Target, Users } from 'lucide-react'

function Strategy() {
  return (
    <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-bpmf">

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 lg:mb-20 max-w-2xl leading-tight">
        我们为您提供完整的应用增长策略、执行与优化方案
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

        {/* Steps */}
        {[
          {
            step: '第 1 周：入职与策略规划',
            text: '我们深度分析您的应用目标用户（ICP）、核心转化路径和商业化增长目标。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 font-bold">
                  <Target size={12} className="shrink-0" /> ICP | 高频内容消费者
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 font-bold">
                  <Users size={12} className="shrink-0" /> 人物画像 | 运营总监
                </div>
              </div>
            )
          },
          {
            step: '第 2 周：活动搭建',
            text: '我们整合数据源并完善您的目标用户画像矩阵，然后构建并内测首轮多渠道营销活动。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="bg-white p-2 rounded border border-black/5">
                  <div className="opacity-40 uppercase mb-1 text-xs">App Store 数据洞察</div>
                  <div className="h-2 w-full bg-gray-100 rounded-sm mb-1" />
                  <div className="h-2 w-2/3 bg-gray-100 rounded-sm" />
                </div>
              </div>
            )
          },
          {
            step: '第 3 周：启动与管理',
            text: '全渠道增长活动正式启动，我们将实时监控数据，确保导入的都是高活跃度和高留存的核心用户。',
            visual: (
              <div className="bg-brand-dark text-white p-4 rounded-xl">
                <div className="bg-white/10 p-2 rounded leading-relaxed text-xs sm:text-sm">
                  嗨 Alex，<br />
                  根据您最近的浏览记录，为您解锁了专属的PRO高级权益...
                </div>
              </div>
            )
          },
          {
            step: '持续优化',
            text: '每周数据复盘、实时策略迭代与核心指标转化提升，全程由我们为您保驾护航。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 sm:h-6 rounded-sm ${[2, 4, 7].includes(i) ? 'bg-brand-purple/20' : 'bg-white'
                      }`}
                  />
                ))}
              </div>
            )
          }
        ].map((item, i) => (
          <div key={i} className="space-y-4 lg:space-y-6">
            <div className="aspect-[4/3] sm:aspect-square bg-white rounded-2xl border border-black/5 p-4 lg:p-6 flex flex-col justify-center shadow-sm">
              {item.visual}
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest mb-2 lg:mb-3 text-sm lg:text-base">{item.step}</div>
              <p className="opacity-60 leading-relaxed text-sm lg:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Strategy