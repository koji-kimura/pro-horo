<template>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link" flat>
        <a :href="link.address" target="_blank">{{ link.name }}</a>
      </v-btn>
      <!-- <v-flex py-3 text-xs-center xs12>
        &copy;2019 —
        <strong>k-kimura</strong>
      </v-flex>-->
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: "まろうさん個人アカウント",
        address: "https://twitter.com/marouyome"
      },
      // { name: "ことりページ", address: "#" },
      // { name: "ルームホームページ", address: "#" },
      {
        name: "本ページについての問い合わせ",
        address: "https://forms.gle/pDGTYajZvatpRwT87"
      }
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
