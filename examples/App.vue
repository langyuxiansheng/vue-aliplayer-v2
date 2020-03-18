<template>
    <div id="app">
        <template v-if="show">
            <vue-aliplayer-v2 :source="source" ref="VueAliplayerV2" id="player-1194076936807170050" :options="options" />
        </template>
        <p class="remove-text" v-else>播放器已销毁!</p>
        <div class="player-btns">
            <span @click="play()">播放</span>
            <span @click="pause()">暂停</span>
            <span @click="replay()">重播</span>
            <span @click="getCurrentTime()">播放时刻</span>
            <span @click="show = !show">{{ show ? '销毁' : '重载' }}</span>
        </div>
        <div class="source-box">
            <span class="source-label">选择播放源(支持动态切换):</span>
            <select v-model="source" name="source" id="source">
                <option value="//player.alicdn.com/video/aliyunmedia.mp4">播放源1</option>
                <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4">播放源2</option>
                <option value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888">播放源3</option>
            </select>
        </div>
        <div class="source-box">
            <span class="source-label">输入播放源(支持动态切换):</span>
            <input class="source-input" type="text" v-model="source">
        </div>
    </div>
</template>
<script>
// import VueAliplayerV2 from '../packages';
export default {
    // components:{ VueAliplayerV2: VueAliplayerV2.Player },
    data(){
        return {
            options: {
                source:'//player.alicdn.com/video/aliyunmedia.mp4'
            },
            source: '//player.alicdn.com/video/aliyunmedia.mp4',
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
    margin-bottom: 20px;
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
