import { useState, useEffect } from 'react'

const links = ['about', 'experience', 'education', 'skills', 'projects', 'contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

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
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[997] flex transition-all duration-500"
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
  )
}

export default Navbar