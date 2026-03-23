"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Cloud, Rocket, Zap } from "lucide-react"

const stats = [
  { icon: Brain, label: "Applied AI", value: "2+ Years", color: "#06b6d4" },
  { icon: Cloud, label: "Cloud Uptime", value: "100%", color: "#a855f7" },
  { icon: Rocket, label: "Production SaaS Apps", value: "2", color: "#ec4899" },
  { icon: Zap, label: "Tokens Processed", value: "500K+", color: "#22c55e" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 px-6 lg:px-16" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#f8fafc]">About </span>
            <span className="bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text content - glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative group"
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
              style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(168, 85, 247, 0.1))" }}
            />
            
            <div 
              className="relative p-8 lg:p-10 rounded-3xl transition-all duration-500"
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(148, 163, 184, 0.15)",
                boxShadow: "0 25px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Inner top highlight */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <p className="text-lg lg:text-xl text-[#e2e8f0] leading-relaxed mb-6">
                I don&apos;t just write code; I build production-ready SaaS architectures from the ground up. 
                Driven by pure curiosity, I engineered <span className="text-[#06b6d4] font-semibold">Pulse AI</span> entirely 
                from scratch—a cloud-hosted financial auditor that transforms messy bank statements into a masterclass 
                in data analytics.
              </p>
              <p className="text-lg lg:text-xl text-[#e2e8f0] leading-relaxed mb-6">
                I specialize in <span className="text-[#a855f7] font-semibold">Python</span> and <span className="text-[#a855f7] font-semibold">applied AI</span>, 
                focusing on how to integrate Large Language Models (LLMs) into real-world tools with extreme enterprise-grade 
                safety nets like <span className="text-[#ec4899] font-semibold">36-hour global kill-switches</span> and{" "}
                <span className="text-[#ec4899] font-semibold">dynamic LLM routing</span>.
              </p>
              <p className="text-lg lg:text-xl text-[#94a3b8] leading-relaxed">
                If you need an engineer who takes complex backend challenges from a bedroom concept to a secure, 
                cloud-deployed reality, we should talk.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                  }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${item.color}40, ${item.color}10)` }}
                  />
                  
                  <div 
                    className="relative rounded-2xl p-6 text-center transition-all duration-500"
                    style={{ 
                      background: "rgba(30, 41, 59, 0.6)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: "1px solid rgba(148, 163, 184, 0.12)",
                      boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${item.color}08`,
                    }}
                  >
                    {/* Glowing border on hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 0 1.5px ${item.color}50, 0 0 30px ${item.color}25`,
                      }}
                    />
                    
                    {/* Inner top highlight */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    <div 
                      className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        background: `${item.color}15`,
                        boxShadow: `0 0 20px ${item.color}20`,
                      }}
                    >
                      <Icon 
                        className="w-7 h-7 transition-all duration-300"
                        style={{ 
                          color: item.color,
                          filter: `drop-shadow(0 0 8px ${item.color}60)`,
                        }}
                      />
                    </div>
                    <div 
                      className="text-3xl lg:text-4xl font-bold mb-2 transition-all duration-300"
                      style={{ 
                        color: item.color,
                        textShadow: `0 0 30px ${item.color}50`,
                      }}
                    >
                      {item.value}
                    </div>
                    <div className="text-sm text-[#94a3b8] font-medium">{item.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
