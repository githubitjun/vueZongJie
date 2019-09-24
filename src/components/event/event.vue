<template>  
    <div>
        <button @click="get($event,11)">点我</button>
    </div>
</template>

<script>
export default {
    methods: {
        get(event,num){
            console.log(event)
            console.log(num);
        }
    },
}
</script>

<style>

</style>