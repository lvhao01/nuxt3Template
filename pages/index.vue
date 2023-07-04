<template>
  <Title>首页</Title>
  <p>我是index页面</p>

  <el-button @click="ElMessage('hello')">按钮</el-button>
  <ElButton :icon="ElIconEditPen" type="success">驼峰</ElButton>
  <LazyElButton type="warning">懒加载按钮</LazyElButton>

  <el-icon><Minus /></el-icon>
  <el-steps :space="200" :active="1" finish-status="success">
    <el-step title="Done" />
    <el-step title="Processing" />
    <el-step title="Step 3" />
  </el-steps>

  <div class="a">
    <span class="b">13221312</span>
  </div>

</template>

<script setup>

</script>

<style lang="less">
.a{
  width: 750px;
  height: 50px;
  background-color: pink;
  .b{
    background-color: yellow;
  }
}
</style>