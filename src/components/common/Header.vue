<template>
  <v-toolbar>
    <v-toolbar-title class="header-title" color="primary lighten-1">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawerOpen()"></v-toolbar-side-icon>
      <router-link to="/">まじよく当たるまろうの占いページ</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <div class="hidden-md-and-down">
      <v-btn flat>
        <span class="mr-2">
          <router-link to="/about">アバウトまろう</router-link>
        </span>
      </v-btn>
      <v-btn flat>
        <span class="mr-2">
          <router-link to="/temphor">今のあなたの運勢</router-link>
        </span>
      </v-btn>
      <v-btn flat>
        <span class="mr-2">
          <router-link to="/performance">占い実績</router-link>
        </span>
      </v-btn>
      <v-btn flat href="#" target="_blank">
        <span class="mr-2">twitter</span>
        <v-icon size="1rem">fas fa-external-link-alt</v-icon>
      </v-btn>
    </div>
  </v-toolbar>
</template>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
.header-title {
  font-size: 1.2rem;
}
</style>

<script>
export default {
  methods: {
    drawerOpen() {
      this.$emit("drawerOpen");
      // alert(this.$parent.drawer);
      // this.$parent.drawer = !this.$parent.drawer;
    }
  }
};
</script>>