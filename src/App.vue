<template>
  <v-app>
    <Header />
    <v-content>
      <MainContent />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/common/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/common/Footer";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
