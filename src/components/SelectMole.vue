<template>
  <div class="select_list">
    <select-atom
      v-for="(item, index) in list"
      :key="index"
      :name="name"
      :value="item.value"
      :modelValue="modelValue"
      @update:modelValue="select"
    >{{ item.label }}</select-atom>
  </div>
</template>

<script lang="js">
import SelectAtom from "./SelectAtom.vue"

export default {
  components: { SelectAtom },
  name: "SelectMole",
  props: ["modelValue", "list", "name"],
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const select = (event) => {
      emit("update:modelValue", event)
    }

    return {
      select
    }
  }
}
</script>

<style scoped>
.select_list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  min-height: 30vh;
  padding: 2rem;
}
</style>