
<template>
	<div class="diary-insert">
		<!-- 选择日期 -->
		<div class="block">
			<span class="demonstration">日期： </span>
			<el-date-picker
				v-model="value2"
				align="right"
				type="date"
				class="input-width"
				placeholder="选择日期"
				format="yyyy 年 MM 月 dd 日"
				value-format="yyyy-MM-dd"
				:picker-options="pickerOptions1">
			</el-date-picker>
		</div>
		<!-- 输入标题 -->
		<div class="block">
			<span class="demonstration">标题： </span>
			<el-input
				placeholder="请输入内容"
				v-model="input10"
				class="input-width"
				clearable>
			</el-input>
		</div>
		<!-- 选择心情 -->
		<div class="block">
			<span class="demonstration">心情： </span>
			<el-rate
				v-model="value3"
				class="input-width"
				:texts="textArray"
				show-text>
			</el-rate>
		</div>
		<!-- 输入内容 -->
		<div class="block">
			<span class="demonstration">内容： </span>
			<el-input
				type="textarea"
				:rows="4"
				class="input-width"
				placeholder="请输入内容"
				v-model="textarea">
			</el-input>
		</div>
	</div>                        
</template>

<script>
export default {
  name: 'diaryInsert',
  data() {
		return {
			pickerOptions1: {
// 				disabledDate(time) {
// 					return time.getTime() < Date.now();
// 				},
				shortcuts: [{
					text: '今天',
					onClick(picker) {
						picker.$emit('pick', new Date());
					}
				}, {
					text: '昨天',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24);
						picker.$emit('pick', date);
					}
				}, {
					text: '明天',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() + 3600 * 1000 * 24);
						picker.$emit('pick', date);
					}
				}],
			},
			value2: '',
			input10: '',
			value3: null,
			textArray:['非常不开心', '不开心', '正常', '开心', '非常开心'],
			textarea: '' 
		}
	}
}
</script>

<style scoped>
	.diary-insert{
		width: 1200px;
		margin: 0 auto;
		border: 1px solid #eee;
	}
	.block{
		margin: 30px 20px;
	}
	.demonstration{
		width: 100px;
		display: inline-block;
		text-align: right;
		margin-right: 20px;
	}
	.input-width{
		width: 440px;
		display: inline-block;
		vertical-align: middle;
	}
	.block:last-child{
		margin-bottom: 100px;
	}
</style>
