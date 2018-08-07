<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <audio-mp3></audio-mp3>
  </div>
</template>

<script>
import AudioMp3 from './components/media/music/audio'

export default {
  name: 'app',
  components: {
    AudioMp3
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: arial,sans-serif;
}
a {
  text-decoration: none;
}
.van-field .van-cell__title {
  max-width: 50px !important;
  padding-left : .3rem;
}
</style>
