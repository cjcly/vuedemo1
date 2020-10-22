<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini" circle plain @click="changeCollapse">
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }" v-show="current">{{current}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" :src="url" alt="用户" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" @click="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from  "vuex"
export default {
  name: "cheader",
  components: {},
  props: {},
  data() {
    return {
      url: require("../assets/images/user.png"),
    };
  },
  watch: {},
  computed: {
    ...mapState({
      current:state=>state.tab.currentMenu
    })
  },
  methods: {
    changeCollapse(){
      this.$store.commit("changeCollapse")
    },
    logOut() {
      // 置空token
      this.$store.commit('clearToken')
      // 清除菜单
      this.$store.commit('clearMenu')
      // 刷新浏览器
      location.reload()
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      height: 40px;
      background-size: 100%;
      border-radius: 50%;
    }
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #fff ;
    opacity: .5;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color:#fff ;
      opacity: 1;
    }
  }
}
</style>
