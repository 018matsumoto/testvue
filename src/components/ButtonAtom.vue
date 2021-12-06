<template>
  <router-link :to="to" :class="isPrimary ? 'primary' : 'secondary'">
    <slot></slot>
  </router-link>
</template>

<script lang="js">
export default {
  name: 'ButtonAtom',
  props: { to: String, isPrimary: Boolean }
}
</script>

<style scoped>
a {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem 3rem 1rem 3.5rem;
  border: 1px solid rgba(112, 112, 112, 1);
  border-radius: 2rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.161);
  font-size: 2rem;
  letter-spacing: 0.5rem;
  text-decoration: none;
}

a.secondary {
  background-color: rgba(78, 78, 78, 1);
  color: white;
}

a.primary {
  background-color: rgba(95, 223, 193, 1);
  color: white;
}
</style>