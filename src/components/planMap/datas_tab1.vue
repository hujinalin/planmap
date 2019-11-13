<template>
  <div>
	  <div class='controls'>
	  	<div class='search'>
	  		<i class="el-icon-search search-icon"></i>
	  		<input type="" name="" placeholder="搜索...">
	  	</div>
	  </div>
  </div>
</template>
<script>
  export default {
    name: 'datas_tab1',
    components: {
    },
    data(){
      return {
      }
    },
    created: function(){
      // console.log(this.$store.state.planMap.data)
    },
    methods: {
    }
  }  
</script>

<style type="text/css" scoped>
.controls {
	text-align: left;
}
.search {
	display: inline-block;
	width: 70%;
}
.search>input {
	border: 0;
	outline: none;
	border-bottom: 1px solid #ccc;
	background: rgba(0,0,0,0);
}
.search-icon {
	cursor: pointer;
	font-size: 20px;
	vertical-align: middle;
}
</style>