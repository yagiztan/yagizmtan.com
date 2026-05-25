/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aerospace-dark': '#0a0e27',
        'aerospace-light': '#f8f9fa',
        'aerospace-accent': '#00d4ff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        'prose': '80px',
      },
    },
  },
  plugins: [],
}
