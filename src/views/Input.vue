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
import { reactive, toRefs } from "vue"
import { onBeforeRouteLeave } from "vue-router"
import TitleAtom from "../components/TitleAtom.vue"
import InputAtom from "../components/InputAtom.vue"
import ButtonMole from "../components/ButtonMole.vue"

export default {
  components: { InputAtom, TitleAtom, ButtonMole },
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
  setup(props, context) {
    const state = reactive({
      name: props.form.name,
      buttons: [
        { label: '戻る', to: '/', primary: false, show: true },
        { label: '次へ', to: '/Select', primary: true, show: false }
      ]
    })

    onBeforeRouteLeave(() => {
      context.emit('setForm', { name: state.name })
    })

    return {
      ...toRefs(state)
    }
  }
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