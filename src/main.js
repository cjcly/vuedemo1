import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HTTP from "@/api/config";
import "./mock";

// 全局配置
import "@/assets/scss/reset.scss";
import "element-ui/lib/theme-chalk/index.css";

//这是全局引入
import Element from 'element-ui';
Vue.use(Element)

//下面是按需加载
//import element from "./element/index.js";
//Vue.use(element);

Vue.prototype.$http = HTTP;
Vue.config.productionTip = false;

// 添加路由守卫拦截，判断用户登录状态以跳转到对应页面
router.beforeEach((to, from, next) => {
    store.commit("getToken");
    let token = store.state.user.token;
    if (!token && to.name !== "login") {
        next({ name: "login" });
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: (h) => h(App),
    created() {
        store.commit("addMenu", router);
    },
}).$mount("#app");