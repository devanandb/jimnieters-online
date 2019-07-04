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
  variants: {},
  plugins: [
    require('glhd-tailwindcss-transitions')(),
  ]
}
