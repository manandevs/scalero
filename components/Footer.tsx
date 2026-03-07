"use client"
import React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"

const Footer = () => {
  const sections = [
    {
      title: "公司",
      links: [
        { name: "首页", href: "#" },
        { name: "关于我们", href: "/about" },
        { name: "职业机会", href: "#" },
      ],
    },
    {
      title: "解决方案",
      links: [
        { name: "高净值用户洞察", href: "/solutions/lead-research" },
        { name: "深度用户触达", href: "/solutions/phone-outreach" },
        { name: "智能营销策略", href: "/solutions/messaging-strategy" },
        { name: "多渠道唤醒与留存", href: "#" },
        { name: "数据闭环优化", href: "#" },
        { name: "全托管增长服务", href: "/solutions/full-managed-service" },
      ],
    },
    {
      title: "资源",
      links: [
        { name: "博客", href: "/blog" },
        { name: "案例研究", href: "/resources/case-studies" },
        { name: "术语表", href: "#" },
      ],
    },
  ]

  const socialIcons = [
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" },
  ]

  return (
    <footer className="py-16 lg:py-24 px-6 font-bpmf bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 lg:mb-12">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-black">斯凯勒罗</span>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10 lg:mb-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <div className="font-bold uppercase tracking-widest text-black/40 mb-4 text-sm">
                {sec.title}
              </div>
              <ul className="space-y-3 font-medium text-black/80">
                {sec.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="hover:text-black hover:opacity-100 transition-opacity text-sm sm:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-10 lg:pt-12 border-t border-black/10 flex flex-col lg:flex-row justify-between items-center gap-6 font-bold uppercase tracking-widest text-black/40 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-center lg:text-left justify-center lg:justify-start w-full lg:w-auto">
            <span>© 2026 斯凯勒罗. 保留所有权利。</span>
            <Link href="#" className="hover:text-black transition-colors">隐私政策</Link>
            <Link href="#" className="hover:text-black transition-colors">服务条款</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookie 设置</Link>
          </div>

          <div className="flex gap-5 mt-2 lg:mt-0 w-full lg:w-auto justify-center lg:justify-end">
            {socialIcons.map((soc, i) => (
              <Link key={i} href={soc.href} className="hover:text-black transition-colors">
                {soc.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer