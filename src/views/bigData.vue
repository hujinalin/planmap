<template>
  <div class="big-data">
  	<div @click='back'>后退</div>
    <h1>大数据</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'bigData',
  components: {
  },
  data(){
  	return {

  	}
  },
  created: function(){

  },
  methods: {
  	back(){
  		this.$router.go(-1)
  	}
  }
}
</script>