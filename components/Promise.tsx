"use client"
import React from "react"
import Image from "next/image"

function Promise() {
  return (
    <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

        {/* Left: Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl lg:col-span-1">
          <Image
            src="/images/outbound-team.png" 
            alt="外呼团队"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6 lg:space-y-8 lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">我们的承诺</h2>
          <div className="opacity-80 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              我们创立 <span className="font-bold">斯凯勒罗</span> 的初衷很明确：传统的应用买量与获客模式存在严重瓶颈，而人工智能将重新定义企业与客户的连接方式。
            </p>
            <p>
              <span className="font-bold">斯凯勒罗</span> 致力于解决这一问题。我们不仅是一个数据分析工具，更是您的应用增长全案合作伙伴，结合自主技术、丰富的数据智能和专业团队，为您获取竞争对手无法触及的高留存核心用户。
            </p>
            <p>
              我们的承诺很简单：在流量红利消退的市场中，为您带来高粘性、高转化率的活跃用户。无需管理仪表盘，无需学习复杂系统，无需招聘额外资源，只为您带来稳定、可预测且高转化的客户对话。
            </p>
            <p>
              我们承担所有潜在客户开发工作：定位目标受众、优化多渠道素材、管理自动化触达并提升留存转化，让您的团队专注于打磨产品。随着合作时间延长，我们的系统将为您的业务不断优化。
            </p>
            <p>
              使用 <span className="font-bold">斯凯勒罗</span>，应用增长将回归本应有的状态：数据可预测、转化高效且增长轻松。
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Promise