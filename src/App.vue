<template>
  <v-app>
    <v-header :headerColor="headerColor" />
    <v-main-visual id="main" />
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
  },
  data: () => ({
    headerColor: "transparent"
  }),
  methods: {
    changeHeaderColor: function() {
      const mainHeight = document.querySelector("#main").offsetHeight;
      const headerHeight = document.querySelector("#header").offsetHeight;
      const targetHeight = mainHeight - headerHeight;

      this.headerColor =
        window.scrollY > targetHeight ? "primary" : "transparent";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.changeHeaderColor);
  }
};
</script>
