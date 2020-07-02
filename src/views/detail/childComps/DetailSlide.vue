<template>
	<Slide class = "detailSlide">
		<SlideItem v-for ="item in topImgs">
				<img :src="item" alt="">
		</SlideItem>
	</Slide>
</template>
<script>
	import {Slide, SlideItem} from 'components/common/slide'
	export default{
		name:'DetailSlide',
		props:{
			topImgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Slide,
		  SlideItem
		}
	}
</script>
<style scoped>
	.detailSlide{
		height: 300px;
		padding-top:40px;
	}
</style>