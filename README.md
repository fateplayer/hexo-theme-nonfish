# hexo theme nonfish

![预览图](https://github.com/fateplayer/hexo-theme-nonfish/blob/master/source/img/screencapture3.png "预览图")
## 主题介绍
+ 响应式
+ 独立的分类、标签、归档页面
+ 文章归档、带缩略图的分类归档、标签云
+ 代码高亮
+ 更多...

## 依赖插件
+ hexo-front-matter-excerpt
+ hexo-generator-archive
+ hexo-generator-category
+ hexo-generator-feed
+ hexo-generator-tag
+ hexo-renderer-less

## 安装

### 安装主题
```
git clone https://github.com/fateplayer/hexo-theme-nonfish.git themes/nonfish
```
### 安装插件
```
npm install hexo-front-matter-excerpt --save
...
```
### 开启
修改 `_config.yml` 主题设置为`nonfish`
### 更新
```
cd themes/nonfish
git pull
```
### 评论
评论支持disqus、网易云和畅言跟帖，在项目根目录的_config.yml配置即可
```
disqus: false
disqus_shortname: ***
gentie: false
gentie_productKey: ***
changyan: true
changyan_appid: ***
changyan_conf: ***
```
### 支持代码高亮
请使用官方语法
### 分类缩略图设置
修改main.less文件，找到`generate-columns(6)`,6为你的分类数，有几个分类就把n设置为几，然后按照你的分类输出顺序设置缩略图，图片命名为1.jpg,2.jpg 类推。

感谢支持!
### LICENSE
[MIT](https://github.com/fateplayer/hexo-theme-nonfish/blob/master/LICENSE)
