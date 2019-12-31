<template>
  <v-container v-scrollanimation>
    <h2 class="d-block text-center display-1">ABOUT ME</h2>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="8" sm="6" class="text-center">
        <v-avatar size="200">
          <v-img position="right" src="../img/profile_1.jpg" alt="Atsushi"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="8" sm="6" class="text-center text-sm-left">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda, facere perferendis molestiae illum quaerat, porro, magnam quo exercitationem corporis pariatur mollitia accusantium eum sequi dicta. Ipsum obcaecati a dignissimos?</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>