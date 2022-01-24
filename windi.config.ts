import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    fontFamily: {
      displaylight: ['Montserrat-SemiBold'],
      display: ['Montserrat-Bold'],
      displayfat: ['Montserrat-Black'],
      handwrite: ['McLaren'],
    },
    extend: {
      colors: {
        'gradient-step-one': '#FEE1BF',
        'gradient-step-two': '#FDEEC7',
        'gradient-step-three': '#FEF6CF',
        peach: {
          DEFAULT: '#F26849',
          '50': '#FBD3CA',
          '100': '#FAC7BB',
          '200': '#F8AF9F',
          '300': '#F69782',
          '400': '#F48066',
          '500': '#F26849',
          '600': '#EF4119',
          '700': '#C7300E',
          '800': '#97250B',
          '900': '#681907',
        },
      },
    },
  },
  shortcuts: {
    'frosted-white': `
      bg-warm-gray-50 bg-opacity-70
      backdrop-filter backdrop-blur-sm
      shadow-md`,

    'frosted-yellow': `
      bg-yellow-100 bg-opacity-70
      backdrop-filter backdrop-blur-sm
      shadow-md`,

    'card-border': `
      border border-green-500 border-opacity-50
      rounded-4xl shadow-md`,

    'yellow-click': `
      border border-yellow-300 border-opacity-50 
      bg-gradient-to-br from-yellow-400 to-yellow-500
      shadow-md`,

    'green-click': `
      border border-green-300 border-opacity-50
      bg-gradient-to-br from-green-400 to-green-500
      shadow-md`,

    'disabled-click': `
      border border-warm-gray-300 border-opacity-50
      bg-gradient-to-br from-warm-gray-200 to-warm-gray-300
      shadow-md`,
  },
})
