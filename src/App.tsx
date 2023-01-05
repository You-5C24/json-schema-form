import { defineComponent, reactive, ref } from "vue"

export default defineComponent({
  setup() {
    const state = reactive({
      name: "5C24",
    })

    const numberRef = ref(1)

    setInterval(() => {
      state.name += "1"
      numberRef.value += 1
    }, 1000)

    return () => {
      const number = numberRef.value

      return (
        <div id="app">
          <p>{state.name + number}</p>
        </div>
      )
    }
  },
})
