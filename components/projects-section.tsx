"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, X, Play } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Pulse AI: Financial Auditor & Chatbot",
    shortDescription: "A cloud-hosted financial auditor that transforms messy bank statements into a masterclass in data analytics.",
    image: "/pulse.jpg",
    videoUrl: "https://www.youtube.com/embed/YOUR_PULSE_VIDEO_ID?autoplay=1", 
    tags: ["Python", "Streamlit", "RAG", "Docker", "Azure ACI"],
    color: "#06b6d4",
    liveUrl: "http://mkrm-bank-analyzer.uksouth.azurecontainer.io:8501/", 
    details: [
      "Engineered a bespoke Python/Pandas extraction engine for HSBC/Santander PDFs",
      "Architected a 2-Pass RAG pipeline with a \"Detective QC\" layer to eliminate LLM hallucinations",
      "Built a secure multi-tier RBAC system with volatile-RAM architecture for total data privacy",
      "Deployed live to Azure Container Instances with 100% uptime",
    ],
  },
  {
    id: 2,
    title: "SBOT: AI-Powered News Summarizer",
    shortDescription: "A dynamic news aggregator with NLP-powered summarization and sentiment analysis.",
    image: "/sbot.jpg",
    videoUrl: "https://www.youtube.com/embed/QQBahk4aGxU?autoplay=1", 
    tags: ["Python", "Flask", "NLP", "REST APIs"],
    color: "#a855f7",
    liveUrl: "https://github.com/Mkrm12", 
    details: [
      "Developed a dynamic news aggregator using GNews API",
      "Utilized DistilBART NLP for rapid text summarization",
      "Integrated VADER sentiment analysis to mitigate bias",
      "Built Text-to-Speech (TTS) for accessible voice-based summaries",
    ],
  },
]

function ProjectCard({ project, isExpanded, onToggle }: { 
  project: typeof projects[0]
  isExpanded: boolean
  onToggle: () => void 
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <motion.div
      layout
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, layout: { duration: 0.4 } }}
    >
      <motion.div
        layout
        className="relative overflow-hidden rounded-3xl transition-all duration-500"
        style={{ 
          background: "rgba(30, 41, 59, 0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(148, 163, 184, 0.15)",
          boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 60px ${project.color}10`,
        }}
        whileHover={!isExpanded ? { 
          scale: 1.02, 
          y: -8,
          boxShadow: `0 35px 100px rgba(0,0,0,0.6), 0 0 80px ${project.color}25`,
        } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 2px ${project.color}40`,
          }}
        />

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onToggle}
              className="cursor-pointer group"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/50 to-transparent" />
                
                {/* Colored glow overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${project.color} 0%, transparent 70%)`
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                      style={{ 
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 
                  className="text-xl lg:text-2xl font-bold text-[#f8fafc] mb-3 group-hover:text-[#06b6d4] transition-colors duration-300"
                  style={{ textShadow: `0 0 30px ${project.color}30` }}
                >
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] text-sm lg:text-base leading-relaxed mb-6 line-clamp-2">
                  {project.shortDescription}
                </p>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 40px ${project.color}50`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    color: "#0a0f1c",
                    boxShadow: `0 0 30px ${project.color}40`,
                  }}
                >
                  View Case Study
                </motion.button>
              </div>
            </motion.div>
          ) : (
            /* Expanded State */
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 lg:p-8"
            >
              {/* Close button - also resets the video state! */}
              <motion.button
                onClick={() => {
                  setIsPlaying(false) // Stops video when closing
                  onToggle()
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-[#f8fafc] transition-all duration-300"
                style={{
                  background: "rgba(248,250,252,0.1)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(148,163,184,0.2)",
                }}
              >
                <X className="w-4 h-4" />
              </motion.button>

              {/* Video Player / Thumbnail Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video rounded-2xl overflow-hidden mb-6"
                style={{ background: "rgba(30,41,59,0.8)" }}
              >
                {!isPlaying ? (
                  // Show your local JPG Thumbnail with Play Button
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        onClick={() => setIsPlaying(true)} // Triggers the video!
                        whileHover={{ scale: 1.15 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
                        style={{ 
                          background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                          boxShadow: `0 0 50px ${project.color}60`,
                        }}
                      >
                        <Play className="w-6 h-6 text-[#0a0f1c] ml-1" />
                      </motion.div>
                    </div>
                  </>
                ) : (
                  // Show the actual YouTube Video
                  <iframe
                    className="w-full h-full"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </motion.div>

              {/* Title & Live Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5"
              >
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-[#f8fafc]"
                  style={{ textShadow: `0 0 30px ${project.color}30` }}
                >
                  {project.title}
                </h3>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: `0 0 50px ${project.color}60` }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shrink-0 transition-all duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    color: "#0a0f1c",
                    boxShadow: `0 0 30px ${project.color}40`,
                  }}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-semibold rounded-xl backdrop-blur-sm"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      border: `1px solid ${project.color}40`,
                      color: project.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h4 className="text-lg font-semibold text-[#f8fafc] mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {project.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3 text-[#e2e8f0]"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                        style={{ backgroundColor: project.color, boxShadow: `0 0 8px ${project.color}` }}
                      />
                      <span className="text-sm lg:text-base leading-relaxed">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#f8fafc]">Featured </span>
            <span className="bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Masterpiece productions built from scratch
          </p>
        </motion.div>

        {/* Side-by-side grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
