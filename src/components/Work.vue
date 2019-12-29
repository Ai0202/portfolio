<template>
  <v-card>
    <v-img :src="work.img" height="200px" aspect-ratio="1"></v-img>

    <v-card-title>{{ work.name }}</v-card-title>

    <v-card-subtitle class="primary--text">{{ work.lang }}</v-card-subtitle>

    <v-card-text>{{ work.description }}</v-card-text>

    <v-card-actions>
      <v-btn text color="accent">GitHub</v-btn>
      <v-btn text color="accent">Product</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    work: Object
  }
};
</script>