<template>
  <div class="CoffeeEditor">
    <h3>coffee editor test 123</h3>
    <div
      class="coffeeType"
      v-for="(item,index) in coffees"
      :class="{favorite: item.name == favoriteType}"
    >
      <div class="num">0{{index}}</div>
      <div class="cupContainer">
        <div class="cup" :class="[item.type]">
          <div class="ingradient">
            <div class="coffee" :style="{height:item.coffee + '%'}"></div>
            <div class="milk" :style="{height:item.milk + '%'}"></div>
            <div class="water" :style="{height:item.water + '%'}"></div>
            <div class="bubble" :style="{height:item.bubble + '%'}"></div>
          </div>
        </div>
      </div>
      <div class="control">
        <h2>{{item.name}}</h2>
        <select v-model="item.type">
          <option v-for="cupType in cupTypes" :value="cupType ">{{cupType}}</option>
        </select>
        <div v-for="type in ['coffee','milk','water','bubble']">
          <label>{{type}}</label>
          <input type="range" v-model="item[type]" min="0" max="100">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: true,
      cupTypes: ["small", "medium", "large", "mock"],
      coffees: [
        {
          name: "Expresso",
          coffee: 80,
          bubble: 0,
          water: 0,
          milk: 0,
          type: "small"
        },
        {
          name: "Americano",
          coffee: 40,
          bubble: 0,
          water: 40,
          milk: 0,
          type: "medium"
        },
        {
          name: "Cappuccino",
          coffee: 40,
          bubble: 0,
          water: 0,
          milk: 50,
          type: "large"
        },
        {
          name: "Latte",
          coffee: 30,
          bubble: 30,
          water: 0,
          milk: 30,
          type: "mock"
        }
      ],
      favoriteType: "Cappuccino"
    };
  }
};
</script>

<style lang="scss">
@mixin size($w, $h: $w) {
  width: $w;
  height: $h;
}
.CoffeeEditor {
  .coffeeType {
    display: flex;
    align-items: center;
    max-width: 400px;
    border-radius: 5px;
    padding: 10 20px;
    cursor: pointer;
    border-bottom: 1px solid rgba(white, 0.1);
    transition: 0.5s;

    &:hover {
      background-color: rgba(white, 0.05);
    }

    &.favorite {
      &:before {
        content: "BEST";
        border: 5px solid;
        color: #ff5e5e;
        font-size: 30px;
        line-height: 0.9;
        padding: 5px 3px;
        position: absolute;
        transform: translateX(-70px) rotate(-20deg);
      }
    }
    .num {
      font-size: 60px;
      flex: 1;
      font-weight: bold;
      margin-right: 30px;
    }
    .cupContainer {
      flex: 1;
      .cup {
        border: 4px solid white;
        @include size(70px, 50px);
        border-top: none;
        border-radius: 0 0 50px 50px;
        margin: 10px;
        margin-right: 50px;
        padding-top: 5px;
        position: relative;

        &.small {
          @include size(50px, 40px);
        }
        &.large {
          @include size(80px, 50px);
        }
        &.mock {
          @include size(60px, 90px);
          border-radius: 0;
          .ingradient {
            border-radius: 0;
          }
        }

        &:before {
          content: "";
          display: block;
          border: 4px solid white;
          border-left: none;
          border-radius: 0 50px 50px 0;
          @include size(15px, 20px);
          position: absolute;
          left: 100%;
          top: 40%;
          transform: translateY(-50%);
        }
        .ingradient {
          @include size(100%);
          border-radius: 0 0 50px 50px;
          overflow: hidden;
          display: flex;
          flex-direction: column-reverse;

          .coffee,
          .milk,
          .water,
          .bubble {
            background-color: white;
            height: 10px;
          }
          .coffee {
            background-color: #66491a;
          }
          .milk {
            background-color: #f7d8bb;
          }
          .water {
            background-color: #589bce;
          }
          .bubble {
            background-color: #eee;
          }
        }
      }
    }
    .control {
      flex: 2;
    }
  }
}
</style>