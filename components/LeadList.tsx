"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Database, Sparkles } from "lucide-react"

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

const data = [
  { name: "物流公司", value: 80 },
  { name: "制造企业", value: 55 },
  { name: "科技公司", value: 90 },
  { name: "零售品牌", value: 45 },
  { name: "电商平台", value: 75 },
]

function LeadList() {

  const [activeTab, setActiveTab] = useState("数据来源")

  const tabs = [
    "数据来源",
    "信息策略",
    "ICP 匹配",
    "送达率管理",
    "闭环优化",
    "全托管服务"
  ]

  return (
    <section className="py-24 px-6 font-bpmf">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16 max-w-4xl">
          构建真正精准的<br />
          潜在客户数据库
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-white/10 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-bold uppercase tracking-widest pb-4 relative transition-all ${
                activeTab === tab
                  ? "text-black"
                  : "text-black/30 hover:text-black/70"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <motion.div
                  layoutId="tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-mauve-900 text-white rounded-3xl p-12 relative overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 opacity-60 mb-6">
                <Database size={16}/>
                <span className="uppercase tracking-widest">
                  自定义潜在客户数据库
                </span>
              </div>

              <h3 className="text-4xl font-bold mb-6 leading-tight">
                构建符合 ICP 的<br />
                精准客户列表
              </h3>

              <p className="opacity-70 mb-10 leading-relaxed">
                大多数销售工具依赖过时的数据供应商。
                我们从零开始构建潜在客户数据库，
                根据您的目标客户画像精准筛选，
                帮助您找到真正有价值的客户。
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="opacity-50">
                    潜在客户
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="opacity-50">
                    数据准确率
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold">4×</div>
                  <div className="opacity-50">
                    回复率提升
                  </div>
                </div>
              </div>

              {/* CTA Button (same as header) */}
              <button
                className="
                flex items-center gap-2 rounded-full
                bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
                px-8 py-4 text-white
                shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
                transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
                active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2]
                "
              >
                预约战略咨询
                <ArrowRight size={18}/>
              </button>
            </div>

            {/* Right Chart */}
            <div className="relative">
              <div className="h-64 bg-black/20 rounded-xl p-4 border border-white/10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      stroke="#ffffff70"
                      tick={{ fill: "#ffffff70", fontSize: 11 }}
                    />
                    <YAxis
                      stroke="#ffffff70"
                      tick={{ fill: "#ffffff70", fontSize: 11 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        color: "#000"
                      }}
                    />
                    <Bar
                      dataKey="value"
                      radius={[4,4,0,0]}
                      fill="rgba(255,255,255,0.8)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 right-4 bg-white text-black px-4 py-2 rounded-lg shadow font-bold flex items-center gap-2">
                <Sparkles size={14}/>
                AI 数据分析
              </div>

              <div className="absolute bottom-0 left-0 bg-white text-black px-4 py-2 rounded-lg shadow font-bold">
                10,284 潜在客户
              </div>
            </div>
          </div>

          {/* Data Grid Background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
            <div className="p-12 space-y-2">
              {Array.from({length:20}).map((_,i)=>(
                <div key={i} className="flex gap-1">
                  {Array.from({length:12}).map((_,j)=>(
                    <div
                      key={j}
                      className={`h-1 flex-1 rounded ${
                        Math.random() > 0.8
                          ? "bg-brand-purple"
                          : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadList