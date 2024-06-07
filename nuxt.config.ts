export default defineNuxtConfig({
    modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", '@nuxtjs/device'],

    devtools: {
        enabled: false,
    },

    css: ['~/assets/css/main.css'],

    apollo: {
        clients: {
            default: {
                httpEndpoint: "https://mock.shop/api",
            },
        },
    },

    // unocss: {
    //     rules: [
    //         [
    //             "grid-layout-main",
    //             {
    //                 "grid-template-rows": "min-content 1fr min-content",
    //             },
    //         ],
    //     ],
    //     safelist: ["overflow-y-scroll"],
    // },

    app: {
        head: {
            title: "GRANITE.",
            link: [
                {
                    rel: "icon",
                    href: "/favicon.ico",
                },
            ],
            meta: [
                {
                    name: "description",
                    content: "GRANITE. is a brand inspired by the outdoors.",
                },
            ],
            htmlAttrs: {
                lang: "en",
            },
            bodyAttrs: {
                class: "overflow-y-scroll",
            },
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    nitro: {
        preset: 'netlify',
    },
});
