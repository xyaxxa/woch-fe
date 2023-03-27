<template>
  <div>
    <el-row class="header-box">
      <el-col :span="8"><div class="center-box title-box">XYAXX</div></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="8">
        <el-row class="header-box">
          <el-col :span="6"><div class="center-box option-box"><a target="_blank">github</a></div></el-col>
          <el-col :span="6"><div class="center-box option-box"><a target="_blank">知乎</a></div></el-col>
          <el-col :span="6"><div class="center-box option-box">blog</div></el-col>
          <el-col :span="6"><div class="center-box option-box">管理</div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

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
</style>