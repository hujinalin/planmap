<template>
  <div class="mind">
  	<div @click='back'>后退</div>
    <h1>人工智能</h1>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'mind',
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