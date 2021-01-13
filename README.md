# vue-alipayer-v2
## 感谢每一位支持开源的朋友. 这是一个基于Alipayer 开发并封装成vue组件的播放器.
### vue中使用Alipayer,播放rtmp,m3u8,mp4视频
#### [本项目在线演示](https://langyuxiansheng.github.io/vue-aliplayer-v2/)
#### [阿里云播放器在线演示](https://player.alicdn.com/aliplayer/index.html)

> 假如此轮子对你有帮助,请顺手star一下吧.o(*￣︶￣*)o

## 1.安装使用! 下载安装npm包
```bash
npm i vue-aliplayer-v2 --save
or
yarn add vue-aliplayer-v2 
```

#### 全局注册 main.js

```javascript
import VueAliplayerV2 from 'vue-aliplayer-v2';

Vue.use(VueAliplayerV2);

//可选全局配置
//Vue.use(VueAliplayerV2,{
    // cssLink: 'https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css',
    // scriptSrc: 'https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js'
//});
```

#### 局部注册 App.vue

```javascript

//推荐第一种(仅v1.2.3)及以上的版本可用
import VueAliplayerV2 from 'vue-aliplayer-v2';
components:{ VueAliplayerV2 }

//或者 
components:{ VueAliplayerV2: VueAliplayerV2.Player }

```

## 2.组件中使用

### 组件模板使用,下面的视频连接仅供演示测试.
```html
<template>
    <div id="app">
        <template v-if="!isShowMultiple && show">
            <vue-aliplayer-v2 :source="source" ref="VueAliplayerV2" :options="options" />
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
    </div>
</template>
<script>
export default {
    data(){
        return {
            options: {
                // source:'//player.alicdn.com/video/aliyunmedia.mp4',
                isLive: true,   //切换为直播流的时候必填
                // format: 'm3u8'  //切换为直播流的时候必填
            },
            source: '//player.alicdn.com/video/aliyunmedia.mp4',
            // source: '//ivi.bupt.edu.cn/hls/cctv1.m3u8',
            show: true,
            isShowMultiple: false
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
        },

       watch: {
            source: {
                handler() {
                    this.show = !this.show
                    setTimeout(()=>{   //设置延迟执行
                        this.show = !this.show
                    },1);
                }
            }
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

```
## 3.功能与配置

