<!--
<template>
<div>
<div v-for="content in contents" :key="content.id">
{{content.title}}
</div>
<div v-if="err">{{err}}</div>
</div>
</template>

<script>

import { ref } from 'vue'
export default {
props :['contents'],
setup() {
  const contents=ref([])
  const err=ref(null)
  const getContents=async ()=>{
    try {
         let data=await fetch('https://jsonplaceholder.typicode.com/posts')
    contents.value=await data.json();
    if(!data.ok){
      throw new Error('Verilerer erişilemedi');
    }
      
    } catch (error) {
      err.value=error.message;
    }
  
  };
  getContents();
  return{contents,err};
}
}
</script>

<style>

</style>

-->
<template>
  <div>
    <div v-for="content in contents" :key="content.id">
      {{ content.title }}
    </div>
    <div v-if="err">
      {{ err }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute,useRouter } from 'vue-router'
import getContentsFetch from "../composables/getContentsFetch";

export default {
  setup() {
    const { contents, err, getContents } = getContentsFetch();
    const route=useRoute()
    const router=useRouter()

    console.log('Route',route);
    console.log('Router',router)
    getContents();
    return { contents, err };
  },
};
</script>

<style></style>