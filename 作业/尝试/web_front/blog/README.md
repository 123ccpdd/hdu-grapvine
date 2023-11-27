# 说明

以博客为例，演示了如何用前端开发技术来构建一个在浏览器中运行、单机版的动态网站。

本例重点演示前端模板引擎、Ajax、浏览器API、gulp、bower等前端技术，关于站点html结构、css样式等留给大家在个人项目中进行丰富。

> 运行Web代码均应使用Web服务器方式，即浏览器地址应类似`http://x.com/` 而不是`file:///D:/server/`

> 注意各子目录下另有readme文件，请仔细阅读和配置相应环境

## blog-file
基于磁盘系统的博客，不支持跨系统和分享

## blog-static
基于Web系统的静态网站，不支持动态增删改等

## blog-spa-localstorage
使用前端模板技术，结合浏览器本地存储API实现，支持动态增删改，前端路由、数据持久化的单页应用

## blog-spa-json
将博客内容数据以json文件方式存储，使用json-server作为后端服务器，模拟实现前后端集成的Web应用

## blog-spa-gulp
引入gulp等构建管理工具，实现前端构建的自动化

## blog-spa-gulp-bower
引入bower等包管理工具，实现前端项目管理的自动化

