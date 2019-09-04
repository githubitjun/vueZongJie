<template>
    <div>
        <ul>
            <li v-for="item in person" :key="item.id">
                <slot :row="item"></slot>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            person :[
                {id:2001,username:"张三",age:26},
                {id:2002,username:"李四",age:17},
                {id:2003,username:"张三",age:23},
            ]
        }
    },
}
</script>

<style>
    
</style>