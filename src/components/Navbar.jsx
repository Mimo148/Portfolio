import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['about', 'experience', 'education', 'skills', 'projects', 'contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [width, setWidth] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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

  const isMobile = width < 768

  // ----- MOBILE -----
  if (isMobile) {
    return (
      <>
        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="fixed top-5 right-5 z-[998] flex flex-col gap-1.5"
          style={{
            background: 'rgba(6,8,10,0.92)',
            border: '1px solid rgba(201,168,76,0.3)',
            padding: '12px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#c9a84c', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#c9a84c', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#c9a84c', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
        </button>

        {/* Fullscreen menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[997] flex flex-col items-center justify-center gap-8"
              style={{ background: 'rgba(6,8,10,0.98)' }}
            >
              {links.map(function(link) {
                const url = '#' + link
                return (
                  <a
                    key={link}
                    href={url}
                    onClick={() => setMenuOpen(false)}
                    className="font-mono uppercase tracking-[0.25em]"
                    style={{
                      color: active === link ? '#c9a84c' : '#a89e88',
                      fontSize: '20px',
                    }}
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

  // ----- DESKTOP -----
  const navBg = scrolled ? 'rgba(6,8,10,0.92)' : 'rgba(6,8,10,0.6)'
  const navShadow = scrolled ? '0 0 40px rgba(201,168,76,0.08)' : 'none'

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[997] flex transition-all duration-500"
      style={{
        background: navBg,
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(201,168,76,0.2)',
        padding: '8px 12px',
        boxShadow: navShadow,
        maxWidth: '95vw',
      }}
    >
      {links.map(function(link) {
        const url = '#' + link
        const color = active === link ? '#c9a84c' : '#6a6860'
        return (
          <a
            key={link}
            href={url}
            className="relative font-mono tracking-[0.1em] uppercase transition-all duration-200"
            style={{
              color: color,
              fontSize: '10px',
              padding: '6px 14px',
            }}
          >
            {active === link && (
              <span
                className="absolute bottom-0.5 left-0 right-0 h-px"
                style={{ background: '#c9a84c', boxShadow: '0 0 8px rgba(201,168,76,0.6)' }}
              />
            )}
            {link}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar