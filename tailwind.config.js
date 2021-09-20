module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nativeCamp: {
          header: {
            bg: "#112844",
            signup: '#F1890E',
            signupHov: '#ffa436',
            login: "#03c9a9",
            loginHov: "#22d6b8",
          },
        }
      },
      height: {
        logo: "30px",
        header: "83px"
      },
      fontSize: {
        headerLogo: ['2.0px', '1.2rem'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}
