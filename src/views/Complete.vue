<template>
  <title-atom>結果発表</title-atom>
  <p class="message">
    {{ name }}さんは
    <span class="big">『{{ selectName }}派』</span>ですが、
    <br />皆さんはどうでしょう？
  </p>
  <comment-mole :list="list" :is-load="isLoad"></comment-mole>
  <button-atom to="/" :is-primary="true">終了</button-atom>
</template>

<script lang="js">
import { computed, reactive, toRefs, onMounted, provide } from "vue"
import { onBeforeRouteLeave } from "vue-router"
import TitleAtom from "../components/TitleAtom.vue"
import CommentMole from "../components/CommentMole.vue"
import ButtonAtom from "../components/ButtonAtom.vue"

export default {
  components: { TitleAtom, ButtonAtom, CommentMole },
  name: "Complete",
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
  setup(props, { emit }) {
    const state = reactive({
      name: props.form.name,
      select: props.form.select,
      list: null,
      isLoad: false
    })

    const selectName = computed(() => {
      return state.select === "1" ? "🐕" : "🐈"
    })

    provide('selectName', selectName.value)

    onMounted(async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
      state.list = data.slice(0, 10)
      state.isLoad = true
    })

    onBeforeRouteLeave(() => {
      emit('setForm', { name: null, select: null })
    })

    return {
      ...toRefs(state),
      selectName
    }
  }
}
</script>

<style scoped>
a {
  margin: 1rem auto 2rem auto;
}

.message {
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

.big {
  font-size: 2rem;
}

br {
  display: none;
}

@media (max-width: 720px) {
  .big {
    font-size: 1.5rem;
  }

  br {
    display: inline;
  }
}
</style>