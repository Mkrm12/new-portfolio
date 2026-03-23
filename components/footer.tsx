"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Mkrm12", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mukarram-nazir-a509762a9/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mukarram.nazir21@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-6 lg:px-16 border-t border-[rgba(148,163,184,0.1)]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-gradient-to-t from-[#06b6d4]/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
              Mukarram Nazir
            </h3>
            <p className="text-[#94a3b8] text-sm mt-1">Full-Stack & AI Developer</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-[rgba(30,41,59,0.6)] backdrop-blur-xl border border-[rgba(148,163,184,0.15)] flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 pt-8 border-t border-[rgba(148,163,184,0.1)] text-center"
        >
          <p className="text-[#94a3b8] text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#ef4444] fill-current" /> by Mukarram Nazir
          </p>
          <p className="text-[#64748b] text-xs mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
