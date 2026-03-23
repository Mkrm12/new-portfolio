"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

export function HeroSection() {
  return (
    // FIXED: Added pl-24 and lg:pl-32 to push content to the right, away from the sidebar
    <section id="hero" className="relative min-h-screen flex items-center pr-6 pl-24 lg:pr-16 lg:pl-32 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left side: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6"
          >
            <span 
              className="bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
              style={{ textShadow: "0 0 80px rgba(6, 182, 212, 0.3)" }}
            >
              Hey, I&apos;m Mukarram!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-[#e2e8f0] max-w-xl leading-relaxed mb-8"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            I architect cloud-deployed AI solutions and production-ready SaaS platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(6, 182, 212, 0.6), 0 0 100px rgba(168, 85, 247, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] text-[#050810] font-bold rounded-full transition-all duration-300"
              style={{
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.4), 0 10px 40px rgba(0,0,0,0.3)",
              }}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#06b6d4",
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                backgroundColor: "rgba(6, 182, 212, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-[rgba(148,163,184,0.3)] text-[#f8fafc] font-semibold rounded-full backdrop-blur-xl transition-all duration-300"
              style={{
                background: "rgba(30, 41, 59, 0.4)",
              }}
            >
              About Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side: Floating irregular image frame */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            {/* Outer glow */}
            <motion.div 
              className="absolute -inset-8 rounded-[3rem] blur-3xl"
              style={{
                background: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.2), transparent)",
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Animated glowing border */}
            <div className="absolute -inset-[3px] rounded-[2.5rem] bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] opacity-90" />
            <motion.div 
              className="absolute -inset-[3px] rounded-[2.5rem] bg-gradient-to-r from-[#06b6d4] via-[#a855f7] to-[#ec4899] blur-xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Irregular shaped container */}
            <div 
              className="relative w-72 h-80 sm:w-80 sm:h-96 overflow-hidden"
              style={{
                borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
                background: "rgba(30, 41, 59, 0.6)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* FIXED: Actual Profile Photo replacing the MN Placeholder */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="/me.jpg" 
                  alt="Mukarram Nazir" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Glassmorphism inner highlights */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
          {/* FIXED: Removed the two floating square and circle blobs from here */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[rgba(148,163,184,0.4)] rounded-full flex justify-center pt-2 backdrop-blur-sm"
          style={{
            background: "rgba(30, 41, 59, 0.3)",
          }}
        >
          <motion.div className="w-1.5 h-3 bg-gradient-to-b from-[#06b6d4] to-[#a855f7] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}