import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Application Management Triage / Functional Consultant',
    company: 'SAP Ariba · Part-time · Košice, Slovakia (Hybrid)',
    date: 'Feb 2025 – May 2026',
    desc: 'Triaged and resolved functional service requests within the SAP Ariba platform, ensuring SLA compliance. Investigated reported issues and escalated complex cases to specialized support teams with documented root cause analysis. Managed customer ticket portfolio with proactive follow-ups and collaborated cross-functionally with international teams on priority ticket assignment.'
  },
  {
    title: 'Housekeeper',
    company: 'Gordon Lodge · Door County, Wisconsin, United States',
    date: 'Jul – Sep 2023',
    desc: 'Seasonal work experience in the United States, demonstrating adaptability and English communication in an international environment.'
  }
]

function Experience() {
  return (
    <section id="experience" className="py-28 px-[8vw]">

      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>

      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        Experience
      </p>
      <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-12 leading-snug">
        Where I've worked.
      </h2>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-8 relative overflow-hidden hover:border-[rgba(201,168,76,0.3)] hover:translate-x-1.5 transition-all duration-300"
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#c9a84c] to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,168,76,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex justify-between gap-8 items-start">
              <div>
                <h3 className="font-['Cinzel'] text-base font-semibold tracking-wide mb-1">{exp.title}</h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#c9a84c] mb-4">{exp.company}</p>
                <p className="text-[#a89e88] text-base leading-[1.8]">{exp.desc}</p>
              </div>
              <div className="font-mono text-[9px] text-[#4a4840] tracking-wider whitespace-nowrap text-right uppercase">{exp.date}</div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience