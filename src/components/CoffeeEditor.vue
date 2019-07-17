<template>
  <div class="coffeeEditor">
    <div class="title">
      <h2>Let’s make a coffee</h2>
    </div>
    <div class="topControll">
      <div class="steps">Step1: Order Coffee</div>
      <div class="chooseFavorite">
        <select v-model="favoriteType">
          <option v-for="(item, index) in coffees" :key="index" :value="item.name">{{item.name}}</option>
        </select>
      </div>
      <div class="steps">Step2: Custom Ratio</div>
      <label class="edit">
        Start
        <input type="checkbox" v-model="editing" />
      </label>
    </div>
    <div
      class="coffeeType"
      v-for="(item,index) in coffees"
      :key="index"
      :class="{favorite: item.name == favoriteType, showMode:!editing}"
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
          <option v-for="(cupType, index) in cupTypes" :key="index" :value="cupType ">{{cupType}}</option>
        </select>
        <div class="controllBar" v-for="(type, index) in ingredients" :key="index">
          <label>{{type}}</label>
          <input type="range" v-model="item[type]" min="0" max="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      cupTypes: ["small", "medium", "large", "mock"],
      ingredients: ["coffee", "milk", "water", "bubble"],
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

<style lang="scss" scoped>
@mixin size($w, $h: $w) {
  width: $w;
  height: $h;
}
.coffeeEditor {
  background-color: #ffcb49;
  color: #55340c;
  max-width: 500px;

  .title {
    padding: 10px 0;
    text-align: center;

    h2 {
      font-size: 35px;
      font-weight: 900;
      line-height: 0.5;
    }
  }

  .topControll {
    margin: 0 40px 40px;
    padding: 0 30px 30px 30px;
    border-radius: 10px;
    border: 3px solid #8e661e;
    background-color: #55340c;
    color: white;
    font-weight: 400;
    .steps {
      margin: 20px 0 10px 0;
    }

    .chooseFavorite {
      select {
        width: 100%;
        height: 40px;
        font-size: 14px;
        border: 1px solid #f7d8bb;
        outline: none;
      }
    }
    .edit {
      background-color: #fd8d02;
      border-radius: 5px;
      padding: 12px 20px;
      display: block;
      transition: 0.5s;
      cursor: pointer;
      text-align: center;
      &:hover {
        background-color: #ffb85f;
      }

      input {
        display: none;
      }
    }
  }

  .coffeeType {
    display: flex;
    align-items: center;
    max-width: 500px;
    cursor: pointer;
    transition: 0.5s;
    margin: 20px;
    padding: 20px;
    border-bottom: 1px solid rgba(#55340c, 0.5);

    &.showMode {
      label,
      input,
      select {
        display: none;
      }
    }

    &.favorite {
      &:before {
        content: "ORDER";
        border: 4px solid;
        color: #df2525;
        font-size: 20px;
        line-height: 1.2;
        padding: 5px 3px;
        position: absolute;
        transform: translateX(-20px) translateY(-30px) rotate(-20deg);
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
        border: 4px solid #55340c;
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
          border: 4px solid #55340c;
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
            background-color: #55340c;
          }
          .milk {
            background-color: #f7d8bb;
          }
          .water {
            background-color: #7edbff;
          }
          .bubble {
            background-color: #eee;
          }
        }
      }
    }
    .control {
      flex: 2.5;
      select {
        width: 100%;
        height: 40px;
        font-size: 16px;
        margin-bottom: 10px;
        border: 1px solid #eb9d53;
        outline: none;
      }
      .controllBar {
        margin: 4px 0;
        width: 100%;
        input {
          width: 100%;
        }
        // Hide Everything
        input[type="range"] {
          -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
          width: 100%; /* Specific width is required for Firefox. */
          background: transparent; /* Otherwise white in Chrome */
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
        }
        input[type="range"]:focus {
          outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
        }
        input[type="range"]::-ms-track {
          width: 100%;
          cursor: pointer;
          /* Hides the slider so custom styles can be added */
          background: transparent;
          border-color: transparent;
          color: transparent;
        }
        // styling thumb
        /* Special styling for WebKit/Blink */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          border: 3px solid #55340c;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          box-shadow: 0 3px 10px rgba(#55340c, 0.3); /* Add cool effects to your sliders! */
        }

        input[type="range"]::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          background: #55340c;
        }
      }
    }
  }
}
</style>