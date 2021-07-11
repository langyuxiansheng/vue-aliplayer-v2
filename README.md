# vue-alipayer-v2

## 感谢每一位支持开源的朋友. 这是一个基于 Alipayer 开发并封装成 vue 组件的播放器.

### vue 中使用 Alipayer,播放 rtmp,m3u8,mp4 视频

#### [本项目在线演示](https://langyuxiansheng.github.io/vue-aliplayer-v2/)

#### [阿里云播放器在线演示](https://player.alicdn.com/aliplayer/index.html)

> 假如此轮子对你有帮助,请顺手 star 一下吧.o(_￣︶￣_)o

## 1.安装使用! 下载安装 npm 包

```bash
npm i vue-aliplayer-v2 --save
or
yarn add vue-aliplayer-v2
```

#### 全局注册 main.js

```javascript
import VueAliplayerV2 from "vue-aliplayer-v2";

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
import VueAliplayerV2 from "vue-aliplayer-v2";
components: {
  VueAliplayerV2;
}

//或者
components: {
  VueAliplayerV2: VueAliplayerV2.Player;
}
```

## 2.组件中使用

### 组件模板使用,下面的视频连接仅供演示测试.

```html
<template>
  <div id="app">
    <template v-if="!isShowMultiple && show">
      <vue-aliplayer-v2
        :source="source"
        ref="VueAliplayerV2"
        :options="options"
      />
    </template>
    <div v-if="isShowMultiple && show" class="show-multiple">
      <template v-for="x in 5">
        <vue-aliplayer-v2
          class="multiple-player"
          :key="x"
          :source="source"
          ref="VueAliplayerV2"
          :options="options"
        />
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
      <span @click="options.isLive = !options.isLive"
        >{{ options.isLive ? '切换普通模式' : '切换直播模式' }}</span
      >
      <span @click="showMultiple()"
        >{{isShowMultiple ? '显示1个播放器' : '显示多个播放器'}}</span
      >
    </div>
    <div class="source-box">
      <span class="source-label">选择播放源(支持动态切换):</span>
      <select v-model="source" name="source" id="source">
        <option value="//player.alicdn.com/video/aliyunmedia.mp4"
          >播放源1</option
        >
        <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4"
          >播放源2</option
        >
        <option
          value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888"
          >播放源3</option
        >
        <option value="//ivi.bupt.edu.cn/hls/cctv1.m3u8">直播播放源4</option>
      </select>
    </div>
    <div class="source-box">
      <span class="source-label">输入播放源(支持动态切换):</span>
      <input class="source-input" type="text" v-model="source" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: {
          // source:'//player.alicdn.com/video/aliyunmedia.mp4',
          isLive: true, //切换为直播流的时候必填
          // format: 'm3u8'  //切换为直播流的时候必填
        },
        source: "//player.alicdn.com/video/aliyunmedia.mp4",
        // source: '//ivi.bupt.edu.cn/hls/cctv1.m3u8',
        show: true,
        isShowMultiple: false,
      };
    },

    methods: {
      play() {
        this.$refs.VueAliplayerV2.play();
      },

      pause() {
        this.$refs.VueAliplayerV2.pause();
      },

      replay() {
        this.$refs.VueAliplayerV2.replay();
      },

      getCurrentTime() {
        // this.$refs.VueAliplayerV2.getCurrentTime();
        this.source = "http://ivi.bupt.edu.cn/hls/cctv1.m3u8";
      },

      getStatus() {
        const status = this.$refs.VueAliplayerV2.getStatus();
        console.log(`getStatus:`, status);
        alert(`getStatus:${status}`);
      },

      showMultiple() {
        this.isShowMultiple = !this.isShowMultiple;
      },
    },
  };
</script>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  .remove-text {
    text-align: center;
    padding: 20px;
    font-size: 24px;
  }
  .show-multiple {
    display: flex;
    .multiple-player {
      width: calc(100% / 4);
      margin: 20px;
    }
  }
  .player-btns {
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
  .source-box {
    padding: 5px 10px;
    margin-bottom: 20px;
    .source-label {
      margin-right: 20px;
      font-size: 16px;
      display: block;
    }
    #source {
      margin-top: 10px;
    }
    .source-input {
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
        default: `https://g.alicdn.com/de/prismplayer/2.9.7/skins/default/aliplayer-min.css`
    },
    scriptSrc:{ //js版本源
        required: false,
        type: [String],
        default: `https://g.alicdn.com/de/prismplayer/2.9.7/aliplayer-min.js`
    }
}
```

### 3.1 配置项 options 属性

可以参考 [属性和接口说明](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P)

| 名称                     |     类型      | 说明                                                                                                                                                                               |
| :----------------------- | :-----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source                   |    String     | 视频播放地址 url：单独 url。默认状态，表示使用 vid+playauth。source 播放方式优先级最高。source 支持多清晰度设置：source:’{“HD”:”address1”,”SD”:”address2”’，详情参见多清晰度播放。 |
| vid                      |    String     | 媒体转码服务的媒体 Id。                                                                                                                                                            |
| playauth                 |    String     | 播放权证，如何得到参见获取 playauth。                                                                                                                                              |
| height                   |    String     | 播放器高度，可形如‘100%’或者‘100px’,chrome 浏览器下 flash 播放器分别不能小于 397x297。                                                                                             |
| width                    |    String     | 播放器宽度，可形如‘100%’或者‘100px’,chrome 浏览器下 flash 播放器分别不能小于 397x297。                                                                                             |
| videoWidth               |    String     | 视频宽度，仅 h5 支持。详情参见旋转和镜像。                                                                                                                                         |
| videoHeight              |    String     | 视频高度，仅 h5 支持。详情参见旋转和镜像。                                                                                                                                         |
| preload                  |    Boolean    | 播放器自动加载，目前仅 h5 可用。                                                                                                                                                   |
| cover                    |    String     | 播放器默认封面图片，请填写正确的图片 url 地址。需要 autoplay 为’false’时，才生效。Flash 播放器封面也需要开启允许跨域访问。                                                         |
| isLive                   |    Boolean    | 播放内容是否为直播，直播时会禁止用户拖动进度条。                                                                                                                                   |
| autoplay                 |    Boolean    | 播放器是否自动播放，在移动端 autoplay 属性会失效。Safari11 不会自动开启自动播放如何开启。                                                                                          |
| rePlay                   |    Boolean    | 播放器自动循环播放。                                                                                                                                                               |
| useH5Prism               |    Boolean    | 指定使用 H5 播放器。                                                                                                                                                               |
| useFlashPrism            |    Boolean    | 指定使用 Flash 播放器。                                                                                                                                                            |
| playsinline              |    Boolean    | H5 是否内置播放，有的 Android 浏览器不起作用。                                                                                                                                     |
| showBuffer               |    Boolean    | 显示播放时缓冲图标，默认 true。                                                                                                                                                    |
| skinRes                  |      Url      | 说明：皮肤图片，不建议随意修改该字段，如要修改，请参照皮肤定制。                                                                                                                   |
| skinLayout               | Array Boolean | 说明：功能组件布局配置，不传该字段使用默认布局。传 false 隐藏所有功能组件，请参照皮肤定制。                                                                                        |
| controlBarVisibility     |    String     | 控制面板的实现，默认为‘hover’。可选的值为：‘click’、‘hover’、‘always’。                                                                                                            |
| showBarTime              |    String     | 控制栏自动隐藏时间（ms）。                                                                                                                                                         |
| extraInfo                |    String     | 说明：JSON 串用于定制性接口参数。                                                                                                                                                  |
| >                        |       >       | 1.“fullTitle”：“测试页面”全屏时显示视频标题（仅 flash 支持）。                                                                                                                     |
| >                        |       >       | 2. “m3u8BufferLength”：“30”播放 m3u8 时加载缓存 ts 文件长度单位（秒）（仅 flash 支持）。                                                                                           |
| >                        |       >       | 3. “liveStartTime”：“2016/08/17 12:00:00”,直播开始时间，用于提示直播未开始(仅 flash 支持)。                                                                                        |
| >                        |       >       | 4. “liveOverTime”：“2016/08/17 14:00:00”,直播结束时间，用于提示直播结束（仅 flash 支持）。                                                                                         |
| enableSystemMenu         |    Boolean    | 是否允许系统右键菜单显示，默认为 false。                                                                                                                                           |
| format                   |    String     | 指定播放地址格式，只有使用 vid 的播放方式时支持,可选值为’mp4’、’m3u8’、’flv’、’mp3’，默认为空，仅 H5 支持。                                                                        |
| mediaType                |    String     | 指定返回音频还是视频，只有使用 vid 的播放方式时支持。可选值为’video’和’audio’，默认为’video’,‘audio’主要是针对只包含音频的视频格式，比如音频的 mp4，仅 H5 支持。                   |
| qualitySort              |    String     | 指定排序方式，只有使用 vid + plauth 播放方式时支持。‘desc’表示按倒序排序（即：从大到小排序）,‘asc’表示按正序排序（即：从小到大排序）,默认值：‘asc’，仅 H5 支持。                   |
| definition               |    String     | 显示视频清晰度，多个用逗号分隔，比如：’FD,LD’，此值是 vid 对应流清晰度的一个子集，取值范围：FD（流畅）LD（标清）SD（高清）HD（超清）OD（原画）2K（2K）4K（4K），仅 H5 支持。       |
| defaultDefinition        |    String     | 默认视频清晰度，此值是 vid 对应流的一个清晰度，取值范围：FD（流畅）LD（标清）SD（高清）HD（超清）OD（原画）2K（2K）4K（4K）,仅 H5 支持。                                           |
| x5_type                  |    String     | 声明启用同层 H5 播放器，启用时设置的值为‘h5’,详情参见同层播放。                                                                                                                    |
| x5_fullscreen            |    Boolean    | 声明视频播放时是否进入到 TBS 的全屏模式，默认为 false。当需要把视频做为背景时，设置为 true,详情参见同层播放。                                                                      |
| x5_video_position        |    String     | 声明视频播在界面上的位置，默认为“center”。可选值为：“top”，“center”,详情参见同层播放。                                                                                             |
| x5_orientation           |    String     | 声明 TBS 播放器支持的方向，可选值：landscape：横屏,portraint：竖屏,详情参见同层播放。                                                                                              |
| x5LandscapeAsFullScreen  |    String     | 声明 TBS 全屏播放是否横屏，默认值为 true。                                                                                                                                         |
| autoPlayDelay            |    Number     | 延迟播放时间，单位为秒。详情参见延迟播放                                                                                                                                           |
| autoPlayDelayDisplayText |    String     | 延迟播放提示文本，详情参见延迟播放。                                                                                                                                               |
| language                 |    String     | 国际化，默认为‘zh-cn’。如果未设置，则采用浏览器语言。可选值为‘zh-cn’、‘en-us’或其它值。                                                                                            |
| languageTexts            |     JSON      | 自定义国际化文本 json 结构，key 的值需要和 language 属性值对应起来。例子：{jp:{Play:”Play”}},自定义值参见 Json 结构。                                                              |
| snapshot                 |    Boolean    | flash 启用截图功能。                                                                                                                                                               |
| snapshotWatermark        |    Object     | H5 设置截图水印。                                                                                                                                                                  |
| useHlsPluginForSafari    |    Boolean    | Safari 浏览器可以启用 Hls 插件播放，Safari 11 除外。                                                                                                                               |
| enableStashBufferForFlv  |    Boolean    | H5 播放 flv 时，设置是否启用播放缓存，只在直播下起作用。                                                                                                                           |
| stashInitialSizeForFlv   |    Number     | H5 播放 flv 时，初始缓存大小，只在直播下起作用。                                                                                                                                   |
| loadDataTimeout          |    Number     | 缓冲多长时间后，提示用户切换低清晰度，默认：20 秒。                                                                                                                                |
| waitingTimeout           |    Number     | 最大缓冲超时时间，超过这个时间会有错误提示，默认：60 秒。                                                                                                                          |
| liveStartTime            |    String     | 直播开始时间，直播时移功能使用，格式为：“2018/01/04 12:00:00”。                                                                                                                    |
| liveOverTime             |    String     | 直播结束时间，直播时移功能使用，格式为：“2018/01/04 12:00:00”。                                                                                                                    |
| liveTimeShiftUrl         |    String     | 直播可用时移查询地址，详情参见直播时移。                                                                                                                                           |
| liveShiftSource          |    String     | flv 直播地址播放时，hls 的流地址，详情参见直播时移。                                                                                                                               |
| recreatePlayer           |   Function    | flv 直播和 hls 时移切换是，重新创建播放器方法，详情参见直播时移。                                                                                                                  |
| diagnosisButtonVisible   |    Boolean    | 是否显示检测按钮，默认为 true。                                                                                                                                                    |
| disableSeek              |    Boolean    | 禁用进度条的 Seek，默认为 false，仅 Flash 支持。                                                                                                                                   |
| encryptType              |      int      | 加密类型，播放点播私有加密视频时，设置值为 1，默认值为 0。                                                                                                                         |
| progressMarkers          |     Array     | 进度条打点内容数组，详情参见进度条打点。                                                                                                                                           |
| vodRetry                 |      int      | 点播失败重试次数，默认 3 次                                                                                                                                                        |
| liveRetry                |      int      | 直播播放失败重试次数，默认 5 次                                                                                                                                                    |

### 3.2 播放器方法

```javascript
// 暂停播放
this.$refs.VueAliplayerV2.pause();
```

可以参考 [播放器接口方法](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u63A5u53E32)

| 名称                   | 参数                                                                                  | 说明                                                                                                                                                                  |
| :--------------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| play                   | -                                                                                     | 播放视频。                                                                                                                                                            |
| pause                  | -                                                                                     | 暂停视频。                                                                                                                                                            |
| replay                 | -                                                                                     | 重播视频。                                                                                                                                                            |
| seek                   | time                                                                                  | 跳转到某个时刻进行播放，time 的单位为秒。                                                                                                                             |
| getCurrentTime         | -                                                                                     | 获取当前的播放时刻，返回的单位为秒。                                                                                                                                  |
| getDuration            | -                                                                                     | 获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在 play 事件后获取。                                                                      |
| getVolume              | -                                                                                     | 获取当前的音量，返回值为 0-1 的实数。ios 和部分 android 会失效。                                                                                                      |
| setVolume              | -                                                                                     | 设置音量，vol 为 0-1 的实数，ios 和部分 android 会失效。                                                                                                              |
| loadByUrl              | url，time                                                                             | 直接播放视频 url，time 为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播 rtmp 流切换。                                                     |
| replayByVidAndPlayAuth | vid：视频 id,playauth：播放凭证                                                       | 目前只支持 H5 播放器。暂不支持不同格式视频间的之间切换。暂不支持直播 rtmp 流切换。                                                                                    |
| replayByVidAndAuthInfo | 仅 MPS 用户时使用,参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion | 目前只支持 H5 播放器。暂不支持不同格式视频间的之间切换。暂不支持直播 rtmp 流切换。                                                                                    |
| setPlayerSize          | w，h                                                                                  | 设置播放器大小 w，h 可分别为 400px 像素或 60%百分比。chrome 浏览器下 flash 播放器分别不能小于 397x297。                                                               |
| setSpeed               | speed                                                                                 | 手动设置播放的倍速，倍速播放仅 H5 支持。移动端可能会失效，比如 android 微信。倍速播放 UI 默认是开启的。如果自定义过 skinLaout 属性，需要添加 speedButton 项到数组里： |
| >                      | >                                                                                     | {name：“speedButton”，align：“tr”，x：10，y：23}                                                                                                                      |
| setSanpshotProperties  | width：宽度,height：高度,rate：截图质量                                               | 设置截图参数。                                                                                                                                                        |
| requestFullScreen      | -                                                                                     | 播放器全屏，仅 H5 支持。                                                                                                                                              |
| cancelFullScreen       | -                                                                                     | 播放器退出全屏，iOS 调用无效，仅 H5 支持。                                                                                                                            |
| getIsFullScreen        | -                                                                                     | 获取播放器全屏状态，仅 H5 支持。                                                                                                                                      |
| getStatus              | -                                                                                     | 获取播放器状态，包含的值：‘init’,‘ready’,‘loading’,‘play’,‘pause’,‘playing’,‘waiting’,‘error’,‘ended’                                                                 |
| setLiveTimeRange       | 开始时间,结束时间                                                                     | 设置直播的开始结束时间，开启直播时移功能时使用。例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)                                             |
| setRotate              | rotate 旋转角度                                                                       | 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。例如: setRotate(90)。详情参见旋转和镜像。                                                                       |
| getRotate              | -                                                                                     | 获取旋转角度。详情参见旋转和镜像。                                                                                                                                    |
| setImage               | image：镜像类型,可选值为：horizon,vertical                                            | 设置镜像，例如: setImage(‘horizon’)。详情参见旋转和镜像。                                                                                                             |
| dispose                | -                                                                                     | 播放器销毁                                                                                                                                                            |
| setCover               | cover 封面地址                                                                        | 设置封面                                                                                                                                                              |
| setProgressMarkers     | markers 打点数据集合                                                                  | 设置打点数据                                                                                                                                                          |
| setPreviewTime         | time 试看时间                                                                         | 设置试看时间，单位为秒，详情参见试看                                                                                                                                  |
| getPreviewTime         | -                                                                                     | 获取试看时间                                                                                                                                                          |
| isPreview              | -                                                                                     | 是否试看                                                                                                                                                              |
| off                    | ev:事件名[String],handle,事件回调方法[Function]                                       | 通过播放器实例的 off 方法取消绑定的方法                                                                                                                               |

## 4.播放器事件

```html
<template>
  <vue-aliplayer-v2 @ready="handleReady" />
