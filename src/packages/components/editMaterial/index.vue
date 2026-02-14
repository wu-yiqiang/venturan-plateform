<script setup lang="ts">
import { Film, TrendCharts } from '@element-plus/icons-vue';
import CommonComponents from '@/packages/components/CommonComponents/index.vue'
import CustomComponents from '@/packages/components/CustomComponents/index.vue'
import { provide, ref } from 'vue';
// import { registerConfig } from './utils/editor-config.tsx';
// import data from './components/data.json';
// import Editor from './packages/editor.tsx';
// const formState = ref(data);
enum ComponentType {
    Common = 'Common',
    Custom = 'Custom'
}
const type = ref(ComponentType.Common)
// provide('config', registerConfig)
</script>

<template>
    <section class="editMaterial">
        <div class="editCategory">
            <el-radio-group v-model="type" size="large">
                <el-radio-button :value="ComponentType.Common">
                    <el-tooltip effect="light" content="通用组件" placement="top">
                        <el-icon :size="16">
                            <Film />
                        </el-icon>
                    </el-tooltip>
                </el-radio-button>
                <el-radio-button :value="ComponentType.Custom">
                     <el-tooltip effect="light" content="定制组件" placement="top">
                        <el-icon :size="16">
                            <TrendCharts />
                        </el-icon>
                    </el-tooltip>
                </el-radio-button>
            </el-radio-group>
        </div>
        <div class="editContent">
            <CommonComponents v-if="type === ComponentType.Common" />
            <CustomComponents v-if="type === ComponentType.Custom" />
        </div>
        <!-- <div v-for="(component, index) in config?.componentsList" :key="index" class="component-item" draggable @dragstart="(e) => dragstart(e, component)">
            <span>{{component.label}}</span>
            <span>{{component.preview()}}</span>
            </div> -->
    </section>
</template>

<style scoped lang="scss">
.editMaterial {
    width: 300px;
    height: inherit;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 14px;
    border-radius: 4px;

    .editCategory {
        position: fixed;
        background-color: #fff;
    }

    .editContent {
        margin-top: 50px;
        overflow: auto;

        .component-item {
            display: grid;
            place-content: center;
            cursor: move;
            user-select: none;
            padding: 10px;
            height: fit-content;
            background-color: #dedede;
        }
    }
}
</style>
