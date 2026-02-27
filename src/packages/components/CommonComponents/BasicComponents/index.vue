<template>
  <section class="BasicComponents">
    <GroupComponents title="基础组件">
      <div class="components">
        <div v-for="(component, index) in basicComponents" :key="index" class="component-item" :draggable="true"
          @dragstart="(e) => dragstart(e, component)"
          @dragend="dragend"
          >
          <div>
            <component :is="component['icon']" />
          </div>
          <span class="component-label">{{ component.label }}</span>
        </div>
      </div>
    </GroupComponents>
  </section>
</template>
<script lang="ts" setup>
import { useMenuDragger } from '../../../hooks/useMenuDragger';
import GroupComponents from '../GroupComponents.vue';
import { basicComponents } from '@/utils/editor-config.tsx';
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Object
  }
})
const data = computed({
  get() {
    return props?.value
  },
  set(value) {
    emit('update:value', value)
  }
})
const containerRef = ref<Element | null>(null)
const {dragend, dragstart} = useMenuDragger(containerRef, data)
onMounted(() => {
  const contentContainer = document.querySelector('.editor-container-canvas_content')
  containerRef.value = contentContainer
})
</script>
<style lang="scss" scoped>
.BasicComponents {
  .components {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    border-radius: 4px;

    .component-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: move;
      padding: 10px;
      border-radius: 4px;
      background-color: #f3f3f3;
      border: 1px dashed transparent;

      &:hover {
        border: 1px dashed #409EFF;
      }

      .component-label {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
}
</style>
