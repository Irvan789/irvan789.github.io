import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2026-05-01",
  devtools: { enabled: true },
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
    preset: "github-pages",
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    }
  }
})
