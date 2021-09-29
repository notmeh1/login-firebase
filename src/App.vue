<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
      <v-btn class="switchMode" icon><v-icon>mdi-lightbulb</v-icon></v-btn>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.switchMode {
  position: fixed;
  bottom: 3em;
  right: 2em;
}
</style>
