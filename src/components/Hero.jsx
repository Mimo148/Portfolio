import { motion } from 'framer-motion'
import Particles from './Particles'

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-[8vw] relative overflow-hidden">
      <Particles />
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)', backgroundSize: '80px 80px'}}
      />

      {/* Glow */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)'}}
      />

      <div className="relative z-10 max-w-2xl">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-px bg-[#c9a84c]" />
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#c9a84c]">
            Available for work · Poprad, Slovakia
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-['Cinzel'] text-[clamp(3rem,7.5vw,7rem)] font-black leading-[0.92] tracking-wide mb-2"
        >
          Milan
          <span className="block text-[#c9a84c]" style={{textShadow: '0 0 80px rgba(201,168,76,0.3)'}}>
            Gánovský
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#4a4840] mb-8"
        >
          Master of Engineering · Computer Networks & Telecommunications
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-[#a89e88] text-lg leading-relaxed max-w-md mb-10"
        >
          Enterprise IT experience at SAP Ariba. CCNP-level networking knowledge. Python developer. Open to relocation and remote roles.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-3 flex-wrap"
        >
          <a href="#contact"
            className="border border-[#c9a84c] text-[#c9a84c] font-mono text-[9px] tracking-[0.22em] uppercase px-7 py-3 hover:bg-[#c9a84c] hover:text-[#06080a] transition-all duration-300"
          >
            Get in touch
          </a>
          <a href="#experience"
            className="border border-[rgba(201,168,76,0.2)] text-[#a89e88] font-mono text-[9px] tracking-[0.22em] uppercase px-7 py-3 hover:border-[rgba(201,168,76,0.5)] hover:text-[#c9a84c] transition-all duration-300"
          >
            View experience
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero