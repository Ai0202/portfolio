<template>
  <v-container fluid class="pt-0 main d-flex align-center">
    <div class="text-box">
      <h2 class="display-2 py-2 white--text">Atsushi Ikeda</h2>
      <h1 class="display-3 font-weight-bold py-2 primary--text">WEB DEVELOPER</h1>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100vh;
  background: {
    image: url("../img/paradise.jpg");
    size: covor;
    repeat: no-repeat;
  }
  &::before {
    background-color: rgba(#000, 0.2);
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > .text-box {
    position: absolute;
    width: 100%;
    text-align: center;
  }
}
</style>