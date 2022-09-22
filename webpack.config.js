const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
		assetModuleFilename: "assets/images/[hash][ext][query]",
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@styles": path.resolve(__dirname, "src/styles/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@images": path.resolve(__dirname, "src/assets/images/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "assets/[name].css",
		}),
		/* new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets/images"),
					to: "assets/images",
				},
			],
		}), */
		new CleanWebpackPlugin(),
	],
	devServer: {
		historyApiFallback: true,
		allowedHosts: path.join(__dirname, "dist"),
		compress: true,
		port: 8080,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
