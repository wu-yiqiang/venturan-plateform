import { ElButton, ElInput } from 'element-plus'
import { Tickets } from '@element-plus/icons-vue/global'
import type { ComponentType } from './type'
import  { ComponentTypeEnum } from '../common/const'

type componentMapType = {
  [K in ComponentTypeEnum]?: ComponentType
}

const createEditorConfig = () => {
  let componentsList: any[] = []
  let componentMap: componentMapType = {}
  return {
    componentsList,
    componentMap,
    register: (component: ComponentType) => {
      componentsList.push(component)
      componentMap[component.key] = component
    }
  }
}

export let registerConfig = createEditorConfig()
registerConfig.register({
  label: '文本',
  icon: () => (
    <el-icon>
      <Tickets />
    </el-icon>
  ),
  preview: () => '预览文本',
  render: () => '渲染文本',
  key: ComponentTypeEnum.TEXT
})

registerConfig.register({
  label: '按钮',
  icon: () => (
    <el-icon>
      <Tickets />
    </el-icon>
  ),
  preview: () => <ElButton>预览按钮</ElButton>,
  render: () => <ElButton>渲染按钮</ElButton>,
  key: ComponentTypeEnum.BUTTON
})

registerConfig.register({
  label: '输入框',
  icon: () => (
    <el-icon>
      <Tickets />
    </el-icon>
  ),
  preview: () => <ElInput placeholder="预览输入框" />,
  render: () => <ElInput placeholder="渲染输入框" />,
  key: ComponentTypeEnum.INPUT
})


export const basicComponents = [
  {
    label: '文本',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => '预览文本',
    render: () => '渲染文本',
    key: ComponentTypeEnum.TEXT
  },
  {
    label: '按钮',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => <ElButton>预览按钮</ElButton>,
    render: () => <ElButton>渲染按钮</ElButton>,
    key: ComponentTypeEnum.BUTTON
  },
  {
    label: '输入框',
    icon: () => (
      <el-icon size="20">
        <Tickets />
      </el-icon>
    ),
    preview: () => <ElInput placeholder="预览输入框" />,
    render: () => <ElInput placeholder="渲染输入框" />,
    key: ComponentTypeEnum.INPUT
  }
]