<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TOP</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ABOUT ME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>SKILLS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>WORKS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="header" :color="headerColor" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>PORTFOLIO</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon href="https://github.com/Ai0202">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn icon href="https://www.linkedin.com/in/atsushi-ikeda-412753170/">
        <v-icon>mdi-linkedin-box</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    headerColor: {
      type: String,
      default: "transparent"
    }
  },
  data: () => ({
    drawer: null,
    scrollY: 0
  })
};
</script>