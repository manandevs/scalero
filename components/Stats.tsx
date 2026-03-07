import React from 'react'
import { Target } from 'lucide-react'

function Stats() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto font-bpmf">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-base sm:text-lg text-black/60 max-w-md mb-4 lg:mb-10 leading-relaxed">
          客户评价
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 lg:mb-20 max-w-2xl leading-tight">
          受到全球顶尖应用团队的信赖
        </h2>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
        {[
          {
            label: '全球社交平台',
            stat: '0',
            unit: '月度新增用户量',
            text: "出海社交产品竞争极其激烈——获客成本高昂且留存困难。这就是为什么我们选择与斯凯勒罗合作。他们不仅仅是工具，更是真正的增长引擎。",
            author: '尼克拉斯·格拉赫, 首席商务官',
            company: 'INNOO App'
          },
          {
            label: '在线教育应用',
            stat: '3%',
            unit: '次日留存率提升',
            text: "斯凯勒罗的智能化唤醒策略能够在最佳时机将个性化内容推送给每位学员。我们获得了极高的高净值活跃用户，同时节省了大量运营成本。",
            author: '弗朗西斯科·奥尔蒂斯, 商务拓展',
            company: 'SANTILLANA Edu'
          },
          {
            label: '健康管理类 App',
            stat: '0',
            unit: '应用内付费转化率',
            text: "斯凯勒罗接管了我们所有的用户生命周期营销。仅经过第一周的高精准触达优化，我们就达成了惊人的付费订阅增长——已经完全覆盖了全月的营销成本。随着目标客户画像和服务的不断优化，我相信销售管道会持续增长。",
            author: '努尔·伊斯兰·莫赫塔里, 创始人',
            company: 'PYCAD Health'
          }
        ].map((item, i) => (
          <div key={i} className="p-6 lg:p-4 rounded-xl bg-mauve-900 text-white">
            <div className="flex justify-between items-start mb-8 lg:mb-12">
              <div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center">
                <Target size={20} />
              </div>
              <span className="font-bold font-bpmf">{item.label}</span>
            </div>
            <div className="flex items-baseline gap-4 mb-6 lg:mb-8">
              <span className="text-5xl lg:text-6xl font-bold">{item.stat}</span>
              <span className="opacity-75 max-w-24 leading-tight text-sm lg:text-base">{item.unit}</span>
            </div>
            <p className="opacity-50 leading-relaxed mb-8 lg:mb-12 text-sm sm:text-base">
              {item.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt={item.author} referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bpmf text-sm sm:text-base">{item.author}</div>
                <div className="font-nunito opacity-40 text-xs sm:text-sm">{item.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats