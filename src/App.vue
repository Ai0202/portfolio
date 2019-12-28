<template>
  <v-app>
    <v-header />
    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter
  }
};
</script>
