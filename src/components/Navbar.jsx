import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['about', 'experience', 'education', 'skills', 'projects', 'contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      links.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id)
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled ? 'rgba(6,8,10,0.92)' : 'rgba(6,8,10,0.6)'
  const navShadow = scrolled ? '0 0 40px rgba(201,168,76,0.08)' : 'none'

  return (
    <>
      {/* Desktop navbar */}
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[997] hidden md:flex transition-all duration-500"
        style={{
          background: navBg,
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(201,168,76,0.2)',
          padding: '6px 20px',
          boxShadow: navShadow,
        }}
      >
        {links.map(function(link) {
          const url = '#' + link
          const color = active === link ? '#c9a84c' : '#4a4840'
          return (
            <a
              key={link}
              href={url}
              className="relative font-mono text-[9px] tracking-[0.18em] uppercase px-4 py-2 transition-all duration-200"
              style={{ color: color }}
            >
              {active === link && (
                <span
                  className="absolute bottom-1 left-4 right-4 h-px"
                  style={{ background: '#c9a84c', boxShadow: '0 0 8px rgba(201,168,76,0.6)' }}
                />
              )}
              {link}
            </a>
          )
        })}
      </nav>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-5 right-5 z-[998] md:hidden flex flex-col gap-1.5 p-3"
        style={{
          background: 'rgba(6,8,10,0.9)',
          border: '1px solid rgba(201,168,76,0.3)',
        }}
      >
        <span className="block w-5 h-px transition-all duration-300"
          style={{ background: '#c9a84c', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
        <span className="block w-5 h-px transition-all duration-300"
          style={{ background: '#c9a84c', opacity: menuOpen ? 0 : 1 }} />
        <span className="block w-5 h-px transition-all duration-300"
          style={{ background: '#c9a84c', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[996] md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(6,8,10,0.98)' }}
          >
            {links.map(function(link) {
              const url = '#' + link
              return (
                <a
                  key={link}
                  href={url}
                  onClick={() => setMenuOpen(false)}
                  className="font-['Cinzel'] text-2xl tracking-[0.2em] uppercase transition-all duration-200"
                  style={{ color: active === link ? '#c9a84c' : '#a89e88' }}
                >
                  {link}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar