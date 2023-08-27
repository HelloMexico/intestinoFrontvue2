<template>
  <div class="preg">
    <NavBar />
    <PreguntasFrec />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import PreguntasFrec from '@/components/PreguntasFrec.vue';

export default {
  name: 'PreguntasFrecView',
  components: {
    Footer,
    NavBar,
    PreguntasFrec
  },
};
</script>