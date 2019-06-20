<template>
  <div class="home">
    <app-hello-world :message="message"></app-hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "home",
  components: {
    appHelloWorld: HelloWorld
  },
  data() {
    return {
      message: "Vue.js Lingraphica Template"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
