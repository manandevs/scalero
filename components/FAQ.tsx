"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "我需要自己设置任何东西吗？",
      a: "不需要。我们负责从追踪埋点（SDK接入建议）到用户画像分析和营销策略落地的全套服务。"
    },
    {
      q: "你们会打冷电话吗？",
      a: "我们会根据您的产品特性制定策略。对于高净值产品，我们会结合专属客服进行深度用户触达；对于大众产品，我们专注于自动化增长引擎。"
    },
    {
      q: "我可以使用自己的CRM或数据工具吗？",
      a: "当然可以。我们与所有主流数据分析平台（如 Mixpanel, Amplitude）无缝集成，确保数据的顺畅交接。"
    },
    {
      q: "如果我在一个小众或垂直赛道怎么办？",
      a: "这正是我们的专长。我们擅长在极度细分的市场中找到您的精准受众，那些常规粗放式广告无法触达的用户。"
    },
    {
      q: "多久能看到用户增长效果？",
      a: "通常活动在第二周上线，首批高活跃用户会在策略执行后迅速显现。"
    },
    {
      q: "这和传统的买量投放公司有什么不同？",
      a: "我们不仅关注前端下载，更专注于用户全生命周期的留存与转化，提供端到端的应用增长全托管方案。"
    }
  ]

  return (
    <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 lg:mb-16 text-center">常见问题</h2>

      <div className="grid gap-4 sm:gap-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-5 px-5 sm:py-6 sm:px-6 flex justify-between items-center text-left group hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold uppercase tracking-wider text-gray-900 text-sm sm:text-base pr-4">
                {faq.q}
              </span>
              <div className="bg-mauve-50 min-w-10 min-h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center shrink-0">
                {openIndex === i ? <Minus size={20} strokeWidth={4} /> : <Plus size={20} strokeWidth={4} />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 sm:px-6 pb-5 sm:pb-6"
                >
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