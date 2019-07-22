<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" flat>
        <a :href="link.address" target="_blank">{{ link.name }}</a>
      </v-btn>
      <v-flex py-3 text-xs-center xs12>
        &copy;2019 —
        <strong>k-kimura</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "まろうさん個人アカウント",
        address: "#"
      },
      { name: "ことりページ", address: "#" },
      { name: "ルームホームページ", address: "#" }
    ],
    test: "aaa"
  })
};
</script>

<style lang="scss" scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
