<template>
  <el-container class="main-page">
    <el-header height="60px">
      <MainHeader />
    </el-header>
    <el-main>
      <MainMain />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import MainHeader from './MainHeader.vue';
  import MainMain from './MainMain.vue';
</script>

<style scoped>
.el-main {
  display: flex;
  padding: 0;
}
.el-header {
  box-shadow: -5px 0 10px #eeeeee;
}
@media screen and (max-width: 768px) {
  .el-header {
    height: 120px;
  }
}
</style>
