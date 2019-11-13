<template>
  <div class="home">
    <div id="nav">
      <div>副中心-首页</div>
      <router-link class="nav-tabs" to="/planMap">规划一张图</router-link>
      <router-link class="nav-tabs" to="/assess">实时评估</router-link>
      <router-link class="nav-tabs" to="/manage">管理审批</router-link>
      <router-link class="nav-tabs" to="/bigData">大数据</router-link>
      <router-link class="nav-tabs" to="/real">虚拟现实</router-link>
      <router-link class="nav-tabs" to="/mind">人工智能</router-link>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style type="text/css" scoped>
	#nav {
	  padding: 30px;
	}

	#nav a {
	  font-weight: bold;
	  color: #2c3e50;
	}

	#nav a.router-link-exact-active {
	  color: #42b983;
	}
	.nav-tabs {
		margin-left: 20px;
	}
</style>