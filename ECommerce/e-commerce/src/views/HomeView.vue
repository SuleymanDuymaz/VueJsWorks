<template>
  <div>
    <HelloWorld></HelloWorld>
    <Navbar class="index"/>
    <Dashboard/>
    <Footer />
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Navbar from '../components/Navbar'
  import Dashboard from '../components/Dashboard.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Navbar,
      Dashboard,
      Footer
    },
  }
</script>

<style scoped>
.index{
  z-index: 9999;
}
</style>