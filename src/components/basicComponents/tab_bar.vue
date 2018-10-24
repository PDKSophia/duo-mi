<template>
  <div>
    <van-tabbar >
      <van-tabbar-item icon="home" dot @click="handleToLink('', 0)">首页</van-tabbar-item>
      <van-tabbar-item icon="points" @click="handleToLink('media', 1)">书影音</van-tabbar-item>
      <van-tabbar-item icon="contact" info="99" @click="handleToLink('user', 2)">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    current_active : state => state.global.current_active
  }),
  data () {
    return {
      active : 0
    }
  },
  methods : {
    ...mapActions([
      'setCurrentActive'
    ]),
    handleToLink (type, active_index) {
      this.$router.push({
        path: `/${type}`
      })
      this.setCurrentActive(active_index)
    }
  },
  mounted () {
    this.active = this.current_active
  }
}
</script>

<style>

</style>
