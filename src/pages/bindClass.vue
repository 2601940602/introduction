<!--class绑定
知识点:
关键字:v-bind:class
为html标记绑定样式单class属性 使用布尔值规定class是否可用-->
<template>
	<div id="app">
	<div v-bind:class="{active:isActive}">红色文本1</div>
	<div :class="{active:isActive}">红色文本2</div>
	<el-button @click="btnClick">改变class吧</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isActive: true,
			}
		},
		methods: {
			btnClick: function(){
				this.isActive = !this.isActive;//对其取反
			}
		}
	}
</script>

<style>
	.active{
		color:red;
	}
</style>