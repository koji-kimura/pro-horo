<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">今のあなたの運勢</h1>
        <div v-if="!isTold">
          <h2 class="mb-2">ボタンを押して今の運勢を占ってみよう</h2>
          <img src="@/assets/marou4.jpg" alt="占うまろうさん" class="img" />
          <v-btn color="info" @click="tellMe()">占ってみる</v-btn>
        </div>
        <Result v-if="isTold" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Result from "@/components/contents/parts/TemphorResult.vue";

export default {
  data: () => ({
    isTold: false
  }),
  components: { Result },
  methods: {
    tellMe() {
      this.isTold = true;
    }
  }
};
</script>

<style>
.img {
  height: 350px;
  display: block;
  margin: 20px auto;
}
</style>