```javascript
props:{
    options: {  //配置项 (options.source 不支持动态切换,需要动态切换请直接使用source)
        required: false,
        type: [Object],
        default: () => null
    },

    source: {  //播放源(此属性存在则优先于options.source) 支持动态切换,目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播rtmp流切换。
        required: false,
        type: [Object],
        default: () => null
    },

    cssLink:{   //css版本源
        required: false,
        type: [String],
        default: `https://g.alicdn.com/de/prismplayer/2.9.0/skins/default/aliplayer-min.css`
    },
    scriptSrc:{ //js版本源
        required: false,
        type: [String],
        default: `https://g.alicdn.com/de/prismplayer/2.9.0/aliplayer-min.js`
    }
}
```
### 3.1 配置项 options 属性
可以参考 [属性和接口说明](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P) 

| 名称        | 类型   |  说明  |
| :-   | :-:  | :-  |
| source     | String |   视频播放地址url：单独url。默认状态，表示使用vid+playauth。source播放方式优先级最高。source支持多清晰度设置：source:’{“HD”:”address1”,”SD”:”address2”’，详情参见多清晰度播放。     |
| vid        |   String  |   媒体转码服务的媒体Id。   |
| playauth        |   String  |    播放权证，如何得到参见获取playauth。   |
| height        |   String  |  播放器高度，可形如‘100%’或者‘100px’,chrome浏览器下flash播放器分别不能小于397x297。   |
| width        |   String  |   播放器宽度，可形如‘100%’或者‘100px’,chrome浏览器下flash播放器分别不能小于397x297。   |
| videoWidth        |   String  |   视频宽度，仅h5支持。详情参见旋转和镜像。   |
| videoHeight        |   String  |   视频高度，仅h5支持。详情参见旋转和镜像。   |
| preload        |   Boolean  |   播放器自动加载，目前仅h5可用。   |
| cover        |   String  |   播放器默认封面图片，请填写正确的图片url地址。需要autoplay为’false’时，才生效。Flash播放器封面也需要开启允许跨域访问。   |
| isLive        |   Boolean  |   播放内容是否为直播，直播时会禁止用户拖动进度条。   |
| autoplay        |   Boolean  |   播放器是否自动播放，在移动端autoplay属性会失效。Safari11不会自动开启自动播放如何开启。   |
| rePlay        |   Boolean	  |   播放器自动循环播放。   |
| useH5Prism        |   Boolean	  |   指定使用H5播放器。   |
| useFlashPrism        |   Boolean	  |   指定使用Flash播放器。   |
| playsinline        |   Boolean	  |   H5是否内置播放，有的Android浏览器不起作用。   |
| showBuffer        |   Boolean	  |   显示播放时缓冲图标，默认true。   |
| skinRes        |   Url	  |   说明：皮肤图片，不建议随意修改该字段，如要修改，请参照皮肤定制。   |
| skinLayout        |   Array Boolean	  |   说明：功能组件布局配置，不传该字段使用默认布局。传false隐藏所有功能组件，请参照皮肤定制。   |
| controlBarVisibility        |   String	  |   控制面板的实现，默认为‘hover’。可选的值为：‘click’、‘hover’、‘always’。   |
| showBarTime        |   String	  |   控制栏自动隐藏时间（ms）。   |
| extraInfo        |   String	  |    说明：JSON串用于定制性接口参数。|
|    	>     |   	>  |    1.“fullTitle”：“测试页面”全屏时显示视频标题（仅flash支持）。| 
|   	>     |   	>  |    2. “m3u8BufferLength”：“30”播放m3u8时加载缓存ts文件长度单位（秒）（仅flash支持）。|
|    	>     |   	>  |    3. “liveStartTime”：“2016/08/17 12:00:00”,直播开始时间，用于提示直播未开始(仅flash支持)。|
|    	>     |   	>  |    4. “liveOverTime”：“2016/08/17 14:00:00”,直播结束时间，用于提示直播结束（仅flash支持）。|
| enableSystemMenu        |   Boolean	  |   是否允许系统右键菜单显示，默认为false。   |
| format        |   String	  |   指定播放地址格式，只有使用vid的播放方式时支持,可选值为’mp4’、’m3u8’、’flv’、’mp3’，默认为空，仅H5支持。   |
| mediaType        |   String	  |   指定返回音频还是视频，只有使用vid的播放方式时支持。可选值为’video’和’audio’，默认为’video’,‘audio’主要是针对只包含音频的视频格式，比如音频的mp4，仅H5支持。   |
| qualitySort        |   String	  | 指定排序方式，只有使用vid + plauth播放方式时支持。‘desc’表示按倒序排序（即：从大到小排序）,‘asc’表示按正序排序（即：从小到大排序）,默认值：‘asc’，仅H5支持。   |
| definition        |   String	  | 显示视频清晰度，多个用逗号分隔，比如：’FD,LD’，此值是vid对应流清晰度的一个子集，取值范围：FD（流畅）LD（标清）SD（高清）HD（超清）OD（原画）2K（2K）4K（4K），仅H5支持。 |
| defaultDefinition        |   String	  |   默认视频清晰度，此值是vid对应流的一个清晰度，取值范围：FD（流畅）LD（标清）SD（高清）HD（超清）OD（原画）2K（2K）4K（4K）,仅H5支持。|
| x5_type   |   String	  |   声明启用同层H5播放器，启用时设置的值为‘h5’,详情参见同层播放。   |
| x5_fullscreen   |   Boolean	  |   声明视频播放时是否进入到TBS的全屏模式，默认为false。当需要把视频做为背景时，设置为true,详情参见同层播放。 |
| x5_video_position   |   String	  |   声明视频播在界面上的位置，默认为“center”。可选值为：“top”，“center”,详情参见同层播放。   |
| x5_orientation   |   String	  |   声明TBS播放器支持的方向，可选值：landscape：横屏,portraint：竖屏,详情参见同层播放。 |
| x5LandscapeAsFullScreen   |   String	  |   声明TBS全屏播放是否横屏，默认值为true。   |
| autoPlayDelay   |   Number	  |   延迟播放时间，单位为秒。详情参见延迟播放   |
| autoPlayDelayDisplayText   |   String	  |   延迟播放提示文本，详情参见延迟播放。   |
| language   |   String	  |   国际化，默认为‘zh-cn’。如果未设置，则采用浏览器语言。可选值为‘zh-cn’、‘en-us’或其它值。   |
| languageTexts   |   JSON	  |   自定义国际化文本json结构，key的值需要和language属性值对应起来。例子：{jp:{Play:”Play”}},自定义值参见Json结构。   |
| snapshot   |   Boolean	  |   flash启用截图功能。   |
| snapshotWatermark   |   Object  |   H5设置截图水印。   |
| useHlsPluginForSafari   |   Boolean  |   Safari浏览器可以启用Hls插件播放，Safari 11除外。   |
| enableStashBufferForFlv   |   Boolean  |   H5播放flv时，设置是否启用播放缓存，只在直播下起作用。   |
| stashInitialSizeForFlv   |   Number  |   H5播放flv时，初始缓存大小，只在直播下起作用。   |
| loadDataTimeout   |   Number  |   缓冲多长时间后，提示用户切换低清晰度，默认：20秒。   |
| waitingTimeout   |   Number  |   最大缓冲超时时间，超过这个时间会有错误提示，默认：60秒。   |
| liveStartTime   |   String  |   直播开始时间，直播时移功能使用，格式为：“2018/01/04 12:00:00”。   |
| liveOverTime   |   String  |   直播结束时间，直播时移功能使用，格式为：“2018/01/04 12:00:00”。   |
| liveTimeShiftUrl   |   String  |   直播可用时移查询地址，详情参见直播时移。   |
| liveShiftSource   |   String  |   flv直播地址播放时，hls的流地址，详情参见直播时移。   |
| recreatePlayer   |   Function  |   flv直播和hls时移切换是，重新创建播放器方法，详情参见直播时移。   |
| diagnosisButtonVisible   |   Boolean  |   是否显示检测按钮，默认为true。   |
| disableSeek   |   Boolean  |   禁用进度条的Seek，默认为false，仅Flash支持。   |
| encryptType   |   int  |   加密类型，播放点播私有加密视频时，设置值为1，默认值为0。   |
| progressMarkers   |   Array  |   进度条打点内容数组，详情参见进度条打点。   |
| vodRetry   |   int  |   点播失败重试次数，默认3次   |
| liveRetry   |   int  |   直播播放失败重试次数，默认5次   |

### 3.2 播放器方法
```javascript
// 暂停播放
this.$refs.VueAliplayerV2.pause();
```
可以参考 [播放器接口方法](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u63A5u53E32) 

| 名称        | 参数   |  说明  |
| :-   | :-  | :-  |
| play  | - |   播放视频。    |
| pause | - |   暂停视频。    |
| replay | - |   重播视频。    |
| seek | time |   跳转到某个时刻进行播放，time的单位为秒。    |
| getCurrentTime	 | - |   获取当前的播放时刻，返回的单位为秒。    |
| getDuration | - |   获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取。    |
| getVolume | - |   获取当前的音量，返回值为0-1的实数。ios和部分android会失效。    |
| setVolume | - |   设置音量，vol为0-1的实数，ios和部分android会失效。    |
| loadByUrl | url，time | 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播rtmp流切换。 |
| replayByVidAndPlayAuth | vid：视频id,playauth：播放凭证 | 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。  |
| replayByVidAndAuthInfo | 仅MPS用户时使用,参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion |  目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。   |
| setPlayerSize | w，h |  设置播放器大小w，h可分别为400px像素或60%百分比。chrome浏览器下flash播放器分别不能小于397x297。  |
| setSpeed | speed | 手动设置播放的倍速，倍速播放仅H5支持。移动端可能会失效，比如android微信。倍速播放UI默认是开启的。如果自定义过skinLaout属性，需要添加speedButton项到数组里： |
| > | > | {name：“speedButton”，align：“tr”，x：10，y：23} |
| setSanpshotProperties | width：宽度,height：高度,rate：截图质量| 设置截图参数。 |
| requestFullScreen | - | 播放器全屏，仅H5支持。  |
| cancelFullScreen | - | 播放器退出全屏，iOS调用无效，仅H5支持。  |
| getIsFullScreen | - | 获取播放器全屏状态，仅H5支持。  |
| getStatus | - | 获取播放器状态，包含的值：‘init’,‘ready’,‘loading’,‘play’,‘pause’,‘playing’,‘waiting’,‘error’,‘ended’  |
| setLiveTimeRange | 开始时间,结束时间 | 设置直播的开始结束时间，开启直播时移功能时使用。例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)  |
| setRotate | rotate 旋转角度 | 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。例如: setRotate(90)。详情参见旋转和镜像。 |
| getRotate | - | 获取旋转角度。详情参见旋转和镜像。 |
| setImage | image：镜像类型,可选值为：horizon,vertical | 设置镜像，例如: setImage(‘horizon’)。详情参见旋转和镜像。 |
| dispose | - | 播放器销毁 |
| setCover | cover封面地址 | 设置封面 |
| setProgressMarkers | markers打点数据集合 | 设置打点数据 |
| setPreviewTime | time试看时间 | 设置试看时间，单位为秒，详情参见试看 |
| getPreviewTime | - | 获取试看时间 |
| isPreview | - | 是否试看 |
| off | ev:事件名[String],handle,事件回调方法[Function] | 通过播放器实例的off方法取消绑定的方法 |

## 4.播放器事件

```html
<template>
    <vue-aliplayer-v2  @ready="handleReady" />
