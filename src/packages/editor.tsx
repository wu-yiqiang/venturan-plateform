import { computed, defineComponent } from 'vue'
import './editor.scss'
import EditorBlock from './editor-block'
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
    console.log('ss', data.value)
    return () => (
      <div class="editor">
        <div class="editor-left">左侧物料区</div>
        <div class="editor-top">菜单栏</div>
        <div class="editor-right">属性控制栏</div>
        <div class="editor-container">
          <div class="editor-container-canvas">
            <div class="editor-container-canvas_content" style={containerStyles.value}>
              {
                data.value.blocks.map((block: Record<string, any> | undefined) => {
                  return <EditorBlock block={block} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
})