module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@domain': './src/domain',
          '@routes': './src/routes',
          '@screen': './src/screen',
          '@utility': './src/utility',
          '@src': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
