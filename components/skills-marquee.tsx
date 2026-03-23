"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Container, 
  Cloud, 
  Brain, 
  Database, 
  Server, 
  Palette, 
  BarChart3, 
  Workflow,
  Sparkles,
  Layers,
  Terminal
} from "lucide-react"

// Bento grid skills with icons
const skills = [
  // Primary/Heavy-hitters - larger boxes
  { name: "Python", icon: Code2, isPrimary: true, color: "#3776AB", gridArea: "python" },
  { name: "RAG Pipelines", icon: Brain, isPrimary: true, color: "#a855f7", gridArea: "rag" },
  { name: "Docker", icon: Container, isPrimary: true, color: "#2496ED", gridArea: "docker" },
  { name: "Azure ACI", icon: Cloud, isPrimary: true, color: "#0089D6", gridArea: "azure" },
  { name: "LLM Routing", icon: Workflow, isPrimary: true, color: "#06b6d4", gridArea: "llm" },
  // Secondary skills - smaller boxes
  { name: "SQL", icon: Database, isPrimary: false, color: "#336791", gridArea: "sql" },
  { name: "Streamlit", icon: Palette, isPrimary: false, color: "#FF4B4B", gridArea: "streamlit" },
  { name: "Node.js", icon: Server, isPrimary: false, color: "#339933", gridArea: "node" },
  { name: "Flask", icon: Terminal, isPrimary: false, color: "#000000", gridArea: "flask" },
  { name: "Pandas", icon: BarChart3, isPrimary: false, color: "#150458", gridArea: "pandas" },
  { name: "OpenAI", icon: Sparkles, isPrimary: false, color: "#10a37f", gridArea: "openai" },
  { name: "React", icon: Layers, isPrimary: false, color: "#61DAFB", gridArea: "react" },
]

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`relative group cursor-pointer ${skill.isPrimary ? "col-span-1 row-span-1" : ""}`}
      style={{ gridArea: skill.gridArea }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: `${skill.color}30` }}
      />
      
      {/* Card */}
      <div 
        className={`relative h-full backdrop-blur-xl rounded-2xl border transition-all duration-500 flex flex-col items-center justify-center gap-3 ${
          skill.isPrimary 
            ? "bg-[rgba(30,41,59,0.7)] border-[rgba(148,163,184,0.2)] p-8 min-h-[160px]" 
            : "bg-[rgba(30,41,59,0.5)] border-[rgba(148,163,184,0.12)] p-5 min-h-[100px]"
        }`}
        style={{
          boxShadow: skill.isPrimary 
            ? `0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)` 
            : `0 10px 30px rgba(0,0,0,0.2)`,
        }}
      >
        {/* Glowing border on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 2px ${skill.color}60, 0 0 30px ${skill.color}30`,
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <skill.icon 
            className={`${skill.isPrimary ? "w-10 h-10" : "w-6 h-6"} transition-all duration-300`}
            style={{ 
              color: skill.color,
              filter: `drop-shadow(0 0 10px ${skill.color}50)`,
            }}
          />
        </motion.div>

        {/* Text */}
        <span 
          className={`relative z-10 font-semibold text-center transition-all duration-300 ${
            skill.isPrimary 
              ? "text-lg lg:text-xl text-[#f8fafc]" 
              : "text-sm text-[#94a3b8] group-hover:text-[#e2e8f0]"
          }`}
          style={skill.isPrimary ? { textShadow: `0 0 20px ${skill.color}40` } : {}}
        >
          {skill.name}
        </span>

        {/* Primary badge glow */}
        {skill.isPrimary && (
          <div 
            className="absolute top-3 right-3 w-2 h-2 rounded-full"
            style={{ 
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}`,
            }}
          />
        )}
      </div>
    </motion.div>
  )
}

export function SkillsMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-16" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            The arsenal I use to architect production AI systems
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5"
          style={{
            gridTemplateAreas: `
              "python python rag rag docker docker"
              "sql streamlit rag rag azure azure"
              "node flask llm llm openai react"
              "node pandas llm llm openai react"
            `,
          }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Mobile fallback - simpler grid */}
        <style jsx>{`
          @media (max-width: 768px) {
            .grid {
              grid-template-areas: none !important;
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
