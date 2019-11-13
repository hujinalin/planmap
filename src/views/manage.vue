<template>
  <div class="manage">
  	<div @click='back'>后退</div>
    <h1>管理审批</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'manage',
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