const path = require('path');
const MergeJsonPlugin = require('merge-jsons-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  plugins: [
    new MergeJsonPlugin({
      output: {
        groupBy: [
          { pattern: './src/i18n/*.json', fileName: './common.json' },
        ],
      },
    }),
  ],
};
