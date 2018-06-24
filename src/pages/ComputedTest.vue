<!--计算属性与计算属性的定义
知识点
关键字:computed  set
作用:用于处理原数据，便于第二次利用-->
<template>
	<div id="app">
		<p>原价为{{price}}日元</p>
		<p>现价为{{priceInTax}}日元</p>
		<p>换算成人民币{{priceChinaRMB}}</p>
		<p><el-button @click="btnClick(10)">点击换算</el-button></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				price: 30000,
				priceInTax:1 
			}
		},
		computed: {
//			priceInTax:{
//				get:function(){
//				return this.price*1.08;
//				},
//				set: function(value){
//					this.price = value / 1.08;
//				}
//			},
			priceChinaRMB: function(){
				return Math.round(this.priceInTax/16.75);
			}
//			priceChinaRMB:{
//				get: function(){
//					this.priceInTax = this.price/100;
//					console.log("this.priceInTax");
//					console.log(this.priceInTax);
//					return this.priceInTax;
//				},
//				set: function(value){
//					console.log(value);
//				}
//			}
////			priceChinaRMB(){
//				return this.priceInTax;
//			}
		},
		methods: {
			btnClick: function(newPrice){
				this.priceChinaRMB = newPrice*this.priceChinaRMB;
				console.log("this.priceChinaRMB");
				console.log(this.priceChinaRMB);
			}
		}
	}
	
</script>

<style>
</style>