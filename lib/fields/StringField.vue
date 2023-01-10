<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts">
export default {
  name: "StringField",
}
</script>

<script setup lang="ts">
import { defineProps } from "vue"
import { FiledPropsDefine } from "../types"

const props = defineProps(FiledPropsDefine)

const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>

<style lang="scss" scoped></style>
