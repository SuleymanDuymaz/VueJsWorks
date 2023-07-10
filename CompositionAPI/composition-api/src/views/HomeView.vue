<template>
  <div class="home">
    <Contents :contents="contents"></Contents>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";
import Contents from "../components/Contents.vue";
export default {
  name: "HomeView",
  components: { Contents },
  setup() {
    const contents = ref([
      { id: 1, title: "Deneme 1", details: "Detail 1" },
      { id: 2, title: "Deneme 2", details: "Detail 2" },
      { id: 3, title: "Deneme 3", details: "Detail 3" },
      { id: 4, title: "Deneme 4", details: "Detail 4" },
    ]);
    return { contents };
  },
};
</script>

<!--

<template>
<div class="home">
  <input type="text" v-model="search">
  <div v-for="day in finded" :key="day">
    {{day}}

  </div>
  <button @click="stop">Stop</button>
</div>

</template>

<script>
import { ref, computed, watch ,watchEffect} from 'vue'

import Button from '../../../../Vue-CLI-Component/my-project/src/components/Button.vue'
export default {
  name:"HomeView",
  components: {Button},
  setup(props) {
    const days=ref(['Pzt','Salı','Çarş','Perş','Cuma',])
    const search=ref('')
    const finded=computed(()=>{
      return days.value.filter((day)=>day.includes(search.value));
    });
    const watchS= watch(search,()=>{
      console.log("watch çalıştı")
    })
    const  watchEffectS=watchEffect(()=>{
      console.log("watcheffect çalıştı",days.value)
       console.log("watcheffect çalıştı",search.value)
    })
    const stop=()=>{
      watchS();
      watchEffectS();
    };
    return { days,search,finded,stop};
  }

}
</script>

<style>

</style>
-->

2.alan
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