<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script lang="js">
export default {
  name: 'TitleAtom'
}
</script>

<style scoped>
h1 {
  margin: 2rem;
  padding-left: 1rem;
  color: rgba(95, 223, 193, 1);
  font-size: 3rem;
  letter-spacing: 1rem;
  filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161));
}

@media (max-width: 720px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>