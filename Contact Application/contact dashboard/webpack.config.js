const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "./src/public/main.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        hot: true,
    },
    module: {
        rules: [{
            test: /\.css?$/, use: ["style-loader", "css-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({

            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ]
}