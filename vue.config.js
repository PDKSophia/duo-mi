module.exports = {
    lintOnSave : false,
    devServer : {
        port : 3750,
        host : 'localhost',
        proxy : {
            '/m_api' : {
                target : 'http://aider.meizu.com/app/weather/',     // 接口域名
                ws : true,
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin : true,        // 是否跨域
            }
        }
    }
}