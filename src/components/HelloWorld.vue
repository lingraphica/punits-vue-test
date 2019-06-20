<template>
  <div class="hello-world">
    <h1 class="title">{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["message"]
};
</script>

<style lang="scss" scoped>
.title {
  color: $lingraphica-blue;
}
</style>


