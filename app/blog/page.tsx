"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "./blogPosts";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-6 font-bpmf">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-semibold mb-4">博客</h1>
        <p className="text-gray-500">
          阅读我们的最新文章、洞察与技巧，助力业务增长。
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
        {blogPosts.map((post, i) => (
          <div key={i}>
            <Link href={`/blog/${post.id}`}>
              <div className="relative w-full">
                <img
                  src={post.images[0]}
                  alt={post.title}
                  className="w-full"
                  style={{
                    maskImage: post.mask ? `url(${post.mask})` : undefined,
                    WebkitMaskImage: post.mask ? `url(${post.mask})` : undefined,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />
              </div>
            </Link>

            <div className="p-2 flex flex-col gap-1.5">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold hover:text-red-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500">{post.excerpt}</p>

              <div className="text-gray-400 flex justify-between">
                <span>{post.author}</span>
                <span className="font-nunito">{post.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-gray-200 rounded-full px-2 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <Link href={`/blog/${post.id}`}>
                  <button className="flex h-fit w-fit items-center justify-center gap-2 rounded-full
                    bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
                    px-6 py-2 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
                    transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
                    active:shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2] font-bpmf">
                    阅读文章
                  </button>
                </Link>

                <Link href={"#"}>
                  <button className="flex h-fit w-fit items-center justify-center gap-2 rounded-full
                    bg-gradient-to-r from-[#7B1FA2] via-[#9C27B0] to-[#BA68C8]
                    px-6 py-2 text-white shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7,0px_4px_0px_0px_#4A148C]
                    transition-transform duration-250 hover:-translate-y-1 active:translate-y-1
                    active:shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7] font-bpmf">
                    查看网站
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}