<template>
  <el-container style="height:100%">
    <!-- width="auto"，这里宽度不设置固定值是为了以后Aside变宽变窄后动画更流畅 防止出现空白-->
    <el-aside width="auto">
      <Caside></Caside>
    </el-aside>
    <el-container>
      <el-header><Cheader /></el-header>
      <el-main>
        <Ctags></Ctags>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Caside from "../components/Caside";
import Cheader from "../components/Cheader";
import Ctags from "../components/Ctags";
export default {
  name: "mein",
  components: {
    Caside,
    Cheader,
    Ctags,
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #333;
}
</style>
