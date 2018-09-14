<template>
  <div class="statistic">
    <echartsCircle></echartsCircle>
    <!--<hr color="#eee" />-->
  </div>
</template>

<script>
  import echartsCircle from './echartsCircle.vue'
	export default {
		name: 'statistic',
		data() {
		 	return {

			}
		},
    components: {
      echartsCircle
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.statistic{
		width: 1200px;
		margin: 0 auto;
		border: 1px solid #eee;
    text-align: center;
	}
</style>
