"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "我需要自己设置任何东西吗？",
      a: "不需要。我们负责从技术基础设施（域名、邮件服务）到潜在客户研究和消息撰写的一切工作。"
    },
    {
      q: "你们会打冷电话吗？",
      a: "会。我们将自动化外呼与人工电话开发结合，以在传统行业中最大化转化率。"
    },
    {
      q: "我可以使用自己的CRM或销售工具吗？",
      a: "当然可以。我们与所有主流CRM系统集成，确保高质量线索的顺畅交接。"
    },
    {
      q: "如果我在一个小众或传统行业怎么办？",
      a: "这正是我们的专长。我们擅长那些常规工具无法覆盖的难啃市场。"
    },
    {
      q: "多久能看到预约会议？",
      a: "通常活动在第三周上线，首批会议会在活动开始后不久出现。"
    },
    {
      q: "这和传统的线索代理机构有什么不同？",
      a: "我们使用自主技术从零构建定制数据库，而不是购买过时的名单。此外，我们提供端到端的全程管理。"
    }
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-bpmf">
      <h2 className="text-5xl font-bold mb-16 text-center">常见问题</h2>

      <div className="grid gap-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-6 px-6 flex justify-between items-center text-left group hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold uppercase tracking-wider text-gray-900">
                {faq.q}
              </span>
              <div className="bg-mauve-50  w-12 h-12 rounded-full flex justify-center items-center">
                {openIndex === i ? <Minus size={24} strokeWidth={4} /> : <Plus size={24} strokeWidth={4} />}
              </div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
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