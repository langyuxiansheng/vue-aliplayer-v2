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

/***/ "008a":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("f6b4");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "064e":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("69b3");
var IE8_DOM_DEFINE = __webpack_require__("db6b");
var toPrimitive = __webpack_require__("94b3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("149f") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "09b9":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("224c");
var defined = __webpack_require__("f6b4");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "0dc8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("064e");
var anObject = __webpack_require__("69b3");
var getKeys = __webpack_require__("80a9");

module.exports = __webpack_require__("149f") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "0e8b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("cb3d")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("86d4")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("cc57");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22e374de-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/src/main.vue?vue&type=template&id=0d33cae0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue?vue&type=template&id=0d33cae0&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("6d57");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.11@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("2b45");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/src/main.vue?vue&type=script&lang=js&


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
    source: {
      //播放源(此属性存在则优先于options.source) 动态切换,目前只支持同种格式（mp4/flv/m3u8）之间切换。暂不支持直播rtmp流切换。
      required: false,
      type: [String],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: "player-".concat(Math.random().toString(36).substr(2).toLocaleUpperCase())
    },
    cssLink: {
      //css版本源
      required: false,
      type: [String],
      default: "https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css"
    },
    scriptSrc: {
      //js版本源
      required: false,
      type: [String],
      default: "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"
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
        autoplay: true // isLive: true,
        //支持播放地址播放,此播放优先级最高
        // source: 'rtmp://182.145.195.238:1935/hls/1194076936807170050',

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
  watch: {
    source: function source(url) {
      //监听播放源变化
      this.loadByUrl(url);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  updated: function updated() {
    var _this2 = this;

    //重载播放器
    this.$nextTick(function () {
      _this2.init();
    });
  },
  methods: {
    /**
     * 创建script和css
     * 加载Alipayer的SDK
     */
    init: function init() {
      var _this3 = this;

      var linkID = 'aliplayer-min-css';
      var scriptID = 'aliplayer-min-js';
      var head = document.getElementsByTagName('head');
      var html = document.getElementsByTagName('html');
      var scriptTag = document.getElementById(scriptID);
      var linkIDTag = document.getElementById(linkID);

      if (!linkIDTag) {
        // console.log('linkIDTag');
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = this.cssLink;
        link.id = linkID;
        head[0].appendChild(link);
      }

      if (!scriptTag) {
        // console.log('scriptTag');
        scriptTag = document.createElement('script');
        scriptTag.type = "text/javascript";
        scriptTag.id = scriptID;
        scriptTag.src = this.scriptSrc;
        html[0].appendChild(scriptTag);
        scriptTag.addEventListener("load", function () {
          _this3.initPlayer();
        });
      } else {
        this.initPlayer();
      }
    },

    /**
     * 创建播放器
     * @description SDK文档地址:https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1084.131d1c4cJT7o5Z
     */
    initPlayer: function initPlayer() {
      var _this4 = this;

      // console.log(`this.player`,this.player);
      if (typeof window.Aliplayer != 'undefined') {
        var options = this.options;

        if (options) {
          for (var key in options) {
            this.config[key] = options[key];
          }
        }

        if (this.source) this.config.source = this.source; //播放源

        this.config.id = this.id; // this.player = new Aliplayer(this.config, function(player) {
        //     // console.log('播放器创建好了',player);
        // });

        if (!this.player) {
          // console.log(this.config);
          this.player = Aliplayer(this.config);

          var _loop = function _loop(ev) {
            _this4.player && _this4.player.on(_this4.events[ev], function (e) {
              // console.log(`object ${this.events[ev]}`,e);
              _this4.$emit(_this4.events[ev], e);
            });
          };

          for (var ev in this.events) {
            _loop(ev);
          }
        } else {
          this.player && this.player.replay(); //销毁后重播
          // console.log(`this.player && this.player.replay()`,'销毁后重播');
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
      // console.log(`播放视频。`);
      this.player && this.player.play();
    },

    /**
     * 暂停视频
     */
    pause: function pause() {
      // console.log(`暂停视频`);
      this.player && this.player.pause();
    },

    /**
     * 重播视频
     */
    replay: function replay() {
      // console.log(`重播视频`);
      this.player && this.player.replay();
    },

    /**
     * 跳转到某个时刻进行播放，time的单位为秒。
     * @param time
     * @return player
     */
    seek: function seek(time) {
      // console.log(`跳转到某个时刻进行播放，time为${time}秒。`);
      this.player && this.player.seek(time);
    },

    /**
     * 获取当前的播放时刻，返回的单位为秒。
     * @return player
     */
    getCurrentTime: function getCurrentTime() {
      // console.log(`获取当前的播放时刻，返回的单位为${this.player && this.player.getCurrentTime()}秒。`);
      return this.player && this.player.getCurrentTime();
    },

    /**
     * 获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取。
     * @return player
     */
    getDuration: function getDuration() {
      // console.log(`获取视频总时长，返回的单位为${this.player && this.player.getDuration()}秒。`);
      return this.player && this.player.getDuration();
    },

    /**
     * 获取当前的音量，返回值为0-1的实数。ios和部分android会失效。
     * @return player
     */
    getVolume: function getVolume() {
      // console.log(`获取当前的音量${this.player && this.player.getVolume()}。`);
      return this.player && this.player.getVolume();
    },

    /**
     * 设置音量，vol为0-1的实数，ios和部分android会失效。
     * @return player
     */
    setVolume: function setVolume(v) {
      // console.log(`设置音量，vol为${v}。`);
      this.player && this.player.setVolume(v);
    },

    /**
     * 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。
     * 暂不支持直播rtmp流切换。
     * @return player
     */
    loadByUrl: function loadByUrl(url, time) {
      // console.log(`直接播放视频url${url}，time为${time}。`);
      this.player && this.player.loadByUrl(url, time);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     */
    replayByVidAndPlayAuth: function replayByVidAndPlayAuth(vid, playauth) {
      // console.log(`replayByVidAndPlayAuth vid${vid}，playauth为${playauth}。`);
      this.player && this.player.replayByVidAndPlayAuth(vid, playauth);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     * @description 仅MPS用户时使用 仅MPS用户时使用 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion
     */
    replayByVidAndAuthInfo: function replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion) {
      // console.log(`replayByVidAndAuthInfo 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion`,vid, accId, accSecret, stsToken, authInfo, domainRegion);
      this.player && this.player.replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion);
    },

    /**
     * 设置播放器大小w，h可分别为400px像素或60%百分比。
     * @param w 宽度
     * @param h 宽度
     * @description chrome浏览器下flash播放器分别不能小于397x297。
     */
    setPlayerSize: function setPlayerSize(w, h) {
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
    setSpeed: function setSpeed(speed) {
      // console.log(`手动设置播放的倍速:${speed}`);
      this.player && this.player.setSpeed(speed);
    },

    /**
     * 设置截图参数
     * @param width 宽度
     * @param height 高度
     * @param rate 截图质量
     */
    setSanpshotProperties: function setSanpshotProperties(width, height, rate) {
      // console.log(`设置截图参数:`,width, height, rate);
      this.player && this.player.setSanpshotProperties(width, height, rate);
    },

    /**
     * 播放器全屏，仅H5支持。
     */
    requestFullScreen: function requestFullScreen() {
      // console.log(`播放器全屏，仅H5支持`);
      this.player && this.player.fullscreenService && this.player.fullscreenService.requestFullScreen();
    },

    /**
     * 播放器退出全屏，iOS调用无效，仅H5支持。
     */
    cancelFullScreen: function cancelFullScreen() {
      // console.log(`播放器全屏，仅H5支持`);
      this.player && this.player.fullscreenService && this.player.fullscreenService.cancelFullScreen();
    },

    /**
     * 获取播放器全屏状态，仅H5支持。
     */
    getIsFullScreen: function getIsFullScreen() {
      // console.log(`获取播放器全屏状态，仅H5支持。`,this.player && this.player.fullscreenService && this.player && this.player.fullscreenService.getIsFullScreen());
      return this.player && this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen();
    },

    /**
     * 获取播放器状态，包含的值,
     * @returns init ready loading play pause playing waiting error ended
     */
    getStatus: function getStatus() {
      // console.log(`获取播放器状态，包含的值`,this.player && this.player.fullscreenService && this.player && this.player.fullscreenService.getStatus());
      return this.player && this.player.getStatus();
    },

    /**
     * 设置直播的开始结束时间，开启直播时移功能时使用。
     * @param beginTime 开始时间
     * @param endTime 结束时间
     * @description 例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)
     */
    setLiveTimeRange: function setLiveTimeRange(beginTime, endTime) {
      // console.log(`设置直播的开始时间:${beginTime},结束时间:${endTime}，开启直播时移功能时使用。`);
      this.player && this.player.liveShiftSerivce && this.player.liveShiftSerivce.setLiveTimeRange(beginTime, endTime);
    },

    /**
     * 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。
     * @param rotate 旋转角度
     * @description 例如: setRotate(90)。详情参见旋转和镜像。
     */
    setRotate: function setRotate(rotate) {
      // console.log(`参数为旋转角度:${rotate}。`);
      this.player && this.player.setRotate(rotate);
    },

    /**
     * 获取旋转角度。详情参见旋转和镜像。
     * @return rotate 旋转角度
     */
    getRotate: function getRotate() {
      // console.log(`获取旋转角度:${this.player && this.player.getRotate()}`);
      return this.player && this.player.getRotate();
    },

    /**
     * 设置镜像
     * @param image 镜像类型 可选值为：horizon,vertical
     * @description 例如: setImage(‘horizon’)。详情参见旋转和镜像。
     */
    setImage: function setImage(image) {
      // console.log(`设置镜像:${image}。`);
      this.player && this.player.setImage(image);
    },

    /**
     * 播放器销毁
     */
    dispose: function dispose() {
      // console.log(`播放器销毁。`);
      this.player && this.player.dispose();
    },

    /**
     * 设置封面
     * @param cover 封面地址
     */
    setCover: function setCover(cover) {
      // console.log(`设置封面:${cover}`);
      this.player && this.player.setCover(cover);
    },

    /**
     * 设置封面
     * @param markers 设置打点数据
     */
    setProgressMarkers: function setProgressMarkers(markers) {
      // console.log(`markers打点数据集合:${markers}`);
      this.player && this.player.setProgressMarkers(markers);
    },

    /**
     * 设置试看时间，单位为秒，详情参见
     * @param time 试看时间
     */
    setPreviewTime: function setPreviewTime(time) {
      // console.log(`设置试看时间，单位为:${time}秒`);
      this.player && this.player.setPreviewTime(time);
    },

    /**
     * 获取试看时间
     * @return rotate 旋转角度
     */
    getPreviewTime: function getPreviewTime() {
      // console.log(`获取试看时间:${this.player && this.player.getPreviewTime()}`);
      return this.player && this.player.getPreviewTime();
    },

    /**
     * 是否试看
     */
    isPreview: function isPreview() {
      // console.log(`是否试看`);
      this.player && this.player.isPreview();
    },

    /**
     * @param ev 事件名
     * @param handle 回调方法
     */
    off: function off(ev, handle) {
      this.player && this.player.off(ev, handle);
    }
  },
  beforeDestroy: function beforeDestroy() {
    //防止重复创建
    var head = document.querySelector('head'); //移除所有的重复创建的标签

    var nodes = document.querySelectorAll('script[src="https://g.alicdn.com/de/prismplayer/2.8.2/hls/aliplayer-hls-min.js"]');
    head && nodes.forEach(function (item) {
      head.removeChild(item);
    });
  }
});
// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// packages / index.js
// 导入单个组件
 // 以数组的结构保存组件，便于遍历

var components = [AliplayerV2]; // 定义 install 方法

var install = function install(Vue) {
  if (install.installed) return false;
  install.installed = true; // 遍历并注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法
  install: install,
  Player: AliplayerV2 // 组件列表

});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "149f":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("238a")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "190b":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("149f") && /./g.flags != 'g') __webpack_require__("064e").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("f1fe")
});


/***/ }),

