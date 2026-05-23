import { computed as e, createElementBlock as t, defineComponent as n, nextTick as r, onBeforeUnmount as i, onMounted as a, openBlock as o, ref as s, watch as c } from "vue";
//#region packages/AliplayerV2/sdkLoader.ts
var l = "2.37.0", u = `https://g.alicdn.com/apsara-media-box/imp-web-player/${l}/skins/default/aliplayer-min.css`, d = `https://g.alicdn.com/apsara-media-box/imp-web-player/${l}/aliplayer-min.js`, f = /* @__PURE__ */ new Map();
function p(e) {
	return `https://g.alicdn.com/apsara-media-box/imp-web-player/${e}/skins/default/aliplayer-min.css`;
}
function m(e) {
	return `https://g.alicdn.com/apsara-media-box/imp-web-player/${e}/aliplayer-min.js`;
}
function h(e) {
	if (!e || document.querySelector(`link[data-vue-aliplayer-v2-css="${e}"]`)) return;
	let t = document.createElement("link");
	t.type = "text/css", t.rel = "stylesheet", t.href = e, t.dataset.vueAliplayerV2Css = e, document.head.appendChild(t);
}
function g(e, t) {
	if (!e || t && window[t]) return Promise.resolve();
	if (f.has(e)) return f.get(e);
	let n = document.querySelector(`script[data-vue-aliplayer-v2-js="${e}"]`);
	if (n) {
		let t = new Promise((t, r) => {
			if (n.dataset.vueAliplayerV2Loaded === "true") {
				t();
				return;
			}
			n.addEventListener("load", () => {
				n.dataset.vueAliplayerV2Loaded = "true", t();
			}, { once: !0 }), n.addEventListener("error", () => r(/* @__PURE__ */ Error(`Failed to load Aliplayer SDK: ${e}`)), { once: !0 });
		});
		return f.set(e, t), t;
	}
	let r = new Promise((t, n) => {
		let r = document.createElement("script");
		r.type = "text/javascript", r.src = e, r.dataset.vueAliplayerV2Js = e, r.addEventListener("load", () => {
			r.dataset.vueAliplayerV2Loaded = "true", t();
		}, { once: !0 }), r.addEventListener("error", () => n(/* @__PURE__ */ Error(`Failed to load Aliplayer SDK: ${e}`)), { once: !0 }), document.documentElement.appendChild(r);
	});
	return f.set(e, r), r;
}
async function _(e, t) {
	h(e), await g(t, "Aliplayer");
}
async function v(e = []) {
	for (let t of e) await g(t);
}
//#endregion
//#region packages/AliplayerV2/source.ts
var y = [
	"m3u8",
	"flv",
	"mp4",
	"rtmp",
	"mp3"
];
function b(e) {
	if (!e) return null;
	if (/^rtmps?:\/\//i.test(e)) return "rtmp";
	let t = e.split("?")[0].split("#")[0].toLowerCase();
	return y.find((e) => e && t.endsWith(`.${e}`)) || null;
}
function x(e) {
	if (!e) return e || null;
	if (/^(data|blob):/i.test(e)) return e;
	try {
		return encodeURI(e);
	} catch {
		return e;
	}
}
//#endregion
//#region packages/AliplayerV2/tracking.ts
var S = ["videocloud.cn-hangzhou.log.aliyuncs.com/logstores/newplayer/track"], C = !1;
function w(e, t) {
	return t.some((t) => typeof t == "string" ? e.includes(t) : t.test(e));
}
function T(e = S) {
	if (C) return;
	C = !0;
	let t = window.fetch?.bind(window);
	t && (window.fetch = ((n, r) => w(typeof n == "string" || n instanceof URL ? String(n) : n.url, e) ? Promise.resolve(new Response(null, {
		status: 204,
		statusText: "No Content"
	})) : t(n, r)));
	let n = XMLHttpRequest.prototype.open, r = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.open = function(t, r, i, a, o) {
		this.__vueAliplayerV2Blocked = w(String(r), e), n.call(this, t, r, i ?? !0, a ?? void 0, o ?? void 0);
	}, XMLHttpRequest.prototype.send = function(e) {
		this.__vueAliplayerV2Blocked || r.call(this, e);
	};
}
//#endregion
//#region packages/AliplayerV2/index.vue
var E = /* @__PURE__ */ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ n({
	name: "VueAliplayerV2",
	__name: "index",
	props: {
		autoFormat: {
			type: Boolean,
			default: !0
		},
		forbidFastForward: {
			type: Boolean,
			default: !1
		},
		license: { default: null },
		lowLatency: {
			type: Boolean,
			default: !1
		},
		normalizeSourceUrl: {
			type: Boolean,
			default: !0
		},
		options: { default: null },
		source: { default: null },
		sdkVersion: { default: l },
		cssLink: { default: "" },
		scriptSrc: { default: "" },
		componentScripts: { default: () => [] },
		disableTracking: {
			type: Boolean,
			default: !1
		},
		trackingUrlPatterns: { default: () => [] }
	},
	emits: [
		"ready",
		"play",
		"pause",
		"canplay",
		"playing",
		"ended",
		"liveStreamStop",
		"onM3u8Retry",
		"hideBar",
		"showBar",
		"waiting",
		"timeupdate",
		"snapshoted",
		"requestFullScreen",
		"cancelFullScreen",
		"error",
		"startSeek",
		"completeSeek",
		"sdk-error"
	],
	setup(n, { expose: l, emit: f }) {
		let h = n, g = f, y = s(null), S = s(null), C = s(!1), w = s(null), E = 0, D = `player-${Math.random().toString(36).slice(2).toUpperCase()}`, O = [
			"ready",
			"play",
			"pause",
			"canplay",
			"playing",
			"ended",
			"liveStreamStop",
			"onM3u8Retry",
			"hideBar",
			"showBar",
			"waiting",
			"timeupdate",
			"snapshoted",
			"requestFullScreen",
			"cancelFullScreen",
			"error",
			"startSeek",
			"completeSeek"
		], k = e(() => h.cssLink || (h.sdkVersion ? p(h.sdkVersion) : u)), A = e(() => h.scriptSrc || (h.sdkVersion ? m(h.sdkVersion) : d)), j = e(() => h.normalizeSourceUrl ? x(h.source) : h.source), M = e(() => b(j.value)), N = e(() => {
			let e = {
				width: "100%",
				autoplay: !0,
				...h.options || {},
				...h.license ? { license: h.license } : {},
				...j.value ? { source: j.value } : {},
				id: D
			};
			return h.autoFormat && M.value && !e.format && (e.format = M.value), h.lowLatency && e.isLive && M.value === "flv" && (e.enableStashBufferForFlv = e.enableStashBufferForFlv ?? !1, e.stashInitialSizeForFlv = e.stashInitialSizeForFlv ?? 128), e;
		});
		function P() {
			return y.value;
		}
		function F() {
			y.value && (y.value.dispose(), y.value = null, w.value = null);
		}
		function I(e) {
			O.forEach((t) => {
				e.on(t, (e) => {
					g(t, e);
				});
			});
		}
		function L(e) {
			if (!h.forbidFastForward) return;
			let t = 0, n = 0;
			e.on("timeupdate", () => {
				let r = e.getCurrentTime();
				if (r - t > 2) {
					e.seek(t);
					return;
				}
				t = r, t >= n && (n = t);
			});
		}
		function R() {
			if (C.value || !window.Aliplayer || !S.value) return;
			F();
			let e = window.Aliplayer({ ...N.value });
			y.value = e, w.value = M.value, I(e), L(e);
		}
		async function z() {
			let e = ++E;
			try {
				if (h.disableTracking && T(h.trackingUrlPatterns), await _(k.value, A.value), await v(h.componentScripts), await r(), C.value || e !== E) return;
				R();
			} catch (e) {
				g("sdk-error", e instanceof Error ? e : Error(String(e)));
			}
		}
		async function B(e) {
			if (e && y.value) {
				y.value.loadByUrl(h.normalizeSourceUrl && x(e) || e);
				return;
			}
			await z();
		}
		async function V(e) {
			await B(e);
		}
		function H() {
			y.value?.play();
		}
		function U() {
			y.value?.pause();
		}
		function W() {
			y.value?.replay();
		}
		function G(e) {
			y.value?.seek(e);
		}
		function K() {
			return y.value?.getCurrentTime();
		}
		function ee() {
			return y.value?.getDuration();
		}
		function q() {
			return y.value?.getVolume();
		}
		function J(e) {
			y.value?.setVolume(e);
		}
		function Y(e, t) {
			y.value?.loadByUrl(e, t);
		}
		function X(e, t) {
			y.value?.replayByVidAndPlayAuth(e, t);
		}
		function Z(e, t, n, r, i, a) {
			y.value?.replayByVidAndAuthInfo(e, t, n, r, i, a);
		}
		function Q(e, t) {
			y.value?.setPlayerSize(e, t);
		}
		function $(e) {
			y.value?.setSpeed(e);
		}
		function te(e, t, n) {
			y.value?.setSanpshotProperties(e, t, n);
		}
		function ne() {
			y.value?.fullscreenService?.requestFullScreen();
		}
		function re() {
			y.value?.fullscreenService?.cancelFullScreen();
		}
		function ie() {
			return y.value?.fullscreenService?.getIsFullScreen();
		}
		function ae() {
			return y.value?.getStatus();
		}
		function oe(e, t) {
			y.value?.liveShiftSerivce?.setLiveTimeRange(e, t);
		}
		function se(e) {
			y.value?.setRotate(e);
		}
		function ce() {
			return y.value?.getRotate();
		}
		function le(e) {
			y.value?.setImage(e);
		}
		function ue(e) {
			y.value?.setCover(e);
		}
		function de(e) {
			y.value?.setProgressMarkers(e);
		}
		function fe(e) {
			y.value?.setPreviewTime(e);
		}
		function pe() {
			return y.value?.getPreviewTime();
		}
		function me() {
			return y.value?.isPreview();
		}
		function he(e, t) {
			y.value?.off?.(e, t);
		}
		return a(() => {
			z();
		}), c(() => j.value, (e) => {
			if (!e) return;
			let t = b(e);
			if (y.value && t && t === w.value) {
				y.value.loadByUrl(e);
				return;
			}
			z();
		}), c(() => [
			h.options,
			h.forbidFastForward,
			h.license,
			h.lowLatency,
			h.autoFormat,
			h.sdkVersion,
			h.cssLink,
			h.scriptSrc,
			h.componentScripts,
			h.disableTracking,
			h.trackingUrlPatterns
		], () => {
			z();
		}, { deep: !0 }), i(() => {
			C.value = !0, E += 1, F();
		}), l({
			getPlayer: P,
			init: z,
			initPlayer: R,
			reload: B,
			retry: V,
			play: H,
			pause: U,
			replay: W,
			seek: G,
			getCurrentTime: K,
			getDuration: ee,
			getVolume: q,
			setVolume: J,
			loadByUrl: Y,
			replayByVidAndPlayAuth: X,
			replayByVidAndAuthInfo: Z,
			setPlayerSize: Q,
			setSpeed: $,
			setSanpshotProperties: te,
			requestFullScreen: ne,
			cancelFullScreen: re,
			getIsFullScreen: ie,
			getStatus: ae,
			setLiveTimeRange: oe,
			setRotate: se,
			getRotate: ce,
			setImage: le,
			dispose: F,
			setCover: ue,
			setProgressMarkers: de,
			setPreviewTime: fe,
			getPreviewTime: pe,
			isPreview: me,
			off: he
		}), (e, n) => (o(), t("div", {
			id: D,
			ref_key: "containerRef",
			ref: S,
			class: "vue-aliplayer-v2"
		}, null, 512));
	}
}), [["__scopeId", "data-v-cf852d0d"]]), D = {
	sdkVersion: l,
	cssLink: u,
	scriptSrc: d,
	componentScripts: [],
	disableTracking: !1,
	trackingUrlPatterns: []
}, O = E;
O.install = (e, t) => {
	Object.assign(D, t || {}), e.component("VueAliplayerV2", O);
}, O.props.cssLink.default = () => D.cssLink, O.props.scriptSrc.default = () => D.scriptSrc, O.props.sdkVersion.default = () => D.sdkVersion, O.props.componentScripts.default = () => D.componentScripts, O.props.disableTracking.default = () => D.disableTracking, O.props.trackingUrlPatterns.default = () => D.trackingUrlPatterns, O.Player = O;
//#endregion
export { O as VueAliplayerV2, O as default };
