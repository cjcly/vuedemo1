import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        currentMenu: null,
        menu: [],
        dynamicTags: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }]
    },
    mutations: {
        //设置菜单
        selectMenu(state, val) {
            if (val.name !== "home") {
                state.currentMenu = val.label;
                let rulse = state.dynamicTags.findIndex(item => item.name === val.name)
                rulse === -1 ? state.dynamicTags.push(val) : ""
            } else {
                state.currentMenu = ""
            }
        },

        // 设置Cookie菜单
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
            console.log(val, 'vuex')
        },
        // 登出Cookie菜单
        clearMenu(state) {
            // 清空Cookie菜单
            state.menu = []
            Cookie.remove('menu')
        },
        // 添加菜单
        addMenu(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            let menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            let currentMenu = [{
                path: '/',
                component: () =>
                    import (`@/views/mein`),
                children: []
            }]
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                            item.component = () =>
                                import (`@/views/${item.url}`)
                            return item
                        })
                        // 添加动态路由
                    currentMenu[0].children.push(...item.children)
                } else {
                    item.component = () =>
                        import (`@/views/${item.url}`)
                    currentMenu[0].children.push(item)
                }
            })
            console.log(currentMenu, 'cur')
            router.addRoutes(currentMenu)
        },

        //关闭标签
        closeTag(state, val) {
            state.dynamicTags.splice(state.dynamicTags.indexOf(item => item.label === val.label), 1);
        },
        //菜单是否收缩
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}