<template>
  <section class="editor-top">
    <div class="left-actions">
      <div class="back-box" @click="handleBack">
        <el-button link>
          <el-icon :size="20">
            <Back />
          </el-icon>
        </el-button>
        返回
      </div>
      <div class="fileName">{{ fileName }}</div>
      <el-button link>
        <el-icon :size="20">
          <Edit />
        </el-icon>
      </el-button>
    </div>
    <div class="middle-actions">
      <el-space>
        <el-button :icon="Upload" circle />
        <el-button :icon="CopyDocument" circle />
        <el-button :icon="Back" circle />
        <el-button :icon="RefreshLeft" circle />
        <el-button :icon="View" circle />
      </el-space>
    </div>
    <div class="right-actions">
      <el-button type="primary">保存</el-button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { Back, CopyDocument, Edit, RefreshLeft, Upload, View } from '@element-plus/icons-vue';
import { ref } from 'vue';
const fileName = ref('ssdsdsdsdsdsasaasdasdasdasd萨达萨达收到')
const handleBack = () => { }
</script>
<style lang="scss" scoped>
.editor-top {
  padding: 12px 20px;
  background-color: #fff;
  border-bottom: 1px solid rgb(220, 220, 220);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-actions {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    column-gap: 20px;
    width: 500px;
    .back-box {
      color: rgb(67, 70, 246);
      cursor: pointer;
    }

    .fileName {
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .right-actions {
    display: flex;
    width: 500px;
    justify-content: flex-end;
    align-content: center;
  }
}
</style>
