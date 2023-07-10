<template>
<div class="home">
  <input type="text" v-model="search">
  <div v-for="day in finded" :key="day">
    {{day}}

  </div>
</div>

</template>

<script>
import { ref, computed } from 'vue'
export default {
  name:"HomeView",
  components: {},
  setup(props) {
    const days=ref(['Pzt','Salı','Çarş','Perş','Cuma',])
    const search=ref('')
    const finded=computed(()=>{
      return days.value.filter((day)=>day.includes(search.value));
    })
    return { days,search,finded};
  }

}
</script>

<style>

</style>

<!--
<template>
  <div class="home">
    <p>{{name }} -{{job.name}}</p>
      <p ref="info">deneme</p>
    <button @click="clicked">Butoon</button>
 <input type="text" v-model="name">


  </div>
</template>

<script>
import { onMounted ,ref,reactive} from 'vue'
import Button from '../../../../Vue-CLI-Component/my-project/src/components/Button.vue';


export default {
  components: {
    Button   
  },
  setup() {
     onMounted(()=>{
        console.log('monted yüklendi')


      }),
    console.log('setup yüklendi');
    let name=ref("Süleyman")
    let job=reactive({name:"Software Dev"});
    const info=ref(null)
    const clicked=()=>{
      console.log("Butona tıklandı")
      name.value ='deneme click'
      job.name=".net dev"
      console.log(info,info.value)
      console.log(name)
       console.log(info,info.value)
    }

    return{name,job,clicked}
     
  }

}
</script>
-->