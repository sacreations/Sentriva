/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo - calming and trustworthy
        secondary: '#6B7280', // Gray - neutral and stable
        accent: '#10B981', // Emerald - growth and healing
        minimal: '#10B981', // Emerald - positive, healthy
        mild: '#F59E0B', // Amber - gentle warning
        moderate: '#F97316', // Orange - moderate concern
        moderatelySevere: '#EA580C', // Dark orange - serious attention
        severe: '#DC2626', // Red - urgent care needed
        // Mental wellbeing colors
        calm: '#E0E7FF', // Light indigo
        serene: '#F0FDF4', // Light green
        peaceful: '#FEF7CD', // Light yellow
        soothing: '#F3E8FF', // Light purple
        wellness: '#ECFDF5', // Very light green
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
