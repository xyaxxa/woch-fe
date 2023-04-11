<template>
  <div>
    <el-row class="header-box">
      <el-col :span="8" :xs="24"><div class="center-box title-box">XYAXX</div></el-col>
      <el-col :span="8" :xs="0"></el-col>
      <el-col :span="8" :xs="24">
        <el-row class="header-box">
          <el-col :span="6"><div class="center-box option-box"><a target="_blank">github</a></div></el-col>
          <el-col :span="6"><div class="center-box option-box"><a target="_blank">知乎</a></div></el-col>
          <el-col :span="6"><div class="center-box option-box">blog</div></el-col>
          <el-col :span="6"><div class="center-box option-box" @click="verifyDialogVisible=true">管理</div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
  <el-dialog
    v-model="verifyDialogVisible"
    title="验证身份"
    width="40%"
    class="verify-dialoge">
    <el-form :model="verifyForm" :inline="true">
      <el-form-item label="密码" required>
        <el-input v-model="verifyForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="verifyIdentity">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog
    v-model="manageDialogVisible"
    title="管理"
    width="40%"
    class="manage-dialoge">
    <el-button @click="manageDialogVisible=false;addProjectDialogVisible=true">增加项目</el-button>
  </el-dialog>
  <el-dialog
    v-model="addProjectDialogVisible"
    title="增加项目"
    width="40%">
    <el-form :model="addProjectForm" label-width="60px">
      <el-form-item label="名称" required>
        <el-input v-model="addProjectForm.name"></el-input>
      </el-form-item>
      <el-form-item label="介绍" required>
        <el-input v-model="addProjectForm.description"></el-input>
      </el-form-item>
      <el-form-item label="链接" required>
        <el-input v-model="addProjectForm.url"></el-input>
      </el-form-item>
      <el-form-item label="标签" required>
        <el-checkbox-group v-model="addProjectForm.tags">
          <el-checkbox label="vue" />
          <el-checkbox label="node" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="addProject" width="100">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import RequestApi from '../../api';
import { ElMessage } from 'element-plus';
import type { Project } from '../../public/interface';

// 控制对话框的显示
let manageDialogVisible = ref(false);
let verifyDialogVisible = ref(false);
let addProjectDialogVisible = ref(false);

// 校验身份
const verifyForm = reactive({
  password: '',
});
const verifyIdentity = function() {
  RequestApi.Verify(verifyForm.password).then((res) => {
    if(res.data.success) {
      verifyDialogVisible.value = false;
      manageDialogVisible.value = true;
    }
    else {
      ElMessage({
        message: '校验失败!',
        type: 'error',
      })
    }
  }).catch((err) => {
    console.log(err);
  })
}

// 增加项目
const addProjectForm:Project = reactive({
  name: '',
  description: '',
  url: '',
  tags: [],
});
const addProject = function() {
  RequestApi.addProject(addProjectForm).then((res) => {
    if(res.data.success) {
      ElMessage({
        message: '成功添加!请刷新页面查看',
        type: 'success',
      })
    } else {
      ElMessage({
        message: '添加失败!',
        type: 'error',
      })
    }
  }).catch((err) => {
    console.log(err);
  })
}
</script>

<style scoped>
.header-box {
  height: 60px;
}
.center-box {
  line-height: 60px;
}
.title-box {
  font-size: larger;
}
.option-box {
  font-size: medium;
}
a {
  color: black;
}
@media screen and (max-width: 768px) {
  .header-box {
    height: 120px;
  }
}
</style>