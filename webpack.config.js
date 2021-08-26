const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      //path: path.resolve(__dirname, 'dist'),
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
};