module.exports =
/******/ (function(modules) { // webpackBootstrap
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

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.10@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7cfd");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"05d0d90a-vue-loader-template"}!./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./packages/AliplayerV2/src/main.vue?vue&type=template&id=66e79580&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/AliplayerV2/src/main.vue?vue&type=template&id=66e79580&

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

      var load = true;
      var linkID = 'aliplayer-min-css';
      var scriptID = 'aliplayer-min-js';
      var head = document.getElementsByTagName('head');
      var html = document.getElementsByTagName('html');
      var scriptTag = document.getElementById(scriptID);

      if (!document.getElementById(linkID)) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = this.config.cssLink;
        link.setAttribute('id', linkID);
        head[0].appendChild(link);
      }

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = "text/javascript";
        scriptTag.id = scriptID;
        scriptTag.src = this.config.scriptSrc;
        html[0].appendChild(scriptTag);
      }

      scriptTag.addEventListener("load", function () {
        _this3.initPlayer();

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
      var _this4 = this;

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
          _this4.player.on(_this4.events[ev], function (e) {
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
      this.player.play();
    },

    /**
     * 暂停视频
     */
    pause: function pause() {
      // console.log(`暂停视频`);
      this.player.pause();
    },

    /**
     * 重播视频
     */
    replay: function replay() {
      // console.log(`重播视频`);
      this.player.replay();
    },

    /**
     * 跳转到某个时刻进行播放，time的单位为秒。
     * @param time
     * @return player
     */
    seek: function seek(time) {
      // console.log(`跳转到某个时刻进行播放，time为${time}秒。`);
      this.player.seek(time);
    },

    /**
     * 获取当前的播放时刻，返回的单位为秒。
     * @return player
     */
    getCurrentTime: function getCurrentTime() {
      // console.log(`获取当前的播放时刻，返回的单位为${this.player.getCurrentTime()}秒。`);
      return this.player.getCurrentTime();
    },

    /**
     * 获取视频总时长，返回的单位为秒，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取。
     * @return player
     */
    getDuration: function getDuration() {
      // console.log(`获取视频总时长，返回的单位为${this.player.getDuration()}秒。`);
      return this.player.getDuration();
    },

    /**
     * 获取当前的音量，返回值为0-1的实数。ios和部分android会失效。
     * @return player
     */
    getVolume: function getVolume() {
      // console.log(`获取当前的音量${this.player.getVolume()}。`);
      return this.player.getVolume();
    },

    /**
     * 设置音量，vol为0-1的实数，ios和部分android会失效。
     * @return player
     */
    setVolume: function setVolume(v) {
      // console.log(`设置音量，vol为${v}。`);
      this.player.setVolume(v);
    },

    /**
     * 直接播放视频url，time为可选值（单位秒）。目前只支持同种格式（mp4/flv/m3u8）之间切换。
     * 暂不支持直播rtmp流切换。
     * @return player
     */
    loadByUrl: function loadByUrl(url, time) {
      // console.log(`直接播放视频url${url}，time为${time}。`);
      this.player.loadByUrl(url, time);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     */
    replayByVidAndPlayAuth: function replayByVidAndPlayAuth(vid, playauth) {
      // console.log(`replayByVidAndPlayAuth vid${vid}，playauth为${playauth}。`);
      this.player.replayByVidAndPlayAuth(vid, playauth);
    },

    /**
     * 目前只支持H5播放器。暂不支持不同格式视频间的之间切换。暂不支持直播rtmp流切换。
     * @param vid 视频id
     * @param 播放凭证
     * @description 仅MPS用户时使用 仅MPS用户时使用 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion
     */
    replayByVidAndAuthInfo: function replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion) {
      // console.log(`replayByVidAndAuthInfo 参数顺序为：vid、accId、accSecret、stsToken、authInfo、domainRegion`,vid, accId, accSecret, stsToken, authInfo, domainRegion);
      this.player.replayByVidAndAuthInfo(vid, accId, accSecret, stsToken, authInfo, domainRegion);
    },

    /**
     * 设置播放器大小w，h可分别为400px像素或60%百分比。
     * @param w 宽度
     * @param h 宽度
     * @description chrome浏览器下flash播放器分别不能小于397x297。
     */
    setPlayerSize: function setPlayerSize(w, h) {
      // console.log(`设置播放器大小 宽度:${w},高度:${h}`);
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
      // console.log(`手动设置播放的倍速:${speed}`);
      this.player.setSpeed(speed);
    },

    /**
     * 设置截图参数
     * @param width 宽度
     * @param height 高度
     * @param rate 截图质量
     */
    setSanpshotProperties: function setSanpshotProperties(width, height, rate) {
      // console.log(`设置截图参数:`,width, height, rate);
      this.player.setSanpshotProperties(width, height, rate);
    },

    /**
     * 播放器全屏，仅H5支持。
     */
    requestFullScreen: function requestFullScreen() {
      // console.log(`播放器全屏，仅H5支持`);
      this.player.fullscreenService && this.player.fullscreenService.requestFullScreen();
    },

    /**
     * 播放器退出全屏，iOS调用无效，仅H5支持。
     */
    cancelFullScreen: function cancelFullScreen() {
      // console.log(`播放器全屏，仅H5支持`);
      this.player.fullscreenService && this.player.fullscreenService.cancelFullScreen();
    },

    /**
     * 获取播放器全屏状态，仅H5支持。
     */
    getIsFullScreen: function getIsFullScreen() {
      // console.log(`获取播放器全屏状态，仅H5支持。`,this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen());
      return this.player.fullscreenService && this.player.fullscreenService.getIsFullScreen();
    },

    /**
     * 获取播放器状态，包含的值,
     * @returns init ready loading play pause playing waiting error ended
     */
    getStatus: function getStatus() {
      // console.log(`获取播放器状态，包含的值`,this.player.fullscreenService && this.player.fullscreenService.getStatus());
      return this.player.fullscreenService && this.player.fullscreenService.getStatus();
    },

    /**
     * 设置直播的开始结束时间，开启直播时移功能时使用。
     * @param beginTime 开始时间
     * @param endTime 结束时间
     * @description 例子：player.liveShiftSerivce.setLiveTimeRange(“”，‘2018/01/04 20:00:00’)
     */
    setLiveTimeRange: function setLiveTimeRange(beginTime, endTime) {
      // console.log(`设置直播的开始时间:${beginTime},结束时间:${endTime}，开启直播时移功能时使用。`);
      this.player.liveShiftSerivce && this.player.liveShiftSerivce.setLiveTimeRange(beginTime, endTime);
    },

    /**
     * 参数为旋转角度， 正数为正时针旋转， 负数为逆时针旋转。
     * @param rotate 旋转角度
     * @description 例如: setRotate(90)。详情参见旋转和镜像。
     */
    setRotate: function setRotate(rotate) {
      // console.log(`参数为旋转角度:${rotate}。`);
      this.player.setRotate(rotate);
    },

    /**
     * 获取旋转角度。详情参见旋转和镜像。
     * @return rotate 旋转角度
     */
    getRotate: function getRotate() {
      // console.log(`获取旋转角度:${this.player.getRotate()}`);
      return this.player.getRotate();
    },

    /**
     * 设置镜像
     * @param image 镜像类型 可选值为：horizon,vertical
     * @description 例如: setImage(‘horizon’)。详情参见旋转和镜像。
     */
    setImage: function setImage(image) {
      // console.log(`设置镜像:${image}。`);
      this.player.setImage(image);
    },

    /**
     * 播放器销毁
     */
    dispose: function dispose() {
      // console.log(`播放器销毁。`);
      this.player.dispose();
    },

    /**
     * 设置封面
     * @param cover 封面地址
     */
    setCover: function setCover(cover) {
      // console.log(`设置封面:${cover}`);
      this.player.setCover(cover);
    },

    /**
     * 设置封面
     * @param markers 设置打点数据
     */
    setProgressMarkers: function setProgressMarkers(markers) {
      // console.log(`markers打点数据集合:${markers}`);
      this.player.setProgressMarkers(markers);
    },

    /**
     * 设置试看时间，单位为秒，详情参见
     * @param time 试看时间
     */
    setPreviewTime: function setPreviewTime(time) {
      // console.log(`设置试看时间，单位为:${time}秒`);
      this.player.setPreviewTime(time);
    },

    /**
     * 获取试看时间
     * @return rotate 旋转角度
     */
    getPreviewTime: function getPreviewTime() {
      // console.log(`获取试看时间:${this.player.getPreviewTime()}`);
      return this.player.getPreviewTime();
    },

    /**
     * 是否试看
     */
    isPreview: function isPreview() {
      // console.log(`是否试看`);
      this.player.isPreview();
    },

    /**
     * @param ev 事件名
     * @param handle 回调方法
     */
    off: function off(ev, handle) {
      this.player.off(ev, handle);
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
  VueAliplayerV2: AliplayerV2 // 组件列表

});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



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

/***/ "3f8b":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


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

/***/ "8cac":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("da0b");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
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

/***/ "da0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
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

/***/ "f9a5":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("0cc1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ })

/******/ });
//# sourceMappingURL=vue-aliplayer-v2.common.js.map