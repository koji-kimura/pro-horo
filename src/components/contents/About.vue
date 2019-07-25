<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">アバウトまろう</h1>
        <img src="@/assets/marou3.jpg" alt="まろうさん" class="marouImg" />
        <p>
          まろうさん。昭和生まれ。男性。
          <br />たしか、学校事務を勤めた後、
          <br />たしか、2013年に人狼ルーム秋葉原のオーナーになる。
          <br />多分、2018年ごろににタロット占いに目覚める
          <br />自称ボードゲーム初心者
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style>
.marouImg {
  height: 210px;
  width: 250px;
  margin: 30px 0;
  object-fit: cover;
  object-position: 0 30px;
}
</style>
