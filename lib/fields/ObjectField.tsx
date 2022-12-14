import { defineComponent } from "vue"
import { FiledPropsDefine } from "../types"

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
}

export default defineComponent({
  name: "ObjectField",
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>Object Field</div>
    }
  },
})
