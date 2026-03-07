import React from "react";

const icons = [
  "/icons/taobao.svg",
  "/icons/sina.svg",
  "/icons/foshan-nanshi-fc-logo.svg",
  "/icons/deepseek-logo.svg",
];

const topCards = [
  {
    company: "Scalero",
    color: "bg-purple-400",
    people: [
      { name: "Niklas Gerlach", role: "首席商务官", avatar: true },
      { iconIndex: 0, statDesc1: "月度新增用户10万+", statDesc2: "获客成本降低35%" },
      { name: "Leon Regeleidl", role: "业务发展代表", avatar: true },
    ],
  },
  {
    company: "Scalero",
    color: "bg-purple-400",
    people: [
      { iconIndex: 1, statDesc1: "提升应用留存2倍", statDesc2: "首月实现2倍ROI" },
      { name: "创始人", avatar: true, size: "w-16 h-16" },
    ],
  },
  {
    company: "DeepSeek",
    color: "bg-green-400",
    people: [
      { iconIndex: 2, statDesc1: "快速获取精准用户", statDesc2: "首月增加50%客户" },
      { name: "Alice Wang", role: "业务经理", avatar: true },
      { iconIndex: 3, statDesc1: "节省60%时间", statDesc2: "提升销售效率" },
    ],
  },
  {
    company: "Foshan Nanshi FC",
    color: "bg-blue-400",
    people: [
      { name: "Bob Chen", role: "市场总监", avatar: true },
      { iconIndex: 3, statDesc1: "提高ROI 3倍", statDesc2: "客户满意度提升" },
    ],
  },
];

const caseStudies = [
  {
    title: "Imnoo App 案例研究",
    subtitle: "我们如何帮助 Imnoo？",
    paragraphs: [
      "Imnoo 是一款面向全球的SaaS工具应用。他们需要突破竞争激烈的工具应用市场，这个行业获客成本高昂且用户容易流失。",
      "我们为他们构建了全自动的用户触达矩阵，实现精准的用户唤醒。结果：获客成本降低35%，留存率提升50%，每周带来数千名活跃新用户。",
    ],
    quote: "Scalero 的自动化策略让我们每天都能稳定获取高质量的新用户。”",
  },
  {
    title: "Fuse 案例研究",
    subtitle: "我们如何帮助 Fuse？",
    paragraphs: [
      "Fuse 是一款创新的健康管理应用。他们希望在不依赖昂贵广告投放的情况下快速积累早期核心用户，同时让团队能专注于产品研发。",
      "我们为他们建立了多渠道自动化营销与社交裂变系统，快速验证了低成本获客渠道。",
      "结果：首月即获得超过1万名深度活跃用户，极大降低了获客成本，并快速验证了裂变渠道的可行性。",
    ],
    quote: "Scalero 让您无需繁琐管理即可快速验证渠道并实现规模化用户增长。”",
  },
];

const additionalClients = [
  { title: "客户 A: 社交类应用", desc: "次日留存提升15%，月活翻倍" },
  { title: "客户 B: 电商购物 App", desc: "首季度新增购买用户5万+，ROI 提升2倍" },
  { title: "客户 C: 订阅制工具应用", desc: "付费转化率提升25%，订阅续费率大幅增长" },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white min-h-screen py-12 lg:py-20 px-4 sm:px-6 font-bpmf">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-10 lg:mb-16">
        <p className=" text-gray-500 mb-2">案例研究</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">我们如何帮助应用取得成功</h1>
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          了解我们如何通过定制化增长解决方案提升应用的活跃度与商业收益
        </p>
      </div>

      {/* TOP CASE STUDY CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {topCards.map((card, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500 font-medium">{card.company}</span>
              <div className={`w-10 h-10 ${card.color} rounded-md`} />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2">
              {card.people.map((p, j) => (
                <div key={j} className="text-center w-full sm:w-auto">
                  {p.avatar && (
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gray-200 mx-auto mb-2" />
                  )}
                  {p.name && <p className="font-medium text-sm lg:text-base">{p.name}</p>}

                  {p.iconIndex !== undefined && (
                    <img
                      src={icons[p.iconIndex]}
                      alt="icon"
                      className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-2"
                    />
                  )}

                  {p.statDesc1 && <p className="font-semibold text-sm lg:text-base">{p.statDesc1}</p>}
                  {p.statDesc2 && <p className="text-gray-500 text-xs lg:text-sm">{p.statDesc2}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CASE STUDY DETAILS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-md">
            <h3 className="font-semibold mb-2 text-lg lg:text-xl">{cs.title}</h3>
            <p className="text-gray-500 mb-6 text-sm lg:text-base">{cs.subtitle}</p>
            {cs.paragraphs.map((para, j) => (
              <p key={j} className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">{para}</p>
            ))}
            <p className="text-gray-600 italic text-sm lg:text-base bg-gray-50 p-3 rounded-lg border-l-4 border-purple-400 mt-4">{cs.quote}</p>
          </div>
        ))}
      </div>

      {/* ADDITIONAL CLIENT STORIES */}
      <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">更多增长成功故事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {additionalClients.map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-800 font-semibold mb-2">{client.title}</p>
              <p className="text-gray-500 text-sm">{client.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center mb-10 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">想了解我们如何为您的产品带来爆发？</h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">联系获取定制化的应用增长案例分析和落地方案</p>
        <button className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7B1FA2] via-[#9C27B0] to-[#BA68C8] px-8 py-4 text-white shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7,0px_4px_0px_0px_#4A148C] transition-transform duration-250 hover:-translate-y-1 active:translate-y-1 active:shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7] font-bpmf">
          <span className="text-white">联系我们</span>
        </button>
      </div>
    </main>
  );
}