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
import TitleAtom from "../components/TitleAtom.vue"
import SelectMole from "../components/SelectMole.vue"
import ButtonMole from "../components/ButtonMole.vue"
export default {
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
  data() {
    return {
      select: this.form.select,
      animals: [
        { label: '🐕', value: '1' },
        { label: '🐈', value: '2' }
      ],
      buttons: [
        { label: '戻る', to: '/Input', primary: false, show: true },
        { label: '決定', to: '/Complete', primary: true, show: false }
      ]
    };
  },
  computed: {
    selectName() {
      return this.animals.find(item => item.value === this.select)?.label
    }
  },
  beforeRouteLeave(to, form, next) {
    this.$emit("setForm", { select: this.select })
    next()
  },
  components: { TitleAtom, SelectMole, ButtonMole }
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