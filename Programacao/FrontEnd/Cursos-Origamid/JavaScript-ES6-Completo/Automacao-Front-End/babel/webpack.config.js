const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './bundle.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
};