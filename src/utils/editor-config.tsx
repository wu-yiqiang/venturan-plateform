import { ElButton, ElInput } from 'element-plus'
import { COMPONENTTYPE } from '../common/const'
import { Tickets } from '@element-plus/icons-vue/global'


const createEditorConfig = () => {
  let componentsList: any[] = []
  let componentMap = {}
  return {
    componentsList,
    componentMap,
    register: (component: any) => {
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
  key: COMPONENTTYPE.TEXT
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
  key: COMPONENTTYPE.BUTTON
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
  key: COMPONENTTYPE.INPUT
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
    key: COMPONENTTYPE.TEXT
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
    key: COMPONENTTYPE.BUTTON
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
    key: COMPONENTTYPE.INPUT
  }
]