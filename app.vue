<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 注册图标
const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
