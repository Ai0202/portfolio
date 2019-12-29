<template>
  <v-app>
    <v-header />
    <v-main-visual />
    <v-about-me class="mt-6" />
    <v-works class="mt-6" />
    <v-skills class="mt-6" />
    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";
import VAboutMe from "@/components/AboutMe";
import VWorks from "@/components/Works";
import VSkills from "@/components/Skills";
import VMainVisual from "@/components/MainVisual";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
    VAboutMe,
    VWorks,
    VSkills,
    VMainVisual
  }
};
</script>
