<template>
  <v-container>
    <h2 class="d-block text-center display-1">SKILLS</h2>
    <v-row class="justify-center mt-4">
      <v-col cols="8" sm="4" md="3" v-for="(skill, i) in skills" :key="i">
        <v-skill :skill="skill" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VSkill from "@/components/Skill";
export default {
  components: {
    VSkill
  },
  data: () => ({
    skills: [
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