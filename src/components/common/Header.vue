<template>
  <v-toolbar>
    <v-toolbar-title class="headline text-uppercase" color="primary lighten-1">
      <router-link to="/">まじよく当たるまろうの占いページ</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
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
  </v-toolbar>
</template>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>

