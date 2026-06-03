import { motion } from 'framer-motion'
import Particles from './Particles'

const links = [
  { label: 'Email', value: 'milanganovsky1@gmail.com', href: 'mailto:milanganovsky1@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/milan-gánovský', href: 'https://linkedin.com/in/milan-gánovský-180746315' },
  { label: 'Phone', value: '+421 917 740 294', href: 'tel:+421917740294' },
]

function Contact() {
  return (
    <section id="contact" className="py-28 px-[8vw] relative overflow-hidden">
        <Particles />
      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>


      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        Contact
      </p>
      <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-6 leading-snug">
        Let's work together.
      </h2>
      <p className="text-[#a89e88] text-lg leading-[1.9] max-w-lg mb-12 italic">
        I'm currently looking for my next opportunity in IT — network engineering, cybersecurity, enterprise IT, or software development. Based in Poprad (High Tatras region), open to relocation and remote roles.
      </p>

      <div className="flex flex-col gap-3 max-w-lg">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.label === 'LinkedIn' ? '_blank' : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex items-center gap-6 border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] px-7 py-5 relative overflow-hidden hover:border-[rgba(201,168,76,0.3)] hover:translate-x-1.5 transition-all duration-300 no-underline"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#c9a84c] scale-y-0 group-hover:scale-y-100 transition-transform duration-250 origin-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,168,76,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-['Cinzel'] text-[9px] tracking-[0.18em] uppercase text-[#c9a84c] min-w-[72px] relative z-10">{link.label}</span>
            <span className="text-[#a89e88] text-base relative z-10 group-hover:text-[#e8dfc8] transition-colors duration-300">{link.value}</span>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-[rgba(201,168,76,0.1)] flex justify-between items-center bg-[#06080a]">
        <span className="font-['Cinzel'] text-sm font-bold tracking-wider text-[#c9a84c]">Milan Gánovský</span>
        <span className="font-mono text-[9px] tracking-wider uppercase text-[#4a4840]">© 2026 · Poprad, Slovakia</span>
      </div>
    </section>
  )
}

export default Contact