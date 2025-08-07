// const { s } = require('rea.ct-native-size-matters')
// import {s}from 'react-native-size-matters'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          primary: "#000",
          white: "#fff",
          black: "#000",
          lightGray: "#f0f0f0",
          background: "#f6f6f6",
          disabledGray: "#D3D3D3",
          blueGray: "#E6E8EA",
          medGray: "#939393",
          borderColor: "#ccc",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        
        
      },
      
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.kazem': {
          textShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            color: 'blue',
            //  fontSize: s(20)

            
  
        },
      })
    }
  ]
}