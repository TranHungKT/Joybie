module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@modules': './src/modules',
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};