<template>
  <v-app>
    <v-header />
    <v-container>
      <h2 class="d-block text-center display-1">WORKS</h2>
      <v-row>
        <v-col xs="12" wrap v-for="n in 3" :key="n">
          <v-work />
        </v-col>
      </v-row>
    </v-container>
    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";
import VWork from "@/components/Work";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
    VWork
  }
};
</script>
