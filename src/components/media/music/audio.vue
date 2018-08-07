<template>
    <div>
        <!-- <p>{{ Mp3Playing }}</p> -->
        <audio :src="playMp3Obj.mp3_url" controls="controls" v-show="isHide" loop="loop" preload="auto" ref="audio"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed : mapState({
        Mp3Playing : state => state.global.Mp3Playing,
        playMp3Obj : state => state.global.playMp3Obj
    }),
    watch : { 
        playMp3Obj : {
            handler(val, oldval) {
                if(val == 'undefined' || val == null) {
                    console.log('init')
                } else {
                    this.$nextTick(()=>{
                        let audioPlayer = this.$refs.audio
                        audioPlayer.play()
                    })
                }
            },
            deep: true
        }
    },
    data() {
        return {
            isHide : false
        }
    },
    methods : {
        PlayMusic () {
            if(this.playMp3Obj.mp3_url != '') {
                let audioPlayer = this.$refs.audio
                audioPlayer.play()
            }
        },
        PauseMusic () {
            console.log('pause')
            let audioPlayer = this.$refs.audio
            audioPlayer.pause()
        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>
