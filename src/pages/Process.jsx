import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Database, Layout, ShieldCheck, Zap } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    description: "We analyze your requirements and blueprint the core architecture layout, matching your structural framework.",
    icon: Layout,
    align: "left", // Positioned on the left side of the spine
  },
  {
    id: "02",
    title: "Modular Development",
    description: "Building components incrementally with scalable React patterns and utility-first Tailwind CSS styling.",
    icon: Database,
    align: "right", // Positioned on the right side of the spine
  },
  {
    id: "03",
    title: "Rigorous Testing",
    description: "Executing automated testing matrices to verify responsiveness, performance, and error-free edge cases.",
    icon: ShieldCheck,
    align: "left",
  },
  {
    id: "04",
    title: "Deployment & Scale",
    description: "Pushing production builds to edge networks with continuous integration and continuous delivery pipelines.",
    icon: Zap,
    align: "right",
  },
];

export default function ScrollTimeline() {
  const containerRef = useRef(null);

  // Track scroll progress specifically inside this timeline section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="min-h-screen  text-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Interactive Process Workflow
        </h2>
        <p className="mt-4 text-slate-400">
          Scroll down to watch the dynamic path trace your journey through each milestone.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        
        {/* ========================================== */}
        {/* THE CENTRAL SPINE & DYNAMIC SCROLLING LINE */}
        {/* ========================================== */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800 rounded-full">
          {/* This inner bar scales height from 0% to 100% based on user scroll */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full origin-top h-full shadow-[0_0_15px_rgba(168,85,247,0.7)]"
          />
        </div>

        {/* Timeline Nodes / Boxes */}
        <div className="space-y-24 relative z-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLeft = step.align === "left";

            return (
              <div 
                key={step.id} 
                className={`flex items-center w-full ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[calc(50%-3rem)] bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                      Phase {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Center Node / Connector Dot on the Spine */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-6 h-6 rounded-full bg-slate-900 border-4 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-20"
                  />
                  {/* Horizontal connector line linking the box to the center spine */}
                  <div className={`absolute w-12 h-0.5 bg-slate-700 ${
                    isLeft ? "right-3" : "left-3"
                  }`} />
                </div>

                {/* Empty Spacer for the opposite side layout alignment */}
                <div className="w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>

      </div>
      
      {/* Spacer below to allow scrolling past the final node */}
      <div className="h-40" />
    </div>
  );
}