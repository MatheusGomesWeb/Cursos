const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
};
