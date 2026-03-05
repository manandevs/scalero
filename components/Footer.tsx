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
        { name: "关于我们", href: "#" },
        { name: "职业机会", href: "#" },
      ],
    },
    {
      title: "解决方案",
      links: [
        { name: "潜在客户查找与筛选", href: "#" },
        { name: "电话开发", href: "#" },
        { name: "信息策略", href: "#" },
        { name: "邮件送达率", href: "#" },
        { name: "闭环优化", href: "#" },
        { name: "全托管服务", href: "#" },
      ],
    },
    {
      title: "资源",
      links: [
        { name: "博客", href: "#" },
        { name: "工具", href: "#" },
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
    <footer className="py-24 px-6 font-bpmf">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-brand-dark rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter">斯凯勒罗</span>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <div className=" font-bold uppercase tracking-widest opacity-40 mb-4">
                {sec.title}
              </div>
              <ul className="space-y-2 font-medium">
                {sec.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="hover:opacity-60 transition-opacity">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6  font-bold uppercase tracking-widest opacity-40">
          <div className="flex flex-wrap gap-4">
            <span>© 2025 斯凯勒罗. 保留所有权利。</span>
            <Link href="#" className="hover:opacity-100 transition-opacity">隐私政策</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">服务条款</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Cookie 设置</Link>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            {socialIcons.map((soc, i) => (
              <Link key={i} href={soc.href} className="hover:opacity-100 transition-opacity">
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