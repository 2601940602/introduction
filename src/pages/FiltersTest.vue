<!--过滤器-->
<!--知识点
关键字:filters
作用:格式化变量内容的输出，（日期格式化,字母大小写，数字再计算等等）在显示是能使用，不能改变变量的值-->
<template>
	<div id="app">
		<p>{{message}}</p>
		<p>{{message | toupper}}</p>
		<p>{{num}}的换算成百分数为{{num | topercentage}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'hello vue word!',
				num: .3,
				
			}
		},
		filters: {
			toupper: function(value) {
			
				return value.toUpperCase();//字符串转换为大写
			},
			topercentage: function(value) {
				return value * 100 + '%'
			}
		}
	}
</script>

<style>

</style>