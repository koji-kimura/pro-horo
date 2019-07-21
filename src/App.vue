<template>
  <v-app>
    <Header @drawerOpen="drawerInfo" />
    <v-content>
      <Drawer v-if="drawer" />
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Drawer from "@/components/common/Drawer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Drawer
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    drawerInfo() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
