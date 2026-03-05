import React from 'react'
import { Target } from 'lucide-react'

function Stats() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto font-bpmf">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <p className="text-lg text-black/60 max-w-md mb-10 leading-relaxed">
          客户评价
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-20 max-w-2xl leading-tight">
          受到传统行业团队的信赖
        </h2>
      </div>

      {/* Stats grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            label: '制造业软件',
            stat: '0',
            unit: '每周预订会议次数',
            text: "制造业是最难进入的市场之一——它复杂、关系驱动且充满噪音。这就是为什么我们选择与斯凯勒罗合作。他们不仅仅是工具，更是一个真正的外呼合作伙伴。",
            author: '尼克拉斯·格拉赫, 首席商务官',
            company: 'INNOO'
          },
          {
            label: '教育解决方案',
            stat: '3%',
            unit: '正面回复率',
            text: "斯凯勒罗的个性化外呼能够在最佳时机将合适的信息传递给每位教育者。我们获得了更多高质量机会，同时节省了宝贵时间来专注于最重要的事情——我们的客户。",
            author: '弗朗西斯科·奥尔蒂斯, 商务拓展',
            company: 'SANTILLANA'
          },
          {
            label: '医疗解决方案',
            stat: '0',
            unit: '每周节省工时',
            text: "斯凯勒罗处理所有外呼工作，这让我可以专注于开发。仅经过八次高针对性通话，我们就即将签下第一笔交易——已经覆盖了整个活动成本。随着目标客户画像和服务的不断优化，我相信销售管道会持续增长。",
            author: '努尔·伊斯兰·莫赫塔里, 创始人',
            company: 'PYCAD'
          }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl bg-mauve-900 text-white">
            <div className="flex justify-between items-start mb-12">
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center">
                <Target size={20} />
              </div>
              <span className="font-bold font-bpmf">{item.label}</span>
            </div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl font-bold">{item.stat}</span>
              <span className="topacity-75 max-w-24 leading-tight">{item.unit}</span>
            </div>
            <p className="opacity-50 leading-relaxed mb-12">
              {item.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt={item.author} referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bpmf">{item.author}</div>
                <div className="font-nunito opacity-40">{item.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats