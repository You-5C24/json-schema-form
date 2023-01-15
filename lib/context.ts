import { DefineComponent, inject } from "vue"
import { FiledPropsDefine } from "./types"

type SchemaItemDefine = DefineComponent<typeof FiledPropsDefine>

export const SchemaFormContextKey = Symbol()
export function useVJSFContext() {
  const context: { SchemaItem: SchemaItemDefine } | undefined =
    inject(SchemaFormContextKey)

  if (!context) {
    throw Error("SchemaForm should be used")
  }

  return context
}
