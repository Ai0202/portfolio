<template>
  <v-container>
    <h2 class="d-block text-center display-1">WORKS</h2>
    <v-row class="justify-center mt-4">
      <v-col cols="10" sm="6" md="4" v-for="(work, i) in works" :key="i">
        <v-work :work="work" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VWork from "@/components/Work";

export default {
  components: {
    VWork
  },
  data: () => ({
    works: [
      {
        name: "product name",
        lang: "PHP / Laravel",
        description: "description of product",
        img: "https://placehold.jp/300x200.png"
      },
      {
        name: "product name2",
        lang: "JS / Vue",
        description: "description of product2",
        img: "https://placehold.jp/300x200.png"
      },
      {
        name: "product name3",
        lang: "HTML / Sass / JS",
        description: "description of product3",
        img: "https://placehold.jp/300x200.png"
      }
    ]
  })
};
</script>