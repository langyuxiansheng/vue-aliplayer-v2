<template>
    <div id="app">
        <template v-if="show">
            <vue-aliplayer-v2 ref="VueAliplayerV2" id="player-1194076936807170050" :options="options" />
        </template>
        <p class="remove-text" v-else>播放器已销毁!</p>
        <div class="player-btns">
            <span @click="play()">播放</span>
            <span @click="pause()">暂停</span>
            <span @click="replay()">重播</span>
            <span @click="getCurrentTime()">播放时刻</span>
            <span @click="show = !show">{{ show ? '销毁' : '重载' }}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            options: {
                source:'//player.alicdn.com/video/aliyunmedia.mp4'
            },
            show: true
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
        }
    }
}
</script>
<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
.remove-text{
    text-align: center;
    padding: 20px;
    font-size: 24px;
}
.player-btns{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
