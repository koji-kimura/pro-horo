<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>まじよく当たるまろうの占いページ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="#" target="_blank">
        <span class="mr-2">twitter</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <MainContent />
    </v-content>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>k-kimura&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import MainContent from "./components/MainContent";

export default {
  name: "App",
  components: {
    MainContent
  },
  data() {
    return {
      //
    };
  }
};
</script>
