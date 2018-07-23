# 多米 (DuApp V2版本)

> 之前版本代码比较复杂和vuex的使用比较简单，这里对之前的v1版本废弃，使用此v2版本

## 技术栈
+ Vue-cli
+ Vuex
+ Vant
+ Axios
+ Vue-router
+ SCSS 
+ ...
+ ...

## 目标功能
- [ ] 热门电影排行
- [ ] 音乐播放
- [ ] 查询天气
- [ ] 打卡签到，获得积分
- [ ] 博客文章
- [ ] 脑筋急转弯答题
- [ ] 动态分享

## 部分功能实现
- [ ] 懒加载
- [ ] 详情页回列表滚动至原位置
- [ ] 多图上传 + 实时预览 + 删除
- [ ] 加载更多

## 项目环境
> Node版本v10.0以上

## 部分图片展示
![image](https://github.com/PDKSophia/duo-mi/raw/master/image/d_1.png)
![image](https://github.com/PDKSophia/duo-mi/raw/master/image/d_2.png)
![image](https://github.com/PDKSophia/duo-mi/raw/master/image/d_3.png)
![image](https://github.com/PDKSophia/duo-mi/raw/master/image/d_4.png)

## V1 版本移步
https://github.com/PDKSophia/DuApp

## V1 版本演示
http://www.pengdaokuan.cn/DuApp

## V2 版本说明
```javascript
    1 : 采用 vue-cli 3.0 初始化项目
    
    2 : 采用css扩展语言scss

    3 : 抛弃v1版本采用ydui的框架，v2版本采用Vant UI框架

    4 : 抽离API接口，对VUEX模块化管理

```
### 使用
```javascript
 1 : git clone          // 克隆项目

 2 : cd duo-mi          // 进入目录

 3 : npm install        // 安装依赖

 4 : npm run serve      // 启动

 [ 注意 ] ：端口修改在vue.config.js中，这里的端口号是3750
```
### 阶段性 (由于还要上班以及其他事情，所以重构进度稍微有点慢)
+ 7.20 初始化项目，开始重构，安装各依赖，搭好架构

+ 7.21 对比各UI框架，看之前v1版本代码，凭自己审美设计APP设计图，新增全局tool.js以及api的抽离

+ 7.22 新增icon图标，新增首页以及书影音入口页

+ 7.23 新增电影列表页以及电影详情页，api请求处理，vuex数据模块化，根据得分计算star值

## 其他信息

后台接口是我用TP5写的，此处仍用v1版本的接口，适当会修改

API接口是在github上找的，包括QQ音乐的API也是在github上找的

免费开源使用。

版权所有Copyright © 2018 by PDK (http://www.pengdaokuan.cn)

All rights reserved。
