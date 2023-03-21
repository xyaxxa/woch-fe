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
    </el-tab-pane>
    <el-tab-pane label="VUE" name="second">Config</el-tab-pane>
    <el-tab-pane label="Node" name="third">Role</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('first');


</script>