# 多米 (DuApp V2版本)

> 之前版本代码比较复杂和vuex的使用比较简单，这里对之前的v1版本废弃，使用此v2版本

> 后台接口是我用TP5写的，此处仍用v1版本的接口，适当会修改

## 技术栈
+ Vue-cli
+ Vuex
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

## 部分需求讲解

#### 1 . 从详情页返回到列表页，回到原位置
```javascript
    1 . 在 route / index.js 中定义mode为history
    
    2 . 给首页meta一个keepAlive属性进行缓存

    3 . 在展示商品的组件中，定义 scrollTop ，用户回到原位置，具体看代码

    4 . 注意，这里如果不设置keepAlive缓存可能会导致无法回到原位置，因为数据是进来加载更多，所以每次回到列表页会执行获取数据一次，所以可能会导致无法回到原位置
```

#### 2 . 加载更多
```javascript
    1 . 由于waterfall组件是基础组件，多页面import引入使用

    2 . vuex定义一个TypeCate用于区分当前选中的分类，props传入数据给waterfall

    3 . 加载更多时，根据vuex 中的TypeCate 请求对应种类的数据，并把数据存到vuex，保证数据的及时更新和有效
```

#### 3 . 多图上传
```javascript
    1 . formdata通过getAll('') 来查看某一属性， 比如formdata.getAll('title')
```
### 使用
```javascript
 1 : git clone          // 克隆项目

 2 : cd duo-mi          // 进入目录

 3 : npm install        // 安装依赖

 4 : npm run serve      // 启动

 [ 注意 ] ：端口修改在vue.config.js中，这里的端口号是3750
```
