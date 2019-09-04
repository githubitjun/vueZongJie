<template>
  <div>
    <!-- <button @click="count++">You clicked me {{ count }} times</button> -->
    <a class="nav-link">
      <slot>你好世界</slot>
    </a>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="main"></slot>
    </main>
    <span>
        <slot v-bind:user="user">
             {{ user.lastName }}
        </slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      user:{
          lastName :"张三",
          firstName :'李四'
      }
    };
  }
};
</script>

<style>
</style>