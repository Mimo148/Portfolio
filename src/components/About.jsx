import { motion } from 'framer-motion'


const stats = [
  { num: 'Ing.', label: 'Master of Engineering' },
  { num: '1.5y', label: 'Enterprise Experience' },
  { num: 'C1', label: 'English Level' },
  { num: 'B', label: 'Driving Licence' },
]

function About() {
  return (
    <section id="about" className="py-28 px-[8vw]">

      {/* Divider */}
      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>

      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        About me
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-8 leading-snug">
            Engineer.<br />Problem solver.<br />Fast learner.
          </h2>
          <p className="text-[#a89e88] text-lg leading-[1.9] mb-5">
            I'm a recent Ing. graduate from the Technical University of Košice, specializing in Computer Networks and Telecommunications. Over the past year and a half, I worked at SAP Ariba in a global enterprise environment, handling technical support, ticket triage, and cross-team collaboration.
          </p>
          <p className="text-[#a89e88] text-lg leading-[1.9] mb-5">
            My thesis pushed me deep into Python – I built a benchmarking pipeline from scratch to compare traditional and neural audio codecs, which taught me how to think about software architecture, data pipelines, and environment management simultaneously.
          </p>
          <p className="text-[#a89e88] text-lg leading-[1.9]">
            I'm looking for a role where I can bring my networking expertise, enterprise IT background, and development skills to a team doing meaningful work.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-px bg-[rgba(201,168,76,0.2)]"
        >
          {stats.map((s, i) => (
            <div key={i}
              className="bg-[#06080a] p-10 text-center group hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300 cursor-default"
            >
              <div className="font-['Cinzel'] text-3xl font-bold text-[#c9a84c] mb-2 group-hover:drop-shadow-[0_0_20px_rgba(201,168,76,0.5)] transition-all duration-300">
                {s.num}
              </div>
              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#4a4840]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About