var webpack = require('webpack');
var path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:__dirname+'/client/r_routes/index',
    output:{
        path:path.join(__dirname+'/client/dist'),
        filename:'bundle.js',
    },

    module:{
        loaders:[{
            test:/(\.jsx|\.js)$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            options:{
                presets:[
                    "env","react"
                ]
            }
        },
        {
            test : /\.css$/,
            loader:'style-loader!css-loader'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'// limit 字段代表图片打包限制
　　　　 }
    ]
    },
    plugins: [
        //根据index.html作为模板,打包的时候自动生成html并引入打包的js文件
        new HtmlWebpackPlugin({
            template: __dirname + "/client/views/index.html"
        }),

        //引入全局webpack
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ],
}