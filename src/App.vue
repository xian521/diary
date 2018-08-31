<template>
	<div id="app">
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
		    text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="0">
				<img class="header" src="http://www.ghost64.com/qqtupian/zixunImg/local/2018/01/17/15161775048592.jpg" />
			</el-menu-item>
			<el-menu-item index="1">日记列表</el-menu-item>
			<el-menu-item index="2">写日记</el-menu-item>
			<el-menu-item index="3">统计分析</el-menu-item>
		</el-menu>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>

<style scoped="scoped">
  html,body{
    margin: 0;
  }
	#app {
		padding:0px;
		margin:0px;
		position:absolute;
		top:0px;
		left:0px;
		width:100%;
		height:100%;
		border:hidden;
	}
	.header{
		width: 50px;
		height: 50px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
	}
</style>
