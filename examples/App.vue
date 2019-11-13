<template>
    <div id="app">
        <vue-aliplayer-v2 ref="VueAliplayerV2" id="player-1194076936807170050" :options="{source:'rtmp://182.145.195.238:1935/hls/1194076936807170050'}" />
        <vue-aliplayer-v2 ref="VueAliplayerV2" id="player-1194076936807170051" :options="{source:'rtmp://182.145.195.238:1935/hls/1194076936807170051'}" />
        <vue-aliplayer-v2 ref="VueAliplayerV2" id="player-1194076936807170052" :options="{source:'rtmp://182.145.195.238:1935/hls/1194076936807170052'}" />
        <button @click="play()">播放</button>
        <button @click="pause()">暂停</button>
        <button @click="replay()">重播</button>
        <button @click="getCurrentTime()">播放时刻</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: null,
            options:{
                isSign: true, //签名模式 [Boolean] 默认为非签名模式,有线框, 当设置为true的时候没有任何线框
                isShowBorder: false, //是否显示边框 [可选]
            },
            player: null
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
.sign-canvas{
    display: block;
    margin: 0 auto;
    border: 1px dashed #f00;
}
.view-image{
    display: block;
    margin: 20px auto;
}
.sign-btns{
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    #clear,
    #clear1,
    #save {
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
