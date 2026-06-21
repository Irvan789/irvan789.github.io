import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  modules: ["vue-sonner/nuxt", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    strategy: "no_prefix"
  },
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    }
  },
  css: ["~/assets/css/app.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true
    }
  },
  nitro: {
    preset: "bun"
  }
})
