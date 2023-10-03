/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1150px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors:{
        "primary":"#171420",
        "secondary":"#1f1d2c",
        "light-purple":"#9694e7",
        "purple":"#5f65f4",
        "blue":"#2a4af4",
        "orange":"#df8600"
      },
      width:{
        "card":"320px"
      }
    },
  },
  plugins: [],
}

