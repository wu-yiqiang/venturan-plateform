<!-- import { computed, defineComponent, inject } from 'vue'
import EditAttrpannel from './components/editAttrPannel/index.tsx'
import EditMaterial from './components/editMaterial/index.vue'
import EditorTop from './components/editTopbar/index.vue'
import EditorBlock from './editor-block'
import './editor.scss'
export default defineComponent({
  props: {
    value: {
      type: Object
    }
  },
  setup(props: any) {
    const data = computed({
      get() {
        return props?.value
      },
      set() {
        // emit('update', value)
      }
    })
    const containerStyles = computed({
      get() {
        return {
          width: props?.value.container.width,
          height: props?.value.container.height
        }
      },
      set() {}
    })
    const config = inject('config')
    return () => (
      <>
        <EditorTop />
        <div class="editor">
          <EditMaterial componentList={config.componentList} v-model="data" />
          <div class="editor-container">
            <div class="editor-container-canvas">
              <div class="editor-container-canvas_content" style={containerStyles.value}>
                {data.value.blocks.map((block: Record<string, any> | undefined) => {
                  return <EditorBlock block={block} />
                })}
              </div>
            </div>
          </div>
          <EditAttrpannel />
        </div>
      </>
    )
  }
}) -->
<template>
    <EditorTop />
    <div class="editor">
      <EditMaterial :componentList="config?.componentList"  v-model="data" />
      <div class="editor-container">
        <div class="editor-container-canvas">
          <div class="editor-container-canvas_content" :style=containerStyles>
            <EditorBlock v-for="(block, index) in data?.blocks" :block="block" :key="index" />
          </div>
        </div>
      </div>
      <EditAttrpannel />
    </div>
</template>
<script lang="ts" setup>
import EditAttrpannel from './components/editAttrPannel/index.tsx'
import EditMaterial from './components/editMaterial/index.vue'
import EditorTop from './components/editTopbar/index.vue'
import EditorBlock from './editor-block'
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
const containerStyles = computed({
  get() {
    return {
      width: props?.value.container.width,
      height: props?.value.container.height
    }
  },
  set() { }
})
const config = inject('config')

</script>
<style lang="scss" scoped>
.editor {
    display: flex;
    justify-content: space-between;
    padding: 14px;
    flex: 1;
    overflow: hidden;
    &-container {
      height: 100%;
      width: inherit;
      box-sizing: border-box;
      overflow: hidden;
      &-canvas {
        overflow: auto;
        overflow-x: hidden;
        height: 100%;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;

        &_content {
          background-color: #fff;
          position: relative;
          border-radius: 4px;
          padding: 14px;
        }
      }
    }
  }
</style>
