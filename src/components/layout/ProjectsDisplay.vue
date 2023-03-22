<template>
  <el-tabs
    v-model="activeName"
    class="demo-tabs"
  >
    <el-tab-pane name="first">
      <template #label>
        <span>
          <span>ALL</span>
        </span>
      </template>
      <ProjectsBox tag="all"/>
    </el-tab-pane>
    <el-tab-pane label="VUE" name="second">
      <ProjectsBox tag="vue"/>
    </el-tab-pane>
    <el-tab-pane label="Node" name="third">
      <ProjectsBox tag="node"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import ProjectsBox from './projects/ProjectsBox.vue';
import { ref } from 'vue';
const activeName = ref('first');

</script>