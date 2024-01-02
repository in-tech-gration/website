/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'cabinet-grotesk': ['var(--font-cabinet-grotesk)', 'sans-serif'],   
        poppins: ["Poppins", "sans-serif"],
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      
    },
      colors: {
        secondary: "#F4F2ED",
        black: "#000000",
        browserBar: "#F0F0F0",
        certificatePrimary: "#454545",
        certificateSecondary : "#454545"
      },
      backgroundOpacity: {
        '98': '0.98',
       },
       backgroundImage: {
        underline1: "url('/assets/Underline1.svg')",
        underline2: "url('/assets/Underline2.svg')",
        certificateFrame: "url('/assets/certificate-frame.png')",
        // 'my_bg_image' : "url('../public/bg.png')",
        // underline3: "url('./public/assets/Underline3.svg')",
        // underline4: "url('./public/assets/Underline4.svg')",
        // highlight3: "url('./public/assets/Highlight3.svg')",
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
