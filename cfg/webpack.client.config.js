const path = require("path");
// const { DefinePlugin } = require("webpack");

const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
const IS_PROD = NODE_ENV === "production";

const GOBAL_CSS_REGEXP = /\.global\.css/;

function setupDevtool() {
  if (IS_DEV) return "eval";
  if (IS_PROD) return false;
}
module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
      "@assets": path.resolve(__dirname, "../src/shared/assets/"),
      "@utils": path.resolve(__dirname, "../src/shared/utils/"),
    },
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: [
    path.resolve(__dirname, "../src/client/index.jsx"),
    "webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr",
  ],
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "/static/",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: GOBAL_CSS_REGEXP,
      },
      {
				test: GOBAL_CSS_REGEXP,
				use: ['style-loader', 'css-loader']
			}, 
      {
				test: /\.svg$/,
				// issuer: /\.[jt]sx?$/,
				use: [ 
					{ 
						loader: 'svg-sprite-loader', 
						options: { outputPath: './src/assets/icons/'}
					}
				]
			},
      {
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				  {
					loader: 'file-loader',
				  },
				],
			},
    ]
  },
  devtool: setupDevtool(),

  plugins: IS_DEV ? [
    new CleanWebpackPlugin(), 
    new HotModuleReplacementPlugin(),
    new SpriteLoaderPlugin({
      plainSprite: true, 
			spriteAttrs: {
				id: 'icons'
		  	}
    })

  ]
    : [],
};
