<template>
  <div class="olvidar">
    <NavBar />
    <OlvidarPassword/>
    <!-- <h1 class="text-center">Aqui se vera la vista Crear plan de tomas</h1> -->
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import OlvidarPassword from '@/components/OlvidarPassword.vue'
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'OlvidarPasswordView',
  components: {
    OlvidarPassword,
    Footer,
    NavBar,
    Login
  },
};
</script>