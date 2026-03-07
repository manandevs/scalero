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
    "自动化营销",
    "用户精准画像",
    "多渠道触达管理",
    "留存闭环优化",
    "全托管服务"
  ]

  return (
    <section className="py-16 lg:py-24 px-6 font-bpmf">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 lg:mb-16 max-w-4xl leading-tight">
          构建真正精准的<br />
          核心活跃用户池
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12 border-b border-white/10 pb-2 text-sm sm:text-base">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-bold uppercase tracking-widest pb-2 lg:pb-4 relative transition-all whitespace-nowrap ${activeTab === tab
                  ? "text-black"
                  : "text-black/30 hover:text-black/70"
                }`}
            >
              {tab}

              {activeTab === tab && (
                <motion.div
                  layoutId="tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-mauve-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 opacity-60 mb-6 text-sm sm:text-base">
                <Database size={16} />
                <span className="uppercase tracking-widest">
                  自定义潜在客户数据库
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                构建高留存的<br />
                精准用户矩阵
              </h3>

              <p className="opacity-70 mb-8 lg:mb-10 leading-relaxed text-sm sm:text-base">
                大多数买量平台依赖粗放的标签匹配。
                我们通过深度数据挖掘分析用户行为，
                根据您的产品特性进行精准定位，
                帮助您获取真正高价值的活跃用户。
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8 lg:mb-12">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-3xl font-bold">1M+</div>
                  <div className="opacity-50 text-xs sm:text-sm mt-1">
                    触达覆盖
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-3xl font-bold">95%</div>
                  <div className="opacity-50 text-xs sm:text-sm mt-1">
                    数据准确率
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-3xl font-bold">4×</div>
                  <div className="opacity-50 text-xs sm:text-sm mt-1">
                    留存率提升
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="
                w-full sm:w-fit justify-center flex items-center gap-2 rounded-full
                bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
                px-8 py-4 text-white
                shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
                transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
                active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2]
                "
              >
                预约战略咨询
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Chart */}
            <div className="relative mt-6 lg:mt-0">
              <div className="h-48 sm:h-64 bg-black/20 rounded-xl p-2 sm:p-4 border border-white/10">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis
                      dataKey="name"
                      stroke="#ffffff70"
                      tick={{ fill: "#ffffff70", fontSize: 10 }}
                      interval={0}
                      angle={-30}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis
                      stroke="#ffffff70"
                      tick={{ fill: "#ffffff70", fontSize: 10 }}
                      width={30}
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
                      radius={[4, 4, 0, 0]}
                      fill="rgba(255,255,255,0.8)"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-6 sm:-top-8 right-0 sm:right-4 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow font-bold flex items-center gap-2 text-xs sm:text-base">
                <Sparkles size={14} />
                AI 数据分析
              </div>

              <div className="absolute bottom-8 sm:bottom-0 left-0 sm:left-4 bg-white text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow font-bold text-xs sm:text-base">
                10,284 新增活跃用户
              </div>
            </div>
          </div>

          {/* Data Grid Background */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-10 pointer-events-none hidden sm:block">
            <div className="p-12 space-y-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 12 }).map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 flex-1 rounded ${Math.random() > 0.8
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