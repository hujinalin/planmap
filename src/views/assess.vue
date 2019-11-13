<template>
  <div class="assess">
  	<div @click='back'>后退</div>
    <h1>实时评估</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'assess',
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