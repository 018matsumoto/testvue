<template>
  <input type="radio" :id="id" :name="name" :value="value" :checked="isCheck" @change="select" />
  <label :for="id">
    <slot></slot>
  </label>
</template>

<script lang="js">
import { computed, reactive, toRefs } from "vue"

export default {
  name: 'SelectAtom',
  props: ['modelValue', 'value', 'name'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const state = reactive({
      id: props.name + props.value
    })

    const isCheck = computed(() => {
      return props.value === props.modelValue
    })

    const select = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return {
      ...toRefs(state),
      isCheck,
      select
    }
  }
}
</script>

<style scoped>
input {
  display: none;
}

label {
  display: block;
  min-width: 10rem;
  padding: 2rem;
  border: 1px solid rgba(112, 112, 112, 1);
  border-radius: 1rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.161);
  transition: 0.3s;
}

label:before {
  content: "絶対";
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;
  letter-spacing: 1rem;
  text-indent: 1rem;
  transition: 0.3s;
}

input:checked + label {
  min-width: 20rem;
  border: 5px solid rgba(230, 104, 104, 1);
  background-color: rgb(104, 112, 230);
  font-size: 2rem;
}

input:checked + label:before {
  color: rgba(230, 104, 104, 1);
  font-size: 2rem;
  font-weight: bold;
}

@media (max-width: 720px) {
  input:checked + label {
    min-width: 10rem;
  }
}
</style>