/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Kasavu: the handloom off-white of a Kerala kasavu mundu
        kasavu: { DEFAULT: '#F4EEE2', deep: '#E8DDC8' },
        // Zari: the gold thread border woven into kasavu, and lamp brass
        zari: { DEFAULT: '#B8862F', light: '#D9B66A', dark: '#8C6420' },
        // Laterite: the red earth floor of a kuzhi kalari
        laterite: { DEFAULT: '#7E2A17', light: '#A3442A', dark: '#561A0D' },
        // Deep Kerala green
        kadu: { DEFAULT: '#1D3428', light: '#2C4A3A', dark: '#12221A' },
        // Lamp soot
        soot: { DEFAULT: '#1A130E', soft: '#2A211A' },
        flame: '#F2B33D',
      },
      fontFamily: {
        display: ['"Rozha One"', 'Georgia', 'serif'],
        body: ['Hind', 'system-ui', 'sans-serif'],
        mal: ['Manjari', '"Noto Sans Malayalam"', 'sans-serif'],
      },
      fontSize: {
        // Modular scale (~1.333, perfect fourth)
        'step--1': ['0.875rem', { lineHeight: '1.5' }],
        'step-0': ['1.0625rem', { lineHeight: '1.65' }],
        'step-1': ['1.375rem', { lineHeight: '1.4' }],
        'step-2': ['1.875rem', { lineHeight: '1.2' }],
        'step-3': ['2.5rem', { lineHeight: '1.1' }],
        'step-4': ['3.5rem', { lineHeight: '1.02' }],
        'step-5': ['5rem', { lineHeight: '0.98' }],
      },
      maxWidth: { measure: '38rem', shell: '78rem' },
      keyframes: {
        flicker: {
          '0%,100%': { transform: 'scaleY(1) scaleX(1) rotate(0deg)', opacity: '1' },
          '25%': { transform: 'scaleY(1.06) scaleX(0.96) rotate(-1.5deg)', opacity: '0.95' },
          '50%': { transform: 'scaleY(0.97) scaleX(1.03) rotate(1deg)', opacity: '1' },
          '75%': { transform: 'scaleY(1.04) scaleX(0.98) rotate(-0.5deg)', opacity: '0.92' },
        },
      },
      animation: { flicker: 'flicker 2.4s ease-in-out infinite' },
    },
  },
  plugins: [],
}
