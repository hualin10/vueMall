<template>
  <slide class = "homeSlide">
    <slide-item v-for="item in banners" :key = "item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </slide-item>
  </slide>
</template>

<script>
  import {Slide, SlideItem} from 'components/common/slide'

  export default {
    name: "HomeSlide",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Slide,
      SlideItem
    }
  }
</script>

<style scoped>
  .homeSlide{
    padding-top: 44px
  }

</style>