</template>
<script>
export default {
    methods:{
        /**
         * 播放器事件回调 
         */
        handleReady(e){
            console.log(`ready`,e);
        }
    }
}
</script>
```
可以参考 [播放器事件](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u4E8Bu4EF63)

| 名称       |  说明  |
| :-         | :-  |
| ready  |   播放器视频初始化按钮渲染完毕。播放器UI初始设置需要此事件后触发，避免UI被初始化所覆盖。播放器提供的方法需要在此事件发生后才可以调用。    |
| play  |   视频由暂停恢复为播放时触发。    |
| pause  |   视频暂停时触发。    |
| canplay  |   能够开始播放音频/视频时发生，会多次触发，仅H5播放器。    |
| playing  |   播放中，会触发多次。    |
| ended  |   当前视频播放完毕时触发。   |
| liveStreamStop  |  直播流中断时触发。m3u8/flv/rtmp在重试5次未成功后触发。提示上层流中断或需要重新加载视频。PS：m3u8一直自动重试，不需要上层添加重试。  |
| onM3u8Retry  |  m3u8直播流中断后重试事件，每次断流只触发一次。  |
| hideBar  |  控制栏自动隐藏事件。  |
| showBar  |  控制栏自动显示事件。  |
| waiting  |  数据缓冲事件。  |
| timeupdate  |  播放位置发生改变时触发，仅H5播放器。可通过getCurrentTime方法，得到当前播放时间。  |
| snapshoted  |  截图完成事件。  |
| requestFullScreen  |  全屏事件，仅H5支持。  |
| cancelFullScreen  |  取消全屏事件，iOS下不会触发，仅H5支持。  |
| error  |  错误事件。  |
| startSeek  |  开始拖拽，参数返回拖拽点的时间。  |
| completeSeek  |  完成拖拽，参数返回拖拽点的时间。  |

---
## 5. 图片展示

![图片1](https://github.com/langyuxiansheng/vue-aliplayer-v2/blob/master/images/p1.png)
![图片2](https://github.com/langyuxiansheng/vue-aliplayer-v2/blob/master/images/p2.png)
---

## 6.二次开发 下载项目

```bash
git clone https://github.com/langyuxiansheng/vue-aliplayer-v2.git
```

## Project setup
```bash
cd vue-aliplayer-v2

