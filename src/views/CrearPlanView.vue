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

export default {
  name: 'CrearPlanView',
  components: {
    CrearPlan,
    Footer,
    NavBar,
  },
};
</script>