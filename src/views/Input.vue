<template>
  <title-atom>ユーザー登録</title-atom>
  <p class="message" v-if="name">
    アナタは
    <span class="big">『{{ name }}』</span>ですね？
  </p>
  <input-atom v-model="name" model-name="おにゃまえ"></input-atom>
  <button-mole :list="buttons" :input-value="name"></button-mole>
</template>

<script lang="js">
import InputAtom from "../components/InputAtom.vue"
import TitleAtom from "../components/TitleAtom.vue"
import ButtonMole from "../components/ButtonMole.vue"
export default {
  name: "Input",
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
  data() {
    return {
      name: this.form.name,
      buttons: [
        { label: '戻る', to: '/', primary: false, show: true },
        { label: '次へ', to: '/Select', primary: true, show: false }
      ]
    }
  },
  beforeRouteLeave(to, form, next) {
    this.$emit("setForm", { name: this.name })
    next()
  },
  components: { InputAtom, TitleAtom, ButtonMole }
}
</script>

<style scoped>
.message {
  margin-bottom: 1rem;
}

.big {
  font-size: 2rem;
}
</style>