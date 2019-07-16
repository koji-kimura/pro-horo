<template>
  <div>
    <h2>お主の占い結果は{{cards[cardNum]}}じゃ！</h2>
    <!-- <img src="@/assets/img1.png" alt /> -->
    <img :src="shuffleCard" alt="予言結果" height="250px" />
    <p>
      このカードの意味が知りたい？
      ならば、
      <a href="#">ここ</a>に問い合わせてくれ...
    </p>
  </div>
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
      imgName: ""
    };
  },
  mounted() {
    let min = 0;
    let max = 2;
    this.cardNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  },
  computed: {
    shuffleCard: function() {
      return require(`../assets/img${this.cardNum}.png`);
      // return require(`../assets/img2.png`);
      // return "../assets/img1.png";
    }
  }
};
</script>