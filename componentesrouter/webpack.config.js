var path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
      filename: "main.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    },      
}
