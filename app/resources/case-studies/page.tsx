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
      { iconIndex: 0, statDesc1: "平均每周4次会议", statDesc2: "每周节省35小时" },
      { name: "Leon Regeleidl", role: "业务发展代表", avatar: true },
    ],
  },
  {
    company: "Scalero",
    color: "bg-purple-400",
    people: [
      { iconIndex: 1, statDesc1: "节省90-95%时间", statDesc2: "首月实现2倍ROI" },
      { name: "创始人", avatar: true, size: "w-16 h-16" },
    ],
  },
  {
    company: "DeepSeek",
    color: "bg-green-400",
    people: [
      { iconIndex: 2, statDesc1: "快速生成线索", statDesc2: "首月增加50%客户" },
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
    title: "Imnoo 案例研究",
    subtitle: "我们如何帮助 Imnoo？",
    paragraphs: [
      "Imnoo AG 自动化制造报价，面向全球客户。他们需要突破复杂的制造行业市场，这个行业关系密集、信息杂乱。",
      "我们为他们建立了全自动外呼系统，真正预约会议而非发送垃圾邮件。结果：每周节省35小时，效率提升50%，每周与制造决策者成功预约3-5次会议。",
    ],
    quote: "Scalero 自动运行活动，让我们每周生成3-5次会议。”",
  },
  {
    title: "Fuse 案例研究",
    subtitle: "我们如何帮助 Fuse？",
    paragraphs: [
      "Fuse 为医疗提供商构建技术。他们希望在不雇佣全职销售代表的情况下快速生成合格线索，同时团队专注于主要产品开发。",
      "我们为他们建立了覆盖邮件和冷呼叫的全自动外呼系统，快速验证新渠道。",
      "结果：节省90-95%活动创建时间，首月达成超过1万美元的ACV合同，并能够快速测试冷呼叫渠道的可行性。",
    ],
    quote: "Scalero 让您无需繁琐管理即可快速启动和测试活动。”",
  },
];

const additionalClients = [
  { title: "客户 A: 营销自动化系统", desc: "每月节省40小时，销售额提升30%" },
  { title: "客户 B: SaaS 产品推广", desc: "首季度新增用户500+，ROI 提升2倍" },
  { title: "客户 C: 企业销售支持", desc: "销售周期缩短25%，客户满意度提高" },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6 font-bpmf">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className=" text-gray-500 mb-2">案例研究</p>
        <h1 className="text-5xl font-semibold">我们如何帮助客户取得成功</h1>
        <p className="text-gray-500 mt-4">
          了解我们如何通过定制化解决方案提升客户业务效率和收益
        </p>
      </div>

      {/* TOP CASE STUDY CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        {topCards.map((card, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500">{card.company}</span>
              <div className={`w-10 h-10 ${card.color} rounded-md`} />
            </div>
            <div className="flex items-center justify-between">
              {card.people.map((p, j) => (
                <div key={j} className="text-center">
                  {p.avatar && (
                    <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto mb-2" />
                  )}
                  {p.name && <p className=" font-medium">{p.name}</p>}
                  {/* {p.role && <p className=" text-gray-500">{p.role}</p>} */}

                  {/* Show icon if iconIndex exists */}
                  {p.iconIndex !== undefined && (
                    <img
                      src={icons[p.iconIndex]}
                      alt="icon"
                      className="w-14 h-14 mx-auto mb-2"
                    />
                  )}

                  {p.statDesc1 && <p className=" font-semibold">{p.statDesc1}</p>}
                  {p.statDesc2 && <p className=" text-gray-500">{p.statDesc2}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CASE STUDY DETAILS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 shadow-md">
            <h3 className="font-semibold mb-1 text-lg">{cs.title}</h3>
            <p className="text-gray-500 mb-6">{cs.subtitle}</p>
            {cs.paragraphs.map((para, j) => (
              <p key={j} className="text-gray-600 mb-4 leading-relaxed">{para}</p>
            ))}
            <p className="text-gray-600 italic">{cs.quote}</p>
          </div>
        ))}
      </div>

      {/* ADDITIONAL CLIENT STORIES */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-center mb-8">更多客户成功故事</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {additionalClients.map((client, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-600 mb-2">{client.title}</p>
              <p className="text-gray-500">{client.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold mb-4">想了解我们如何帮助您的企业？</h2>
        <p className="text-gray-500 mb-6">联系获取定制化案例分析和方案</p>
        <button className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7B1FA2] via-[#9C27B0] to-[#BA68C8] px-8 py-4 text-white shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7,0px_4px_0px_0px_#4A148C] transition-transform duration-250 hover:-translate-y-1 active:translate-y-1 active:shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7] font-bpmf">
          <span className="text-white">联系我们</span>
        </button>
      </div>
    </main>
  );
}