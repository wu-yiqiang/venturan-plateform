import { computed, defineComponent, inject } from 'vue'
import './editor-block.scss'
export default defineComponent({
  props: {
    block: {
      type: Object
    }
  },
  setup(props: any) {
    const blockStyles = computed({
      get() {
        return {
          top: props?.block.top,
          left: props?.block.left,
          zIndex: props?.block.zIndex
        }
      },
      set() {}
    })
    const config = inject('config')
    console.log(config.componentMap[props?.block.key])
    
    return () => {
      const component = config.componentMap[props?.block.key]
      const RenderComponent = component.render()
      return <div class="editor-block" style={blockStyles.value}>
        {RenderComponent}
      </div>
    }
  }
})