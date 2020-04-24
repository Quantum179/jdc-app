<template>
  <div class="home">
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="stylus">

.section
  width 100%
  height 100vh

.panel
  width 80%
  height 100%
</style>
