<template>
  <header>
    <router-link to="/">SELECTOR</router-link>
  </header>
  <main class="window">
    <router-view :form="form" @set-form="setForm" />
  </main>
  <footer>© 2021 SELECTOR.</footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form:{
        name: null,
        select: null
      }
    }
  },
  methods: {
    setForm(form) {
      this.form = Object.assign(this.form, form)
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'BIZ UDPGothic', 'Meiryo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	font-weight: 500;
}

@media (max-width: 720px) {
  html {
    font-size: 10px;
  }
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
	position: fixed;
	z-index: 1000;
	top: 0;
	width: 100%;
  padding: 1rem;
}

header a {
  padding-left: 1rem;
  color: rgba(95, 223, 193, 1);
  font-size: 2rem;
	letter-spacing: 1rem;
  text-decoration: none;
	filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.161));
}

main.window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  border: 1px solid rgba(112, 112, 112, 1);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.161);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
	position: fixed;
	z-index: 1000;
	bottom: 0;
	width: 100%;
  padding: 1rem;
}
</style>
