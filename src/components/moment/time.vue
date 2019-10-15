<template>
    <div>
        {{ time | newFilter }}
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            time:new Date()
        }
    },
    methods: {
        getTime(){

                // var timeNew = new Date()
                // var timeNew1  = Math.round(timeNew/ 1000)
                // this.time = timeNew1
                // // var timeNew1  = new Date().toLocaleString()
                // console.log(timeNew1);
                // this.time = moment(this.time).format('YYYY-MM-DD hh:mm:ss')
                // console.log(this.time);

                setInterval(()=>{
                    this.time = new Date()
                },1000)
   
        },
        getTime1() {
                setInterval( () => {
                    this.time = new Date()
                    var year = this.time.getFullYear() // 获取年
                    var month = this.time.getMonth() + 1  // 获取月
                    var date = this.time.getDate()  // 获取日
                    var hours = this.time.getHours() //小时
                    var min = this.time.getMinutes() // 分钟
                    var sec = this.time.getSeconds() //  秒数
                    if(month < 10 ){
                        month = '0' + month
                    }
                    if(date < 10 ){
                        date = '0' + date
                    }
                    if(hours < 10 ){
                        hours = '0' + hours
                    }
                    if(min < 10 ){
                        min = '0' + min
                    }
                    if(sec < 10 ){
                        sec = '0' + sec
                    }
                    var newTime = year + '-' + month + '-' + date + '  ' + hours + ':' + min + ":" + sec
                    this.time = newTime
                }, 1000)
            }
    },
    filters:{
        newFilter:function(value){
            return  moment(value).format('YYYY-MM-DD hh:mm:ss')
        }
    },
    mounted() {
        this.getTime()
        // this.getTime1()
    },
}
</script>

<style>

</style>