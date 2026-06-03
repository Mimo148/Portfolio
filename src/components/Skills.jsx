import { motion } from 'framer-motion'



const skills = [
  {
    title: 'Networking · CCNP level',
    tags: ['TCP/IP', 'OSI Model', 'Cisco IOS', 'OSPF', 'BGP', 'EIGRP', 'VLAN', 'STP / RSTP', 'ACL', 'NAT', 'Subnetting', 'QoS']
  },
  {
    title: 'Development & Systems',
    tags: ['Python', 'SQL', 'Git', 'Linux', 'Conda / Anaconda', 'Data Analysis', 'React']
  },
  {
    title: 'Enterprise IT',
    tags: ['SAP Ariba', 'ServiceNow', 'IT Support', 'SLA Management', 'Ticket Triage', 'Troubleshooting']
  },
  {
    title: 'Languages',
    tags: ['Slovak – Native', 'English – C1', 'German – B1']
  }
]

function Skills() {
  return (
    <section id="skills" className="py-28 px-[8vw]">
      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>

      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        Skills
      </p>
      <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-12 leading-snug">
        What I work with.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-8 hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <h3 className="font-['Cinzel'] text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] mb-4 pb-3 border-b border-[rgba(201,168,76,0.1)]">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-[#111520] border border-[rgba(201,168,76,0.1)] text-[#a89e88] font-mono text-[10px] px-3 py-1 hover:border-[rgba(201,168,76,0.4)] hover:text-[#c9a84c] hover:shadow-[0_0_10px_rgba(201,168,76,0.1)] transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills