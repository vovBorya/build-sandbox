module.exports = {
  mode: "development",
  module: {
    rules: [
      /*
      * Loader js
       */
      {
        test: /\.js$/,
        exclude: /node_moduls/,
        use:[
          {
            loader: 'babel-loader'
          }
        ]
      },
      /*
      * Loading images
       */
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'images',
              name: '[name] - [sha1:hash:7].[ext]'
            }
          }
          ]
      },
      /*
      * Loader fonts
       */
      {
        test: /\.(ttf|otf|eot|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      /*
      * Loader css
       */
      {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      /*
      *Loader scss
      */
      {
        test: /\.(s[ca]ss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
}