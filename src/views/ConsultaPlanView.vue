<template>
  <div class="consultar">
    <NavBar />
    <ConsultaPlan />
    <!-- <h1 class="text-center">Aqui se vera la vista Crear plan de tomas</h1> -->
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import ConsultaPlan from '@/components/ConsultaPlan.vue';
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'ConsultaPlanView',
  components: {
    ConsultaPlan,
    Footer,
    NavBar,
    Login
  },
};
</script>