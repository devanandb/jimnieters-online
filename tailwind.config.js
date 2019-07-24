module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Roboto', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['"Shadows Into Light"', 'Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'content': ['"PT Serif"', 'sans-serif'],
      'title': ['Lato', 'Roboto', 'sans-serif'],
    },
    extend: {}
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'group-hover'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'group-hover']
  },
  plugins: [
    require('glhd-tailwindcss-transitions')(),
    require('tailwindcss-dark-mode')()
  ]
}
