"use client"
import React from 'react'
import { Target, Users } from 'lucide-react'

function Strategy() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-bpmf">
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-20 max-w-2xl">
        我们为您提供完整的外呼策略、执行与优化
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {/* Steps */}
        {[
          {
            step: '第 1 周：入职与策略规划',
            text: '我们收集您目标客户（ICP）、信息策略和目标的相关洞察。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 font-bold">
                  <Target size={12} /> ICP | 中型物流企业
                </div>
                <div className="flex items-center gap-2 p-2 bg-white rounded border border-black/5 font-bold">
                  <Users size={12} /> 人物画像 | 运营总监
                </div>
              </div>
            )
          },
          {
            step: '第 2 周：活动搭建',
            text: '我们研究、抓取并丰富您的潜在客户列表，然后构建并 QA 首次信息发送活动。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="bg-white p-2 rounded border border-black/5">
                  <div className="opacity-40 uppercase mb-1">Glassdoor 数据示例</div>
                  <div className="h-2 w-full bg-gray-100 rounded-sm mb-1" />
                  <div className="h-2 w-2/3 bg-gray-100 rounded-sm" />
                </div>
              </div>
            )
          },
          {
            step: '第 3 周：启动与管理',
            text: '外呼活动开始，您将收到回复，我们筛选并只传递高质量线索。',
            visual: (
              <div className="bg-brand-dark text-white p-4 rounded-xl">
                <div className="bg-white/10 p-2 rounded leading-relaxed">
                  你好，Alex，<br />
                  恭喜您与 DHL 建立合作关系...
                </div>
              </div>
            )
          },
          {
            step: '持续优化',
            text: '每周更新、实时反馈与会议预订，全程由我们管理。',
            visual: (
              <div className="bg-gray-100 p-4 rounded-xl grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-6 rounded-sm ${
                      [2, 4, 7].includes(i) ? 'bg-brand-purple/20' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            )
          }
        ].map((item, i) => (
          <div key={i} className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl border border-black/5 p-6 flex flex-col justify-center shadow-sm">
              {item.visual}
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest mb-3">{item.step}</div>
              <p className="opacity-60 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Strategy