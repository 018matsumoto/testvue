<template>
  <title-atom>究極の選択</title-atom>
  <p class="message" v-if="select">
    アナタは
    <span class="big">『{{ selectName }}派』</span>ですね？
  </p>
  <select-mole :list="animals" name="select_animal" v-model="select"></select-mole>
  <button-mole :list="buttons" :input-value="select"></button-mole>
</template>

<script lang="js">
import { computed, reactive, toRefs } from "vue"
import { onBeforeRouteLeave } from "vue-router"
import TitleAtom from "../components/TitleAtom.vue"
import SelectMole from "../components/SelectMole.vue"
import ButtonMole from "../components/ButtonMole.vue"

export default {
  components: { TitleAtom, SelectMole, ButtonMole },
  name: "Select",
  props: {
    form: {
      type: Object,
      default() {
        return {
          name: null,
          select: null
        };
      }
    }
  },
  emits: ["setForm"],
  setup(props, { emit }) {
    const state = reactive({
      select: props.form.select,
      animals: [
        { label: '🐕', value: '1' },
        { label: '🐈', value: '2' }
      ],
      buttons: [
        { label: '戻る', to: '/Input', primary: false, show: true },
        { label: '決定', to: '/Complete', primary: true, show: false }
      ]
    })

    const selectName = computed(() => {
      return state.animals.find(item => item.value === state.select)?.label
    })

    onBeforeRouteLeave(() => {
      emit('setForm', { select: state.select })
    })

    return {
      ...toRefs(state),
      selectName
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