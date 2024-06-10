module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          '@ui': ['./src/ui'],
          '@theme': ['./src/ui/theme/index.ts'],
          '@components': ['./src/ui/components/index.ts'],
          '@icons': ['./assets/images/icons'],
        },
      },
    ],
  ],
};
