<template>
  <slide class = "homeSlide">
    <slide-item v-for="item in banners" :key = "item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load = "imageLoad">
      </a>
    </slide-item>
  </slide>
</template>

<script>
  import {Slide, SlideItem} from 'components/common/slide'

  export default {
    name: "HomeSlide",
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      //轮播图四张，发送一次就够了
      imageLoad(){
        if (!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    },
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
