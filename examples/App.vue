<template>
    <div id="app">
        <vue-aliplayer-v2 ref="VueAliplayerV2" id="player-1194076936807170050" :options="options" />
        <div class="player-btns">
            <span @click="play()">播放</span>
            <span @click="pause()">暂停</span>
            <span @click="replay()">重播</span>
            <span @click="getCurrentTime()">播放时刻</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            options: {
                source:'//player.alicdn.com/video/aliyunmedia.mp4'
            }
        }
    },

    methods:{

        play(){
            this.$refs.VueAliplayerV2.play()
        },

        pause(){
            this.$refs.VueAliplayerV2.pause();
        },

        replay(){
            this.$refs.VueAliplayerV2.replay();
        },

        getCurrentTime(){
            this.$refs.VueAliplayerV2.getCurrentTime();
        },
    }
}
</script>
<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
.player-btns{
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    span {
        margin: 0 auto;
        display: inline-block;
        padding: 5px 10px;
        width: 150px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #eee;
        background: #e1e1e1;
        border-radius: 10px;
        text-align: center;
        margin: 20px auto;
        cursor: pointer;
    }
}
</style>
