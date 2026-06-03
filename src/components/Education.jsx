import { motion } from 'framer-motion'

const education = [
  {
    degree: 'Master of Engineering (Ing.)',
    school: 'Technical University of Košice · Computer Networks and Telecommunications',
    year: '2024 – 2025',
    note: 'Thesis: Neural Audio Codecs – Benchmarking Traditional vs. Neural Approaches. Developed a Python pipeline for batch encoding/decoding and audio quality evaluation. Compared Opus against EnCodec, DAC and SNAC using PESQ, STOI, SNR, SI-SDR, FAD, NISQUA and DNSMOS metrics. Managed isolated Conda environments per codec.'
  },
  {
    degree: 'Bachelor of Engineering (Bc.)',
    school: 'Technical University of Košice · Computer Networks and Telecommunications',
    year: '2021 – 2024',
    note: null
  },
  {
    degree: 'School Leaving Exam (Maturita)',
    school: 'Súkromné gymnázium bilingválne anglické',
    year: '2016 – 2021',
    note: null
  }
]

function Education() {
  return (
    <section id="education" className="py-28 px-[8vw]">
      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>

      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        Education
      </p>
      <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-12 leading-snug">
        Academic background.
      </h2>

      <div className="flex flex-col gap-3">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-8 hover:border-[rgba(201,168,76,0.3)] transition-all duration-300"
          >
            <h3 className="font-['Cinzel'] text-base font-semibold tracking-wide mb-1">{edu.degree}</h3>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#c9a84c] mb-3">{edu.school}</p>
            {edu.note && <p className="text-[#a89e88] text-base leading-[1.8] italic mb-3">{edu.note}</p>}
            <p className="font-mono text-[9px] text-[#4a4840] tracking-wider uppercase">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education