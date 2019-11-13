<template>
  <div>
    <div class='aside'>
      <el-row class='tabs'>
        <el-col class='tab' :span='8' v-for='(tab, index) in tabs' :class='{"tab-select": tabIndex === index}'><p @click='setTabIndex(index)'>{{tab}}</p></el-col>
      </el-row>
      <tab1 class='tab-con' v-if='tabIndex === 0'></tab1>
      <tab2 class='tab-con' v-else-if='tabIndex === 1'></tab2>
      <tab3 class='tab-con' v-else-if='tabIndex === 2'></tab3>
    </div>
    <div class='main'>data main</div>
  </div>
</template>
<script>
  import tab1 from '@/components/planMap/datas_tab1.vue'
  import tab2 from '@/components/planMap/datas_tab2.vue'
  import tab3 from '@/components/planMap/datas_tab3.vue'
  export default {
    name: 'datas',
    components: {
      tab1,
      tab2,
      tab3,
    },
    data(){
      return {
        tabIndex: 0,
        tabs: ['数据资源','图层控制','底图设置']
      }
    },
    created: function(){
      // console.log(this.$store.state.planMap.data)
    },
    methods: {
      setTabIndex(index){
        this.tabIndex = index;
      }
    }
  }  
</script>

<style type="text/css" scoped>
  .aside {
    width: 25%;
    height: 100%;
    background: rgba(255,255,255,.8);
    position: absolute;
  }
  .tabs {
    background: #fff;
  }
  .tab {
    font-size: 14px;
    cursor: pointer;
  }
  .tab>p {
    padding: 10px 0;
  }
  .tab-select {
    color: #1B1464;
    border-bottom: 2px solid #1B1464;
    font-weight: bold;
  }
  .tab-con {
    padding: 20px 15px;
  }
  .main {
    height: 100%;
    background: green;
  }
</style>