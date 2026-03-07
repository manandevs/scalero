"use client"

import React from "react"
import { Clock, Target } from "lucide-react"
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

const sdrData = [
  { day: "周一", value: 40 },
  { day: "周二", value: 60 },
  { day: "周三", value: 30 },
  { day: "周四", value: 80 },
  { day: "周五", value: 50 },
  { day: "周六", value: 90 },
  { day: "周日", value: 40 }
]

function Comparison() {
  return (
    <section className="px-6 py-16 lg:py-24 max-w-7xl mx-auto font-bpmf">

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 lg:mb-20 max-w-4xl leading-tight">
        大多数增长工具难以打通。<br />
        大多数买量渠道越来越贵。
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">

        {/* SDR Card */}
        <div className="p-6 rounded-xl bg-mauve-900 text-white">
          <div className="h-48 mb-8 relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sdrData}>

                {/* X Axis */}
                <XAxis
                  dataKey="day"
                  stroke="#ffffff80"
                  tick={{ fill: "#ffffff80", fontSize: 10 }}
                />

                {/* Y Axis */}
                <YAxis
                  stroke="#ffffff80"
                  tick={{ fill: "#ffffff80", fontSize: 10 }}
                />

                {/* Tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
                    border: "none",
                    color: "#000"
                  }}
                  labelStyle={{ color: "#000", fontWeight: "bold" }}
                  itemStyle={{ color: "#000" }}
                />

                <Bar
                  dataKey="value"
                  radius={[4, 4, 0, 0]}
                  fill="rgba(255,255,255,0.7)"
                />

              </BarChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded font-bold text-sm text-center w-max">
              每天耗费大量时间测试素材
            </div>
          </div>
          <p className="leading-relaxed opacity-80 text-sm sm:text-base">
            <span className="font-bold">传统的买量与投放团队</span>
            上手速度慢，并且需要持续的素材优化和数据监控。
          </p>
        </div>


        {/* Tools Card */}
        <div className="p-6 rounded-xl bg-mauve-900 text-white">

          <div className="h-48 mb-8 flex flex-col justify-center gap-4">

            <div className="flex items-center gap-3 opacity-70">
              <Clock size={14} /> 渠道打通耗时
            </div>

            <div className="space-y-3">

              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-white" />
              </div>

              <div>
                <span className="font-bold">24 小时</span>
                <span className="opacity-60"> 34 分钟</span>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 lg:gap-4 opacity-70 text-sm">

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                测试
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/30 shrink-0" />
                调整配置
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                修复问题
              </div>

            </div>

          </div>

          <p className="leading-relaxed opacity-80 text-sm sm:text-base">
            <span className="font-bold">碎片化的增长工具</span>
            往往需要不断的 API 对接、数据清洗和配置修复，
            才能勉强协同运行。
          </p>

        </div>


        {/* Agencies Card */}
        <div className="p-6 rounded-xl bg-mauve-900 text-white">

          <div className="h-48 mb-8 bg-black/30 rounded-xl overflow-hidden border border-white/10">

            <div className="p-3 border-b border-white/10 flex justify-between items-center bg-white/10">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
                <div className="w-2 h-2 rounded-full bg-white/40" />
              </div>
              <div className="opacity-70 text-sm">星期一</div>
            </div>

            <div className="p-4 space-y-3 text-sm lg:text-base">

              <div className="bg-red-500/30 border border-red-400 p-2 rounded-lg">
                <div className="font-bold text-red-200">
                  低质量虚假流量
                </div>
                <div className="opacity-70 text-xs mt-1">9:00 - 9:30</div>
              </div>

              <div className="bg-white/10 border border-white/20 p-2 rounded-lg opacity-60">
                <div className="font-bold">
                  次日即流失的用户
                </div>
                <div className="text-xs mt-1">9:30 - 10:00</div>
              </div>

            </div>

          </div>

          <p className="leading-relaxed opacity-80 text-sm sm:text-base">
            <span className="font-bold">传统广告代理</span>
            虽然承诺高曝光和下载量，
            但往往交付的是留存极低的无效虚假用户。
          </p>

        </div>

      </div>
    </section>
  )
}

export default Comparison