<template>
  <div class="plan-map" ref='planmap'>
  	<el-container>
      <el-header class='header' ref='header'>
        <el-row class='header-row'>
          <el-col class='header-l' :span='6'><img class='logo' src="../img/u26.png"><span class='title'>规划一张图</span></el-col>
          <el-col :span='18' class='header-r nav-tabs'>
            <div v-for='(tab, index) in tabs' class='nav-tab' :class="{'tab-select':tabIndex === index}" @click='setTabIndex(index)'>
              <img class='logo' :src="tab.img">
              <p>{{tab.name}}</p>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <datas style='position: relative;' :style='{"height":h}' v-if='tabIndex === 0'></datas>
      <special style='position: relative;' :style='{"height":h}' v-else-if='tabIndex === 1'></special>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import datas from '@/components/planMap/datas.vue'
import special from '@/components/planMap/special.vue'
export default {
  name: 'planMap',
  components: {
    datas,
    special
  },
  data(){
  	return {
      h: 'auto',
      tabIndex: 0,
      tabs: [
        {
          name: '数据资源',
          img: require('../img/u26.png')
        },
        {
          name: '专题资源',
          img: require('../img/u26.png')
        }
      ]
  	}
  },
  created: function(){
    // console.log(this.$store.state.planMap.data)
  },
  mounted: function(){
    //计算页面高度减去header头高度
    this.h = (this.$refs.planmap.clientHeight - this.$refs.header.$el.clientHeight) + 'px';
  },
  methods: {
  	back(){
  		this.$router.go(-1)
  	},
    setTabIndex(index){
      this.tabIndex = index;
    }
  }
}
</script>
<style type="text/css" scoped="">
  .plan-map {
    height: 100vh;
  }
  .header {
    padding: 0;
    background: rgba(13, 45, 125, 0.9);
  }
  .header-row {
    height: 100%;
  }
  .header-l {
    margin-top: 17px;
  }
  .header-r {
    height: 100%;
  }
  .logo {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .title {
    font-size: 18px;
    color: #fff;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: bold;
    margin-left: 8px;
  }
  .nav-tabs {
    text-align: left;
  }
  .nav-tab {
    height: 100%;
    display: inline-block;
    color: #fff;
    font-size: 13px;
    text-decoration: none;
    text-align: center;
    padding: 0 20px;
    cursor: pointer;
  }
  .nav-tab>img {
    margin-top: 6px;
  }
  .tab-select {
    background: #1B1464;
    font-weight: bold;
  }
</style>