import { useEffect, useState } from 'react'

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = e => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => setClicking(true)
    const onMouseUp = () => setClicking(false)

    const onHoverIn = () => setHovering(true)
    const onHoverOut = () => setHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onHoverIn)
      el.addEventListener('mouseleave', onHoverOut)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  // Trail follows with delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTrail({ x: pos.x, y: pos.y })
    }, 80)
    return () => clearTimeout(timeout)
  }, [pos])

  return (
    <>
      {/* Glow */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-transform duration-100"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? '300px' : '200px',
          height: hovering ? '300px' : '200px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />

      {/* Trail dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: trail.x,
          top: trail.y,
          width: '6px',
          height: '6px',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(201,168,76,0.4)',
          boxShadow: '0 0 8px rgba(201,168,76,0.4)',
          transition: 'left 0.08s, top 0.08s',
        }}
      />

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          style={{
            width: clicking ? '16px' : hovering ? '28px' : '20px',
            height: clicking ? '16px' : hovering ? '28px' : '20px',
            border: `1px solid rgba(201,168,76,${hovering ? '0.9' : '0.6'})`,
            borderRadius: hovering ? '50%' : '0',
            transform: hovering ? 'rotate(0deg)' : 'rotate(45deg)',
            boxShadow: `0 0 ${hovering ? '16px' : '8px'} rgba(201,168,76,0.3)`,
            transition: 'all 0.2s ease',
          }}
        />
      </div>
    </>
  )
}

export default Cursor