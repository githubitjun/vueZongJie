<template>
  <div>
    <button @click="add">这是父组件的按钮</button>
    <Child1 :oneStr="'这是父传子的数据'" :text1="text"></Child1>
    <br />
    <ButtonCounter>
      Your Profile111
      <template v-slot:header>
        <h1>这是个寂寞的天</h1>
      </template>
      <template v-slot:main>
        <div>下着有些伤心的雨</div>
      </template>
      <!-- <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template> -->
    </ButtonCounter>
    <!-- <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>-->
    <br />
    <component v-bind:is="currentTabComponent"></component>
    <br />
    
  </div>
</template>

<script>
import Child1 from "../child/child";
import ButtonCounter from "./counter";
export default {
  data() {
    return {
      number: "这是父组件的数据",
      user:{
          lastName :"张三",
          firstName :'李四'
      }
    };
  },
  methods: {
    add() {},
    text() {
      console.log("这是父组件中的方法");
    }
  },
  components: {
    Child1,
    ButtonCounter
  },
  provide: function() {
    return {
      text: this.text,
      num: this.number
    };
  },
  computed: {
    currentTabComponent: function() {
      return Child1;
    }
  }
};
</script>

<style>
</style>