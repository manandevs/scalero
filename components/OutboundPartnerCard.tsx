"use client"
import React from 'react'
import { ArrowRight, Target, Layers, RefreshCw } from 'lucide-react'

function OutboundPartnerCard() {
  return (
    <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white">

        {/* Left Side: Text Content */}
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-gray-50 lg:bg-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
            为突破增长瓶颈打造的增长合作伙伴，由自研 AI 技术驱动
          </h2>
          <p className="opacity-60 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
            斯凯勒罗是深度结合自主营销自动化技术与全托管增长执行的合作伙伴。在获客成本高昂、竞争激烈的应用市场中，我们为您提供降维打击般的增长优势。
          </p>
          <button className="group bg-brand-dark lg:bg-white border border-transparent lg:border-black/10 text-white lg:text-black px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-opacity-90 transition-all w-full sm:w-fit shadow-md lg:shadow-none">
            预约战略咨询
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Features */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-4 lg:gap-6 relative overflow-hidden bg-brand-dark lg:bg-transparent">
          {/* Feature Cards */}
          <div className="bg-white lg:bg-white p-4 lg:p-6 rounded-xl border border-black/5 shadow-lg flex items-center gap-3 lg:gap-4 relative z-10 text-sm sm:text-base">
            <div className="w-10 h-10 rounded flex items-center justify-center shrink-0">
              <Target size={20} className="text-brand-dark lg:text-black" />
            </div>
            <div className="font-bold uppercase tracking-widest text-brand-dark lg:text-black">定制化用户画像定位</div>
          </div>

          <div className="bg-white lg:bg-white p-4 lg:p-6 rounded-xl border border-black/5 shadow-lg flex items-center gap-3 lg:gap-4 relative z-10 translate-x-4 lg:translate-x-8 text-sm sm:text-base">
            <div className="w-10 h-10 rounded flex items-center justify-center shrink-0">
              <Layers size={20} className="text-brand-dark lg:text-black" />
            </div>
            <div className="font-bold uppercase tracking-widest text-brand-dark lg:text-black">定制化全渠道触达网络</div>
          </div>

          <div className="p-4 lg:p-6 rounded-xl shadow-lg flex items-center gap-3 lg:gap-4 relative z-10 text-sm sm:text-base bg-white/10 lg:bg-transparent text-white lg:text-black">
            <div className="w-10 h-10 rounded bg-white/20 lg:bg-white/10 flex items-center justify-center shrink-0">
              <RefreshCw size={20} />
            </div>
            <div className="font-bold uppercase tracking-widest">全托管服务</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OutboundPartnerCard