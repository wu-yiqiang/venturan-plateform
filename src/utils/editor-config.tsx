import { ElButton } from "element-plus"


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
  key: 'text'
})

registerConfig.register({
  label: '按钮',
  preview: () => <ElButton>按钮</ElButton>,
  render: () => <ElButton>按钮</ElButton>,
  key: 'button'
})