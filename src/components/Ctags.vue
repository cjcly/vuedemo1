<template>
  <div class="tag">
    <el-tag
      :key="tag.label"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="topath(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ctags",
  components: {},
  props: {},
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
    };
  },
  watch: {},
  computed: {
    ...mapState({
      tags: (state) => state.tab.dynamicTags,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
      select: "selectMenu",
    }),
    handleClose(tag) {
      this.close(tag);
    },
    topath(tag) {
      this.select(tag);
      if (this.$router.history.current.name !== tag.name) {
        this.$router.push({ name: tag.name });
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.el-tag {
  margin: -6px 0 6px 10px;
  cursor: pointer;
}
</style>
