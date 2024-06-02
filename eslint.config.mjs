import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // Disallow self-closing on HTML void elements
          normal: "always",
          component: "always",
        },
        svg: "never",
        math: "always",
      },
    ],
  },
});
