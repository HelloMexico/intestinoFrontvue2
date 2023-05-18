<template>
  <div class="crear">
    <NavBar />
    <CrearPlan />
    <!-- <h1 class="text-center">Aqui se vera la vista Crear plan de tomas</h1> -->
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import CrearPlan from '@/components/CrearPlan.vue';
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'HomeView',
  components: {
    CrearPlan,
    Footer,
    NavBar,
    Login
  },
};
</script>