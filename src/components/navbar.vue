<template>
  <div>
    <v-app-bar flat dense dark fixed class="mt-5 mx-10 rounded-pill">
      <v-app-bar-title><v-icon>mdi-emoticon-cool-outline</v-icon></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{ name: 'Home' }" class="rounded-pill"> Inicio </v-btn>

        <v-btn text :to="{ name: 'About' }" class="rounded-pill"> Acerca </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>