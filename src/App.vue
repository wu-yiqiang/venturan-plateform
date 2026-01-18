<script setup lang="ts">
import { provide, ref } from 'vue';
import {registerConfig} from './utils/editor-config.tsx';
import data from './components/data.json';
import Editor from './packages/editor.tsx';
const formState = ref(JSON.stringify(data));
provide('config', registerConfig)
</script>

<template>
  <div class="app">
    <Editor v-model:value="formState" />
  </div>
</template>

<style scoped lang="scss">
.app {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}

</style>
