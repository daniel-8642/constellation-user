module.exports={
    publicPath:'./',
    devServer: {
        port: 80,     // 端口号
        open: true,
        proxy:{
            '/api':{
                target:'http://web.juhe.cn/constellation/getAll',
                changeOrigin: true,
                pathRewrite:{'^/api':''},
            },
        }
    }
}