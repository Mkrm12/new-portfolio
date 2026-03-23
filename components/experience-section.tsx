"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code2, ShieldCheck } from "lucide-react"

const experiences = [
  {
    role: "AI Developer & Code Reviewer",
    company: "Outlier AI",
    period: "Nov 2023 - Present",
    icon: Code2,
    color: "#06b6d4",
    bullets: [
      "Conduct peer code reviews for Python scripts",
      "Provide RLHF feedback to optimize conversational AI",
      "Test edge cases in proprietary chatbot environments",
    ],
  },
  {
    role: "Control Room Manager",
    company: "CIS Security",
    period: "May 2020 - Present",
    icon: ShieldCheck,
    color: "#a855f7",
    bullets: [
      "Manage complex scheduling software and rosters",
      "Compile and analyze operational data via incident reporting systems",
    ],
  },
]

export function ExperienceSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"])

  return (
    <section id="experience" className="relative py-32 px-6 lg:px-16" ref={containerRef}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A journey through my professional career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - background */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 rounded-full bg-[rgba(148,163,184,0.1)] lg:-translate-x-1/2" />
          
          {/* Central line - animated gradient fill */}
          <motion.div 
            className="absolute left-8 lg:left-1/2 top-0 w-1 rounded-full bg-gradient-to-b from-[#06b6d4] via-[#a855f7] to-[#ec4899] lg:-translate-x-1/2"
            style={{ 
              height: lineHeight,
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
            }}
          />

          {/* Timeline items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                  className={`relative pl-20 lg:pl-0 flex items-start gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -8,
                      }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <motion.div 
                        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                        style={{ background: `linear-gradient(135deg, ${exp.color}25, transparent)` }}
                      />
                      
                      <div 
                        className="relative rounded-3xl p-8 lg:p-10 transition-all duration-500"
                        style={{ 
                          background: "rgba(30, 41, 59, 0.6)",
                          backdropFilter: "blur(24px)",
                          WebkitBackdropFilter: "blur(24px)",
                          border: "1px solid rgba(148, 163, 184, 0.12)",
                          boxShadow: `0 25px 80px rgba(0,0,0,0.4), 0 0 50px ${exp.color}08`,
                        }}
                      >
                        {/* Glowing border on hover */}
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                          style={{
                            boxShadow: `inset 0 0 0 1.5px ${exp.color}40, 0 0 40px ${exp.color}20`,
                          }}
                        />
                        
                        {/* Inner top highlight */}
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        
                        <span 
                          className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-5"
                          style={{ 
                            backgroundColor: `${exp.color}15`,
                            color: exp.color,
                            boxShadow: `0 0 20px ${exp.color}20`,
                          }}
                        >
                          {exp.period}
                        </span>
                        <h3 
                          className="text-2xl lg:text-3xl font-bold text-[#f8fafc] mb-2"
                          style={{ textShadow: `0 0 30px ${exp.color}20` }}
                        >
                          {exp.role}
                        </h3>
                        <p 
                          className="text-lg font-medium mb-6" 
                          style={{ 
                            color: exp.color,
                            textShadow: `0 0 20px ${exp.color}30`,
                          }}
                        >
                          {exp.company}
                        </p>
                        
                        {/* Bullet points */}
                        <ul className={`space-y-3 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                          {exp.bullets.map((bullet, i) => (
                            <li 
                              key={i} 
                              className={`text-[#94a3b8] text-base leading-relaxed flex items-start gap-3 ${
                                index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : ""
                              }`}
                            >
                              <span 
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                                style={{ 
                                  backgroundColor: exp.color,
                                  boxShadow: `0 0 8px ${exp.color}`,
                                }} 
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                          boxShadow: `0 0 40px ${exp.color}60, 0 10px 40px rgba(0,0,0,0.3)`,
                        }}
                      >
                        <Icon className="w-7 h-7 text-[#050810]" />
                      </motion.div>
                      {/* Pulsing ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        style={{ 
                          border: `2px solid ${exp.color}`,
                        }}
                        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
