<template>
    <div :id="playerId"></div>
</template>
<script>
export default {
    name: 'VueAliplayerV2',
    props: {
        options: {  //配置项
            required: false,
            type: [Object],
            default: () => null
        },
        source: {  //播放源(此属性存在则优先于options.source) 动态切换,目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播rtmp流切换。
            required: false,
            type: [String],
            default: null
        },
        cssLink:{   //css版本源
            required: false,
            type: [String],
            default: `https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css`
        },
        scriptSrc:{ //js版本源
            required: false,
            type: [String],
            default: `https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js`
        }
    },
    data () {
        return {
            player: null,   //播放器实例
            playerId: `player-${Math.random().toString(36).substr(2).toLocaleUpperCase()}`,
            config:{
                id: null,  //播放器的ID
                width: '100%',
                autoplay: true,
                // isLive: true,
                //支持播放地址播放,此播放优先级最高
                // source: 'rtmp://182.145.195.238:1935/hls/1194076936807170050',
            },
            events:[
                /**
                 * 播放器视频初始化按钮渲染完毕。
                 * 播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。
                 * 播放器提供的方法需要在此事件发生后才可以调用。
                 */
                'ready',
                /**
                 * 视频由暂停恢复为播放时触发。
                 */
                'play',
                /**
                 * 视频暂停时触发。
                 */
                'pause',
                /**
                 * 能够开始播放音频/视频时发生，会多次触发，仅H5播放器。
                 */
                'canplay',
                /**
                 * 播放中，会触发多次。
                 */
                'playing',
                /**
                 * 当前视频播放完毕时触发。
                 */
                'ended',
                /**
                 * 直播流中断时触发。
                 * m3u8/flv/rtmp在重试5次未成功后触发。
                 * 提示上层流中断或需要重新加载视频。
                 * PS：m3u8一直自动重试，不需要上层添加重试。
                 */
                'liveStreamStop',
                /**
                 * m3u8直播流中断后重试事件，每次断流只触发一次。
                 */
                'onM3u8Retry',
                /**
                 * 控制栏自动隐藏事件。
                 */
                'hideBar',
                /**
                 * 控制栏自动显示事件。
                 */
                'showBar',
                /**
                 * 数据缓冲事件。
                 */
                'waiting',
                /**
                 * 播放位置发生改变时触发，仅H5播放器。
                 * 可通过getCurrentTime方法，得到当前播放时间。
                 */
                'timeupdate',
                /**
                 * 截图完成。
                 */
                'snapshoted',
                /**
                 * 全屏事件，仅H5支持。
                 */
                'requestFullScreen',
                /**
                 * 取消全屏事件，iOS下不会触发，仅H5支持。
                 */
                'cancelFullScreen',
                /**
                 * 错误事件。
                 */
                'error',
                /**
                 * 开始拖拽，参数返回拖拽点的时间。
                 */
                'startSeek',
                /**
                 * 完成拖拽，参数返回拖拽点的时间。
                 */
                'completeSeek'
            ],
        };
    },
    watch:{
        source(){ //监听播放源变化
            this.init();
        },

        options:{   //配置项是对象,只能深度监听
            handler(){
                this.init();
            },
            deep: true
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.init();
        });
    },
    updated(){
        //重载播放器
        this.$nextTick(()=>{
            this.init();
        });
    },
    methods: {

        /**
         * 创建script和css
         * 加载Alipayer的SDK
         */
        init(){
            const linkID = 'app__aliplayer-min-css';
            const scriptID = 'app__aliplayer-min-js';
            const head = document.getElementsByTagName('head');
            const html = document.getElementsByTagName('html');
            let scriptTag = document.getElementById(scriptID);
            let linkIDTag = document.getElementById(linkID);
            if(!linkIDTag) {
                // console.log('linkIDTag');
                const link = document.createElement('link');
                link.type = 'text/css';
                link.rel = 'stylesheet';
                link.href = this.cssLink;
                link.id = linkID;
                // link.className = linkID;
                head[0].appendChild(link);
            }
            if(!scriptTag) {
                // console.log('scriptTag');
                scriptTag = document.createElement('script');
                scriptTag.type = "text/javascript";
                scriptTag.id = scriptID;
                // scriptTag.className = scriptID;
                scriptTag.src = this.scriptSrc;
                html[0].appendChild(scriptTag);
            } else {
                this.initPlayer();  //这样是为了兼容页面上有多个播放器
            }
            //兼容单页加载和硬加载
            scriptTag.addEventListener("load", () => {
                this.initPlayer();
            });
        },

        /**
         * 创建播放器
         * @description SDK文档地址:https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1084.131d1c4cJT7o5Z
         */
        initPlayer(){
            if(typeof window.Aliplayer != 'undefined') {
                const options = this.deepCloneObject(this.options);
                if(options){
                    for (const key in options) {
                        this.config[key] = options[key];
                    }
                }
                if(this.source) this.config.source = this.source; //播放源
                this.config.id = this.playerId; //赋值播放器容器id
                this.player && this.player.dispose();   //防止实例的重复
                this.player = Aliplayer(this.config);
                for(const ev in this.events){
                    this.player && this.player.on(this.events[ev],(e)=>{
                        // console.log(`object ${this.events[ev]}`,e);
                        this.$emit(this.events[ev],e);
                    });
                }
                //通过播放器实例的off方法取消订阅
                //player.off('ready',handleReady);
            }
        },

        /**
         * @return player 实例
         */
        getPlayer(){
            return this.player;
        },

        /**
         * 播放视频。
         */
        play(){
            // console.log(`播放视频。`);
            this.player && this.player.play();
        },

        /**
         * 暂停视频
         */
        pause(){
            // console.log(`暂停视频`);
            this.player && this.player.pause();
        },

        /**
         * 重播视频
         */
        replay(){
            // console.log(`重播视频`);
            this.player && this.player.replay();
        },

        /**
         * 跳转到某个时刻进行播放，time的单位为秒。
         * @param time
         * @return player
         */
        seek(time){
            // console.log(`跳转到某个时刻进行播放，time为${time}秒。`);
            this.player && this.player.seek(time);
        },

        /**
         * 获取当前的播放时刻，返回的单位为秒。
         * @return player
         */
        getCurrentTime(){
            // console.log(`获取当前的播放时刻，返回的单位为${this.player && this.player.getCurrentTime()}秒。`);
            return this.player && this.player.getCurrentTime();
        },

        /**
         * 获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取。
         * @return player
         */
        getDuration(){
            // console.log(`获取视频总时长，返回的单位为${this.player && this.player.getDuration()}秒。`);
            return this.player && this.player.getDuration();
        },

        /**
         * 获取当前的音量，返回值为0-1的实数。ios和部分android会失效。
         * @return player
         */
        getVolume(){
            // console.log(`获取当前的音量${this.player && this.player.getVolume()}。`);
            return this.player && this.player.getVolume();
        },

        /**
         * 设置音量，vol为0-1的实数，ios和部分android会失效。
         * @return player
         */
        setVolume(v){
            // console.log(`设置音量，vol为${v}。`);
            this.player && this.player.setVolume(v);
        },

        /**
         * 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。
         * 暂不支持直播rtmp流切换。
         * @return player
         */
        loadByUrl(url, time){
            // console.log(`直接播放视频url${url}，time为${time}。`);
            this.player && this.player.loadByUrl(url, time);
        },

        /**
         * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
         * @param vid 视频id
         * @param 播放凭证
         */
        replayByVidAndPlayAuth(vid, playauth){
            // console.log(`replayByVidAndPlayAuth vid${vid}，playauth为${playauth}。`);
            this.player && this.player.replayByVidAndPlayAuth(vid, playauth);
        },

        /**
         * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
         * @param vid 视频id
         * @param 播放凭证
         * @description 仅MPS用户时使用 仅MPS用户时使用 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion
         */
        replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion){
            // console.log(`replayByVidAndAuthInfo 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion`,vid, accId, accSecret, stsToken, authInfo, domainRegion);
            this.player && this.player.replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion);
        },

        /**
         * 设置播放器大小w，h可分别为400px像素或60%百分比。
         * @param w 宽度
         * @param h 宽度
         * @description chrome浏览器下flash播放器分别不能小于397x297。
         */
        setPlayerSize(w, h){
            // console.log(`设置播放器大小 宽度:${w},高度:${h}`);
            this.player && this.player.setPlayerSize(w, h);
        },

        /**
         * 手动设置播放的倍速，倍速播放仅H5支持。移动端可能会失效，比如android微信。
         * 倍速播放UI默认是开启的。
         * 如果自定义过skinLaout属性，需要添加speedButton项到数组里：
         * @param h 宽度
         * @description {name：“speedButton”，align：“tr”，x：10，y：23}
         */
        setSpeed(speed){
            // console.log(`手动设置播放的倍速:${speed}`);
            this.player && this.player.setSpeed(speed);
        },

        /**
         * 设置截图参数
         * @param width 宽度
         * @param height 高度
         * @param rate 截图质量
         */
        setSanpshotProperties(width, height, rate){
            // console.log(`设置截图参数:`,width, height, rate);
            this.player && this.player.setSanpshotProperties(width, height, rate);
        },

        /**
         * 播放器全屏，仅H5支持。
         */
        requestFullScreen(){
            // console.log(`播放器全屏，仅H5支持`);
            this.player && this.player.fullscreenService && this.player.fullscreenService.requestFullScreen();
        },

        /**
         * 播放器退出全屏，iOS调用无效，仅H5支持。
         */
        cancelFullScreen(){
            // console.log(`播放器全屏，仅H5支持`);
            this.player && this.player.fullscreenService && this.player.fullscreenService.cancelFullScreen();
        },

        /**
         * 获取播放器全屏状态，仅H5支持。
         */
        getIsFullScreen(){
            // console.log(`获取播放器全屏状态，仅H5支持。`,this.player && this.player.fullscreenService && this.player && this.player.fullscreenService.getIsFullScreen());
            return this.player && this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen();
        },

        /**
         * 获取播放器状态，包含的值,
         * @returns init ready loading play pause playing waiting error ended
         */
        getStatus(){
            // console.log(`获取播放器状态，包含的值`,this.player && this.player.fullscreenService && this.player && this.player.fullscreenService.getStatus());
            return this.player && this.player.getStatus();
        },

        /**
         * 设置直播的开始结束时间，开启直播时移功能时使用。
         * @param beginTime 开始时间
         * @param endTime 结束时间
         * @description 例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)
         */
        setLiveTimeRange(beginTime, endTime){
            // console.log(`设置直播的开始时间:${beginTime},结束时间:${endTime}，开启直播时移功能时使用。`);
            this.player && this.player.liveShiftSerivce && this.player.liveShiftSerivce.setLiveTimeRange(beginTime, endTime);
        },

        /**
         * 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。
         * @param rotate 旋转角度
         * @description 例如: setRotate(90)。详情参见旋转和镜像。
         */
        setRotate(rotate){
            // console.log(`参数为旋转角度:${rotate}。`);
            this.player && this.player.setRotate(rotate);
        },

        /**
         * 获取旋转角度。详情参见旋转和镜像。
         * @return rotate 旋转角度
         */
        getRotate(){
            // console.log(`获取旋转角度:${this.player && this.player.getRotate()}`);
            return this.player && this.player.getRotate();
        },

        /**
         * 设置镜像
         * @param image 镜像类型 可选值为：horizon,vertical
         * @description 例如: setImage(‘horizon’)。详情参见旋转和镜像。
         */
        setImage(image){
            // console.log(`设置镜像:${image}。`);
            this.player && this.player.setImage(image);
        },

        /**
         * 播放器销毁
         */
        dispose(){
            // console.log(`播放器销毁。`);
            this.player && this.player.dispose();
        },

        /**
         * 设置封面
         * @param cover 封面地址
         */
        setCover(cover){
            // console.log(`设置封面:${cover}`);
            this.player && this.player.setCover(cover);
        },

        /**
         * 设置封面
         * @param markers 设置打点数据
         */
        setProgressMarkers(markers){
            // console.log(`markers打点数据集合:${markers}`);
            this.player && this.player.setProgressMarkers(markers);
        },

        /**
         * 设置试看时间，单位为秒，详情参见
         * @param time 试看时间
         */
        setPreviewTime(time){
            // console.log(`设置试看时间，单位为:${time}秒`);
            this.player && this.player.setPreviewTime(time);
        },

        /**
         * 获取试看时间
         * @return rotate 旋转角度
         */
        getPreviewTime(){
            // console.log(`获取试看时间:${this.player && this.player.getPreviewTime()}`);
            return this.player && this.player.getPreviewTime();
        },

        /**
         * 是否试看
         */
        isPreview(){
            // console.log(`是否试看`);
            this.player && this.player.isPreview();
        },

        /**
         * @param ev 事件名
         * @param handle 回调方法
         */
        off(ev,handle){
            this.player && this.player.off(ev,handle);
        },


        /**
         * 深度拷贝
         * @param {*} obj
         */
        deepCloneObject (obj) {
            let objClone = Array.isArray(obj) ? [] : {};
            if (obj && typeof obj === 'object') {
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        //判断ojb子元素是否为对象，如果是，递归复制
                        if (obj[key] && typeof obj[key] === 'object') {
                            objClone[key] = this.deepCloneObject(obj[key]);
                        } else {
                            //如果不是，简单复制
                            objClone[key] = obj[key];
                        }
                    }
                }
            }
            return objClone;
        }

    },
    beforeDestroy(){  //防止重复创建
        this.dispose(); //销毁播放器(防止直播播放的情况下,播放器已经销毁,而后台还在继续下载资源造成卡顿的bug)
        // const head = document.querySelector('head');
        // const cssNodes = document.querySelectorAll(`link.app__aliplayer-min-css`);
        // (html && cssNodes.length > 1) && cssNodes.forEach((item, index)=>{
        //     if(index != 0) head.removeChild(item);
        // });
        // const html = document.querySelector('html');
        // const jsNodes = document.querySelectorAll(`script.app__aliplayer-min-js`);
        // (html && jsNodes.length > 1) && jsNodes.forEach((item, index)=>{
        //     if(index != 0) html.removeChild(item);
        // });
    }
};
</script>