</template>
<script>
  export default {
    methods: {
      /**
       * 播放器事件回调
       */
      handleReady(e) {
        console.log(`ready`, e);
      },
    },
  };
</script>
```

可以参考 [播放器事件](https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u4E8Bu4EF63)

| 名称              | 说明                                                                                                                                     |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| ready             | 播放器视频初始化按钮渲染完毕。播放器 UI 初始设置需要此事件后触发，避免 UI 被初始化所覆盖。播放器提供的方法需要在此事件发生后才可以调用。 |
| play              | 视频由暂停恢复为播放时触发。                                                                                                             |
| pause             | 视频暂停时触发。                                                                                                                         |
| canplay           | 能够开始播放音频/视频时发生，会多次触发，仅 H5 播放器。                                                                                  |
| playing           | 播放中，会触发多次。                                                                                                                     |
| ended             | 当前视频播放完毕时触发。                                                                                                                 |
| liveStreamStop    | 直播流中断时触发。m3u8/flv/rtmp 在重试 5 次未成功后触发。提示上层流中断或需要重新加载视频。PS：m3u8 一直自动重试，不需要上层添加重试。   |
| onM3u8Retry       | m3u8 直播流中断后重试事件，每次断流只触发一次。                                                                                          |
| hideBar           | 控制栏自动隐藏事件。                                                                                                                     |
| showBar           | 控制栏自动显示事件。                                                                                                                     |
| waiting           | 数据缓冲事件。                                                                                                                           |
| timeupdate        | 播放位置发生改变时触发，仅 H5 播放器。可通过 getCurrentTime 方法，得到当前播放时间。                                                     |
| snapshoted        | 截图完成事件。                                                                                                                           |
| requestFullScreen | 全屏事件，仅 H5 支持。                                                                                                                   |
| cancelFullScreen  | 取消全屏事件，iOS 下不会触发，仅 H5 支持。                                                                                               |
| error             | 错误事件。                                                                                                                               |
| startSeek         | 开始拖拽，参数返回拖拽点的时间。                                                                                                         |
| completeSeek      | 完成拖拽，参数返回拖拽点的时间。                                                                                                         |

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

> 2019 年 12 月 27 日 更新优化局部引用方式

> 您有功能建议,或者 bug 反馈请留言.

## 8.感谢

---

- vue-aliplayer 的作者,项目地址:https://github.com/slacrey/vue-aliplayer

- Alipayer 阿里云的开源播放器 https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1085.36fc6fc57WKZ5P#h2-u64ADu653Eu5668u4E8Bu4EF63

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 更新日志

> v1.3.0

- sdk 版本更新,默认 SDK 版本由 2.9.3 更新为 2.9.7
- 默认注释更新

> v1.2.9 修正部分默认属性, 感谢"Schean17"网友的反馈与建议.

> v1.2.8 更换底层默认 sdk 版本为 2.9.3 修复 options 遇到 update loop 错误 感谢"litmonw"网友的反馈与建议.

> v1.2.7 更换底层默认 sdk 版本为 2.9.1 的版本. 更新线上演示 demo 的选项

> v1.2.6 优化 beforeDestroy() 部分的代码.

> v1.2.5 更换默认的播放器 SDK 版本 2.8.2 => 2.9.0,2.8.2 的版本存在多个播放器同时播放直播流异常的 bug,增加了全局 SDK 版本配置,可以在 Vue.use()的时候进行配置.

> v1.2.4 修复多个播放器加载,只初始化一个播放器的 bug.文档部分更新,增加了问题栏. 感谢"沙洲 ad"的反馈与建议.

> v1.2.3 优化播放器的初始化代码,调整包内结构,优化局部组件的注册方式,也兼容老版本的引用方式.文档部分更新,增加了问题栏. 感谢"liangzhiyuan2015"和"fancheur"两位网友的反馈与建议.

> v1.2.2 修复指定 id 情况下,播放器报错"没有为播放器指定容器",目前移除外部指定 id 的方式,所有的播放器 id 都由内部生成,不再由外部指定容器(外部指定的意义并不大),其它的说明:更新 1.2.1 后报错 Uncaught TypeError: 没有为播放器指定容器,因为源码中变更了部分代码,以及最大限度的简化代码,组件内部的根容器就只有一个 div 容器,导致以前外部指定 id 的时候,容器 id 与外部的不一致,导致抛出异常了,现在已经紧急修复了,若在使用,请更新到 v1.2.2 的版本;如果使用了外部指定 id 的方式请移除外部的 id.否则 id 会出现重复的情况., 感谢"liyoro"的反馈和建议.

> v1.2.1 修复直播播放的情况下,播放器已经销毁,而后台还在继续下载资源造成卡顿的 bug,修复多个播放器只渲染 1 个的 bug, 感谢"Jonauil"和"guangming95"两位网友的反馈和建议.

> v1.2.0 修复播放源(MP4/m3u8)之间切换无法正常播放的 bug,增加 options 配置项动态响应功能,优化部分播放器的逻辑, 感谢"liyoro"网友的反馈和建议.

> v1.1.9 修复播放源(修复 prop:source 类型验证报错), 感谢"hugo2017"和“nullF”网友的反馈.

> v1.1.8 修复播放源(增加 source 属性类型错误),修复获取播放器状态 getStatus()方法报错, 感谢"kongjigu"网友的反馈.

> v1.1.7 增加动态切换播放源(增加 source 属性)功能 感谢"wikimo"和"jieruian"两位网友的反馈建议.

> v1.1.6 修复部分已知 bug 和优化局部的引用方式

---

## 其它问题

1. IOS 或者其它设备无法全屏播放,或者点击全屏按钮的时候也只是显示竖屏？

> 方案与问题所在:

一般情况下可能是开启了强制竖屏(也就是屏幕锁定)打开后就会竖屏而不会全屏了！如下关闭就可以了：
参考 issues: https://github.com/langyuxiansheng/vue-aliplayer-v2/issues/25

-开启了屏幕锁定，只要上拉控制中心，点击屏幕锁定关闭就可以了！

-也可能是播放器或者浏览器兼容性问题.
