import { computed, defineComponent, inject, ref } from 'vue'
import './index.scss'
export default defineComponent({
  props: {
    value: {
      type: Object
    },
    componentList: {
      type: Array
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
    const config = inject('config')
    const containerRef = ref()
    const dragstart = (event: Event, component: any) => {
      event.dataTransfer.dropEffect = 'move'
    } 
    return () => <div class="editor-material" >{
      config?.componentsList?.map(component => {
        return (
          <div class="component-item" draggable onDragstart={(e) => dragstart(e, component)}>
            <span>{component.label}</span>
            <span>{component.preview()}</span>
          </div>
        )
    }) }</div>
  }
})