npm install
```

### Compiles and hot-reloads for development
```bash
npm run dev
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

## 7.缺陷 & 后期计划
> 2019年12月27日 更新优化局部引用方式

> 您有功能建议,或者bug反馈请留言.

## 8.感谢
---
- vue-aliplayer 的作者,项目地址:https://github.com/slacrey/vue-aliplayer

- Alipayer 阿里云的开源播放器 https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u4E8Bu4EF63

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 更新日志 

> v1.2.8  更换底层默认sdk版本为2.9.3 修复options 遇到 update loop 错误 感谢"litmonw"网友的反馈与建议.

> v1.2.7 更换底层默认sdk版本为2.9.1的版本. 更新线上演示demo的选项，感谢网友“Ghost23333”的demo

> v1.2.6 优化beforeDestroy() 部分的代码.

> v1.2.5 更换默认的播放器SDK版本2.8.2 => 2.9.0,2.8.2的版本存在多个播放器同时播放直播流异常的bug,增加了全局SDK版本配置,可以在Vue.use()的时候进行配置.

> v1.2.4 修复多个播放器加载,只初始化一个播放器的bug.文档部分更新,增加了问题栏. 感谢"沙洲ad"的反馈与建议.

> v1.2.3 优化播放器的初始化代码,调整包内结构,优化局部组件的注册方式,也兼容老版本的引用方式.文档部分更新,增加了问题栏. 感谢"liangzhiyuan2015"和"fancheur"两位网友的反馈与建议.

