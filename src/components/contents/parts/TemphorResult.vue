<template>
  <transition name="v">
    <div class="result">
      <h2>占い結果は{{cards[cardNum]}}の{{isReverseWord}}じゃ！</h2>
      <!-- <img src="@/assets/img1.png" alt /> -->
      <div class="resultCardWrapper">
        <img :src="shuffleCard" alt="予言結果" :class="{isReverse}" class="resultCard" />
      </div>
      <h3>
        詳細が知りたい？
        ならば、
        <a href="#">ここ</a>に問い合わせてくれ...
      </h3>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      cards: [
        "THE FOOL 愚者",
        "THE MAGICIAN 魔術師",
        "THE HIGE PRIESTESS 女教皇"
      ],
      cardNum: "",
      isReverse: ""
    };
  },
  mounted() {
    let min = 0;
    let max = 2;
    this.cardNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    this.isReverse = Math.round(Math.random());
  },
  computed: {
    shuffleCard() {
      return require(`@/assets/img${this.cardNum}.png`);
    },
    isReverseWord() {
      if (this.isReverse) {
        return "逆位置";
      } else {
        return "正位置";
      }
    }
  }
};
</script>

<style scoped>
.resultCard {
  height: 250px;
  margin: 30px 0;
}
.isReverse {
  transform: rotateX(180deg);
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.v-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
.v-leave-active {
  transition: opacity 270ms ease-out, transform 270ms ease-out;
}
</style>