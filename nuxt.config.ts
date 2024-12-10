// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  sourcemap: {
    server: true,
    client: true
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-directus',
    'nuxt-lucide-icons'
  ],

  image: {
    //options
  },

  compatibilityDate: '2024-12-10'
})