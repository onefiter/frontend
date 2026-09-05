const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                type: "javascript/auto"
            },
            {
                test: /\.less$/,
                use: [ // use中多个loader的使用顺序是从后向前的
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }

                ]
            },
            {
                // 告诉webpack匹配文件
                test: /\.css$/,
                use: [ // use中多个loader的使用顺序是从后向前的
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer"]
                            }
                        }
                    }

                ]
            }
        ]
    }
}