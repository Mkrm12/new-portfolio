"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function TwinklingStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generated = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
    }))
    setStars(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function GlowingDust() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const colors = ["#06b6d4", "#a855f7", "#ec4899", "#f97316"]
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(generated)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#050810]" />
      
      {/* Complex layered gradients for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 20% 20%, rgba(6, 182, 212, 0.2) 0%, transparent 40%),
            radial-gradient(ellipse 70% 50% at 80% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 45%)
          `,
        }}
      />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Primary aurora - Deep Violet */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 120% 60% at 50% -10%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary aurora - Neon Cyan */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 50% at 30% 0%, rgba(6, 182, 212, 0.35) 0%, transparent 45%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary aurora - Magenta/Pink */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 45% at 70% -5%, rgba(236, 72, 153, 0.3) 0%, transparent 40%)",
          }}
          animate={{
            opacity: [0.25, 0.5, 0.25],
            x: [50, -50, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Deep purple nebula cloud */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan nebula */}
        <motion.div
          className="absolute top-1/4 right-0 w-[700px] h-[700px]"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [30, -70, 30],
            y: [20, -40, 20],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Pink/magenta accent nebula */}
        <motion.div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
          animate={{
            x: [-20, 40, -20],
            y: [15, -25, 15],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Twinkling stars layer */}
        <TwinklingStars />

        {/* Glowing dust particles */}
        <GlowingDust />

        {/* Subtle noise texture overlay for richness */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Vignette for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(5, 8, 16, 0.4) 100%)",
        }}
      />
    </div>
  )
}
