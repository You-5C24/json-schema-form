import { defineComponent, computed } from "vue"
import { Schema, SchemaTypes, FiledPropsDefine } from "./types"
// import StringField from "./fields/StringField"
import StringField from "./fields/StringField.vue"
// import NumberField from "./fields/NumberField"
import NumberField from "./fields/NumberField.vue"
import ObjectField from "./fields/ObjectField"
import ArrayField from "./fields/ArrayField"

import { retrieveSchema } from "./utils"

export default defineComponent({
  name: "SchemItem",
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema, rootSchema, value } = props

      const retrievedSchema = retrievedSchemaRef.value

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
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
