import { defineComponent } from "vue"

import { FiledPropsDefine } from "./types"

import SchemaItem from "./SchemaItems"

export default defineComponent({
  props: FiledPropsDefine,
  name: "SchemaForm",
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    return () => {
      const { schema, value } = props

      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})
