<template>
  <v-navigation-drawer absolute v-model="drawer" class="hidden-lg-and-up">
    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="movelink(item.link)">
        <!-- <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>-->

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "アバウトまろう", link: "/about" },
        { title: "今のあなたの運勢", link: "/temphor" }
        // { title: "占い実績", link: "/performance" },
        // { title: "twitter", link: "#" }
      ],
      drawer: true
    };
  },
  methods: {
    movelink(link) {
      this.$router.push({ path: link });
    }
  }
};
</script>