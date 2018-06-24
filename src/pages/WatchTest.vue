<!--观察属性
知识点
关键字:watch
当变量发生变化时，进行相应的处理-->
<template>
	<div id="app">
	<p><input v-model="price"/></p>
	<p>原价为{{price}}</p>
	<p>含税为{{priceInTax}}</p>
	<p>人民币为{{priceChinaRMB}}</p>
	<p><input v-model="arry[0]"/></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				price: 0,
				priceInTax: 0,
				priceChinaRMB: 0,
				arry:[{name:'1',value:'123'}]
			}
		},
		watch: {
			price: function(newVal,oldVal){
				console.log('newVal');
				console.log(newVal);
				console.log('oldVal');
				console.log(oldVal);
				this.priceInTax = Math.round(this.price*1.08);
				this.priceChinaRMB = Math.round(this.price/16.75);
			},
			arry: function(newVal,oldVal){
				console.log('newVal');
				console.log(newVal);
			}
			
		}
	}
</script>

<style>
</style>