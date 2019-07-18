<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">今のあなたの運勢</h1>

        <v-btn color="info" @click="tellMe()" v-if="!isTold">占ってみる</v-btn>
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
</style>
