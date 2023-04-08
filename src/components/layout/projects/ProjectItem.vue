<template>
  <el-card class="project-item">
    <template #header>
      <a :href="project.url" target="blank">
        <span class="project-name">{{ project.name }}</span>
      </a>
    </template>
    <span class="project-description">{{ project.description }}</span>
  </el-card>
</template>

<script setup lang="ts">
// 定义Project类型接口
interface Project {
  name: string,
  description: string,
  url: string,
  tags: string[],
}
const project = defineProps<Project>();
</script>

<style scoped>
.project-item {
  width: 300px;
  min-height: 100px; 
  margin: 20px 40px;
}
.project-name {
  font-size: large;
  font-weight: bold;
}
a {
  color: black;
}
@media screen and (max-width: 768px) {
  .project-item {
    min-width: 70vw;
  }
}
</style>