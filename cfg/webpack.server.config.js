const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV;

const GLOBAL_STYLE_REGEXP = /\.global\.(sa|sc|c)ss/;


module.exports = {
  target:'node',
  mode: NODE_ENV ? NODE_ENV :'development',
  entry:path.resolve(__dirname, '../src/server/server.js'),
  output:{
    path:path.resolve(__dirname, '../dist/server'),
    filename:'server.js'
  },
  resolve:{
    extensions:[
      '.js', '.jsx', '.ts', '.tsx', '.json'
    ],
    alias: {
      "@assets": path.resolve(__dirname, "../src/shared/assets/"),
      "@utils": path.resolve(__dirname, "../src/shared/utils/"),
    },
  },
  externals:[nodeExternals()],
  module:{
    rules:[{
      test:/\.[tj]sx?$/,
      use:['ts-loader']
    },
    {
      test:/\.css$/,
      use:[ 
        {
          loader:'css-loader',
          options:{
            modules:{
              mode:'local',
              localIdentName:'[name]__[local]--[hash:base64:5]',
            },
            onlyLocals:true
          }
        
        },
      ],
      exclude: GLOBAL_STYLE_REGEXP
    },
    {
      test: GLOBAL_STYLE_REGEXP,
      use: ['css-loader']
    },
    {
      test: /\.svg$/,
      // type: 'asset/inline',
      use: [ {
        loader: 'svg-sprite-loader',
        // options: { outputPath: path.resolve(__dirname, '../src/assets/icons')}
      
      }]

    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
        loader: 'file-loader',
        },
      ],
    },
  ]},
  optimization: {
    minimize: false
  }
}