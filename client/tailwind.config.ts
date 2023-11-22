import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-yellow': '#FFC327',
        'custom-purple': '#8021FA',
        'custom-green': '#29AE56B8',
        'custom-orange': '#FA7921F7',
                      
      },
      colors: {
        'custom-yellow': '#FFC327',
        'custom-purple': '#8021FA',
        'custom-green': '#29AE56B8',
        'custom-orange': '#FA7921F7',
      },
      buttonStyles: {
        'yellow-btn': 'focus:ring-4 focus:outline-none bg-custom-yellow text-white focus:ring-yellow-600 font-medium rounded-full text-sm px-4 py-2 text-center hover:bg-yellow-500',

      },
      keyframes:{
         marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' }
      },
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: { carousel: 'marquee 240s linear infinite',}
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
