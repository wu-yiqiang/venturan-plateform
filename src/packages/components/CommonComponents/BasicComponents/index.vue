<template>
  <section class="BasicComponents">
    <GroupComponents title="基础组件">
      <div class="components">
        <div v-for="(component, index) in basicComponents" :key="index" class="component-item" draggable
          @dragstart="(e) => dragstart(e, component)">
          <div>
            <component :is="component['icon']" />
          </div>
          <span>{{ component.label }}</span>
          
        </div>
      </div>
    </GroupComponents>
  </section>
</template>
<script lang="ts" setup>
import GroupComponents from '../GroupComponents.vue';
import { registerConfig, basicComponents } from '@/utils/editor-config.tsx';  
console.log('sdsdsd', registerConfig)
</script>
<style lang="scss" scoped>
.BasicComponents {
  .components {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    // flex-direction: column;
    gap: 10px;
    // padding: 14px;
    border-radius: 4px;
    .component-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: move;
      user-select: none;
      padding: 10px;
      border-radius: 4px;
      background-color: #f3f3f3;
    }
  }
}
</style>
