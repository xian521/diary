<template>
	<div id="app">
		<ul role="menubar" class="el-menu-demo el-menu--horizontal el-menu" style="background-color: rgb(84, 92, 100);">
			<li role="menuitem" class="el-menu-item">
				<img src="http://www.ghost64.com/qqtupian/zixunImg/local/2018/01/17/15161775048592.jpg" class="header">
			</li>
			<li role="menuitem" v-for="(item,index) in headers" class="el-menu-item" :class="{active:index==qwerqwre}" @click="goRouter(item.route,index)">{{ item.text }}</li>
		</ul>
		<router-view></router-view>
		<bottom></bottom>
	</div>
</template>

<script>
	import bottom from './components/bottom'
	export default {
		name: 'App',
		data() {
			return {
				headers: [{
						text: '日记列表',
						route: '/list'
					},
					{
						text: '写日记',
						route: '/insert'
					},
					{
						text: '统计分析',
						route: '/statistic'
					},
				],
				qwerqwre: 0
			};
		},
		methods: {
			goRouter(route, index) {
				this.qwerqwre = index;
				this.$router.push({
					path: route,
					query: {
						uid: "1111"
					}
				});
			}
		},
		components: {
			bottom
		}
	}
</script>

<style scoped="scoped">
	html,
	body {
		margin: 0;
	}

	#app {
		padding: 0px;
		margin: 0px;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border: hidden;
	}

	.header {
		width: 50px;
		height: 50px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
	}
	.el-menu-item{
		color: #fff;
	}
	.el-dropdown-menu__item--divided:before, 
	.el-menu, 
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, 
	.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, 
	.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
		background: transparent;
		color: rgb(255,188,0);
	}
	.active{
		color: rgb(255, 208, 75);
		border-bottom: 4px solid rgb(255, 208, 75);
	}
</style>
