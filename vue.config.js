module.exports = {
  lintOnSave : false,
  baseUrl: './',
  devServer : {
    port: 3750,
    host: 'localhost',
    proxy: {
      '/m_api': {
        target: 'http://aider.meizu.com/',     // 接口域名
        changeOrigin: true,        // 是否跨域
        pathRewrite: {
          '^/m_api' : ''
        }
      },
      '/blog': {
        target: 'http://blog.pengdaokuan.cn:4001/blog',     // 接口域名
          changeOrigin: true,            // 是否跨域
          pathRewrite: {
            '^/blog': ''
          }
        },
        '/wallpaper': {
          target: 'http://service.picasso.adesk.com/v1/vertical',     // 接口域名
          changeOrigin: true,            // 是否跨域
            pathRewrite: {
              '^/wallpaper': ''
            }
          }
        }
    }
}