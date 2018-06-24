<!--class绑定
知识点:
关键字:v-bind:class
为html标记绑定样式单class对象 使用布尔值规定class是否可用-->
<template>
	<div id="app">
	<div :class="isActive">红色文本1</div>
	<el-button @click="btnClick">改变class吧</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isActive: {
					active: true,
					big: true,
				},
			}
		},
		methods: {
			btnClick: function(){
				this.isActive.big = !this.isActive.big;//对其取反
			}
		}
	}
</script>

<style>
	.active {
		color: red;
	}
	.big {
		font-size: 30px;
	}
</style>