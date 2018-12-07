<template>
  <div id="demo">
    <div class="myDemo">
      <h1>第一课</h1>
      <div class="tab">
        <!-- tab组件需要传值tabs和currentTabComponent，currentTabComponent为某个tab页 -->
        <tab :tabs="tabs" :currentTabComponent.sync="currentTabComponent">
          <template slot="tabPage">
            <component v-bind:is="currentTabComponent"></component>
          </template>
        </tab>
      </div>
      <p>内容</p>
    </div>
  </div>
</template>
<script>
import tab from '@/components/tab/tab'
export default {
    data () {
        return {
          currentTabComponent: 'tab1',
          // tab根据既定格式定义
          tabs: [
            {
              id: 'tab1',
              desc: '首页'
            },
            {
              id: 'tab2',
              desc: '联系我们'
            },
            {
              id: 'tab3',
              desc: '与我相关'
            }
          ]
        }
    },
    components: {
      tab,
      // 每个tab页命名和data中tabs.id对应
      'tab1': () => import('@/components/tab/tab1.vue'),
      'tab2': () => import('@/components/tab/tab2.vue'),
      'tab3': () => import('@/components/tab/tab3.vue')
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style lang="less" scoped>
@r: 100rem;
#demo{
  background-color: #fff;
  .myDemo{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    h1{
      text-align: center;
    }
    .tab{
      margin: 20px 0;
    }
  }
}
</style>
