<script setup lang="ts">
import MainPage from './components/layout/MainPage.vue';
// 页面首次加载（指mounted）时调用请求接口，获取projects中的内容并修改状态中的projects值
import projectsStore from './store/projects';
import { onMounted } from 'vue';
import RequestApi from './api';
import type { Project } from './public/interface';

onMounted(() => {
  RequestApi.Projects().then((res) => {
    const result:Array<Project> = res.data; 
    projectsStore.update(result);
  }).catch(err => {
    console.log(err);
  })
})

</script>

<template>
  <MainPage />
</template>

<style scoped>

</style>
