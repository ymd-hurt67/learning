<template>
  <div id="tab">
    <!-- 标题导航 -->
    <ul class="tabNav">
      <li v-for="(item, index) in tabs" :class="{'active' : tabIndex === index}" @click="changeTab(index)">{{item.desc}}</li>
    </ul>
    <!-- slot中间表示插槽内容为空时显示的默认值 -->
    <!-- 每一个tab页的展示， keep-alive使得标签的组件实例能够在它们第一次被创建的时候缓存下来-->
    <div class="content">
      <keep-alive>
        <transition :name="transitionName">
          <slot name="tabPage" class="tabPage">
            <p class="defaultText">加载tab页失败，请重试...</p>
          </slot>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        tabIndex: 0,
        transitionName: ''
      }
    },
    props: {
      tabs: {
        type: Array,
        default: ['tab1', 'tab2', 'tab3']
      },
      currentTabComponent: {
        type: String
      }
    },
    methods: {
      // 改变tab卡片
      changeTab (params) {
        let that = this;
        that.tabIndex = params;
        that.$emit('update:currentTabComponent', that.tabs[params].id);
        // 在改变哪个组件显示时，高度变化，所以需要动态更改父元素高度，但是更改父元素高度时有可能子组件还没绘制，导致高度不准确
        setTimeout(function () {
          that.resetCss();
        }, 600)
      },
      // 重置tab页的高度
      resetCss () {
        document.querySelector('.content').style.height = document.querySelector('.content').firstElementChild.offsetHeight + 'px';
      }
    },
    watch: {
      // 监听当前显示下标的变化，当目的值>原始值，向右滑动，反之向左滑动
      tabIndex (to, from) {
        let that = this;
        that.transitionName = (to > from) ? 'forward' : 'backward';
      }
    },
    mounted () {
      // 因为用absolute使子组件脱离文档流，但是希望父元素可以根据子元素的高度自适应高度，目前的做法是在onload和resize时获取子元素高度赋值给父元素
      let that = this;
      window.addEventListener('load', () => {
        that.resetCss();
      })
      window.addEventListener('resize', () => {
        that.resetCss();
      })
    }
}
</script>
<style lang="less" scoped>
#tab{
  background: #fff;
  .tabNav{
    width: 100%;
    display:flex;
    flex-direction:row;
    li{
      display: inline-block;
      background-color: lightgray;
      margin-right: 1%;
      flex:1;
      color: #000;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 15px 15px 0 0;
      cursor: pointer;
      transition: all 0.5s ease;
      position: relative;
      top:20px;
    }
    li:last-child{
      margin-right: 0;
    }
    li:hover, .active{
      background-color: #000;
      color: #fff;
      height: 70px;
      transition: all 0.5s;
      line-height: 70px;
      top:0;
    }
  }
  .content{
    position: relative;
    width: 100%;
    overflow: hidden;
    .defaultText{
      padding: 20px 0;
      width: 100%;
      color: #555;
      text-align: center;
      border: 1px #ccc dotted;
    }
    .forward-enter-active,.forward-leave-active{
      transition: 0.5s all ease;
      transform: translateX(0);
    }
    .forward-enter{
        transform: translateX(100%);
    }
    .forward-enter-to{
        transform: translateX(0);
    }
    .forward-leave {
        transform: translate3d(0, 0, 0);
    }
    .forward-leave-to {
        transform: translate3d(-100%, 0, 0);
    }
    .backward-enter-active, .backward-leave-active {
      transition: all 0.5s;
    }
    .backward-leave {
      transform: translate3d(0, 0, 0);
    }
    .backward-leave-to {
      transform: translate3d(100%, 0, 0);
    }
    .backward-enter {
      transform: translate3d(-100%, 0, 0);
    }
    .backward-enter-to {
      transform: translate3d(0, 0, 0);
    }
  }
  .content>:first-child{
      position: absolute;
  }
}
</style>
