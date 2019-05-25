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
  margin:0 auto;
  padding-bottom:10px;
  border-bottom: 1px solid rgba(white, 0.2);
  text-align: center;
  color: #53c6c1;

  h2 {
    font-size: 40px;
    font-weight: 300;
    line-height: 0.5;
  }
  p{
    opacity:0.8;
    line-height: 0.5;
  }
}
.coffeeApp {
  display: flex;
  justify-content: center;
}
</style>