<template>
  <div class="project-box">
    <template v-for="project in tagProjects">
      <ProjectItem v-bind="project" />
    </template>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from './ProjectItem.vue';
import projects from '../../../store/projects';
import type { Project } from '../../../public/interface';
// 获取当前tag
const prop = defineProps(['tag']);
let tagProjects:Array<Project>;
if(prop.tag==='all') {
  tagProjects = projects;
} else {
  tagProjects = projects.filter((item) => item.tags.includes(prop.tag));
}
</script>

<style scoped>
.project-box {
  display: flex;

}
@media screen and (max-width: 600px) {
  .project-box {
    flex-wrap: wrap;
  }
}
</style>