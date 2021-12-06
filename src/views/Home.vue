<template>
  <title-atom>はじめよう</title-atom>
  <img alt="Vue logo" src="../assets/logo.png" />
  <button-atom to="/input" :is-primary="true">はじめる</button-atom>
</template>

<script>
import ButtonAtom from "../components/ButtonAtom.vue"
import TitleAtom from "../components/TitleAtom.vue"
export default {
  name: "Home",
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: null,
          select: null
        }
      }
    }
  },
  emits: ["setForm"],
  components: { ButtonAtom, TitleAtom }
}
</script>

<style scoped>
a {
  margin: 2rem;
}
</style>