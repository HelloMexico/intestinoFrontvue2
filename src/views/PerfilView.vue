<template>
  
  <div class="perfil">
    <NavBar />
    <Perfil />
    <Footer />
  </div>
</template>

<script>

// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import Perfil from '@/components/Perfil.vue';


export default {
  name: 'PerfilView',
  components: {
    Footer,
    NavBar,
    Perfil
  },
};
</script>