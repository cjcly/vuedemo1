<template>
  <!-- default-active绑定的是el-menu-item里面的index的值 -->
  <el-menu
    default-active="/home"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#409EFF"
    :collapse="collapse"
  >
    <h3>后台管理系统</h3>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="topath(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      index="index"
      v-for="(item, index) in hasChildren"
      :key="item.path"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subitem.path"
          v-for="subitem in item.children"
          :key="subitem.path"
          @click="topath(subitem)"
        >
          <i :class="`el-icon-${subitem.icon}`"></i>
          <span>{{ subitem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Caside",
  components: {},
  props: {},
  data() {
    return {
      asideMenu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/video",
          name: "video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
        },
        {
          // 二级菜单中一级菜单无需跳转，故可省略path
          label: "其他管理",
          icon: "user",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
  watch: {},
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children);
    },
    collapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    topath(item) {
      //console.log(this.$router.history.current.name)
      //防止点击重复的路由导致报错信息
      if (this.$router.history.current.name !== item.name) {
        this.$router.push({ name: item.name });
        this.$store.commit("selectMenu", item);
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
// 给.el-menu-vertical-demo这个元素里面除了.el-menu--collapse元素外设置样式，:not用法
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
