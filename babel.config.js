module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./src/assets",
                        "@constants": "./src/constants",
                        "@typings": "./src/typings",
                    },
                },
            ],
        ],
    };
};
