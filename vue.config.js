module.exports = {
    lintOnSave : false,
    devServer : {
        port : 3750,
        host : 'localhost',
        proxy : {
            '/m_api' : {
                target : 'http://aider.meizu.com/',     // 接口域名
                changeOrigin : true,        // 是否跨域
                pathRewrite : {
                    '^/m_api' : ''
                }
            }
        }
    }
}