<template>
  <div id="app">
    <div class="title">
      <h2>Welcome to the Vue.js Coffee Editor</h2>
      <p>Here you can make and custom the coffee by yourself</p>
    </div>
    <div class="coffeeApp">
      <CoffeeEditor/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  width: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #282f38;
  color: white;
  display: flex;
  justify-content: center;
}
.title {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid rgba(#35d6ce, 0.2);
  text-align: center;
  color: #35d6ce;

  h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 0.5;
    letter-spacing: 1.2px;
  }
  p {
    opacity: 0.8;
    line-height: 0.5;
    letter-spacing: 0.7px;
  }
}
.coffeeApp {
  display: flex;
  justify-content: center;
}
</style>