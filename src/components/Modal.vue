<template>
<teleport to="#modal">
    <div id="center" v-if="visiable">
    <!-- <h2>this is a modal</h2> -->
    <h2><slot>this is a modal</slot></h2>
    <button @click="buttonClick">Close</button>
</div>
</teleport>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        visiable: {
            type:Boolean
        }
    },
    // 运行时的验证???
    emits:{
        'close-modal':(payload)=>{
            return payload.type === 'close'
        }
    },
    setup(props,context) {
        const buttonClick = ()=> {
            context.emit('close-modal',{
                type:'close'
            });
        }
        return {buttonClick}
    }
})
</script>
<style>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background:green;
    position: fixed;
    left: 50%;
    top:50%;
    margin-left:-100px;
    margin-top: -100px;
}
</style>