/***/ "224c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("75c4");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "238a":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2b45":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("190b");
var anObject = __webpack_require__("69b3");
var $flags = __webpack_require__("f1fe");
var DESCRIPTORS = __webpack_require__("149f");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("bf16")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("238a")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "32b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("e005");
var descriptor = __webpack_require__("cc33");
var setToStringTag = __webpack_require__("399f");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("86d4")(IteratorPrototype, __webpack_require__("cb3d")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "399f":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("064e").f;
var has = __webpack_require__("e042");
var TAG = __webpack_require__("cb3d")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "475d":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "492d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("550e");
var $export = __webpack_require__("e46b");
var redefine = __webpack_require__("bf16");
var hide = __webpack_require__("86d4");
var Iterators = __webpack_require__("da6d");
var $iterCreate = __webpack_require__("32b9");
var setToStringTag = __webpack_require__("399f");
var getPrototypeOf = __webpack_require__("58cf");
var ITERATOR = __webpack_require__("cb3d")('iterator');
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

/***/ "4ce5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("5daa");
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

/***/ "550e":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "56f2":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("6798")('keys');
var uid = __webpack_require__("ec45");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "58cf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("e042");
var toObject = __webpack_require__("008a");
var IE_PROTO = __webpack_require__("56f2")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5daa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "6798":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("7ddc");
var global = __webpack_require__("e7ad");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("550e") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "69b3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("fb68");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "6d57":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("e44b");
var getKeys = __webpack_require__("80a9");
var redefine = __webpack_require__("bf16");
var global = __webpack_require__("e7ad");
var hide = __webpack_require__("86d4");
var Iterators = __webpack_require__("da6d");
var wks = __webpack_require__("cb3d");
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

/***/ "75c4":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "7ddc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "80a9":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("c2f7");
var enumBugKeys = __webpack_require__("ceac");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "86d4":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("064e");
var createDesc = __webpack_require__("cc33");
module.exports = __webpack_require__("149f") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "8df1":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e7ad").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "94b3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("fb68");
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

/***/ "b3a6":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("09b9");
var toLength = __webpack_require__("eafa");
var toAbsoluteIndex = __webpack_require__("f58a");
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

/***/ "bf16":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e7ad");
var hide = __webpack_require__("86d4");
var has = __webpack_require__("e042");
var SRC = __webpack_require__("ec45")('src');
var $toString = __webpack_require__("d07e");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7ddc").inspectSource = function (it) {
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

/***/ "bfe7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("fb68");
var document = __webpack_require__("e7ad").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "c2f7":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("e042");
var toIObject = __webpack_require__("09b9");
var arrayIndexOf = __webpack_require__("b3a6")(false);
var IE_PROTO = __webpack_require__("56f2")('IE_PROTO');

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

/***/ "cb3d":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("6798")('wks');
var uid = __webpack_require__("ec45");
var Symbol = __webpack_require__("e7ad").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "cc33":
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

/***/ "cc57":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("064e").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("149f") && dP(FProto, NAME, {
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

/***/ "ceac":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "d07e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6798")('native-function-to-string', Function.toString);


/***/ }),

/***/ "da6d":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "db6b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("149f") && !__webpack_require__("238a")(function () {
  return Object.defineProperty(__webpack_require__("bfe7")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "e005":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("69b3");
var dPs = __webpack_require__("0dc8");
var enumBugKeys = __webpack_require__("ceac");
var IE_PROTO = __webpack_require__("56f2")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("bfe7")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("8df1").appendChild(iframe);
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

/***/ "e042":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "e44b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("0e8b");
var step = __webpack_require__("475d");
var Iterators = __webpack_require__("da6d");
var toIObject = __webpack_require__("09b9");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("492d")(Array, 'Array', function (iterated, kind) {
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

/***/ "e46b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e7ad");
var core = __webpack_require__("7ddc");
var hide = __webpack_require__("86d4");
var redefine = __webpack_require__("bf16");
var ctx = __webpack_require__("4ce5");
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

/***/ "e7ad":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eafa":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("ee21");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ec45":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "ee21":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "f1fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("69b3");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f58a":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ee21");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "fb68":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ })

/******/ });
});
//# sourceMappingURL=vue-aliplayer-v2.umd.js.map