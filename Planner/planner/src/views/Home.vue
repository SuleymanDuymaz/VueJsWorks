<template>
  <div class="home">
  
    <div v-for="project in projects" :key="project.id">
      <p>{{project.title}}</p>

   
    

   </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
data() {
  return {
    projects: []
  }
},
mounted() {
  fetch('http://localhost:8000/projects')
  .then(res=>res.json())
  .then(data=>this.projects=data)
  .catch(err=>console.log(err.message))
},

};
</script>
