<template>
  <div>
    <v-row class="my-10">
      <v-col></v-col>
      <v-col class="ma-10">
        <Login />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "../components/login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style scoped></style>
