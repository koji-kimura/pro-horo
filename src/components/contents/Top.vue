<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">このページについて</h1>
        <img src="@/assets/marou3.jpg" alt="まろうさん" class="marouImg" />
        <p>このページはまろうのページです。本人の了承が得られたので勝手に作ったページです。</p>
        <p>
          まろうさんは占い師で
          <a href="http://game.cotori.net/jinro_room/" target="_blank">人狼ルーム</a>
          のゲームマスターです。
        </p>
        <p>
          占いをお願いした場合は
          <a href="https://twitter.com/marouyome" target="_blank">こちら</a>に問い合わせてみてください。
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style scoped>
.marouImg {
  height: 210px;
  width: 250px;
  margin: 30px 0;
  object-fit: cover;
  object-position: 0 30px;
}
</style>
