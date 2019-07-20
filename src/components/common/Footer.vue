<template>
  <div>
    <v-footer class="pa-3">
      <div class="linkWrapper">
        <a href="#" target="_blank">まろうさん個人アカウント</a>
      </div>
      <div class="linkWrapper">
        <a href="#" target="_blank">ことりページ</a>
      </div>
      <div class="linkWrapper">
        <a href="#" target="_blank">ルームホームページ</a>
      </div>
      <v-spacer></v-spacer>
      <div>k-kimura&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<style lang="scss" scoped>
.linkWrapper {
  margin-left: 10px;
  a {
    color: inherit;
  }
}
</style>
