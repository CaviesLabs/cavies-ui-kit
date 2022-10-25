let config;

if (process.env.NODE_ENV !== 'production') {
  config = {
    mode: 'development',
    devServer: {
      port: 3000,
    },
  };
} else {
  config = {
    webpack: {
      configure: {
        devtool: false,
        entry: './src/lib.entrypoint.ts',
        output: {
          filename: 'library/lib.entrypoint.js',
          library: '@hamsterbox/ui-kit',
          libraryTarget: 'umd',
          umdNamedDefine: true,
        },
        module: {
          rules: [
            {
              test: /\.(png|jpg|gif|otf)$/i,
              type: 'asset/inline',
            },
          ],
        },
      },
    },
  };
}

export default config;
