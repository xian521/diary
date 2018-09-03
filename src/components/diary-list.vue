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
			label="操作" 
			prop="operation">
		</el-table-column>
		<el-table-column
			label="">
		</el-table-column>
  </el-table>
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
				operation: '编辑 | 删除'
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
				operation: '编辑 | 删除'
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
				operation: '编辑 | 删除'
			}, {
				id: '1',
				date: '2018-08-30',
				title: '今天下雨了,不开心',
				mood: '良好',
				desc: '今天停网了,想么怎么办,技术的空间发拉斯科荆防颗粒技术了解分手快乐尖峰时刻了京东方加速度快了放假奥斯卡逻辑回归卡号噶几打飞机撒龙卷风',
				operation: '编辑 | 删除'
			}]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
