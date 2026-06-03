import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COMMANDS = {
  help: `Available commands:
  about       – about me
  experience  – work experience
  skills      – technical skills
  education   – academic background
  contact     – get in touch
  whoami      – quick intro
  clear       – clear terminal`,

  whoami: `Milan Gánovský
  Ing. | Computer Networks & Telecommunications
  SAP Ariba Alumni | CCNP-level | Python
  Based in Poprad, Slovakia
  Open to relocation & remote`,

  about: `Engineer. Problem solver. Fast learner.
  Recent Ing. graduate from TUKE.
  1.5 years enterprise experience at SAP Ariba.
  Built a Python benchmarking pipeline for thesis.
  Looking for next opportunity in IT.`,

  experience: `[ SAP Ariba ]
  Application Management Triage / Functional Consultant
  Feb 2025 – May 2026 · Košice, Slovakia (Hybrid)
  – Triaged service requests within SAP Ariba platform
  – Ensured SLA compliance
  – Collaborated with international teams

  [ Gordon Lodge ]
  Housekeeper · Jul–Sep 2023
  Door County, Wisconsin, USA`,

  skills: `[ Networking · CCNP level ]
  TCP/IP · OSI · Cisco IOS · OSPF · BGP
  EIGRP · VLAN · STP · ACL · NAT · QoS

  [ Development ]
  Python · SQL · Git · Linux · React · Conda

  [ Enterprise IT ]
  SAP Ariba · ServiceNow · SLA Management

  [ Languages ]
  Slovak (native) · English (C1) · German (B1)`,

  education: `[ Master of Engineering (Ing.) ]
  Technical University of Košice
  Computer Networks & Telecommunications
  2024 – 2025
  Thesis: Neural Audio Codec Benchmarking Pipeline

  [ Bachelor of Engineering (Bc.) ]
  Technical University of Košice
  2021 – 2024

  [ Maturita ]
  Súkromné gymnázium bilingválne anglické
  2016 – 2021`,

  contact: `[ Email ]
  milanganovsky1@gmail.com

  [ LinkedIn ]
  linkedin.com/in/milan-gánovský

  [ Phone ]
  +421 917 740 294

  Open to relocation & remote roles.`,
}

function Terminal() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome. Type "help" to see available commands.' }
  ])
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newHistory = [...history, { type: 'input', text: '> ' + trimmed }]

    if (trimmed === 'clear') {
      setHistory([{ type: 'system', text: 'Terminal cleared. Type "help" for commands.' }])
      setInput('')
      return
    }

    if (COMMANDS[trimmed]) {
      newHistory.push({ type: 'output', text: COMMANDS[trimmed] })
    } else if (trimmed === '') {
      // nothing
    } else {
      newHistory.push({ type: 'error', text: 'Command not found: ' + trimmed + '. Type "help".' })
    }

    setHistory(newHistory)
    setInput('')
  }

  const onKey = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
  }

  return (
    <>
    {/* Tooltip bubble */}
<AnimatePresence>
  {!open && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed bottom-20 right-6 z-[996] font-mono text-[10px] tracking-[0.08em] px-4 py-3"
      style={{
        background: 'rgba(6,8,10,0.95)',
        border: '1px solid rgba(201,168,76,0.3)',
        color: '#a89e88',
        maxWidth: '220px',
        boxShadow: '0 0 20px rgba(201,168,76,0.1)',
      }}
    >
      <span style={{ color: '#c9a84c' }}>{'// '}</span>
      for the curious ones — try the terminal
      {/* Arrow pointing down */}
      <div
        className="absolute -bottom-1.5 right-8 w-3 h-3 rotate-45"
        style={{ background: 'rgba(6,8,10,0.95)', borderRight: '1px solid rgba(201,168,76,0.3)', borderBottom: '1px solid rgba(201,168,76,0.3)' }}
      />
    </motion.div>
  )}
</AnimatePresence>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[996] font-mono text-[11px] tracking-[0.1em] flex items-center gap-2"
        style={{
          background: open ? '#c9a84c' : 'rgba(6,8,10,0.9)',
          border: '1px solid #c9a84c',
          color: open ? '#06080a' : '#c9a84c',
          padding: '10px 18px',
          clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          boxShadow: '0 0 30px rgba(201,168,76,0.3)',
        }}
        animate={{ boxShadow: ['0 0 20px rgba(201,168,76,0.2)', '0 0 40px rgba(201,168,76,0.5)', '0 0 20px rgba(201,168,76,0.2)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: '14px' }}>{open ? '✕' : '>_'}</span>
        {open ? 'Close' : 'Terminal'}
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 z-[995] w-[500px] max-w-[90vw]"
            style={{
              background: 'rgba(6,8,10,0.97)',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 0 60px rgba(201,168,76,0.1)',
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: 'rgba(201,168,76,0.2)' }}
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#c9a84c]">
                milan@portfolio:~
              </span>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] opacity-60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] opacity-40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] opacity-20" />
              </div>
            </div>

            {/* Output */}
            <div
              className="p-4 h-72 overflow-y-auto font-mono text-[12px] leading-[1.8]"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} style={{
                  color: line.type === 'input' ? '#c9a84c' :
                    line.type === 'error' ? '#c43030' :
                      line.type === 'system' ? 'rgba(201,168,76,0.5)' :
                        '#a89e88',
                  whiteSpace: 'pre-wrap',
                  marginBottom: '4px'
                }}>
                  {line.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-t"
              style={{ borderColor: 'rgba(201,168,76,0.2)' }}
            >
              <span className="font-mono text-[12px] text-[#c9a84c]">{'>'}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                className="flex-1 bg-transparent font-mono text-[12px] text-[#e8dfc8] outline-none"
                placeholder="type a command..."
                style={{ caretColor: '#c9a84c' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Terminal