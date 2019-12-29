<template>
  <v-app>
    <v-header />
    <v-about-me />
    <v-container class="mt-6">
      <h2 class="d-block text-center display-1">WORKS</h2>
      <v-row class="justify-center mt-4">
        <v-col cols="10" sm="6" md="4" v-for="n in 3" :key="n">
          <v-work />
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-6">
      <h2 class="d-block text-center display-1">SKILLS</h2>
      <v-row class="justify-center mt-4">
        <v-col cols="8" sm="4" md="3" v-for="(item, i) in items" :key="i">
          <v-skill :item="item" />
        </v-col>
      </v-row>
    </v-container>

    <v-footer />
  </v-app>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";
import VAboutMe from "@/components/AboutMe";
import VWork from "@/components/Work";
import VSkill from "@/components/Skill";

export default {
  name: "App",
  components: {
    VHeader,
    VFooter,
    VAboutMe,
    VWork,
    VSkill
  },
  data: () => ({
    items: [
      { color: "red", title: "HTML", icon: "mdi-language-html5" },
      { color: "blue", title: "CSS", icon: "mdi-language-css3" },
      { color: "red", title: "JavaScript", icon: "mdi-language-javascript" },
      {
        color: "green",
        title: "jQuery",
        icon: "mdi-jquery"
      },
      {
        color: "red",
        title: "Vue.js",
        icon: "mdi-vuejs"
      },
      { color: "brown", title: "PHP", icon: "mdi-language-php" },
      {
        color: "red",
        title: "Laravel",
        icon: "mdi-laravel"
      },
      { color: "red", title: "Sass", icon: "mdi-sass" },
      { color: "red", title: "Swift", icon: "mdi-language-swift" }
    ]
  })
};
</script>
