import { motion } from 'framer-motion'

const metrics = ['Python', 'Conda', 'PESQ', 'STOI', 'SNR', 'SI-SDR', 'FAD', 'NISQUA', 'DNSMOS', 'EnCodec', 'DAC', 'SNAC', 'Opus']

function Projects() {
  return (
    <section id="projects" className="py-28 px-[8vw]">
      <div className="flex items-center gap-0 mb-20">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        <div className="w-2 h-2 bg-[#c9a84c] rotate-45 mx-4 shadow-[0_0_12px_rgba(201,168,76,0.5)]" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      </div>

      <p className="font-mono text-[9px] tracking-[0.28em] uppercase text-[#c9a84c] mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-[#c9a84c]" />
        Projects
      </p>
      <h2 className="font-['Cinzel'] text-4xl font-bold tracking-wide mb-12 leading-snug">
        What I've built.
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group border border-[rgba(201,168,76,0.1)] bg-[rgba(201,168,76,0.02)] p-12 max-w-4xl relative hover:border-[rgba(201,168,76,0.3)] transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

        <div className="border border-[rgba(201,168,76,0.25)] text-[#c9a84c] font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1 inline-block mb-6">
          Master's Thesis · 2025
        </div>

        <h3 className="font-['Cinzel'] text-2xl font-bold tracking-wide mb-5 leading-snug">
          Neural Audio Codec Benchmarking Pipeline
        </h3>

        <p className="text-[#a89e88] text-base leading-[1.9] mb-4">
          Developed a comprehensive Python benchmarking system comparing traditional and neural audio codecs. The pipeline handled batch encoding and decoding across multiple codec implementations and computed a wide range of perceptual and signal-level audio quality metrics.
        </p>
        <p className="text-[#a89e88] text-base leading-[1.9] mb-6">
          Each codec ran in its own isolated Conda environment to prevent dependency conflicts. Compared Opus (traditional) against EnCodec, DAC, and SNAC (neural) across multiple audio samples and bitrates, generating visualizations, manifests, and comparison tables.
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-[rgba(201,168,76,0.1)]">
          {metrics.map((m, i) => (
            <span key={i} className="bg-[#111520] border border-[rgba(201,168,76,0.1)] text-[#a89e88] font-mono text-[9px] px-3 py-1">
              {m}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects