/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neon accents (primary = cyan, secondary = violet)
        primary: '#22d3ee',
        secondary: '#a78bfa',
        accent: '#a3e635',
        neon: '#00e5ff',
        violet: '#8b5cf6',
        // Near-black futuristic surfaces
        void: '#05060a',
        panel: '#0a0b12',
        surface: '#0d0f1a',
        // Dark glass card tokens
        cardBg: 'rgba(255, 255, 255, 0.03)',
        cardBorder: 'rgba(255, 255, 255, 0.10)',
        // Text tokens
        textPrimary: '#f1f5f9',
        textSecondary: '#94a3b8',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 24px rgba(34, 211, 238, 0.35)',
        'neon-lg': '0 0 40px rgba(34, 211, 238, 0.45)',
        'violet-glow': '0 0 24px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
