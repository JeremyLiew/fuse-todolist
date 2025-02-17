import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        }
      ]
    }
  },
  build: {
    transpile: ['vue-chartjs', 'chart.js'],
  },
  plugins: [
    {
      src: '~/plugins/vue-chartjs.js',
      mode: 'client',
    }
  ]
})
