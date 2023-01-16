import { mount } from "@vue/test-utils"
import { defineComponent, h } from "vue"

const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    return () => {
      return h("div", props.msg)
    }
  },
})

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"
    const wrapper = mount(HelloWorld as any, {
      props: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
