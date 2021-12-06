<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <button-atom :to="item.to" :is-primary="item.primary" v-show="isShow(item.show, item.primary)">{{ item.label }}</button-atom>
    </li>
  </ul>
</template>

<script lang="js">
import ButtonAtom from "./ButtonAtom.vue";
export default {
  name: "ButtonMole",
  props: ["inputValue", "list"],
  components: { ButtonAtom },
  methods: {
    isShow(isShow, isPrimary) {
      if (!isShow && isPrimary) {
        return this.inputValue ? true : false
      }
      return isShow
    }
  },
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
}
</style>