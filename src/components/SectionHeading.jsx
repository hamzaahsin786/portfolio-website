import { motion } from 'framer-motion'

/**
 * SectionHeading — shared futuristic section header.
 * Mono eyebrow (e.g. `// 01 — ABOUT`), big Space Grotesk title with a
 * gradient word, and a thin gradient rule.
 *
 * Props:
 *  - index: string  — section number, e.g. '01'
 *  - eyebrow: string — mono label, e.g. 'ABOUT'
 *  - title: string  — leading part of the title (plain white)
 *  - highlight: string — gradient part of the title
 *  - subtitle: string (optional) — supporting line under the rule
 */
const SectionHeading = ({ index, eyebrow, title, highlight, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-primary/80 uppercase mb-4">
        {`// ${index} — ${eyebrow}`}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 text-white">
        {title} <span className="neon-text">{highlight}</span>
      </h2>
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-5" />
      {subtitle && (
        <p className="text-textSecondary max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionHeading
