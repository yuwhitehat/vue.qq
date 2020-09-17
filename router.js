// 0. 使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. 定义 (路由) 组件

// 2. 定义路由
const routes = [];

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
});

// 4. 在 main.js 中创建和挂载根实例
