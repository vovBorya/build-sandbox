const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env = {}) => {

  const { mode = 'development' } = env

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader: 'style-loader',
      'css-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Hello",
        buildTime: new Date().toISOString(),
        template: "public/index.html"
      })
    ];
    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }

    return plugins;
  }

  return {
    mode: isProd ? 'production': isDev && 'development',
    output: {
      filename: isProd ? "main-[hash:8].js": undefined;
    },
    module :
    {
      rules: [
        /*
        * Loader js
         */
        {
          test: /\.js$/,
          exclude: /node_moduls/,
          loader: 'babel-loader'
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
        * Loader css
         */
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },
        /*
        *Loader scss
        */
        {
          test: /\.(s[ca]ss)$/,
          use: [ ...getStyleLoaders(), "sass-loader"]
        }
      ]
    }
  ,
    plugins: getPlugins(),
    devServer:
    {
      open: true,
      port: 9000
    }
  }
}