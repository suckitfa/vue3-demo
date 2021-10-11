import { toRefs,reactive,onMounted,onUnmounted } from "vue";
// 使用reactive来定义
function useMousePositionrefData() {
    const data = reactive({
        x:0,y:0,
        updateMouse:(e:MouseEvent)=>{
            data.x = e.pageX;
            data.y = e.pageY
        }
    });
    onMounted(()=>{
        document.addEventListener('click',data.updateMouse)
    })
    onUnmounted(()=>{
        document.removeEventListener('click',data.updateMouse)
    })
    const refData = toRefs(data)
    return {...refData}
}
export default useMousePositionrefData;