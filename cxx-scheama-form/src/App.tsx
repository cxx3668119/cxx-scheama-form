import { createApp,defineComponent, reactive } from "vue";

export default defineComponent({
  setup(){
    const state = reactive({
      name:'cxx',
    })
  
  const numberRef = ref(1)
  }

  setInterval(()=>{
    state.name += '1'
    nameberRef.value += 1
  },1000)

  return ()=>{
    const number = numberRef.value
    return  
  }
})