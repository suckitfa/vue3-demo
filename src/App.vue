<template>
  <div>
    <div>
      <h1 v-if="loading">loading........</h1>
      <img v-if="loaded" :src="result.message" alt="">
    </div>
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
  <!-- 使用modal -->
  <Modal 
    :visiable="visiable" 
    @close-modal="onModalClose">
    I loving my life!
  </Modal>
  <button @click="openModal">open modal</button>
  <!-- 异步组件的使用 -->
  <Suspense>
    <template #default>
      <async-show />
    </template>
    <template #fallback>
      <h1>Loading............</h1>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, toRefs ,onMounted,onUpdated, onRenderTriggered,onUnmounted} from "vue";
import { ref, computed ,reactive,watch} from "vue";
import useMousePositionrefData from './hooks/useMousePositionrefData'
import useURLLoader from './hooks/userURLLoader'
import Modal from './components/Modal.vue'
import AsyncShow from './components/AsyncShow.vue'
interface DataProps {
  counter:number;
  double:number;
  increase:()=>void;
  nums:number[];
  person:{name?:string}
}
interface DogResult {
  message:string;
  status:string;
}
// thecatAPI
interface CatResult {
  id:string;
  url:string;
  width:number;
  height:number;
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
    const  {result,loading,loaded,error}= useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    watch(result,()=>{
      if(result.value) {
        console.log('value',result.value);
      }
    })

    // 控制modal
    const visiable = ref(false)
    const openModal = () =>{
      visiable.value = true;
    }
    const onModalClose = () =>{
      visiable.value = false;
    }
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,y,
      result,loading,loaded,error,
      visiable,
      openModal,
      onModalClose,
    };
  },
  components: {
    Modal,
    AsyncShow
  },
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
