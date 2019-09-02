<template>
  <div>
    <button @click="add" >这是父组件的按钮</button>
    <Child1 :text1="text"></Child1>
  </div>
</template>

<script>
import Child1 from "../child/child";
export default {
  data() {
    return {
        number:'这是父组件的数据'
    };
  },
  methods: {
    add() {},
    text(){
        console.log('这是父组件中的方法');
        
    }
  },
  components: {
    Child1
  },
  provide: function () {
  return {
    text: this.text,
    num : this.number
  }
}
};
</script>

<style>
</style>