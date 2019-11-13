(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-aliplayer-v2"] = factory();
	else
		root["vue-aliplayer-v2"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0614":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "0cc1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("efce");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("4634");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("96dd");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("ed8b");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.7.2@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7cfd");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"05d0d90a-vue-loader-template"}!./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/src/main.vue?vue&type=template&id=2cbd4957&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue?vue&type=template&id=2cbd4957&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/src/main.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'VueAliplayerV2',
  props: {
    options: {
      //配置项
      required: false,
      type: [Object],
      default: function _default() {
        return null;
      }
    },
    id: {
      required: false,
      type: [String],
      default: "player-".concat(Date.parse(new Date()))
    }
  },
  data: function data() {
    return {
      player: null,
      //播放器实例
      config: {
        id: null,
        //播放器的ID
        width: '100%',
        autoplay: true,
        // isLive: true,
        //支持播放地址播放,此播放优先级最高
        // source: 'rtmp://182.145.195.238:1935/hls/1194076936807170050',
        cssLink: 'https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css',
        scriptSrc: 'https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js'
      },
      events: [
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
      'completeSeek']
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  methods: {
    /**
     * 创建script和css
     * 加载Alipayer的SDK
     */
    init: function init() {
      var _this2 = this;

      var load = true;
      var linkID = 'aliplayer-min-css';
      var scriptID = 'aliplayer-min-js';
      var head = document.getElementsByTagName('head');
      var html = document.getElementsByTagName('html');
      var scriptTag = document.getElementById(scriptID);

      if (!document.getElementById(linkID)) {
        var link = document.createElement('link');
        link.href = this.config.cssLink;
        link.setAttribute('id', linkID);
        head[0].appendChild(link);
      }

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptID;
        scriptTag.type = "text/javascript";
        scriptTag.src = this.config.scriptSrc;
        html[0].appendChild(scriptTag);
      }

      scriptTag.addEventListener("load", function () {
        _this2.initPlayer();

        load = false;
      });

      if (!load) {
        this.initPlayer();
      }
    },

    /**
     * 创建播放器
     * @description SDK文档地址:https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1084.131d1c4cJT7o5Z
     */
    initPlayer: function initPlayer() {
      var _this3 = this;

      if (typeof window.Aliplayer != 'undefined') {
        var options = this.options;

        if (options) {
          for (var key in options) {
            this.config[key] = options[key];
          }
        }

        this.config.id = this.id;
        this.player = new Aliplayer(this.config, function (player) {
          console.log('播放器创建好了。', player);
        });

        var _loop = function _loop(ev) {
          _this3.player.on(_this3.events[ev], function (e) {
            console.log("object ".concat(_this3.events[ev]), e);

            _this3.$emit(_this3.events[ev], e);
          });
        };

        for (var ev in this.events) {
          _loop(ev);
        } //通过播放器实例的off方法取消订阅
        //player.off('ready',handleReady);

      }
    },

    /**
     * @return player 实例
     */
    getPlayer: function getPlayer() {
      return this.player;
    },

    /**
     * 播放视频。
     */
    play: function play() {
      console.log("\u64AD\u653E\u89C6\u9891\u3002");
      this.player.play();
    },

    /**
     * 暂停视频
     */
    pause: function pause() {
      console.log("\u6682\u505C\u89C6\u9891");
      this.player.pause();
    },

    /**
     * 重播视频
     */
    replay: function replay() {
      console.log("\u91CD\u64AD\u89C6\u9891");
      this.player.replay();
    },

    /**
     * 跳转到某个时刻进行播放，time的单位为秒。
     * @param time
     * @return player
     */
    seek: function seek(time) {
      console.log("\u8DF3\u8F6C\u5230\u67D0\u4E2A\u65F6\u523B\u8FDB\u884C\u64AD\u653E\uFF0Ctime\u4E3A".concat(time, "\u79D2\u3002"));
      this.player.seek(time);
    },

    /**
     * 获取当前的播放时刻，返回的单位为秒。
     * @return player
     */
    getCurrentTime: function getCurrentTime() {
      console.log("\u83B7\u53D6\u5F53\u524D\u7684\u64AD\u653E\u65F6\u523B\uFF0C\u8FD4\u56DE\u7684\u5355\u4F4D\u4E3A".concat(this.player.getCurrentTime(), "\u79D2\u3002"));
      return this.player.getCurrentTime();
    },

    /**
     * 获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取。
     * @return player
     */
    getDuration: function getDuration() {
      console.log("\u83B7\u53D6\u89C6\u9891\u603B\u65F6\u957F\uFF0C\u8FD4\u56DE\u7684\u5355\u4F4D\u4E3A".concat(this.player.getDuration(), "\u79D2\u3002"));
      return this.player.getDuration();
    },

    /**
     * 获取当前的音量，返回值为0-1的实数。ios和部分android会失效。
     * @return player
     */
    getVolume: function getVolume() {
      console.log("\u83B7\u53D6\u5F53\u524D\u7684\u97F3\u91CF".concat(this.player.getVolume(), "\u3002"));
      return this.player.getVolume();
    },

    /**
     * 设置音量，vol为0-1的实数，ios和部分android会失效。
     * @return player
     */
    setVolume: function setVolume(v) {
      console.log("\u8BBE\u7F6E\u97F3\u91CF\uFF0Cvol\u4E3A".concat(v, "\u3002"));
      this.player.setVolume(v);
    },

    /**
     * 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。
     * 暂不支持直播rtmp流切换。
     * @return player
     */
    loadByUrl: function loadByUrl(url, time) {
      console.log("\u76F4\u63A5\u64AD\u653E\u89C6\u9891url".concat(url, "\uFF0Ctime\u4E3A").concat(time, "\u3002"));
      this.player.loadByUrl(url, time);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     */
    replayByVidAndPlayAuth: function replayByVidAndPlayAuth(vid, playauth) {
      console.log("replayByVidAndPlayAuth vid".concat(vid, "\uFF0Cplayauth\u4E3A").concat(playauth, "\u3002"));
      this.player.replayByVidAndPlayAuth(vid, playauth);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     * @description 仅MPS用户时使用 仅MPS用户时使用 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion
     */
    replayByVidAndAuthInfo: function replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion) {
      console.log("replayByVidAndAuthInfo \u53C2\u6570\u987A\u5E8F\u4E3A\uFF1Avid\u3001accId\u3001accSecret\u3001stsToken\u3001authInfo\u3001domainRegion", vid, accId, accSecret, stsToken, authInfo, domainRegion);
      this.player.replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion);
    },

    /**
     * 设置播放器大小w，h可分别为400px像素或60%百分比。
     * @param w 宽度
     * @param h 宽度
     * @description chrome浏览器下flash播放器分别不能小于397x297。
     */
    setPlayerSize: function setPlayerSize(w, h) {
      console.log("\u8BBE\u7F6E\u64AD\u653E\u5668\u5927\u5C0F \u5BBD\u5EA6:".concat(w, ",\u9AD8\u5EA6:").concat(h));
      this.player.setPlayerSize(w, h);
    },

    /**
     * 手动设置播放的倍速，倍速播放仅H5支持。移动端可能会失效，比如android微信。
     * 倍速播放UI默认是开启的。
     * 如果自定义过skinLaout属性，需要添加speedButton项到数组里：
     * @param h 宽度
     * @description {name：“speedButton”，align：“tr”，x：10，y：23}
     */
    setSpeed: function setSpeed(speed) {
      console.log("\u624B\u52A8\u8BBE\u7F6E\u64AD\u653E\u7684\u500D\u901F:".concat(speed));
      this.player.setSpeed(speed);
    },

    /**
     * 设置截图参数
     * @param width 宽度
     * @param height 高度
     * @param rate 截图质量
     */
    setSanpshotProperties: function setSanpshotProperties(width, height, rate) {
      console.log("\u8BBE\u7F6E\u622A\u56FE\u53C2\u6570:", width, height, rate);
      this.player.setSanpshotProperties(width, height, rate);
    },

    /**
     * 播放器全屏，仅H5支持。
     */
    requestFullScreen: function requestFullScreen() {
      console.log("\u64AD\u653E\u5668\u5168\u5C4F\uFF0C\u4EC5H5\u652F\u6301");
      this.player.fullscreenService && this.player.fullscreenService.requestFullScreen();
    },

    /**
     * 播放器退出全屏，iOS调用无效，仅H5支持。
     */
    cancelFullScreen: function cancelFullScreen() {
      console.log("\u64AD\u653E\u5668\u5168\u5C4F\uFF0C\u4EC5H5\u652F\u6301");
      this.player.fullscreenService && this.player.fullscreenService.cancelFullScreen();
    },

    /**
     * 获取播放器全屏状态，仅H5支持。
     */
    getIsFullScreen: function getIsFullScreen() {
      console.log("\u83B7\u53D6\u64AD\u653E\u5668\u5168\u5C4F\u72B6\u6001\uFF0C\u4EC5H5\u652F\u6301\u3002", this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen());
      return this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen();
    },

    /**
     * 获取播放器状态，包含的值,
     * @returns init ready loading play pause playing waiting error ended
     */
    getStatus: function getStatus() {
      console.log("\u83B7\u53D6\u64AD\u653E\u5668\u72B6\u6001\uFF0C\u5305\u542B\u7684\u503C", this.player.fullscreenService && this.player.fullscreenService.getStatus());
      return this.player.fullscreenService && this.player.fullscreenService.getStatus();
    },

    /**
     * 设置直播的开始结束时间，开启直播时移功能时使用。
     * @param beginTime 开始时间
     * @param endTime 结束时间
     * @description 例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)
     */
    setLiveTimeRange: function setLiveTimeRange(beginTime, endTime) {
      console.log("\u8BBE\u7F6E\u76F4\u64AD\u7684\u5F00\u59CB\u65F6\u95F4:".concat(beginTime, ",\u7ED3\u675F\u65F6\u95F4:").concat(endTime, "\uFF0C\u5F00\u542F\u76F4\u64AD\u65F6\u79FB\u529F\u80FD\u65F6\u4F7F\u7528\u3002"));
      this.player.liveShiftSerivce && this.player.liveShiftSerivce.setLiveTimeRange(beginTime, endTime);
    },

    /**
     * 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。
     * @param rotate 旋转角度
     * @description 例如: setRotate(90)。详情参见旋转和镜像。
     */
    setRotate: function setRotate(rotate) {
      console.log("\u53C2\u6570\u4E3A\u65CB\u8F6C\u89D2\u5EA6:".concat(rotate, "\u3002"));
      this.player.setRotate(rotate);
    },

    /**
     * 获取旋转角度。详情参见旋转和镜像。
     * @return rotate 旋转角度
     */
    getRotate: function getRotate() {
      console.log("\u83B7\u53D6\u65CB\u8F6C\u89D2\u5EA6:".concat(this.player.getRotate()));
      return this.player.getRotate();
    },

    /**
     * 设置镜像
     * @param image 镜像类型 可选值为：horizon,vertical
     * @description 例如: setImage(‘horizon’)。详情参见旋转和镜像。
     */
    setImage: function setImage(image) {
      console.log("\u8BBE\u7F6E\u955C\u50CF:".concat(image, "\u3002"));
      this.player.setImage(image);
    },

    /**
     * 播放器销毁
     */
    dispose: function dispose() {
      console.log("\u64AD\u653E\u5668\u9500\u6BC1\u3002");
      this.player.dispose();
    },

    /**
     * 设置封面
     * @param cover 封面地址
     */
    setCover: function setCover(cover) {
      console.log("\u8BBE\u7F6E\u5C01\u9762:".concat(cover));
      this.player.setCover(cover);
    },

    /**
     * 设置封面
     * @param markers 设置打点数据
     */
    setProgressMarkers: function setProgressMarkers(markers) {
      console.log("markers\u6253\u70B9\u6570\u636E\u96C6\u5408:".concat(markers));
      this.player.setProgressMarkers(markers);
    },

    /**
     * 设置试看时间，单位为秒，详情参见
     * @param time 试看时间
     */
    setPreviewTime: function setPreviewTime(time) {
      console.log("\u8BBE\u7F6E\u8BD5\u770B\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A:".concat(time, "\u79D2"));
      this.player.setPreviewTime(time);
    },

    /**
     * 获取试看时间
     * @return rotate 旋转角度
     */
    getPreviewTime: function getPreviewTime() {
      console.log("\u83B7\u53D6\u8BD5\u770B\u65F6\u95F4:".concat(this.player.getPreviewTime()));
      return this.player.getPreviewTime();
    },

    /**
     * 是否试看
     */
    isPreview: function isPreview() {
      console.log("\u662F\u5426\u8BD5\u770B");
      this.player.isPreview();
    }
  }
});
// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.2@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/AliplayerV2/index.js

// 导入组件，组件必须声明 name
 // 为组件添加 install 方法，用于按需引入

main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var AliplayerV2 = (main);
// CONCATENATED MODULE: ./packages/index.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// packages / index.js
// 导入单个组件
 // 以数组的结构保存组件，便于遍历

var components = [AliplayerV2]; // 定义 install 方法

var install = function install(Vue) {
  if (install.installed) return false;
  install.installed = true; // 遍历并注册全局组件

  components.map(function (component) {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = (_objectSpread({
  // 导出的对象必须具备一个 install 方法
  install: install,
  AliplayerV2: AliplayerV2
}, components));
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "1277":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("f341")('wks');
var uid = __webpack_require__("4d2c");
var Symbol = __webpack_require__("3f8b").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "17cb":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3f8b").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "1f9e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6117");
var toLength = __webpack_require__("8941");
var toAbsoluteIndex = __webpack_require__("c3a9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "2498":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var core = __webpack_require__("da27");
var hide = __webpack_require__("b8ea");
var redefine = __webpack_require__("a6d5");
var ctx = __webpack_require__("e85e");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "25ae":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("f9a5") && !__webpack_require__("0cc1")(function () {
  return Object.defineProperty(__webpack_require__("6618")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "2ab1":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("da0b");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "3038":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "3d87":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d3d8").f;
var has = __webpack_require__("549d");
var TAG = __webpack_require__("1277")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "3f8b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "4634":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("96dd");
var getKeys = __webpack_require__("7d56");
var redefine = __webpack_require__("a6d5");
var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var wks = __webpack_require__("1277");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "4aef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("6cc2");
var $export = __webpack_require__("2498");
var redefine = __webpack_require__("a6d5");
var hide = __webpack_require__("b8ea");
var Iterators = __webpack_require__("e3b3");
var $iterCreate = __webpack_require__("c264");
var setToStringTag = __webpack_require__("3d87");
var getPrototypeOf = __webpack_require__("d15b");
var ITERATOR = __webpack_require__("1277")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "4d2c":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "549d":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6077":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6117":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("9952");
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "65c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("8cac");
var dPs = __webpack_require__("8d69");
var enumBugKeys = __webpack_require__("d93f");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("6618")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("17cb").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "6618":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
var document = __webpack_require__("3f8b").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "6cc2":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "6fe0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f341")('native-function-to-string', Function.toString);


/***/ }),

/***/ "7afe":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("549d");
var toIObject = __webpack_require__("6117");
var arrayIndexOf = __webpack_require__("1f9e")(false);
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "7cfd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("f9a5") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7d56":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("7afe");
var enumBugKeys = __webpack_require__("d93f");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "8451":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "8868":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("2498");
var core = __webpack_require__("da27");
var fails = __webpack_require__("0cc1");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "8941":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("a6ad");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "8cac":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "8d69":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var anObject = __webpack_require__("8cac");
var getKeys = __webpack_require__("7d56");

module.exports = __webpack_require__("f9a5") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "96dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("ab19");
var step = __webpack_require__("c8e9");
var Iterators = __webpack_require__("e3b3");
var toIObject = __webpack_require__("6117");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("4aef")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "9947":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("f341")('keys');
var uid = __webpack_require__("4d2c");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "9952":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6077");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "9d61":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "a6ad":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "a6d5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3f8b");
var hide = __webpack_require__("b8ea");
var has = __webpack_require__("549d");
var SRC = __webpack_require__("4d2c")('src');
var $toString = __webpack_require__("6fe0");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("da27").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "a9cf":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3038");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "ab19":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("1277")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("b8ea")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "b8ea":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");
module.exports = __webpack_require__("f9a5") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "c264":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("65c3");
var descriptor = __webpack_require__("0614");
var setToStringTag = __webpack_require__("3d87");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("b8ea")(IteratorPrototype, __webpack_require__("1277")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "c3a9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a6ad");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "c864":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "c8e9":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "cb2e":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("7afe");
var hiddenKeys = __webpack_require__("d93f").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "d15b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("549d");
var toObject = __webpack_require__("a9cf");
var IE_PROTO = __webpack_require__("9947")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "d3d8":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("8cac");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var toPrimitive = __webpack_require__("2ab1");
var dP = Object.defineProperty;

exports.f = __webpack_require__("f9a5") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "d93f":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "da0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "da27":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "e323":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d3d8");
var createDesc = __webpack_require__("0614");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "e3b3":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "e493":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("c864");
var createDesc = __webpack_require__("0614");
var toIObject = __webpack_require__("6117");
var toPrimitive = __webpack_require__("2ab1");
var has = __webpack_require__("549d");
var IE8_DOM_DEFINE = __webpack_require__("25ae");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("f9a5") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e85e":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8451");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "ed8b":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("a9cf");
var $keys = __webpack_require__("7d56");

__webpack_require__("8868")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "efce":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("2498");
var ownKeys = __webpack_require__("f36d");
var toIObject = __webpack_require__("6117");
var gOPD = __webpack_require__("e493");
var createProperty = __webpack_require__("e323");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "f341":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("da27");
var global = __webpack_require__("3f8b");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("6cc2") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "f36d":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("cb2e");
var gOPS = __webpack_require__("9d61");
var anObject = __webpack_require__("8cac");
var Reflect = __webpack_require__("3f8b").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "f9a5":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0cc1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
});
//# sourceMappingURL=vue-aliplayer-v2.umd.js.map