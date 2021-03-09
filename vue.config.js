require = require('esm')(module);

module.exports = {
    pluginOptions: {
        sitemap: {
            urls: [
                'https://subjective-speech.web.app',
                'https://subjective-speech.web.app/feed',
                'https://subjective-speech.web.app/trending',
                'https://subjective-speech.web.app/discover'
            ]
        }
    },
    pwa: {
        name: "Subjective Speech",
        themeColor: "#141414",
        msTileColor: "#141414",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",
        assetsVersion: "1.2",
        iconPaths: {
        favicon32: "img/icons/favicon-32x32.png",
        favicon16: "img/icons/favicon-16x16.png",
        appleTouchIcon: "img/icons/apple-touch-icon.png",
        maskIcon: "img/icons/safari-pinned-tab.svg",
        msTileImage: "img/icons/mstile-144x144.png",
        },
        manifestOptions: {
        icons: [
        {
        src: "./img/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        },
        {
        src: "./img/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        },
        {
        src: "./img/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        },
        {
        src: "./img/icons/mstile-144x144.png",
        sizes: "144x144",
        type: "image/png",
        },
        {
        src: "./img/icons/mstile-150x150.png",
        sizes: "150x150",
        type: "image/png",
        },
        ],
        },
} 

}