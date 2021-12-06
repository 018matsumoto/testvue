<template>
  <title-atom>結果発表</title-atom>
  <p class="message">
    {{ name }}さんは
    <span class="big">『{{ selectName }}派』</span>ですが、
    <br />皆さんはどうでしょう？
  </p>
  <comment-mole :list="list" :select-name="selectName" :is-load="isLoad"></comment-mole>
  <button-atom to="/" :is-primary="true">終了</button-atom>
</template>

<script lang="js">
import TitleAtom from "../components/TitleAtom.vue"
import ButtonAtom from "../components/ButtonAtom.vue"
import CommentMole from "../components/CommentMole.vue"
export default {
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
  data() {
    return {
      name: this.form.name,
      select: this.form.select,
      list: null,
      isLoad: false
    }
  },
  async mounted() {
    const data = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json())
    this.list = data.slice(0, 10)
    this.isLoad = true
  },
  computed: {
    selectName() {
      return this.select === "1" ? "🐕" : "🐈"
    }
  },
  beforeRouteLeave(to, form, next) {
    this.$emit("setForm", { name: null, select: null })
    next()
  },
  components: { TitleAtom, ButtonAtom, CommentMole }
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