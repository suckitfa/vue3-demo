<template>
    <h1>{{result}}</h1>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        // 异步的组件，返回promise实例
        return new Promise((resolve)=>{
            setTimeout(()=>{
                return resolve({
                    result:42
                })
            },3000)
        })
    }
})
</script>