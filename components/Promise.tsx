"use client"
import React from "react"
import Image from "next/image"

function Promise() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid md:grid-cols-3 gap-8">

        {/* Left: Image */}
        <div className="relative w-full h-96 md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/images/outbound-team.png" 
            alt="外呼团队"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-8 col-span-2">
          <h2 className="text-5xl font-bold">我们的承诺</h2>
          <div className="opacity-80 leading-relaxed space-y-4">
            <p>
              我们创立 <span className="font-bold">斯凯勒罗</span> 的初衷很明确：传统外呼销售体系存在问题，而人工智能将重新定义企业与客户的连接方式。
            </p>
            <p>
              <span className="font-bold">斯凯勒罗</span> 致力于解决这一问题。我们不仅是一个销售平台，更是您的外呼增长合作伙伴，结合自主技术、丰富的数据智能和专业团队，为您连接其他人无法触及的高匹配潜在客户。
            </p>
            <p>
              我们的承诺很简单：为您在难以触达且高价值的行业中安排高质量决策者会议。无需管理仪表盘，无需学习复杂系统，无需招聘额外资源，只为您带来稳定、可预测且高转化的客户对话。
            </p>
            <p>
              我们承担所有潜在客户开发工作：寻找目标客户、撰写个性化外呼、管理回复并预约会议，让您的团队专注于成交。随着合作时间延长，我们的系统将为您的业务不断优化。
            </p>
            <p>
              使用 <span className="font-bold">斯凯勒罗</span>，外呼销售将回归本应有的状态：可预测、高效且轻松。
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Promise