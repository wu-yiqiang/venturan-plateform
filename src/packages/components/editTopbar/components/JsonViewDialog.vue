<template>
  <el-dialog
    v-model="open"
    title="编辑"
    fullscreen
    :before-close="handleClose"
  >
   <vue-json-pretty
      :data="jsonData"
      :deep="3"
      :show-length="true"
      :show-line="true"
      :highlight-mouseover="true"
    />
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="open = false">Cancel</el-button>
        <el-button type="primary" @click="open = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import jsonData from './jsonData.json';
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
const emit = defineEmits(['update:visible']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})
const open = computed({
    get() {
        return props.visible
    },
    set(val) {
      emit('update:visible', val)
    }
})

const handleClose = () => {
    open.value = false
}
</script>