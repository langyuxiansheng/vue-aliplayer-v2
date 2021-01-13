<template>
    <div id="app">
        <template v-if="!isShowMultiple && show">
            <vue-aliplayer-v2 :source="source" ref="VueAliplayerV2" :options="options"/>
        </template>
        <div v-if="isShowMultiple && show" class="show-multiple">
            <template v-for="x in 5">
                <vue-aliplayer-v2 class="multiple-player" :key="x" :source="source" ref="VueAliplayerV2" :options="options" />
            </template>
        </div>
        <p class="remove-text" v-if="!show">播放器已销毁!</p>
        <div class="player-btns">
            <template v-if="!isShowMultiple && show">
                <span @click="play()">播放</span>
                <span @click="pause()">暂停</span>
                <span @click="replay()">重播</span>
                <span @click="getCurrentTime()">播放时刻</span>
                <span @click="getStatus()">获取播放器状态</span>
            </template>
            <span @click="show = !show">{{ show ? '销毁' : '重载' }}</span>
            <span @click="options.isLive = !options.isLive">{{ options.isLive ? '切换普通模式' : '切换直播模式' }}</span>
            <span @click="showMultiple()">{{isShowMultiple ? '显示1个播放器' : '显示多个播放器'}}</span>
        </div>
        <div class="source-box">
            <span class="source-label">选择播放源(支持动态切换):</span>
            <select v-model="source" name="source" id="source">
                <option value="//player.alicdn.com/video/aliyunmedia.mp4">播放源1</option>
                <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4">播放源2</option>
                <option value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888">播放源3</option>
                <option value="//ivi.bupt.edu.cn/hls/cctv1.m3u8">直播播放源4</option>
            </select>
        </div>
        <div class="source-box">
            <span class="source-label">输入播放源(支持动态切换):</span>
            <input class="source-input" type="text" v-model="source">
        </div>
        <div class="source-box">
            <span class="source-label">指定为flash:</span>
              <select v-model="options.useFlashPrism">
                <option :value="true">是</option>
                <option :value="false">否</option>
            </select>
        </div>
        <div class="source-box">
            <span class="source-label">禁止用户拖动(仅flash有效):</span>
              <select v-model="options.disableSeek">
                <option :value="true">是</option>
                <option :value="false">否</option>
            </select>
        </div>
    </div>
</template>
<script>
// import VueAliplayerV2 from '../packages';
export default {
    // components:{ VueAliplayerV2 },
    data(){
        return {
            options: {
                // source:'//player.alicdn.com/video/aliyunmedia.mp4',
                isLive: !true,   //切换为直播流的时候必填
                skinLayout: [
                {
                    'name': 'bigPlayButton',
                    'align': 'blabs',
                    'x': 30,
                    'y': 80
                },
                {
                    'name': 'infoDisplay'
                },
                {
                    'name': 'controlBar',
                    'align': 'blabs',
                    'x': 0,
                    'y': 0,
                    'children': [
                        {
                            'name': 'liveDisplay',
                            'align': 'tlabs',
                            'x': 15,
                            'y': 6
                        },
                        {
                            'name': 'fullScreenButton',
                            'align': 'tr',
                            'x': 10,
                            'y': 10
                        },
                        {
                            'name': 'volume',
                            'align': 'tr',
                            'x': 5,
                            'y': 10
                        }
                    ]
                }]
                // useFlashPrism: false,    //指定为flash
                // disableSeek: true //禁用进度条的Seek，默认值为false
            },
            source: '//player.alicdn.com/video/aliyunmedia.mp4',
            // source: '//ivi.bupt.edu.cn/hls/cctv1.m3u8',
            show: true,
            isShowMultiple: false,
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
            // this.$refs.VueAliplayerV2.getCurrentTime();
            this.source = 'http://ivi.bupt.edu.cn/hls/cctv1.m3u8';
        },

        getStatus(){
           const status =  this.$refs.VueAliplayerV2.getStatus();
           console.log(`getStatus:`, status);
           alert(`getStatus:${status}`);
        },

        showMultiple(){
            this.isShowMultiple = !this.isShowMultiple;
        }
    }
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
}
.remove-text{
    text-align: center;
    padding: 20px;
    font-size: 24px;
}
.show-multiple{
    display: flex;
    .multiple-player{
        width: calc(100% / 4);
        margin: 20px;
    }
}
.player-btns{
    width: 100%;
    display: flex;
    justify-content: center;
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
        margin: 5px;
        cursor: pointer;
    }
}
.source-box{
    padding: 5px 10px;
    margin-bottom: 10px;
    .source-label{
        margin-right: 20px;
        font-size: 16px;
        display: block;
    }
    #source{
        margin-top: 10px;
    }
    .source-input{
        margin-top: 10px;
        padding: 5px 10px;
        width: 80%;
        border: 1px solid #ccc;
    }
}
</style>
