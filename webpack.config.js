/*
* @Author: CL
* @Date:   2017-10-26 22:21:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-01 19:03:53
*/

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
//html 抽离插件
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
//sass-css 抽离插件

module.exports = {
    entry:{
        main:"./src/main.js",
        vendor:["react","react-dom","es6-promise","whatwg-fetch","jsonp","react-router","axios","redux","react-redux","redux-thunk"]
    }, //入口文件
    output:{
        path:__dirname + "/build", //必须是绝对路径   输出的地址
        filename:"[name]_[chunkHash:3].js" //导出文件名
        // filename:"app_[hash].js"
        // filename:"app_"+Date.now()+".js"
    },
    devServer:{
        contentBase:"./build", //服务器开启目录
        host:"localhost",
        port:8000,
        historyApiFallback:true,  //是否使用H5里HISTORYapi
        proxy:{
            '/beibei_api':{
                target:'https://dsapi.beibei.com',
                changeOrigin: true,
                pathRewrite:{
                    '^/beibei_api':'/'
                }
            }
        }
    },
    plugins:[  //插件配置
        new HtmlWebpackPlugin({  //抽离html
            template:"./src/index.html",
            filename:"index.html"
        }),
        new ExtractTextWebpackPlugin({  //抽离文本
            filename:"[name].css",
            allChunks:true
        }),
        new webpack.optimize.CommonsChunkPlugin({ //单独打包
            name:["vendor","manifest"]
        })
    ],
    module:{
        loaders:[ //编译规则
            {
                test:/\.css$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:/\.scss$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader!sass-loader"
                })
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                 }
            }
        ]
    }
}
