module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Barlow', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['"Shadows Into Light"', 'Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'content': ['"PT Serif"', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [
    require('glhd-tailwindcss-transitions')(),
    require('tailwindcss-dark-mode')()
  ]
}
