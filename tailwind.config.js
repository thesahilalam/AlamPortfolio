/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode palette
        bg: {
          primary: 'var(--bg-primary)',
          card: 'var(--bg-card)',
        },
        accent: {
          blue: '#3b82f6',
          green: '#22c55e',
          red: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
