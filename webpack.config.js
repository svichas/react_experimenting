
const path = require("path"),
      htmlWebpack = require("html-webpack-plugin");

module.exports = {
     entry: "./src/index.js",
     output: {
          path: path.join(__dirname, '/dist'),
          filename: "build.js"
     },
     module: {
          rules: [
               {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                         loader: 'babel-loader'
                    }
               }
          ]
     },
     plugins: [
          new htmlWebpack({
               template: __dirname + '/src/templates/index.html'
          })
     ]
}
