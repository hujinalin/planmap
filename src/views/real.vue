<template>
  <div class="real">
  	<div @click='back'>后退</div>
    <h1>虚拟现实</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'real',
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