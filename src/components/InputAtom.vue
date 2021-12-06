<template>
  <input
    type="text"
    :value="modelValue"
    @input="setInput"
    :placeholder="`${modelName}を入力してください。`"
  />
</template>

<script lang="js">
export default {
  name: 'InputAtom',
  props: ['modelValue', 'modelName'],
  emits: {
    'update:modelValue': (value) => {
      if (value) {
        return true;
      } else {
        console.log("OH!")
        return false
      }
    }
  },
  methods: {
    setInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  width: 20rem;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid rgba(112, 112, 112, 1);
  border-radius: 2rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.161);
}
</style>