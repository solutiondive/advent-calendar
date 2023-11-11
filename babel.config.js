module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '~': './src',
            '@route': './src/route',
            '@components': './src/components',
            '@asset': './src/asset',
            '@screen': './src/screen',
            '@shared': './src/shared',
          },
        },
      ],
    ],
  };
};
