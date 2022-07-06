const path = require('path');

module.exports = {
  target: 'node',
  mode:'production',
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve('./demo-loader.js'),
          },
        ],
      },
    ],
  },
};