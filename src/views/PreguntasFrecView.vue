<template>
  <div class="preg">
    <NavBar />
    <PreguntasFrec />
    <!-- <h1 class="text-center">Aqui se vera la vista Crear plan de tomas</h1> -->
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Login from '@/components/Login.vue';
import NavBar from '@/components/NavBar.vue';
import PreguntasFrec from '@/components/PreguntasFrec.vue';

export default {
  name: 'PreguntasFrecView',
  components: {
    Footer,
    NavBar,
    Login,
    PreguntasFrec
  },
};
</script>