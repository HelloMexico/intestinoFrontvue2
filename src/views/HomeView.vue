<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Login
  },
};
</script>
