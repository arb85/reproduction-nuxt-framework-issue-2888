import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // https://github.com/windicss/nuxt-windicss#nuxt-3
    'nuxt-windicss',
  ],
  css: ['@/assets/css/fonts.css'],
})
