module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module:react-native-dotenv",
                {
                    moduleName: "@env",
                    verbose: false,
                    path: ".env",
                },
            ],
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./src/assets",
                        "@constants": "./src/constants",
                        "@typings": "./src/typings",
                        "@screens": "./src/screens",
                        "@routes": "./src/routes",
                        "@components": "./src/components",
                        "@libs": "./src/libs",
                        "@services": "./src/services",
                        "@contexts": "./src/contexts",
                    },
                },
            ],
        ],
    };
};
