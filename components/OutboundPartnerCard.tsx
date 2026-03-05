"use client"
import React from 'react'
import { ArrowRight, Target, Layers, RefreshCw } from 'lucide-react'

function OutboundPartnerCard() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side: Text Content */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            为难攻市场打造的外呼合作伙伴，由自主技术驱动
          </h2>
          <p className="opacity-60 mb-4 leading-relaxed">
            斯凯勒罗是唯一结合自主外呼技术与全托管执行的外呼合作伙伴。在外呼困难、被忽视或失效的市场中，我们为您提供不公平的竞争优势。
          </p>
          <button className="group bg-white px-8 py-4 rounded-xl flex items-center gap-3 font-semibold hover:bg-opacity-90 transition-all w-fit">
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            预约战略咨询
          </button>
        </div>

        {/* Right Side: Features */}
        <div className="p-16 flex flex-col justify-center gap-6 relative overflow-hidden">
          {/* Feature Cards */}
          <div className="bg-white p-6 rounded-xl border border-black/5 shadow-lg flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <Target size={20} />
            </div>
            <div className="font-bold uppercase tracking-widest">定制潜在客户定位</div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-black/5 shadow-lg flex items-center gap-4 relative z-10 translate-x-8">
            <div className="w-10 h-10 rounded flex items-center justify-center">
              <Layers size={20} />
            </div>
            <div className="font-bold uppercase tracking-widest">定制外呼基础设施</div>
          </div>

          <div className="p-6 rounded-xl shadow-lg flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
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