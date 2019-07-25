<template>
  <transition appear>
    <div class="result">
      <h2>占い結果は{{cards[cardNum]}}の{{isReverseWord}}だ！</h2>
      <!-- <img src="@/assets/img1.png" alt /> -->
      <div class="resultCardWrapper">
        <!-- <img :src="shuffleCard" alt="予言結果" :class="{isReverse}" class="resultCard" /> -->
        <img src="@/assets/marou1.jpg" alt="予言結果" class="resultCard" />
      </div>
      <h3>
        詳細が知りたい？
        なら、
        <a href="https://twitter.com/marouyome" target="_brank">ここ</a>に問い合わせてくれ...
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
        "THE HIGE PRIESTESS 女教皇",
        "THE EMPEROR 皇帝",
        "THE HIEROPHANT 法王",
        "THE LOVERS 恋人",
        "THE CHARIOT 戦車",
        "STRENGTH 力",
        "THE HERMIT 隠者",
        "WHEEL of FORTUNE 運命の輪",
        "JUSTICE 正義",
        "THE HANGED MAN 吊し人",
        "DEATH 死",
        "TEMPERANCE 節制",
        "THE DEVIL 悪魔",
        "THE TOWER 塔",
        "THE STAR 星",
        "THE MOON 月",
        "THE SUN 太陽",
        "JUDGEMENT 審判",
        "THE WORLD 世界"
      ],
      cardNum: "",
      isReverse: ""
    };
  },
  mounted() {
    let min = 0;
    let max = 20;
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
  width: 250px;
  margin: 30px 0;
  object-fit: cover;
  object-position: 0 100%;
}
.isReverse {
  transform: rotateX(180deg);
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1000ms ease-out;
}

.v-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
.v-leave-active {
  transition: opacity 270ms ease-out, transform 270ms ease-out;
}
</style>