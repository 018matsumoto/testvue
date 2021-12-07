<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <button-atom
        :to="item.to"
        :is-primary="item.primary"
        v-show="isShow(item.show, item.primary)"
      >{{ item.label }}</button-atom>
    </li>
  </ul>
</template>

<script lang="js">
import ButtonAtom from "./ButtonAtom.vue";

export default {
  components: { ButtonAtom },
  name: "ButtonMole",
  props: ["inputValue", "list"],
  setup(props) {
    const isShow = (show, primary) => {
      if (!show && primary) {
        return props.inputValue ? true : false
      }
      return show
    }

    return {
      isShow
    }
  }
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