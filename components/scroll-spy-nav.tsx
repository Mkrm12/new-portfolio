"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Home, User, Zap, Briefcase, FolderOpen } from "lucide-react"

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Zap, label: "Skills" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
]

export function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id)
        if (!el) return { id: item.id, top: 0, bottom: 0 }
        const rect = el.getBoundingClientRect()
        return { id: item.id, top: rect.top, bottom: rect.bottom }
      })

      const viewportCenter = window.innerHeight / 3

      for (const section of sections) {
        if (section.top <= viewportCenter && section.bottom > viewportCenter) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop: Vertical sidebar on left */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3"
      >
        <div className="bg-[rgba(30,41,59,0.8)] backdrop-blur-xl border border-[rgba(148,163,184,0.2)] rounded-2xl p-3 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group ${
                  isActive ? "text-[#06b6d4]" : "text-[#94a3b8] hover:text-[#f8fafc]"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 to-[#a855f7]/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="w-5 h-5 relative z-10" />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-[#1e293b] text-[#f8fafc] text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.nav>

      {/* Mobile: Horizontal bar at bottom */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      >
        <div className="flex gap-2 bg-[rgba(30,41,59,0.9)] backdrop-blur-xl border border-[rgba(148,163,184,0.2)] rounded-full px-4 py-3 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive ? "text-[#06b6d4]" : "text-[#94a3b8]"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavMobile"
                    className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 to-[#a855f7]/20 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="w-5 h-5 relative z-10" />
              </motion.button>
            )
          })}
        </div>
      </motion.nav>
    </>
  )
}
