module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "env": './env.jsx',
          "@actions": "./src/actions",
          "@utils": "./src/utils",
          "@components": "./src/components",
          "@assets": "./src/assets",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@store": "./src/store",
        },
      },
    ],
  ],
};
