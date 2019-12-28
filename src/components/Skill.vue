<template>
  <v-card :color="item.color" dark shaped>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline">
          <v-icon left large>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-card-title>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>