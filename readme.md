# 企业知识库全栈项目

## 目的
- 完整的将全栈agent项目 流程和工程理一遍

## 需求
一家本土千人规模的大型装修集团公司，其中300人是销售，
企业资料分散在不同系统中(erp系统，公司网站，各部门电脑，纸质文档)，公司内部没有统一知识库。沟通，培训成本高，一个销售新人需要培训两周才能了解公司业务，服务顾客...
1. ai 提效
员工在权限范围内检索资料，完成工作
2. 数据资产
打造企业知识库，打造企业ai大脑

## 原型设计

后台管理系统
ai agent 全栈项目
- 图1
    企业智能知识库登录页 
    - 路由守卫
    <guard>
        <guanli/>
    </guard>
    - 页面布局
    layout 组件
    - ui 组件库
    antd 企业级 后台管理系统打造
    - nestjs login api token
    
## ORM 
Entity(实体) 是 ORM 中映射数据库表的类，类的实例对应表中的一行记录
- @nestjs/config
- @nestjs/typeorm
    useFactory 从环境变量中读取数据库配置
    注册实体类 entities:[UserEntity]


### 项目初始化
- react + ts 前端
组件思维 70%来自组件库 30% 自定义组件
shadcn/ui  用户端
后台管理系统   antd
Ant Design 是一套开箱即用、规范统一的企业级组件库，
他大幅降低后台管理系统的开发成本、统一ui交互，让开发者聚焦业务而非基础界面
pnpm i antd
- 全局样式配置 国际化 
- 路由配置
    - 路由懒加载
    用户系统，要做，每天很多新用户，体验重要
    后台管理系统不用做
- 路由守卫
    - Guard 组件
    - hooks useAuth
    - 配置路由
- 自定义组件 BrandLogo
   SVG 图标 数学图形绘制，不会失真

#### nestjs 后端
- docker-compose.yml
1. psql + vector
关系型数据存储（用户、文档元数据、权限等）和向量存储（embedding）
psql 容器启动 + 初始化
psql 官方镜像约定 容器首次启动时(数据目录为空)， 会自动执行挂载到/docker-entrypoint-initdb.d 目录下的所有.sql/.sh 文件
映射到项目目录 init-scripts/postgresql/init.sql 文件
init.sql 做了三件事
- 建表
- 预制种子数据 seeds
2. mongodb
psql 关系型数据
mongodb 非关系型数据 NOSQL
擅长存储非结构化数据，如 文本、图片、视频等 
psql 关联高频查询，如果原文档(kb/mb 比较大)也放，就会性能不好
文档的元数据放psql，文档内容放mongodb 等到详情页，可以根据id关联查询
init.js 见了文件表