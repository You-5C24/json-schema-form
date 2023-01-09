import { defineComponent, PropType } from "vue"
import { Schema, SchemaTypes } from "./types"
import StringField from "./fields/StringField"
import NumberField from "./fields/NumberField"

export default defineComponent({
  name: "SchemItem",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    return () => {
      const { schema } = props

      // TODO: type 没有指定，需要猜测 type

      const type = schema.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  },
})