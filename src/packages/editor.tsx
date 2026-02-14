import { computed, defineComponent, inject } from 'vue'
import EditAttrpannel from './components/editAttrPannel/index.tsx'
import EditMaterial from './components/editMaterial/index.vue'
import EditorTop from './components/editTopbar/index.vue'
import EditorBlock from './editor-block'
import './editor.scss'
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
    const config = inject('config')
    return () => (
      <>
        <EditorTop />
        <div class="editor">
          <EditMaterial componentList={config.componentList} />
          <div class="editor-container">
            <div class="editor-container-canvas">
              <div class="editor-container-canvas_content" style={containerStyles.value}>
                {data.value.blocks.map((block: Record<string, any> | undefined) => {
                  return <EditorBlock block={block} />
                })}
              </div>
            </div>
          </div>
          <EditAttrpannel />
        </div>
      </>
    )
  }
})
