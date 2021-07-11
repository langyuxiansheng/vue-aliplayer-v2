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

/***/ "05fd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("baa7")('native-function-to-string', Function.toString);


/***/ }),

/***/ "065d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b");
var createDesc = __webpack_require__("5edc");
module.exports = __webpack_require__("26df") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "0926":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "0b34":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


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

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("a450");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"52b194f6-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/index.vue?vue&type=template&id=49dd74ed&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.playerId}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/AliplayerV2/index.vue?vue&type=template&id=49dd74ed&

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.14.6@@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.12@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("4057");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/index.vue?vue&type=script&lang=js&


//
//
//
/* harmony default export */ var AliplayerV2vue_type_script_lang_js_ = ({
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
    cssLink: {
      //css版本源
      required: false,
      type: [String],
      default: "https://g.alicdn.com/de/prismplayer/2.9.7/skins/default/aliplayer-min.css"
    },
    scriptSrc: {
      //js版本源
      required: false,
      type: [String],
      default: "https://g.alicdn.com/de/prismplayer/2.9.7/aliplayer-min.js"
    }
  },
  data: function data() {
    return {
      player: null,
      //播放器实例
      playerId: "player-".concat(Math.random().toString(36).substr(2).toLocaleUpperCase()),
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
    source: function source() {
      //监听播放源变化
      this.init();
    },
    options: {
      //配置项是对象,只能深度监听
      handler: function handler() {
        this.init();
      },
      deep: true
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

      var linkID = 'app__aliplayer-min-css';
      var scriptID = 'app__aliplayer-min-js';
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
        link.id = linkID; // link.className = linkID;

        head[0].appendChild(link);
      }

      if (!scriptTag) {
        // console.log('scriptTag');
        scriptTag = document.createElement('script');
        scriptTag.type = "text/javascript";
        scriptTag.id = scriptID; // scriptTag.className = scriptID;

        scriptTag.src = this.scriptSrc;
        html[0].appendChild(scriptTag);
      } else {
        this.initPlayer(); //这样是为了兼容页面上有多个播放器
      } //兼容单页加载和硬加载


      scriptTag.addEventListener("load", function () {
        _this3.initPlayer();
      });
    },

    /**
     * 创建播放器
     * @description SDK文档地址:https://help.aliyun.com/document_detail/125572.html?spm=a2c4g.11186623.6.1084.131d1c4cJT7o5Z
     */
    initPlayer: function initPlayer() {
      var _this4 = this;

      if (typeof window.Aliplayer != 'undefined') {
        var options = this.deepCloneObject(this.options);

        if (options) {
          for (var key in options) {
            this.config[key] = options[key];
          }
        }

        if (this.source) this.config.source = this.source; //播放源

        this.config.id = this.playerId; //赋值播放器容器id

        this.player && this.player.dispose(); //防止实例的重复

        this.player = Aliplayer(this.config);

        var _loop = function _loop(ev) {
          _this4.player && _this4.player.on(_this4.events[ev], function (e) {
            // console.log(`object ${this.events[ev]}`,e);
            _this4.$emit(_this4.events[ev], e);
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
    },

    /**
     * 深度拷贝
     * @param {*} obj
     */
    deepCloneObject: function deepCloneObject(obj) {
      var objClone = Array.isArray(obj) ? [] : {};

      if (obj && _typeof(obj) === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            //判断ojb子元素是否为对象，如果是，递归复制
            if (obj[key] && _typeof(obj[key]) === 'object') {
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
  beforeDestroy: function beforeDestroy() {
    //防止重复创建
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
});
// CONCATENATED MODULE: ./packages/AliplayerV2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_AliplayerV2vue_type_script_lang_js_ = (AliplayerV2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/AliplayerV2/index.vue





/* normalize component */

var component = normalizeComponent(
  packages_AliplayerV2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AliplayerV2 = (component.exports);
// CONCATENATED MODULE: ./packages/index.js

// packages / index.js
// 导入单个组件
 // 定义 install 方法

AliplayerV2.install = function (Vue, options) {
  if (options && options.cssLink) AliplayerV2.props.cssLink.default = options.cssLink;
  if (options && options.scriptSrc) AliplayerV2.props.scriptSrc.default = options.scriptSrc;
  Vue.component(AliplayerV2.name, AliplayerV2);
};

AliplayerV2.Player = AliplayerV2;
/* harmony default export */ var packages_0 = (AliplayerV2);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "26df":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0926")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3d8a":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "4057":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("de49");
var anObject = __webpack_require__("a86f");
var $flags = __webpack_require__("6bf8");
var DESCRIPTORS = __webpack_require__("26df");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("84e8")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("0926")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
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

/***/ "4fd4":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5d10":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("9cff");
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

/***/ "5edc":
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

/***/ "6bf8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a86f");
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

/***/ "76e3":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "83d3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("26df") && !__webpack_require__("0926")(function () {
  return Object.defineProperty(__webpack_require__("e8d7")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "84e8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("0b34");
var hide = __webpack_require__("065d");
var has = __webpack_require__("4fd4");
var SRC = __webpack_require__("d8b3")('src');
var $toString = __webpack_require__("05fd");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("76e3").inspectSource = function (it) {
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

/***/ "9cff":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "a450":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("bb8b").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("26df") && dP(FProto, NAME, {
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

/***/ "a86f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "baa7":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("76e3");
var global = __webpack_require__("0b34");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("3d8a") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "bb8b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a86f");
var IE8_DOM_DEFINE = __webpack_require__("83d3");
var toPrimitive = __webpack_require__("5d10");
var dP = Object.defineProperty;

exports.f = __webpack_require__("26df") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "d8b3":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "de49":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("26df") && /./g.flags != 'g') __webpack_require__("bb8b").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("6bf8")
});


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

/***/ "e8d7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("9cff");
var document = __webpack_require__("0b34").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ })

/******/ });
});
//# sourceMappingURL=vue-aliplayer-v2.umd.js.map