> v1.2.2 修复指定id情况下,播放器报错"没有为播放器指定容器",目前移除外部指定id的方式,所有的播放器id都由内部生成,不再由外部指定容器(外部指定的意义并不大),其它的说明:更新1.2.1后报错Uncaught TypeError: 没有为播放器指定容器,因为源码中变更了部分代码,以及最大限度的简化代码,组件内部的根容器就只有一个div容器,导致以前外部指定id的时候,容器id与外部的不一致,导致抛出异常了,现在已经紧急修复了,若在使用,请更新到v1.2.2的版本;如果使用了外部指定id的方式请移除外部的id.否则id会出现重复的情况., 感谢"liyoro"的反馈和建议.

> v1.2.1 修复直播播放的情况下,播放器已经销毁,而后台还在继续下载资源造成卡顿的bug,修复多个播放器只渲染1个的bug, 感谢"Jonauil"和"guangming95"两位网友的反馈和建议.

> v1.2.0 修复播放源(MP4/m3u8)之间切换无法正常播放的bug,增加options配置项动态响应功能,优化部分播放器的逻辑, 感谢"liyoro"网友的反馈和建议.

> v1.1.9 修复播放源(修复prop:source类型验证报错), 感谢"hugo2017"和“nullF”网友的反馈.

> v1.1.8 修复播放源(增加source属性类型错误),修复获取播放器状态 getStatus()方法报错, 感谢"kongjigu"网友的反馈.

> v1.1.7 增加动态切换播放源(增加source属性)功能 感谢"wikimo"和"jieruian"两位网友的反馈建议.

> v1.1.6 修复部分已知bug和优化局部的引用方式

---
## 其它问题

1. IOS 或者其它设备无法全屏播放,或者点击全屏按钮的时候也只是显示竖屏？

> 方案与问题所在: 

一般情况下可能是开启了强制竖屏(也就是屏幕锁定)打开后就会竖屏而不会全屏了！如下关闭就可以了：
参考issues: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/25

-开启了屏幕锁定，只要上拉控制中心，点击屏幕锁定关闭就可以了！

-也可能是播放器或者浏览器兼容性问题.

2. 关于直播视频切换的问题，可以参考：
```javascript
 watch: {
    source: {
        handler() {
            this.show = !this.show
            setTimeout(()=>{   //直播视频切换的问题，设置延迟执行
                this.show = !this.show
            },1);
        }
    }
}
```
