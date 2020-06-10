# 朵蜜 💖

![](https://img.shields.io/badge/Author-PDK-blue.svg)
![](https://img.shields.io/badge/license-MIT-yellowgreen.svg)
![](https://img.shields.io/badge/Vue-2.x-yellowgreen.svg)

> 📢 之前版本代码比较复杂和vuex的使用比较简单，这里对之前的 v1 版本废弃，使用此 v2 版本

## 技术栈
+ vue-cli
+ vuex
+ vant
+ axios
+ vue-router
+ scss
+ ...
+ ...

## 目标功能
- [x] 热门电影排行
- [x] 音乐播放
- [x] 查询天气
- [x] 打卡签到，获得积分
- [x] 博客文章
- [x] 脑筋急转弯答题
- [x] 壁纸图片
- [x] 日历行程

## 其他功能实现
- [x] 懒加载
- [x] 获取天气
- [x] 音乐播放
- [x] 新增行程
- [x] 博客接入

## 项目环境

> Node版本v10.0以上

## V1 版本移步

v1 low B 版本就看这里 [DuApp](https://github.com/PDKSophia/DuApp)

## V2 版本说明

```javascript
    1 : 采用 vue-cli 3.0 初始化项目
    
    2 : 采用css扩展语言scss

    3 : 抛弃v1版本采用ydui的框架，v2版本采用Vant UI框架

    4 : 抽离api接口，对vuex模块化管理
```

## 使用

```javascript
 1 : git clone          // 克隆项目

 2 : cd duo-mi          // 进入目录

 3 : npm install        // 安装依赖

 4 : npm run serve      // 启动

 [ 注意 ] ：端口修改在vue.config.js中，这里的端口号是3750
```

## 其他说明

```javascript 
    ⛅「 天气说明 」 
    1 : 城市默认为北京，由于我并未做获取GPS并且转换成城市，api获取天气需传cityId，而接口中的cityId有300多条，所以这边想获取某城市天气需要自己搜索切换查询 ～

    2 : 直接请求时候，遇到跨域问题，这里采用 vue-cli proxy 解决跨域

    🌐「 壁纸说明 」
    1 : 壁纸调用的是安卓壁纸接口，目前还不支持下载壁纸

    「 博客说明 」
    1 : 调用的是我自己的博客，但是由于博主的博客是用hexo在自己服务器搭的，是markdown形式，并且请求的是首页，返回的是html一个页面，所以这里的数据自己手写(因为也没多少篇)，后期应该得想个办法解决这个问题

    📅「 日历说明 」
    1 : 由于一进入就给当日一个class = 'online'， 但是每个月的当日都会存在着此class，于是这边只排除了每个月会出现的这个问题，每年的问题还是没有解决，也就是2017年的8月7日会和2018年8月7日一样，属于class = 'online' 状态

    2 : 新建一个行程，应该随机给个class，并且需要在本月的日历中显示出来

    📚「 阅读文章详情说明 」 
    1 : 使用了v-html绑定父文本生成的HTML内容，但是发现CSS样式根本不生效，选择器没起作用，也就是说定义的css居然无效。由于scoped属性导致css仅对当前组件生效（用css3的属性选择器+生成的随机属性实现的），而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css。这时候只要把 scoped 这属性去除就好

    🎵「 音乐播放说明 」
    注意 : 由于有些歌曲无版权或404找不到播放地址，所以可能会播放失败，并且可能因为网速的问题，请求获取播放的地址有些慢

    1 : 播放时  ->  封面旋转  ->  播放歌曲  ->  隐藏播放icon，显示暂停icon 

    2 : 暂停时  ->  封面暂停旋转  ->  停止播放  ->  隐藏暂停icon，显示播放icon

    3 : 播放期间，进入其他专区，仍然照常播放音乐，并且重进 “音乐专区” ， 应处于 “ 播放时 ” 状态 

    4 : 由于每次进入“ 音乐专区 ” ，获取的20首歌曲都是随机，于是这就出现，可能我播放了 a.mp3后，返回重进专区，这时候随机获取的20首歌曲，并没有这首歌，此时解决方案为 ： 播放同位置的那首歌曲

    5 : 当播放 a.mp3 时，切换到 b.mp3 ，应该 a.mp3 的封面不旋转，并且显示播放icon，而 b.mp3 的封面旋转，显示暂停icon
```

## 部分图片展示

<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_2.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_5.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_7.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_15.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_8.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_19.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_11.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_12.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_14.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_3.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_16.png" height=500>
<img src="https://github.com/PDKSophia/duo-mi/raw/master/image/d_17.png" height=500>

### 更新阶段 (由于还要上班以及其他事情，所以重构进度稍微有点慢)

+ 2018.7.20 初始化项目，开始重构，安装各依赖，搭好架构

+ 2018.7.21 对比各UI框架，看之前v1版本代码，凭自己审美设计APP设计图，新增全局tool.js以及api的抽离

+ 2018.7.22 新增icon图标，新增首页以及书影音入口页

+ 2018.7.23 新增电影列表页、电影详情页、电影更多页，api请求处理，vuex数据模块化，根据得分计算star值

+ 2018.7.24 新增个人页面和音乐界面

+ 2018.7.25 新增天气页面，获取各地区天气数据

+ 2018.7.26 新增游戏页面，相册专辑页面

+ 2018.7.27 - 2018.8.1 准备某一家公司的面试以及博客的搭建和写文章 

+ 2018.8.2 - 2018.8.5 二面依图，面试准备及复盘

+ 2018.8.6 重改电影详情页的样式，新增壁纸页面，新增商城页面以及商品详情页

+ 2018.8.7 完成音乐播放功能 、 实现多米日历

+ 2018.8.8 完成个人博客页面，以及联系阿宽页面

+ 2018.8.9 获取每日one列表，完成阅读界面

-----

## 其他信息

某些后台接口是我用TP5写的，此处仍用v1版本的接口，适当会修改

API接口是在github上找的，包括网易云的API也是在github上找的

免费开源使用。

版权所有Copyright © 2018 by PDK 

All rights reserved。
 
## 相关链接

博客 : https://github.com/PDKSophia/blog.io

掘金 : https://juejin.im/user/594ca8a35188250d892f4139
