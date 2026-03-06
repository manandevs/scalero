"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, Rocket, ShieldCheck, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={26} />,
      title: "精准增长",
      desc: "我们专注于为企业构建高质量潜在客户渠道，而不是依赖过时的数据库。"
    },
    {
      icon: <Rocket size={26} />,
      title: "技术驱动",
      desc: "通过自主研发技术，我们帮助企业自动化外呼、线索管理和消息策略。"
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "可靠基础设施",
      desc: "稳定的邮件和外呼基础设施确保每一次触达都能进入客户视野。"
    },
    {
      icon: <Users size={26} />,
      title: "长期合作伙伴",
      desc: "我们不仅是工具提供者，更是企业销售增长的长期合作伙伴。"
    }
  ]

  return (
    <main className="font-bpmf">
      {/* HERO */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          关于我们
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-black/60 leading-relaxed font-nunito"
        >
          我们致力于帮助企业构建可持续的销售增长系统。
          通过技术、数据和人工策略结合，
          我们让外呼拓客变得更精准、更高效、更可靠。
        </motion.p>
      </section>

      {/* STORY */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              我们的使命
            </h2>
            <p className="text-black/60 leading-relaxed mb-6 font-nunito">
              传统销售工具往往复杂且效率低下，
              企业不得不在工具、代理机构和销售团队之间反复折腾。
            </p>
            <p className="text-black/60 leading-relaxed font-nunito">
              我们的目标是建立一个完整的销售增长系统，
              从潜在客户研究、消息策略、邮件送达率到会议预约，
              为企业提供端到端的解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-24 px-6 bg-mauve-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="p-8 border border-zinc-800 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">我们的使命</h3>
            <p className="text-zinc-400">
              通过先进技术和增长策略赋能企业，
              帮助他们发现新的机会并实现可衡量的成功。
            </p>
          </div>

          <div className="p-8 border border-zinc-800 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">我们的愿景</h3>
            <p className="text-zinc-400">
              成为数字创新领域的全球领导者，
              构建塑造未来商业发展的解决方案。
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            我们的核心价值观
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

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
                我们的一切工作都以可衡量的业务成果
                和客户成功为核心目标。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            准备好扩大您的销售渠道了吗？
          </h2>

          <p className="text-white/70 mb-10 font-nunito">
            预约一次战略咨询，了解我们如何帮助您的团队
            构建可持续的销售增长系统。
          </p>

          <button className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-zinc-100 border-2 border-black px-8 py-4 text-black shadow-[0px_4px_0px_0px_white] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf">
            <span className="text-black">预约战略咨询</span>
          </button>
        </div>
      </section>

    </main>
  )
}