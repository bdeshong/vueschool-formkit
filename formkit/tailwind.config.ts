const formKitTailwind = require("@formkit/themes/tailwindcss");

export default {
    content: ["./src/**/*.{html,vue,js}", "./formkit.config.ts"],
    plugins: [formKitTailwind],
}