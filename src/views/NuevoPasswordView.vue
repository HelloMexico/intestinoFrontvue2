<template>
  <div class="nuevo">
    <NuevoPassword/>
  </div>
</template>
<script>

import NuevoPassword from '@/components/NuevoPassword.vue'

export default {
  name      : 'OlvidarPasswordView',
  components: {
    NuevoPassword,
  },
};
</script>