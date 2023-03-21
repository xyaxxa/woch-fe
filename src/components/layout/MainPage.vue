<template>
  <el-container class="main-page">
    <el-header>
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
}
</style>
