<template>
  <div class="list">
   <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="标题">
            <span>{{ props.row.title }}</span>
          </el-form-item>
          <el-form-item label="心情">
            <span>{{ props.row.mood }}</span>
          </el-form-item>
          <el-form-item label="内容">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="标题"
      prop="title">
    </el-table-column>
    <el-table-column
      label="心情"
      prop="mood">
    </el-table-column>
		<el-table-column
			label="操作">
			 <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" class="update" size="small">编辑 |</el-button>
				<el-button type="text" size="small" class="delete">| 删除</el-button>
      </template>
		</el-table-column>
		<el-table-column
			label="">
		</el-table-column>
  </el-table>
	 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'diaryList',
  data() {
		return {
			tableData5: [{
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
			}],
			currentPage3: 5
		}
	},
	methods: {
		handleClick(row) {
			console.log(row);
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list{
		width: 1200px;
		margin: 0 auto;
		border: 1px solid #eee;
	}
.demo-table-expand {
	font-size: 0;
}
.demo-table-expand label {
	width: 90px;
	color: #99a9bf;
}
.demo-table-expand .el-form-item {
	margin-right: 0;
	margin-bottom: 0;
	width: 100%;
}
.update{
	color: rgb(255, 208, 75);
}
.update>span{
	border-right: 1px solid #000;
}
.delete{
	color: #d22330;
}
.el-pagination{
	padding: 20px 50px 50px 50px;
	text-align: right;
	color: #666;
}
.el-pager li {
    font-size: 12px;
}
</style>
