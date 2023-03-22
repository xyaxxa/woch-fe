<template>
  <div class="project-box" v-if="hasData">
    <template v-for="project in tagProjects">
      <ProjectItem v-bind="project" />
    </template>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from './ProjectItem.vue';
import projectsStore from '../../../store/projects';
import type { Project } from '../../../public/interface';
import { ref, watch } from 'vue';
//创建当前是否有数据的flag，获取到数据后重新渲染
const hasData = ref(false);

// 获取当前tag
const prop = defineProps(['tag']);
let tagProjects:Array<Project>;
watch(projectsStore, (newVal) => {
  // 根据tag渲染不同内容
  if(prop.tag==='all') {
    tagProjects = newVal.data;
  } else {
    tagProjects = newVal.data.filter((item) => item.tags.includes(prop.tag));
  }
  hasData.value = true;
}, {deep: true})
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