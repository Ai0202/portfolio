<template>
  <v-card :color="skill.color" dark shaped>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">
          <v-icon left large>{{ skill.icon }}</v-icon>
          <span>{{ skill.title }}</span>
        </v-card-title>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    skill: Object
  }
};
</script>