<template>
  <ul>
    <li v-if="isLoad === false">loading...</li>
    <Comment-atom
      v-for="item in list"
      :key="item.id"
      :name="item.name"
      :body="item.body"
      :select-name="selectName"
    ></Comment-atom>
  </ul>
</template>

<script lang="js">
import CommentAtom from "./CommentAtom.vue";
export default {
  name: 'CommentMole',
  props: ['list', 'selectName', 'isLoad'],
  components: { CommentAtom }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 900px;
  width: 95%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-top: 1px solid;
  border-bottom: 1px solid;
  text-align: left;
  overflow-y: scroll;
}
</style>