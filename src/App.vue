<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
  },
};
</script>

<style lang="scss">
.logo {
  font-size: 25px;
  color: #000000;
  text-decoration: none;
}
.pink-background {
  background-color: #f5f5f5;
}

.pink-color {
  color: #d1cbc8;
}

.pink-button-color {
  background: #cbabac;
}

.blue-background {
  background-color: #f6fbff;
}

.blue-color {
  color: #3476a6;
}

.blue-button-color {
  background: #235890;
}
</style>
