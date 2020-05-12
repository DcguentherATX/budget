module.exports = {
    target: 'node',
    entry: __dirname + "/src",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
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
    }
  };