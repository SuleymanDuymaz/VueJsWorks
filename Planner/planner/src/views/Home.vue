<template>
  <div class="home">
    <div v-for="project in projects" :key="project.id">
     <single-project :project="project" @delete="handleDelete"></single-project>
   </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';

export default {
  name: 'Home',
  components: {
    SingleProject
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message));
  },
  methods: {
    handleDelete(id){
      this.projects=this.projects.filter((project)=>project.id!==id)
    }
  },
};
</script>
