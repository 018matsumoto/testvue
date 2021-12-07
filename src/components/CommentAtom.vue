<template>
  <li>
    <p class="username">{{ name }}</p>
    <p class="comment">{{ body }}</p>
    <p class="translation">私も『{{ selectName }}派』です。</p>
  </li>
</template>

<script lang="js">
import { inject } from "vue"

export default {
  name: 'CommentAtom',
  props: ['name', 'body'],
  setup() {
    const selectName = inject('selectName')
    return { selectName }
  }
}
</script>

<style scoped>
li {
  display: block;
  padding: 1rem;
  border: 1px solid rgba(112, 112, 112, 1);
  border-radius: 1rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.161);
  transition: 0.3s;
}

.username:before {
  content: "👤";
  padding-right: 0.2rem;
  font-weight: normal;
}

.username {
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
}

.username:after {
  content: "さん";
  padding-left: 0.2rem;
  font-weight: normal;
}

.comment {
  margin-bottom: 0.5rem;
}

.translation:before {
  content: "翻訳";
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
  padding: 0.3rem;
  background-color: rgba(95, 223, 193, 1);
  font-size: 1rem;
}

.translation {
  display: inline-block;
  vertical-align: middle;
}
</style>