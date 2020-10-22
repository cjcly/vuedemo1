import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/logon.vue"

Vue.use(VueRouter)
    //路由重定向一定要写在下面不然页面会不显示home组件里的内容
const routes = [{
    path: "/login",
    name: "login",
    component: login
        // }, {
        //     path: "/",
        //     component: () =>
        //         import ("../views/mein.vue"),
        //     children: [{
        //         path: "/",
        //         name: "home",
        //         component: () =>
        //             import ("../views/home.vue")
        //     }, {
        //         path: "/",
        //         name: "video",
        //         component: () =>
        //             import ("../views/videoMange.vue")
        //     }, {
        //         path: "/",
        //         name: "user",
        //         component: () =>
        //             import ("../views/userMange.vue")
        //     }, {
        //         path: "/",
        //         name: "page1",
        //         component: () =>
        //             import ("../views/other/pageOne.vue")
        //     }, {
        //         path: "/",
        //         name: "page2",
        //         component: () =>
        //             import ("../views/other/pageTwo.vue")
        //     }]
}]

const router = new VueRouter({
    routes
})

export default router