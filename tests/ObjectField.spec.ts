import { mount } from "@vue/test-utils"
import JsonSchemaForm, { NumberField, StringField } from "../lib"

describe("ObjectField", () => {
  it("should render properties to correct fields", () => {
    let value = {}
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
          },
        },
        value: value,
        onChange: (v) => {
          value = v
        },
      },
    })

    const strFiled = wrapper.findComponent(StringField)
    const numberFiled = wrapper.findComponent(NumberField)
    expect(strFiled.exists()).toBeTruthy()
    expect(numberFiled.exists()).toBeTruthy()
  })
})
