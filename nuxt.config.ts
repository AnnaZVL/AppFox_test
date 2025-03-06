// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Test_AppFox', 
      htmlAttrs: {
        lang: 'ru',
      },      
    }
  },
  css: ['/assets/scss/main.scss'],
  vite: {
    css: {      
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  modules: ['@pinia/nuxt'],
})
