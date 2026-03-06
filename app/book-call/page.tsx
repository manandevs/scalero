"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, Building } from 'lucide-react';

export default function BookCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="font-bpmf bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
              预约免费战略咨询
            </h1>
            <p className="text-xl text-black/60 max-w-2xl mx-auto mb-10 font-nunito leading-relaxed">
              安排一次 30 分钟的专家咨询，讨论您的项目、目标，以及我们如何帮助您实现业务增长。
            </p>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-8 py-4 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
            >
              <span className="text-white">立即预约</span>
            </motion.button>
          </motion.div>
        </div>
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-24 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">填写预约信息</h2>

            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-black/5">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-black/60">
                  <Mail size={18} />
                  <span className="font-nunito">contact@scalero.com</span>
                </div>
                <div className="flex items-center gap-3 text-black/60">
                  <Phone size={18} />
                  <span className="font-nunito">+86 (21) 1234 5678</span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">预约成功！</h3>
                  <p className="text-black/60 font-nunito">
                    感谢您的预约。我们的团队将很快通过邮件与您确认具体细节。
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    再次预约
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      required
                      type="text"
                      placeholder="姓名"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      required
                      type="email"
                      placeholder="邮箱"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input
                        type="text"
                        placeholder="公司 / 网站"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-black/20" size={18} />
                      <input
                        type="tel"
                        placeholder="电话"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      required
                      type="date"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                    <input
                      required
                      type="time"
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito"
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="项目详情 / 留言"
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-black/5 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all font-nunito resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />

                  <div className="flex justify-end items-center">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex mx-auto h-fit w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 border-2 border-green-900 px-4 py-2 text-white shadow-[0px_4px_0px_0px_#14532d] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1 active:shadow-none font-bpmf"
                    >
                      <span className="text-white flex justify-center items-center gap-2">
                        <Send size={18} />
                        立即预约通话
                      </span>
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}