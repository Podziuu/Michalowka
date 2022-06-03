module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto'
      },
      backgroundImage: {
        'imageSlide1': "url('/src/assets/foto-miachalowka001.jpg')"
      },
      animation: {
        'backgroundImages': 'backgroundImages 25s ease-in-out 0s infinite alternate-reverse forwards running'
      },
      keyframes: {
        backgroundImages: {
          '0%': {backgroundImage: "url('/src/assets/foto-miachalowka001.jpg')"},
          '20%': {backgroundImage: "url('/src/assets/foto-miachalowka002.jpg')"},
          '40%': {backgroundImage: "url('/src/assets/foto-miachalowka003.jpg')"},
          '60%': {backgroundImage: "url('/src/assets/foto-miachalowka004.jpg')"},
          '80%': {backgroundImage: "url('/src/assets/foto-miachalowka006.jpg')"},
          '100%': {backgroundImage: "url('/src/assets/foto-miachalowka007.jpg')"},
        }
      }
    },
  },
  plugins: [],
}
