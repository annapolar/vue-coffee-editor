<template>
  <div class="CoffeeEditor">
    <h3>coffee editor test 123</h3>
    <div class="coffeeType">
      <div class="num">00</div>
      <div class="cupContainer">
        <div class="cup">
          Cup
          <div class="ingradient">
            <div class="coffee"></div>
            <div class="milk"></div>
            <div class="water"></div>
            <div class="bubble"></div>
          </div>
        </div>
      </div>
      <div class="control">
        <h2>Expresso</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: true,
      cupTypes: ["small", "medium", "big", "mock"],
      coffees: [
        {
          name: "Expresso",
          coffee: 80,
          bubble: 0,
          water: 0,
          type: "small"
        },
        {
          name: "Americano",
          coffee: 40,
          bubble: 0,
          water: 40,
          milk: 0
        },
        {
          name: "Cappuccino",
          coffee: 40,
          bubble: 0,
          water: 0,
          milk: 50,
          type: "big"
        },
        {
          name: "Latte",
          coffee: 30,
          bubble: 30,
          water: 0,
          milk: 30
        }
      ],
      favoriteType: "Cappuccino"
    };
  }
};
</script>

<style lang="scss">
.CoffeeEditor {
}
</style>