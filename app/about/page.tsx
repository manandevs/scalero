"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Rocket, ShieldCheck, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={26} />,
      title: "精准增长",
      desc: "我们专注于为移动应用构建高ROI的用户获取渠道，而不是依赖传统的买量模式。"
    },
    {
      icon: <Rocket size={26} />,
      title: "技术驱动",
      desc: "通过自主研发技术，我们帮助应用自动化营销推广、用户触达和增长策略。"
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "可靠基础设施",
      desc: "稳定的数据追踪和营销自动化基础设施确保每一次触达都能有效转化为活跃用户。"
    },
    {
      icon: <Users size={26} />,
      title: "长期合作伙伴",
      desc: "我们不仅是工具提供者，更是您应用业务增长的长期合作伙伴。"
    }
  ]

  return (
    <main className="font-bpmf">
      {/* HERO */}
      <section className="px-6 py-16 lg:py-24 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8"
        >
          关于我们
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-black/60 leading-relaxed font-nunito"
        >
          我们致力于帮助应用开发者构建可持续的用户增长系统。
          通过技术、数据和智能策略结合，
          我们让应用推广变得更精准、更高效、更可靠。
        </motion.p>
      </section>

      {/* STORY */}
      <section className="px-6 py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              我们的使命
            </h2>
            <p className="text-black/60 leading-relaxed mb-6 font-nunito text-sm sm:text-base">
              传统应用推广往往复杂且成本高昂，
              开发者不得不在多个买量平台、广告代理和数据工具之间反复折腾。
            </p>
            <p className="text-black/60 leading-relaxed font-nunito text-sm sm:text-base">
              我们的目标是建立一个完整的应用增长生态，
              从目标用户画像、自动化营销策略、到用户生命周期管理，
              为您提供端到端的解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-16 lg:py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          <div className="p-6 lg:p-8 border border-zinc-800 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">我们的使命</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              通过先进技术和增长策略赋能移动应用，
              帮助产品发现新的机会并实现可衡量的业务成功。
            </p>
          </div>

          <div className="p-6 lg:p-8 border border-zinc-800 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">我们的愿景</h3>
            <p className="text-zinc-400 text-sm sm:text-base">
              成为数字创新领域的全球领导者，
              构建塑造未来应用生态发展的解决方案。
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 lg:mb-16">
            我们的核心价值观
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            <div className="border border-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">创新</h4>
              <p className="text-zinc-400 text-sm">
                我们不断探索新的想法、技术和策略，
                为客户创造更优秀的解决方案。
              </p>
            </div>

            <div className="border border-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">透明</h4>
              <p className="text-zinc-400 text-sm">
                清晰沟通与诚实合作是我们与客户
                建立长期关系的基础。
              </p>
            </div>

            <div className="border border-zinc-800 p-6 rounded-xl">
              <h4 className="font-semibold mb-2">成果导向</h4>
              <p className="text-zinc-400 text-sm">
                我们的一切工作都以可衡量的核心数据指标
                和客户成功为核心目标。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            准备好加速您的应用用户增长了吗？
          </h2>

          <p className="text-white/70 mb-10 font-nunito text-sm sm:text-base">
            预约一次战略咨询，了解我们如何帮助您的产品
            构建可持续的应用增长系统。
          </p>

          <button className="flex w-full sm:w-fit mx-auto h-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf">
            <span className="text-black">预约战略咨询</span>
          </button>
        </div>
      </section>

    </main>
  )
}