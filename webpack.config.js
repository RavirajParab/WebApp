const HTMLWebpackPlugin=require('html-webpack-plugin');
const MiniCSSExtractPlugin=require('mini-css-extract-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {minimize: true}
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCSSExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        }

      ]
    },

    devServer:{
      historyApiFallback:true
    },

    plugins:[
      new HTMLWebpackPlugin({
        template : './src/index.html',
        filename : 'index.html' 
      }),

      new MiniCSSExtractPlugin({
        filename : '[name].css',
        chunkFilename : '[id].css'
      })
    ]
  };
