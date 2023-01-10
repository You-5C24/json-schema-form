<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts">
export default {
  name: "NumberField",
}
</script>

<script setup lang="ts">
import { defineProps } from "vue"
import { FiledPropsDefine } from "../types"

const props = defineProps(FiledPropsDefine)

const handleChange = (e: any) => {
  const value = e.target.value

  const num = Number(value)

  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>

<style lang="scss" scoped></style>
