<template>
	<div id="app">
	<!--<el-input v-model="this.quantity"></el-input>-->
	<h1 @chenge="chengeCount">有{{this.quantity}}苹果</h1>
	
</div>
</template>

<script>
	export default {
		name: 'apple',
		props: ['quan','tity'],
		data() {
			return{
				
			}
		},
	computed: {
		quantity: function(){
			console.log("this.quan");
			console.log(this.quan);
		    console.log("this.tity");
			console.log(this.tity);
			if(this.tity!=null){
				return this.tity;
			}else{
			return this.quan;
			}
		}
	},
	methods: {
		
	}
	
	}

</script>

<style>
</style>