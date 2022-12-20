// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
    googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
  },
});
