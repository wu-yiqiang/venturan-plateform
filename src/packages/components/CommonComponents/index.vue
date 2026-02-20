<script setup lang="ts">
import LayoutComponents from './LayoutComponents/index.vue'
import BasicComponents from './BasicComponents/index.vue'
import ContainerComponents from './ContainerComponents/index.vue'
</script>

<template>
    <section class="CommonComponents">
        <LayoutComponents />
        <ContainerComponents />
        <BasicComponents />
    </section>
</template>

<style scoped lang="scss">
.CommonComponents {
display: grid;
row-gap: 14px;  
}
</style>
