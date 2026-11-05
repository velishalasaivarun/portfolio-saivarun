/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B14',
          card: '#121124',
          subtle: '#181630',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          violet: '#7C3AED',
          cyan: '#22D3EE',
          pink: '#F472B6',
        },
        cream: '#FBF6EC',
        navy: '#2C5A8C',
        gold: '#C9A24B',
        ink: '#1B2430',
        slate: '#5B6472',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl': '1.75rem', // 28px
        '3.5xl': '2rem',  // 32px
        '4xl': '2.25rem', // 36px
        '5xl': '2.75rem', // 44px
      },
      animation: {
        'blob-1': 'blobFloat1 18s ease-in-out infinite alternate',
        'blob-2': 'blobFloat2 22s ease-in-out infinite alternate',
        'blob-3': 'blobFloat3 26s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        blobFloat1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(60px, -80px) scale(1.15)' },
          '66%': { transform: 'translate(-40px, 50px) scale(0.9)' },
          '100%': { transform: 'translate(30px, -30px) scale(1.05)' },
        },
        blobFloat2: {
          '0%': { transform: 'translate(0px, 0px) scale(1.05)' },
          '33%': { transform: 'translate(-70px, 60px) scale(0.95)' },
          '66%': { transform: 'translate(50px, -60px) scale(1.1)' },
          '100%': { transform: 'translate(-30px, 30px) scale(1)' },
        },
        blobFloat3: {
          '0%': { transform: 'translate(0px, 0px) scale(0.95)' },
          '33%': { transform: 'translate(50px, 70px) scale(1.1)' },
          '66%': { transform: 'translate(-60px, -40px) scale(1)' },
          '100%': { transform: 'translate(20px, 40px) scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.04)' },
        },
      },
      boxShadow: {
        'glass-glow': '0 8px 32px 0 rgba(124, 58, 237, 0.15)',
        'neon-violet': '0 0 25px -5px rgba(124, 58, 237, 0.5)',
        'neon-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.5)',
        'neon-pink': '0 0 25px -5px rgba(244, 114, 182, 0.5)',
      },
    },
  },
  plugins: [],
}
