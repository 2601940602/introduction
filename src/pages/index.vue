<template>
<el-container>
  <el-header class="test">Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
	export default {
		data() {
			return {

			}
		}

	}
</script>

<style>
@import "../assets/css/themes.css";
	 .el-header,
	 .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
 }
</style>