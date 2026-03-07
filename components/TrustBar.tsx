"use client";
import { motion } from "framer-motion";
import React from "react";

// Array of all brand images
const brandImages = [
  "https://framerusercontent.com/images/YUrCK4Vmi9oadmuLMWOr9ZZwwkM.png?width=500&height=160",
  "https://framerusercontent.com/images/lGkyv4KO4vUi7eC4buFvp9JrxgY.png?width=500&height=160",
  "https://framerusercontent.com/images/IFU1Duytl4o0mUOw2TJyXha6VE.png?width=674&height=160",
  "https://framerusercontent.com/images/zELltM7vjnmaYBNo7spg2rsSzM.png?width=500&height=160",
  "https://framerusercontent.com/images/8fv9pSDsk9xN4eQjvG2Ywm00cY.png?width=500&height=160",
  "https://framerusercontent.com/images/OhJVJjTc35yiUwJq1QTpRboajI.png?width=500&height=160",
  "https://framerusercontent.com/images/kr9EwjmIrS12Yrd3AG4rUtjFMXw.png?width=500&height=160",
  "https://framerusercontent.com/images/TCv4GbYZT0yrf4JE8blU4d8QmE.png?width=500&height=160",
  "https://framerusercontent.com/images/KNkjRnkJOi1oyWpGth6tWFfNMg.png?width=500&height=160",
  "https://framerusercontent.com/images/UJVA0XJ3DSbPIHzTNvYeCzaff3E.png?width=1563&height=500",
  "https://framerusercontent.com/images/W3Tih6iZANg88xsc7Ssj2vdtxCo.png?width=500&height=160",
  "https://framerusercontent.com/images/iPAxdb3kZevdxhGDNn0ro3gBkE.png?width=1563&height=500",
  "https://framerusercontent.com/images/rZfsOdw8mD3jRQdQGmsvEonwQnI.png?width=1563&height=500",
  "https://framerusercontent.com/images/ZEY6jlwVlfwzcEdTEe1K9JeG0I.png?width=500&height=160",
  "https://framerusercontent.com/images/CzeYdIqFpN5lBUAc3gCNrBlRIgY.png?width=1563&height=500",
];

export const TrustBar = () => {
  return (
    <section className="px-6 py-8 lg:py-12 max-w-7xl mx-auto font-bpmf">
      <div className="flex flex-col lg:flex-row h-auto lg:h-20 border border-gray-300">
        {/* Left label */}
        <div className="flex items-center justify-center lg:justify-start px-4 py-3 lg:py-0 border-b lg:border-b-0 lg:border-r border-gray-300">
          <span className="font-bpmf text-black/70 text-sm sm:text-base text-center lg:text-left">
            全球顶级移动应用开发者信赖
          </span>
        </div>

        {/* Brand logos */}
        <div className="flex-1 flex overflow-hidden h-16 lg:h-full">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, duration: 60, ease: "linear" },
            }}
          >
            {brandImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-48 h-full flex items-center justify-center px-4 border-l border-gray-300 bg-white"
              >
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
            {brandImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-48 h-full flex items-center justify-center px-4 border-l border-gray-300 bg-white"
              >
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};