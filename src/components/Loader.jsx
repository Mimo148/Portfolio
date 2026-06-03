import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#06080a' }}
        >
          {/* Diamond logo */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-12 h-12 border-2 border-[#c9a84c] mb-8"
            style={{ boxShadow: '0 0 40px rgba(201,168,76,0.4)' }}
          />

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-['Cinzel'] text-[#c9a84c] text-lg tracking-[0.3em] uppercase mb-8"
          >
            Milan Gánovský
          </motion.p>

          {/* Loading bar */}
          <div className="w-48 h-px bg-[rgba(201,168,76,0.2)] relative overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="absolute inset-0"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader