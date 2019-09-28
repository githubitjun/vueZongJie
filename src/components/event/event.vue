<template>
  <div>
    <button @click="get($event,11)">点我</button>
    <input type="text" v-model="obj.obj1.gennder" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "张三",
        age:'',
        obj1:{
            gennder:'女'
        }
      }
    };
  },
  methods: {
    get(event, num) {
      console.log(event);
      console.log(num);
    }
  },
  watch: {
    "obj": {
      handler() {
        console.log(this.obj.obj1.gennder);
      },
       deep:true
    // immediate:true
    },
    
   
  }
};
</script>

<style>
</style>