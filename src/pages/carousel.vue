<template>
	<div id="app" class="block">
		<el-carousel trigger="click" height="500px">
			<el-carousel-item v-for="(img,index) in imgList" :key="index">
				<img v-bind:src="img.url">
				<!--      	<img src="../assets/img/gakk2.jpeg" alt="" />这样写可以看到图片，证明路径没问题-->
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
					url:require("../assets/img/gakk2.jpeg")
					},
					{
						url:require("../assets/img/gakki.jpeg")
					},
					{
						url:require( "../assets/img/gakki3.jpeg")
					}
				]

			}
		}
	}
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>