import { ElButton, ElInput } from 'element-plus'
import { COMPONENTTYPE } from '../common/const'


const createEditorConfig = () => {
  let componentsList = []
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
  preview: () => '预览文本',
  render: () => '渲染文本',
  key: COMPONENTTYPE.TEXT
})

registerConfig.register({
  label: '按钮',
  preview: () => <ElButton>预览按钮</ElButton>,
  render: () => <ElButton>渲染按钮</ElButton>,
  key: COMPONENTTYPE.BUTTON
})

registerConfig.register({
  label: '输入框',
  preview: () => <ElInput placeholder="预览输入框" />,
  render: () => <ElInput placeholder="渲染输入框" />,
  key: COMPONENTTYPE.INPUT
})