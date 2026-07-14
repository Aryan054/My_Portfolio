/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1419',
        'ink-soft': '#171D26',
        paper: '#F6F5F1',
        'paper-soft': '#EDEBE3',
        line: '#DEDCD3',
        'line-dark': '#2A323D',
        ink_text: '#1A1D23',
        'text-soft': '#5B5F68',
        muted: '#8B8F98',
        accent: '#2D7D6E',
        'accent-soft': '#E4EFEC',
        accent2: '#C98A2A',
        'accent2-soft': '#F6E9D2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '10px',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        glow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(45,125,110,0.16)' },
          '50%': { boxShadow: '0 0 38px 12px rgba(45,125,110,0.16)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        pulse2: 'pulse2 1.8s infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
