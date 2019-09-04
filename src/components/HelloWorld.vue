<template>
    <div>
        <Person>
            <template slot-scope=scope>
                <div :style="{color: scope.row.age > 18 ?'green' : 'red'}">
                    {{scope.row.username}} ---- {{scope.row.age}}
                </div>
            </template>
        </Person>
    </div>
</template>

<script>
import Person from '../components/slot/slot1'
export default {

    data() {
        return {
            
        }
    },
    components:{
        Person,
    }
}
</script>

<style>

</style>