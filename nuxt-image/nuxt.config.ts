export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Image Example",
    },
  },
  modules: ["@nuxt/image"],
  image: {
    providers: {
      myProvider: {
        name: "baseProvider",
        provider: "~/providers/baseProvider.ts",
        options: {
          baseURL: "https://apismartd.sosgroup.uz",
        },
      },
    },
  },
});
