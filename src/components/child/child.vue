<template>
    <button @click="parentDChild()">这是子组件的按钮</button>
</template>

<script>
export default {
    props:{
        oneStr:String
    },
    inject: ['text','num'], //这是vue里面的依赖注入  也可以实现子组件调用父组件的方法
                            // 也可以实现 父组件往子组件里面传递数据

    // props:{
    //     text1:{
    //         type: Function,
    //         default: null
    //     }
    // },  // 这是子组件调用父组件中的方法的第三种方法

    data() {
        return {
            
        }
    },
    methods: {
        child(){
            console.log('这是自组件的事件');
            
        },
        parentDChild(){
            // this.$parent.text() // 这是子组件调用父组件中的方法的第一种方法
            // this.$emit('text1') // 这是子组件调用父组件中的方法的第二种方法
            // if (this.text1) {
            //     this.text1()
            // }
            // this.text()
            console.log(this.num);
            console.log(this.oneStr);
        }
    },
}
</script>

<style>

</style>