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
        target: 'web',
        devtool: false,
        entry: 'src/browser.ts',
        output: {
          filename: 'browser/browser.js',
          library: 'HamsterBoxUIKit',
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
