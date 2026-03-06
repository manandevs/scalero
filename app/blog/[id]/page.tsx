'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../blogPosts';
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();

  const id = params?.id as string;

  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === id) || null;
    setPost(foundPost);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 font-bpmf">
        加载中...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-500 font-bpmf gap-4">
        <h2 className="text-2xl font-semibold">文章未找到</h2>
        <button
          onClick={() => router.push('/blog')}
          className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          返回博客列表
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6 font-bpmf bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition font-medium"
        >
          <HiArrowLeft /> 返回
        </button>

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold leading-tight">
            {post.title}
          </h1>

          <div className="flex justify-center items-center gap-4">
            <button
              ref={prevRef}
              className="left-btn aspect-square flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-900 to-black p-1.5 text-white shadow-[inset_0px_-4px_4px_0px_#444,0px_0px_0px_2px_#111,0px_4px_0px_0px_#000] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1"
            >
              <HiChevronLeft size={32} strokeWidth={2}/>
            </button>

            <button
              ref={nextRef}
              className="right-btn aspect-square flex items-center justify-center rounded-full bg-gradient-to-r from-black via-gray-900 to-black p-1.5 text-white shadow-[inset_0px_-4px_4px_0px_#444,0px_0px_0px_2px_#111,0px_4px_0px_0px_#000] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1"
            >
              <HiChevronRight size={32} strokeWidth={2}/>
            </button>
          </div>
        </div>

        {/* Author */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>

      </div>

      <div className="border-t border-b border-gray-100 w-screen mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            onBeforeInit={(swiper: any) => {
              if (typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {post.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="py-12 border-l border-r border-gray-100 flex flex-col items-start">

                  <div className="px-6 w-full">
                    <img
                      src={img}
                      alt={`${post.title}-${i}`}
                      className="w-full h-80 object-contain rounded-lg mx-auto"
                      style={{
                        maskImage: post.mask ? `url(${post.mask})` : undefined,
                        WebkitMaskImage: post.mask ? `url(${post.mask})` : undefined,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskPosition: "center",
                        WebkitMaskPosition: "center"
                      }}
                    />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col gap-8 px-6">

        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-[16px]">
          {post.content}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Link href="/blog">
            <button className="flex items-center justify-center rounded-full
              bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#FF5252]
              px-6 py-2 text-white shadow-[inset_0px_-4px_4px_0px_#FF7961,0px_0px_0px_2px_#FFCDD2,0px_4px_0px_0px_#B71C1C]
              transition-transform duration-200 hover:-translate-y-1 active:translate-y-1">
              阅读文章
            </button>
          </Link>

          {post.website && (
            <Link href={post.website}>
              <button className="flex items-center justify-center rounded-full
                bg-gradient-to-r from-[#7B1FA2] via-[#9C27B0] to-[#BA68C8]
                px-6 py-2 text-white shadow-[inset_0px_-4px_4px_0px_#CE93D8,0px_0px_0px_2px_#E1BEE7,0px_4px_0px_0px_#4A148C]
                transition-transform duration-200 hover:-translate-y-1 active:translate-y-1">
                查看网站
              </button>
            </Link>
          )}
        </div>

      </div>
    </main>
  );
}