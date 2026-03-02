<template>
  <EditorTop />
  <div class="editor">
    <EditMaterial :componentList="config?.componentList" v-model="data" />
    <div class="editor-container">
      <div class="editor-container-canvas">
        <div class="editor-container-canvas_content" :style=containerStyles @mousedown="containerMouseDown">
          <EditorBlock v-for="(block, index) in data?.blocks" :block="block" :key="index"
            :class="block?.focus ? 'editor-block-focus' : ''" @mousedown="(e: Event) => blockMousedown(e, block)" />
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
import { useBlockFocus } from './hooks/useBlockFocus.ts'
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
const { blockMousedown,containerMouseDown,focusData } = useBlockFocus(data, (e: Event) => {mousedown(e)})
const config = inject('config')
let dragState = {
  startX: 0,
  startY: 0,
  startPosition: []
}
const mousedown = (e: Event) => {
  dragState = {
    startX: e?.clientX,
    startY: e?.clientY,
    startPosition: focusData.value.focus?.map(({ top, left }) => ({ top, left }))
  }
  document.addEventListener('mousemove', mousemove)
  document.addEventListener('mouseup', mouseup)

}
const mouseup = (e: Event) => {
  document.removeEventListener('mousemove', mousemove)
  document.removeEventListener('mouseup', mouseup)

}
const mousemove = (e: Event) => {
  let { clientX: moveX, clientY: moveY } = e
  let durX = moveX - dragState.startX
  let durY = moveY - dragState.startY
  focusData.value.focus?.forEach((block: any, index: number) => {
    block.top = dragState.startPosition[index].top + durY
    block.left = dragState.startPosition[index].left + durX
  })
}



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

        .editor-block {
          &::after {
            content: '';
            position: absolute;
            inset: 0;
            background-color: #ccc;
            opacity: 0.2;
          }
        }

        .editor-block-focus {
          &::after {
            border-radius: 2px;
            border: 2px dashed red;
          }
        }
      }
    }
  }
}
</style>
