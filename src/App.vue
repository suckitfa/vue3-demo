<template>
  <div>
    <h1>{{ counter }}</h1>
    <h1>{{ double }}</h1>
    <h1>{{greetings}}</h1>
    <h1>x:{{x}},y:{{y}}</h1>
    <ul>
      <li v-for="num in nums" :key="num">{{num}}</li>
    </ul>
    <h1>{{person.name}}</h1>
    <button @click="increase">+1</button>
    <button @click="updateGreeting">update Title</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs ,onMounted,onUpdated, onRenderTriggered,onUnmounted} from "vue";
import { ref, computed ,reactive,watch} from "vue";
import useMousePositionrefData from './hooks/useMousePositionrefData'
interface DataProps {
  counter:number;
  double:number;
  increase:()=>void;
  nums:number[];
  person:{name?:string}
}
export default defineComponent({
  name: "App",
  setup() {
    // 响应式对象ref
    // const counter = ref(0);
    // const increase = () => {
    //   counter.value++;
    // };
    // const double = computed(() => {
    //   return counter.value * 2;
    // });
    // 响应式对象
    onUpdated(()=>{
      // console.log('updated!')
    })
    onRenderTriggered((event)=>{
      // console.log(event)
    })
    // reactive的写法，设置为响应式的数据
    const data:DataProps = reactive({
      counter:0,
      increase:()=>{
        data.counter++
      },
      double:computed(()=>data.counter*2),
      nums:[1,2,0],
      person:{}
    })
    data.nums[0] = 2;
    data.person.name = 'shit'
    // 取出data中的值后，不再是响应式的,使用toRefs保证为响应式
    const refData = toRefs(data)


    const greetings = ref('')
    const updateGreeting = ()=>{
      greetings.value += 'Hello'
    }

    // watch 
    watch([greetings,()=>data.counter],(newValue,oldValue)=>{
      document.title = greetings.value;
      console.log(`new = ${newValue},old=${oldValue}`)
    });

    // 将逻辑组合在一起
    // const x = ref(0)
    // const y = ref(0)
    // const updateMouse = (e:MouseEvent) => {
    //   x.value = e.pageX
    //   y.value = e.pageY
    // }
    // onMounted(()=>{
    //   document.addEventListener('click',updateMouse);
    // })
    // onUnmounted(()=>{
    //   document.removeEventListener('click',updateMouse)
    // })
    // 调用hooks
    // const {x,y} = useMousePosition();
    const {x,y} = useMousePositionrefData();
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,y
    };
  },
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
