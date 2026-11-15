/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050807',
          charcoal: '#0C1210',
          surface: '#0F1714',
          surfaceLight: '#14201C',
          lime: '#B6FF39',
          green: '#77C83D',
          text: '#F5F7F4',
          muted: '#A6ADA7',
          border: 'rgba(255, 255, 255, 0.08)',
          limeBorder: 'rgba(182, 255, 57, 0.25)',
          limeGlow: 'rgba(182, 255, 57, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px rgba(182, 255, 57, 0.35)',
        'lime-glow-lg': '0 0 45px rgba(182, 255, 57, 0.45)',
        'lime-pill': '0 0 15px rgba(182, 255, 57, 0.25)',
        'inner-glow': 'inset 0 0 15px rgba(182, 255, 57, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'laser-sweep': 'laserSweep 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        laserSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(200%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
