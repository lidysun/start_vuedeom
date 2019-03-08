var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    plugins:[new VueLoaderPlugin()],
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{

                    }
                }
            },{
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },{
                test:/\.(png|jpg|gif|svg)$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]?[hash]'
                }
            },{
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    devServer:{
        contentBase: path.join(__dirname),
        historyApiFallback:true,
        noInfo:true,
        inline:true
    },
    performance:{
        hints:false
    },
    devtool:'#eval-source-map'
}

if(process.env.NODE_ENV === 'production'){
    module.exports.devtool = '#source-map'

    module.exports.plugins = (module.exports.plugins || []).concact([
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:'"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            compress:{
                warnings:false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize:true
        })
    ])
}