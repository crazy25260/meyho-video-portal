<template>
  <md-card
    class="md-card-blog"
    :class="{
      'md-card-plain': cardPlain,
      'md-card-blogpost': type === 'horizontal'
    }"
  >
    <template v-if="type !== 'horizontal'">
      <md-card-header
        class="md-card-header-image"
        :shadow-normal="shadowNormal"
        :no-colored-shadow="noColoredShadow"
      >
        <a @click="goToPlayDetail(card_data)">
          <img class="img" :src="cardImage" />
          <div v-if="$slots.cardTitleHeader" class="card-title">
            <slot name="cardTitleHeader" />
          </div>
        </a>
        <div
          v-if="!noColoredShadow && !shadowNormal"
          class="colored-shadow"
          :style="shadowImageBlog(cardImage)"
        />
      </md-card-header>

      <md-card-content v-if="$slots.cardContent">
        <slot name="cardContent" />
      </md-card-content>

      <md-card-actions v-if="$slots.cardAction">
        <slot name="cardAction" />
      </md-card-actions>
    </template>

    <template v-else>
      <div class="md-layout" :class="{ 'reverse-row': reverseRow }">
        <div class="md-layout-item md-size-45 md-xsmall-size-100">
          <md-card-header
            class="md-card-header-image"
            :shadow-normal="shadowNormal"
            :no-colored-shadow="noColoredShadow"
          >
            <a href="javascript:void(0)">
              <img class="img" :src="cardImage" />
              <div v-if="$slots.cardTitleHeader" class="card-title">
                <slot name="cardTitleHeader" />
              </div>
            </a>
            <div
              v-if="!noColoredShadow && !shadowNormal"
              class="colored-shadow"
              :style="shadowImageBlog(cardImage)"
            />
          </md-card-header>
        </div>
        <div class="md-layout-item md-size-55 md-xsmall-size-100">
          <md-card-content v-if="$slots.cardContent">
            <slot name="cardContent" />
          </md-card-content>
        </div>
      </div>
    </template>
  </md-card>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    type: String,
    reverseRow: Boolean,
    cardImage: String,
    shadowNormal: {
      type: Boolean,
      default: false
    },
    cardPlain: Boolean,
    noColoredShadow: {
      type: Boolean,
      default: false
    },
    card_data: {
      type: Object
    }
  },
  methods: {
    shadowImageBlog(image) {
      return {
        backgroundImage: `url(${image})`,
        opacity: 1
      };
    },
    goToPlayDetail(card_data) {
      let nav_categories = [
        {
          id: "100",
          name: "首页"
        },
        {
          id: "101",
          name: "电影"
        },
        {
          id: "102",
          name: "美剧"
        },
        {
          id: "103",
          name: "韩剧"
        },
        {
          id: "110",
          name: "更多",
          children: [
            {
              id: "111",
              name: "国产剧"
            },
            {
              id: "112",
              name: "动漫"
            },
            {
              id: "113",
              name: "综艺"
            },
            {
              id: "114",
              name: "日剧"
            }
          ]
        }
      ];
      this.$router.push({
        path: "/play_detail",
        query: { nav_categories: nav_categories, card_data: card_data }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.reverse-row {
  flex-direction: row-reverse;
}

.img {
  height: 14rem;
  min-width: 7rem;
}

.md-card-blog {
  margin-top: 0;
}

.md-card .md-card-header-image {
  margin: 0;
}
</style>
