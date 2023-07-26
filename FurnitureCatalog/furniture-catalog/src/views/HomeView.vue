<template>
  <HelloWorld />
  <Nav-bar/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import Nav-bar from '../components/Navbar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    Nav-bar
  },
});
</script>
