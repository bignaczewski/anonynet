/*!
 * jQuery JavaScript Library v1.11.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-17T15:27Z
 */
!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length, i = re.type(t);
        return "function" === i || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (re.isFunction(e))return re.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType)return re.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (he.test(e))return re.filter(e, t, i);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return re.inArray(t, e) >= 0 !== i
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function s(t) {
        var e = _e[t] = {};
        return re.each(t.match(be) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), re.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(De, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? re.parseJSON(i) : i
                } catch (r) {
                }
                re.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function c(t) {
        var e;
        for (e in t)if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
        return !0
    }

    function u(t, e, i, n) {
        if (re.acceptData(t)) {
            var r, s, o = re.expando, a = t.nodeType, l = a ? re.cache : t, c = a ? t[o] : t[o] && o;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof e)return c || (c = a ? t[o] = V.pop() || re.guid++ : o), l[c] || (l[c] = a ? {} : {toJSON: re.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[c] = re.extend(l[c], e) : l[c].data = re.extend(l[c].data, e)), s = l[c], n || (s.data || (s.data = {}), s = s.data), void 0 !== i && (s[re.camelCase(e)] = i), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
        }
    }

    function d(t, e, i) {
        if (re.acceptData(t)) {
            var n, r, s = t.nodeType, o = s ? re.cache : t, a = s ? t[re.expando] : re.expando;
            if (o[a]) {
                if (e && (n = i ? o[a] : o[a].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in n ? e = [e] : (e = re.camelCase(e), e = e in n ? [e] : e.split(" ")), r = e.length;
                    for (; r--;)delete n[e[r]];
                    if (i ? !c(n) : !re.isEmptyObject(n))return
                }
                (i || (delete o[a].data, c(o[a]))) && (s ? re.cleanData([t], !0) : ie.deleteExpando || o != o.window ? delete o[a] : o[a] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {
        }
    }

    function m(t) {
        var e = Fe.split("|"), i = t.createDocumentFragment();
        if (i.createElement)for (; e.length;)i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, r = 0, s = typeof t.getElementsByTagName !== xe ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== xe ? t.querySelectorAll(e || "*") : void 0;
        if (!s)for (s = [], i = t.childNodes || t; null != (n = i[r]); r++)!e || re.nodeName(n, e) ? s.push(n) : re.merge(s, g(n, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }

    function v(t) {
        $e.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Ue.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++)re._data(i, "globalEval", !e || re._data(e[n], "globalEval"))
    }

    function k(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var i, n, r, s = re._data(t), o = re._data(e, s), a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)for (n = 0, r = a[i].length; r > n; n++)re.event.add(e, i, a[i][n])
            }
            o.data && (o.data = re.extend({}, o.data))
        }
    }

    function x(t, e) {
        var i, n, r;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[re.expando]) {
                r = re._data(e);
                for (n in r.events)re.removeEvent(e, n, r.handle);
                e.removeAttribute(re.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && $e.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, i) {
        var n, r = re(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : re.css(r[0], "display");
        return r.detach(), s
    }

    function D(t) {
        var e = fe, i = Ze[t];
        return i || (i = C(t, e), "none" !== i && i || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Je.detach()), Ze[t] = i), i
    }

    function T(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i)return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t)return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = hi.length; r--;)if (e = hi[r] + i, e in t)return e;
        return n
    }

    function E(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)n = t[o], n.style && (s[o] = re._data(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (s[o] = re._data(n, "olddisplay", D(n.nodeName)))) : (r = Ee(n), (i && "none" !== i || !r) && re._data(n, "olddisplay", r ? i : re.css(n, "display"))));
        for (o = 0; a > o; o++)n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function I(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function $(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2)"margin" === i && (o += re.css(t, i + Se[s], !0, r)), n ? ("content" === i && (o -= re.css(t, "padding" + Se[s], !0, r)), "margin" !== i && (o -= re.css(t, "border" + Se[s] + "Width", !0, r))) : (o += re.css(t, "padding" + Se[s], !0, r), "padding" !== i && (o += re.css(t, "border" + Se[s] + "Width", !0, r)));
        return o
    }

    function M(t, e, i) {
        var n = !0, r = "width" === e ? t.offsetWidth : t.offsetHeight, s = ti(t), o = ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = ei(t, e, s), (0 > r || null == r) && (r = t.style[e]), ni.test(r))return r;
            n = o && (ie.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + $(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function N(t, e, i, n, r) {
        return new N.prototype.init(t, e, i, n, r)
    }

    function A() {
        return setTimeout(function () {
            pi = void 0
        }), pi = re.now()
    }

    function j(t, e) {
        var i, n = {height: t}, r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)i = Se[r], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function P(t, e, i) {
        for (var n, r = (bi[e] || []).concat(bi["*"]), s = 0, o = r.length; o > s; s++)if (n = r[s].call(i, e, t))return n
    }

    function F(t, e, i) {
        var n, r, s, o, a, l, c, u, d = this, h = {}, p = t.style, f = t.nodeType && Ee(t), m = re._data(t, "fxshow");
        i.queue || (a = re._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, d.always(function () {
            d.always(function () {
                a.unqueued--, re.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = re.css(t, "display"), u = "none" === c ? re._data(t, "olddisplay") || D(t.nodeName) : c, "inline" === u && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || d.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)if (r = e[n], mi.exec(r)) {
            if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[n])continue;
                f = !0
            }
            h[n] = m && m[n] || re.style(t, n)
        } else c = void 0;
        if (re.isEmptyObject(h))"inline" === ("none" === c ? D(t.nodeName) : c) && (p.display = c); else {
            m ? "hidden"in m && (f = m.hidden) : m = re._data(t, "fxshow", {}), s && (m.hidden = !f), f ? re(t).show() : d.done(function () {
                re(t).hide()
            }), d.done(function () {
                var e;
                re._removeData(t, "fxshow");
                for (e in h)re.style(t, e, h[e])
            });
            for (n in h)o = P(f ? m[n] : 0, n, d), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function H(t, e) {
        var i, n, r, s, o;
        for (i in t)if (n = re.camelCase(i), r = e[n], s = t[i], re.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = re.cssHooks[n], o && "expand"in o) {
            s = o.expand(s), delete t[n];
            for (i in s)i in t || (t[i] = s[i], e[i] = r)
        } else e[n] = r
    }

    function L(t, e, i) {
        var n, r, s = 0, o = yi.length, a = re.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var e = pi || A(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n, o = 0, l = c.tweens.length; l > o; o++)c.tweens[o].run(s);
            return a.notifyWith(t, [c, s, i]), 1 > s && l ? i : (a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: re.extend({}, e),
            opts: re.extend(!0, {specialEasing: {}}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: pi || A(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = re.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (r)return this;
                for (r = !0; n > i; i++)c.tweens[i].run(1);
                return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
            }
        }), u = c.props;
        for (H(u, c.opts.specialEasing); o > s; s++)if (n = yi[s].call(c, t, u, c.opts))return n;
        return re.map(u, P, c), re.isFunction(c.opts.start) && c.opts.start.call(t, c), re.fx.timer(re.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0, s = e.toLowerCase().match(be) || [];
            if (re.isFunction(i))for (; n = s[r++];)"+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function R(t, e, i, n) {
        function r(a) {
            var l;
            return s[a] = !0, re.each(t[a] || [], function (t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }

        var s = {}, o = t === Bi;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function q(t, e) {
        var i, n, r = re.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && re.extend(!0, t, i), t
    }

    function W(t, e, i) {
        for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)for (o in a)if (a[o] && a[o].test(r)) {
            l.unshift(o);
            break
        }
        if (l[0]in i)s = l[0]; else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                n || (n = o)
            }
            s = s || n
        }
        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
    }

    function B(t, e, i, n) {
        var r, s, o, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1])for (o in t.converters)c[o.toLowerCase()] = t.converters[o];
        for (s = u.shift(); s;)if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())if ("*" === s)s = l; else if ("*" !== l && l !== s) {
            if (o = c[l + " " + s] || c["* " + s], !o)for (r in c)if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                break
            }
            if (o !== !0)if (o && t["throws"])e = o(e); else try {
                e = o(e)
            } catch (d) {
                return {state: "parsererror", error: o ? d : "No conversion from " + l + " to " + s}
            }
        }
        return {state: "success", data: e}
    }

    function z(t, e, i, n) {
        var r;
        if (re.isArray(e))re.each(e, function (e, r) {
            i || Ui.test(t) ? n(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        }); else if (i || "object" !== re.type(e))n(t, e); else for (r in e)z(t + "[" + r + "]", e[r], i, n)
    }

    function Y() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function K() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function U(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var V = [], Q = V.slice, X = V.concat, G = V.push, J = V.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ie = {}, ne = "1.11.2", re = function (t, e) {
        return new re.fn.init(t, e)
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, oe = /^-ms-/, ae = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: ne, constructor: re, selector: "", length: 0, toArray: function () {
            return Q.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        }, pushStack: function (t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return re.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(re.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: G, sort: V.sort, splice: V.splice
    }, re.extend = re.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || re.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)if (null != (r = arguments[a]))for (n in r)t = o[n], i = r[n], o !== i && (c && i && (re.isPlainObject(i) || (e = re.isArray(i))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, o[n] = re.extend(c, s, i)) : void 0 !== i && (o[n] = i));
        return o
    }, re.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === re.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === re.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !re.isArray(t) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)for (e in t)return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && re.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(oe, "ms-").replace(ae, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t);
            if (n) {
                if (a)for (; o > s && (r = e.apply(t[s], n), r !== !1); s++); else for (s in t)if (r = e.apply(t[s], n), r === !1)break
            } else if (a)for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++); else for (s in t)if (r = e.call(t[s], s, t[s]), r === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(se, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? re.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
        }, inArray: function (t, e, i) {
            var n;
            if (e) {
                if (J)return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)if (i in e && e[i] === t)return i
            }
            return -1
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n;)t[r++] = e[n++];
            if (i !== i)for (; void 0 !== e[n];)t[r++] = e[n++];
            return t.length = r, t
        }, grep: function (t, e, i) {
            for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++)n = !e(t[s], s), n !== a && r.push(t[s]);
            return r
        }, map: function (t, e, n) {
            var r, s = 0, o = t.length, a = i(t), l = [];
            if (a)for (; o > s; s++)r = e(t[s], s, n), null != r && l.push(r); else for (s in t)r = e(t[s], s, n), null != r && l.push(r);
            return X.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var i, n, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (i = Q.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(Q.call(arguments)))
            }, n.guid = t.guid = t.guid || re.guid++, n) : void 0
        }, now: function () {
            return +new Date
        }, support: ie
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = /*!
     * Sizzle CSS Selector Engine v2.2.0-pre
     * http://sizzlejs.com/
     *
     * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-12-16
     */
        function (t) {
            function e(t, e, i, n) {
                var r, s, o, a, l, c, d, p, f, m;
                if ((e ? e.ownerDocument || e : R) !== N && M(e), e = e || N, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return i;
                if (!n && j) {
                    if (11 !== a && (r = ye.exec(t)))if (o = r[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(o), !s || !s.parentNode)return i;
                            if (s.id === o)return i.push(s), i
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && L(e, s) && s.id === o)return i.push(s), i
                    } else {
                        if (r[2])return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = r[3]) && w.getElementsByClassName)return J.apply(i, e.getElementsByClassName(o)), i
                    }
                    if (w.qsa && (!P || !P.test(t))) {
                        if (p = d = O, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = D(t), (d = e.getAttribute("id")) ? p = d.replace(_e, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + h(c[l]);
                            f = be.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m)try {
                            return J.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n
                }

                var e = [];
                return t
            }

            function n(t) {
                return t[O] = !0, t
            }

            function r(t) {
                var e = N.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;)k.attrHandle[i[n]] = e
            }

            function o(t, e) {
                var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n)return n;
                if (i)for (; i = i.nextSibling;)if (i === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var r, s = t([], i.length, e), o = s.length; o--;)i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {
            }

            function h(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++)n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir, r = i && "parentNode" === n, s = W++;
                return e.first ? function (e, i, s) {
                    for (; e = e[n];)if (1 === e.nodeType || r)return t(e, i, s)
                } : function (e, i, o) {
                    var a, l, c = [q, s];
                    if (o) {
                        for (; e = e[n];)if ((1 === e.nodeType || r) && t(e, i, o))return !0
                    } else for (; e = e[n];)if (1 === e.nodeType || r) {
                        if (l = e[O] || (e[O] = {}), (a = l[n]) && a[0] === q && a[1] === s)return c[2] = a[2];
                        if (l[n] = c, c[2] = t(e, i, o))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var r = t.length; r--;)if (!t[r](e, i, n))return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var r = 0, s = i.length; s > r; r++)e(t, i[r], n);
                return n
            }

            function g(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!i || i(s, n, r)) && (o.push(s), c && e.push(a));
                return o
            }

            function v(t, e, i, r, s, o) {
                return r && !r[O] && (r = v(r)), s && !s[O] && (s = v(s, o)), n(function (n, o, a, l) {
                    var c, u, d, h = [], p = [], f = o.length, v = n || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !n && e ? v : g(v, h, t, a, l), b = i ? s || (n ? t : f || r) ? [] : o : y;
                    if (i && i(y, b, a, l), r)for (c = g(b, p), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                s(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = s ? te(n, d) : h[u]) > -1 && (n[c] = !(o[c] = d))
                        }
                    } else b = g(b === o ? b.splice(f, b.length) : b), s ? s(null, o, b, l) : J.apply(o, b)
                })
            }

            function y(t) {
                for (var e, i, n, r = t.length, s = k.relative[t[0].type], o = s || k.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                    return t === e
                }, o, !0), c = p(function (t) {
                    return te(e, t) > -1
                }, o, !0), u = [function (t, i, n) {
                    var r = !s && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                    return e = null, r
                }]; r > a; a++)if (i = k.relative[t[a].type])u = [p(f(u), i)]; else {
                    if (i = k.filter[t[a].type].apply(null, t[a].matches), i[O]) {
                        for (n = ++a; r > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && h(t))
                    }
                    u.push(i)
                }
                return f(u)
            }

            function b(t, i) {
                var r = i.length > 0, s = t.length > 0, o = function (n, o, a, l, c) {
                    var u, d, h, p = 0, f = "0", m = n && [], v = [], y = E, b = n || s && k.find.TAG("*", c), _ = q += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (c && (E = o !== N && o); f !== w && null != (u = b[f]); f++) {
                        if (s && u) {
                            for (d = 0; h = t[d++];)if (h(u, o, a)) {
                                l.push(u);
                                break
                            }
                            c && (q = _)
                        }
                        r && ((u = !h && u) && p--, n && m.push(u))
                    }
                    if (p += f, r && f !== p) {
                        for (d = 0; h = i[d++];)h(m, v, o, a);
                        if (n) {
                            if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = X.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = _, E = y), m
                };
                return r ? n(o) : o
            }

            var _, w, k, x, C, D, T, S, E, I, $, M, N, A, j, P, F, H, L, O = "sizzle" + 1 * new Date, R = t.document, q = 0, W = 0, B = i(), z = i(), Y = i(), K = function (t, e) {
                return t === e && ($ = !0), 0
            }, U = 1 << 31, V = {}.hasOwnProperty, Q = [], X = Q.pop, G = Q.push, J = Q.push, Z = Q.slice, te = function (t, e) {
                for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
                return -1
            }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ne.replace("w", "w#"), se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ie + "*\\]", oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", ae = new RegExp(ie + "+", "g"), le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), ce = new RegExp("^" + ie + "*," + ie + "*"), ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), he = new RegExp(oe), pe = new RegExp("^" + re + "$"), fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, _e = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), ke = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, xe = function () {
                M()
            };
            try {
                J.apply(Q = Z.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: Q.length ? function (t, e) {
                        G.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, M = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : R;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, A = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), j = !C(n), w.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = r(function (t) {
                    return A.appendChild(t).id = O, !n.getElementsByName || !n.getElementsByName(O).length
                }), w.getById ? (k.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && j) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, k.filter.ID = function (t) {
                    var e = t.replace(we, ke);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function (t) {
                    var e = t.replace(we, ke);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), k.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [], r = 0, s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];)1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, k.find.CLASS = w.getElementsByClassName && function (t, e) {
                        return j ? e.getElementsByClassName(t) : void 0
                    }, F = [], P = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function (t) {
                    A.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + O + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + O + "+*").length || P.push(".#.+[+~]")
                }), r(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                })), (w.matchesSelector = ve.test(H = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function (t) {
                    w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), F.push("!=", oe)
                }), P = P.length && new RegExp(P.join("|")), F = F.length && new RegExp(F.join("|")), e = ve.test(A.compareDocumentPosition), L = e || ve.test(A.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, K = e ? function (t, e) {
                    if (t === e)return $ = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && L(R, t) ? -1 : e === n || e.ownerDocument === R && L(R, e) ? 1 : I ? te(I, t) - te(I, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return $ = !0, 0;
                    var i, r = 0, s = t.parentNode, a = e.parentNode, l = [t], c = [e];
                    if (!s || !a)return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : I ? te(I, t) - te(I, e) : 0;
                    if (s === a)return o(t, e);
                    for (i = t; i = i.parentNode;)l.unshift(i);
                    for (i = e; i = i.parentNode;)c.unshift(i);
                    for (; l[r] === c[r];)r++;
                    return r ? o(l[r], c[r]) : l[r] === R ? -1 : c[r] === R ? 1 : 0
                }, n) : N
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== N && M(t), i = i.replace(de, "='$1']"), !(!w.matchesSelector || !j || F && F.test(i) || P && P.test(i)))try {
                    var n = H.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)return n
                } catch (r) {
                }
                return e(i, N, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== N && M(t), L(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== N && M(t);
                var i = k.attrHandle[e.toLowerCase()], n = i && V.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !j) : void 0;
                return void 0 !== n ? n : w.attributes || !j ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [], n = 0, r = 0;
                if ($ = !w.detectDuplicates, I = !w.sortStable && t.slice(0), t.sort(K), $) {
                    for (; e = t[r++];)e === t[r] && (n = i.push(r));
                    for (; n--;)t.splice(i[n], 1)
                }
                return I = null, t
            }, x = e.getText = function (t) {
                var e, i = "", n = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)i += x(t)
                    } else if (3 === r || 4 === r)return t.nodeValue
                } else for (; e = t[n++];)i += x(e);
                return i
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(we, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && he.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(we, ke).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && B(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, i, n) {
                        return function (r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3), o = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === n && 0 === r ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var c, u, d, h, p, f, m = s !== o ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                    for (u = g[O] || (g[O] = {}), c = u[t] || [], p = c[0] === q && c[1], h = c[0] === q && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)if (1 === d.nodeType && ++h && d === e) {
                                        u[t] = [q, p, h];
                                        break
                                    }
                                } else if (y && (c = (e[O] || (e[O] = {}))[t]) && c[0] === q)h = c[1]; else for (; (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[O] || (d[O] = {}))[t] = [q, h]), d !== e)););
                                return h -= r, h === n || h % n === 0 && h / n >= 0
                            }
                        }
                    }, PSEUDO: function (t, i) {
                        var r, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[O] ? s(i) : s.length > 1 ? (r = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, r = s(t, i), o = r.length; o--;)n = te(t, r[o]), t[n] = !(e[n] = r[o])
                        }) : function (t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [], i = [], r = T(t.replace(le, "$1"));
                        return r[O] ? n(function (t, e, i, n) {
                            for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, n, s) {
                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }), has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }), contains: n(function (t) {
                        return t = t.replace(we, ke), function (e) {
                            return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                        }
                    }), lang: n(function (t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, ke).toLowerCase(), function (e) {
                            var i;
                            do if (i = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    }, root: function (t) {
                        return t === A
                    }, focus: function (t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !k.pseudos.empty(t)
                    }, header: function (t) {
                        return ge.test(t.nodeName)
                    }, input: function (t) {
                        return me.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, i) {
                        return [0 > i ? i + e : i]
                    }), even: c(function (t, e) {
                        for (var i = 0; e > i; i += 2)t.push(i);
                        return t
                    }), odd: c(function (t, e) {
                        for (var i = 1; e > i; i += 2)t.push(i);
                        return t
                    }), lt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;)t.push(n);
                        return t
                    }), gt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;)t.push(n);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (_ in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[_] = a(_);
            for (_ in{submit: !0, reset: !0})k.pseudos[_] = l(_);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, D = e.tokenize = function (t, i) {
                var n, r, s, o, a, l, c, u = z[t + " "];
                if (u)return i ? 0 : u.slice(0);
                for (a = t, l = [], c = k.preFilter; a;) {
                    (!n || (r = ce.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ue.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(le, " ")
                    }), a = a.slice(n.length));
                    for (o in k.filter)!(r = fe[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n)break
                }
                return i ? a.length : a ? e.error(t) : z(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var i, n = [], r = [], s = Y[t + " "];
                if (!s) {
                    for (e || (e = D(t)), i = e.length; i--;)s = y(e[i]), s[O] ? n.push(s) : r.push(s);
                    s = Y(t, b(r, n)), s.selector = t
                }
                return s
            }, S = e.select = function (t, e, i, n) {
                var r, s, o, a, l, c = "function" == typeof t && t, d = !n && D(t = c.selector || t);
                if (i = i || [], 1 === d.length) {
                    if (s = d[0] = d[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && j && k.relative[s[1].type]) {
                        if (e = (k.find.ID(o.matches[0].replace(we, ke), e) || [])[0], !e)return i;
                        c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = fe.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !k.relative[a = o.type]);)if ((l = k.find[a]) && (n = l(o.matches[0].replace(we, ke), be.test(s[0].type) && u(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = n.length && h(s), !t)return J.apply(i, n), i;
                        break
                    }
                }
                return (c || T(t, d))(n, e, !j, i, be.test(t) && u(e.parentNode) || e), i
            }, w.sortStable = O.split("").sort(K).join("") === O, w.detectDuplicates = !!$, M(), w.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(ee, function (t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
    re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
    var ue = re.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? re.find.matchesSelector(n, t) ? [n] : [] : re.find.matches(t, re.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, re.fn.extend({
        find: function (t) {
            var e, i = [], n = this, r = n.length;
            if ("string" != typeof t)return this.pushStack(re(t).filter(function () {
                for (e = 0; r > e; e++)if (re.contains(n[e], this))return !0
            }));
            for (e = 0; r > e; e++)re.find(t, n[e], i);
            return i = this.pushStack(r > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        }, is: function (t) {
            return !!n(this, "string" == typeof t && ue.test(t) ? re(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = re.fn.init = function (t, e) {
        var i, n;
        if (!t)return this;
        if ("string" == typeof t) {
            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(i[1]) && re.isPlainObject(e))for (i in e)re.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if (n = fe.getElementById(i[2]), n && n.parentNode) {
                if (n.id !== i[2])return pe.find(t);
                this.length = 1, this[0] = n
            }
            return this.context = fe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
    };
    ge.prototype = re.fn, pe = re(fe);
    var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
    re.extend({
        dir: function (t, e, i) {
            for (var n = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === i || 1 !== r.nodeType || !re(r).is(i));)1 === r.nodeType && n.push(r), r = r[e];
            return n
        }, sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), re.fn.extend({
        has: function (t) {
            var e, i = re(t, this), n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)if (re.contains(this, i[e]))return !0
            })
        }, closest: function (t, e) {
            for (var i, n = 0, r = this.length, s = [], o = ue.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > n; n++)for (i = this[n]; i && i !== e; i = i.parentNode)if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && re.find.matchesSelector(i, t))) {
                s.push(i);
                break
            }
            return this.pushStack(s.length > 1 ? re.unique(s) : s)
        }, index: function (t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return re.dir(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return re.dir(t, "parentNode", i)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return re.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return re.dir(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return re.dir(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return re.dir(t, "previousSibling", i)
        }, siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return re.sibling(t.firstChild)
        }, contents: function (t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function (t, e) {
        re.fn[t] = function (i, n) {
            var r = re.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = re.filter(n, r)), this.length > 1 && (ye[t] || (r = re.unique(r)), ve.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var be = /\S+/g, _e = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? _e[t] || s(t) : re.extend({}, t);
        var e, i, n, r, o, a, l = [], c = !t.once && [], u = function (s) {
            for (i = t.memory && s, n = !0, o = a || 0, a = 0, r = l.length, e = !0; l && r > o; o++)if (l[o].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                i = !1;
                break
            }
            e = !1, l && (c ? c.length && u(c.shift()) : i ? l = [] : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function s(e) {
                        re.each(e, function (e, i) {
                            var n = re.type(i);
                            "function" === n ? t.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                        })
                    }(arguments), e ? r = l.length : i && (a = n, u(i))
                }
                return this
            }, remove: function () {
                return l && re.each(arguments, function (t, i) {
                    for (var n; (n = re.inArray(i, l, n)) > -1;)l.splice(n, 1), e && (r >= n && r--, o >= n && o--)
                }), this
            }, has: function (t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], r = 0, this
            }, disable: function () {
                return l = c = i = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = void 0, i || d.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (t, i) {
                return !l || n && !c || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? c.push(i) : u(i)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return d
    }, re.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]], i = "pending", n = {
                state: function () {
                    return i
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return re.Deferred(function (i) {
                        re.each(e, function (e, s) {
                            var o = re.isFunction(t[e]) && t[e];
                            r[s[1]](function () {
                                var t = o && o.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? re.extend(t, n) : n
                }
            }, r = {};
            return n.pipe = n.then, re.each(e, function (t, s) {
                var o = s[2], a = s[3];
                n[s[1]] = o.add, a && o.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, i, n, r = 0, s = Q.call(arguments), o = s.length, a = 1 !== o || t && re.isFunction(t.promise) ? o : 0, l = 1 === a ? t : re.Deferred(), c = function (t, i, n) {
                return function (r) {
                    i[t] = this, n[t] = arguments.length > 1 ? Q.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (o > 1)for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++)s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(c(r, n, s)).fail(l.reject).progress(c(r, i, e)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    });
    var we;
    re.fn.ready = function (t) {
        return re.ready.promise().done(t), this
    }, re.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? re.readyWait++ : re.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!fe.body)return setTimeout(re.ready);
                re.isReady = !0, t !== !0 && --re.readyWait > 0 || (we.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
            }
        }
    }), re.ready.promise = function (e) {
        if (!we)if (we = re.Deferred(), "complete" === fe.readyState)setTimeout(re.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
            fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {
            }
            i && i.doScroll && !function r() {
                if (!re.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(r, 50)
                    }
                    o(), re.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var ke, xe = "undefined";
    for (ke in re(ie))break;
    ie.ownLast = "0" !== ke, ie.inlineBlockNeedsLayout = !1, re(function () {
        var t, e, i, n;
        i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }), function () {
        var t = fe.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(), re.acceptData = function (t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, De = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !c(t)
        },
        data: function (t, e, i) {
            return u(t, e, i)
        },
        removeData: function (t, e) {
            return d(t, e)
        },
        _data: function (t, e, i) {
            return u(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return d(t, e, !0)
        }
    }), re.fn.extend({
        data: function (t, e) {
            var i, n, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
                    for (i = o.length; i--;)o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = re.camelCase(n.slice(5)), l(s, n, r[n])));
                    re._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                re.data(this, t, e)
            }) : s ? l(s, t, re.data(s, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                re.removeData(this, t)
            })
        }
    }), re.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = re._data(t, e), i && (!n || re.isArray(i) ? n = re._data(t, e, re.makeArray(i)) : n.push(i)), n || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = re.queue(t, e), n = i.length, r = i.shift(), s = re._queueHooks(t, e), o = function () {
                re.dequeue(t, e)
            };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return re._data(t, i) || re._data(t, i, {
                    empty: re.Callbacks("once memory").add(function () {
                        re._removeData(t, e + "queue"), re._removeData(t, i)
                    })
                })
        }
    }), re.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = re.queue(this, t, e);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && re.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, r = re.Deferred(), s = this, o = this.length, a = function () {
                --n || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)i = re._data(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = ["Top", "Right", "Bottom", "Left"], Ee = function (t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }, Ie = re.access = function (t, e, i, n, r, s, o) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === re.type(i)) {
            r = !0;
            for (a in i)re.access(t, e, a, i[a], !0, s, o)
        } else if (void 0 !== n && (r = !0, re.isFunction(n) || (o = !0), c && (o ? (e.call(t, n), e = null) : (c = e, e = function (t, e, i) {
                return c.call(re(t), i)
            })), e))for (; l > a; a++)e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : c ? e.call(t) : l ? e(t[0], i) : s
    }, $e = /^(?:checkbox|radio)$/i;
    !function () {
        var t = fe.createElement("input"), e = fe.createElement("div"), i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(), function () {
        var e, i, n = fe.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        })i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Me = /^(?:input|select|textarea)$/i, Ne = /^key/, Ae = /^(?:mouse|pointer|contextmenu)|click/, je = /^(?:focusinfocus|focusoutblur)$/, Pe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function (t, e, i, n, r) {
            var s, o, a, l, c, u, d, h, p, f, m, g = re._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = re.guid++), (o = g.events) || (o = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                    return typeof re === xe || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;)s = Pe.exec(e[a]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (c = re.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = re.event.special[p] || {}, d = re.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, n, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), re.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, c, u, d, h, p, f, m, g = re.hasData(t) && re._data(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(be) || [""], c = e.length; c--;)if (a = Pe.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = re.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;)o = h[s], !r && m !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, d.remove && d.remove.call(t, o));
                    l && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || re.removeEvent(t, p, g.handle), delete u[p])
                } else for (p in u)re.event.remove(t, p + e[c], i, n, !0);
                re.isEmptyObject(u) && (delete g.handle, re._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, r) {
            var s, o, a, l, c, u, d, h = [n || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !je.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, e = e[re.expando] ? e : new re.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : re.makeArray(i, [e]), c = re.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!r && !c.noBubble && !re.isWindow(n)) {
                    for (l = c.delegateType || p, je.test(l + p) || (a = a.parentNode); a; a = a.parentNode)h.push(a), u = a;
                    u === (n.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (d = 0; (a = h[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : c.bindType || p, s = (re._data(a, "events") || {})[e.type] && re._data(a, "handle"), s && s.apply(a, i), s = o && a[o], s && s.apply && re.acceptData(a) && (e.result = s.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && re.acceptData(n) && o && n[p] && !re.isWindow(n)) {
                    u = n[o], u && (n[o] = null), re.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {
                    }
                    re.event.triggered = void 0, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = re.event.fix(t);
            var e, i, n, r, s, o = [], a = Q.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], c = re.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (o = re.event.handlers.call(this, t, l), e = 0; (r = o[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, s = 0; (n = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((re.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (r = [], s = 0; a > s; s++)n = e[s], i = n.selector + " ", void 0 === r[i] && (r[i] = n.needsContext ? re(i, this).index(l) >= 0 : re.find(i, this, null, [l]).length), r[i] && r.push(n);
                r.length && o.push({elem: l, handlers: r})
            }
            return a < e.length && o.push({elem: this, handlers: e.slice(a)}), o
        },
        fix: function (t) {
            if (t[re.expando])return t;
            var e, i, n, r = t.type, s = t, o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Ae.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new re.Event(s), e = n.length; e--;)i = n[e], t[i] = s[i];
            return t.target || (t.target = s.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, r, s = e.button, o = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== f() && this.focus)try {
                        return this.focus(), !1
                    } catch (t) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return re.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var r = re.extend(new re.Event, i, {type: t, isSimulated: !0, originalEvent: {}});
            n ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, re.removeEvent = fe.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === xe && (t[n] = null), t.detachEvent(n, i))
    }, re.Event = function (t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        re.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, r = t.relatedTarget, s = t.handleObj;
                return (!r || r !== n && !re.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (re.event.special.submit = {
        setup: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, i = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                i && !re._data(i, "submitBubbles") && (re.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), re._data(i, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (re.event.special.change = {
        setup: function () {
            return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), re.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
            })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Me.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }), re._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return re.event.remove(this, "._change"), !Me.test(this.nodeName)
        }
    }), ie.focusinBubbles || re.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, r = re._data(n, e);
                r || n.addEventListener(t, i, !0), re._data(n, e, (r || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, r = re._data(n, e) - 1;
                r ? re._data(n, e, r) : (n.removeEventListener(t, i, !0), re._removeData(n, e))
            }
        }
    }), re.fn.extend({
        on: function (t, e, i, n, r) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t)this.on(s, e, i, t[s], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)n = p; else if (!n)return this;
            return 1 === r && (o = n, n = function (t) {
                return re().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, n, i, e)
            })
        }, one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj)return n = t.handleObj, re(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t)this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                re.event.remove(this, t, i, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            return i ? re.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", He = / jQuery\d+="(?:null|\d+)"/g, Le = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"), Oe = /^\s+/, Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, We = /<tbody/i, Be = /<|&#?\w+;/, ze = /<(?:script|style|link)/i, Ye = /checked\s*(?:[^=]|=\s*.checked.)/i, Ke = /^$|\/(?:java|ecma)script/i, Ue = /^true\/(.*)/, Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Xe = m(fe), Ge = Xe.appendChild(fe.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, re.extend({
        clone: function (t, e, i) {
            var n, r, s, o, a, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !Le.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ge.innerHTML = t.outerHTML, Ge.removeChild(s = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))for (n = g(s), a = g(t), o = 0; null != (r = a[o]); ++o)n[o] && x(r, n[o]);
            if (e)if (i)for (a = a || g(t), n = n || g(s), o = 0; null != (r = a[o]); o++)k(r, n[o]); else k(t, s);
            return n = g(s, "script"), n.length > 0 && w(n, !l && g(t, "script")), n = a = r = null, s
        }, buildFragment: function (t, e, i, n) {
            for (var r, s, o, a, l, c, u, d = t.length, h = m(e), p = [], f = 0; d > f; f++)if (s = t[f], s || 0 === s)if ("object" === re.type(s))re.merge(p, s.nodeType ? [s] : s); else if (Be.test(s)) {
                for (a = a || h.appendChild(e.createElement("div")), l = (qe.exec(s) || ["", ""])[1].toLowerCase(), u = Qe[l] || Qe._default, a.innerHTML = u[1] + s.replace(Re, "<$1></$2>") + u[2], r = u[0]; r--;)a = a.lastChild;
                if (!ie.leadingWhitespace && Oe.test(s) && p.push(e.createTextNode(Oe.exec(s)[0])), !ie.tbody)for (s = "table" !== l || We.test(s) ? "<table>" !== u[1] || We.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;)re.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(e.createTextNode(s));
            for (a && h.removeChild(a), ie.appendChecked || re.grep(g(p, "input"), v), f = 0; s = p[f++];)if ((!n || -1 === re.inArray(s, n)) && (o = re.contains(s.ownerDocument, s), a = g(h.appendChild(s), "script"), o && w(a), i))for (r = 0; s = a[r++];)Ke.test(s.type || "") && i.push(s);
            return a = null, h
        }, cleanData: function (t, e) {
            for (var i, n, r, s, o = 0, a = re.expando, l = re.cache, c = ie.deleteExpando, u = re.event.special; null != (i = t[o]); o++)if ((e || re.acceptData(i)) && (r = i[a], s = r && l[r])) {
                if (s.events)for (n in s.events)u[n] ? re.event.remove(i, n) : re.removeEvent(i, n, s.handle);
                l[r] && (delete l[r], c ? delete i[a] : typeof i.removeAttribute !== xe ? i.removeAttribute(a) : i[a] = null, V.push(r))
            }
        }
    }), re.fn.extend({
        text: function (t) {
            return Ie(this, function (t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, remove: function (t, e) {
            for (var i, n = t ? re.filter(t, this) : this, r = 0; null != (i = n[r]); r++)e || 1 !== i.nodeType || re.cleanData(g(i)), i.parentNode && (e && re.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        }, html: function (t) {
            return Ie(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(He, "") : void 0;
                if (!("string" != typeof t || ze.test(t) || !ie.htmlSerialize && Le.test(t) || !ie.leadingWhitespace && Oe.test(t) || Qe[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; n > i; i++)e = this[i] || {}, 1 === e.nodeType && (re.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, re.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = X.apply([], t);
            var i, n, r, s, o, a, l = 0, c = this.length, u = this, d = c - 1, h = t[0], p = re.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ie.checkClone && Ye.test(h))return this.each(function (i) {
                var n = u.eq(i);
                p && (t[0] = h.call(this, i, n.html())), n.domManip(t, e)
            });
            if (c && (a = re.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (s = re.map(g(a, "script"), b), r = s.length; c > l; l++)n = a, l !== d && (n = re.clone(n, !0, !0), r && re.merge(s, g(n, "script"))), e.call(this[l], n, l);
                if (r)for (o = s[s.length - 1].ownerDocument, re.map(s, _), l = 0; r > l; l++)n = s[l], Ke.test(n.type || "") && !re._data(n, "globalEval") && re.contains(o, n) && (n.src ? re._evalUrl && re._evalUrl(n.src) : re.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ve, "")));
                a = i = null
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        re.fn[t] = function (t) {
            for (var i, n = 0, r = [], s = re(t), o = s.length - 1; o >= n; n++)i = n === o ? this : this.clone(!0), re(s[n])[e](i), G.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Je, Ze = {};
    !function () {
        var t;
        ie.shrinkWrapBlocks = function () {
            if (null != t)return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"), ri = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, ei = function (t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== o || re.contains(t.ownerDocument, t) || (o = re.style(t, e)), ni.test(o) && ii.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + ""
    }) : fe.documentElement.currentStyle && (ti = function (t) {
        return t.currentStyle
    }, ei = function (t, e, i) {
        var n, r, s, o, a = t.style;
        return i = i || ti(t), o = i ? i[e] : void 0, null == o && a && a[e] && (o = a[e]), ni.test(o) && !ri.test(e) && (n = a.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : o, o = a.pixelLeft + "px", a.left = n, s && (r.left = s)), void 0 === o ? o : o + "" || "auto"
    }), function () {
        function e() {
            var e, i, n, r;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = o = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, o = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, r = e.appendChild(fe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), i.removeChild(n))
        }

        var i, n, r, s, o, a, l;
        i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], n = r && r.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, re.extend(ie, {
            reliableHiddenOffsets: function () {
                return null == a && e(), a
            }, boxSizingReliable: function () {
                return null == o && e(), o
            }, pixelPosition: function () {
                return null == s && e(), s
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }
        }))
    }(), re.swap = function (t, e, i, n) {
        var r, s, o = {};
        for (s in e)o[s] = t.style[s], t.style[s] = e[s];
        r = i.apply(t, n || []);
        for (s in e)t.style[s] = o[s];
        return r
    };
    var si = /alpha\([^)]*\)/i, oi = /opacity\s*=\s*([^)]*)/, ai = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Te + ")(.*)$", "i"), ci = new RegExp("^([+-])=(" + Te + ")", "i"), ui = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, di = {letterSpacing: "0", fontWeight: "400"}, hi = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = re.camelCase(e), l = t.style;
                if (e = re.cssProps[a] || (re.cssProps[a] = S(l, a)), o = re.cssHooks[e] || re.cssHooks[a], void 0 === i)return o && "get"in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                if (s = typeof i, "string" === s && (r = ci.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || re.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set"in o && void 0 === (i = o.set(t, i, n)))))try {
                    l[e] = i
                } catch (c) {
                }
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = re.camelCase(e);
            return e = re.cssProps[a] || (re.cssProps[a] = S(t.style, a)), o = re.cssHooks[e] || re.cssHooks[a], o && "get"in o && (s = o.get(t, !0, i)), void 0 === s && (s = ei(t, e, n)), "normal" === s && e in di && (s = di[e]), "" === i || i ? (r = parseFloat(s), i === !0 || re.isNumeric(r) ? r || 0 : s) : s
        }
    }), re.each(["height", "width"], function (t, e) {
        re.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? ai.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, ui, function () {
                    return M(t, e, n)
                }) : M(t, e, n) : void 0
            }, set: function (t, i, n) {
                var r = n && ti(t);
                return I(t, i, n ? $(t, e, n, ie.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ie.opacity || (re.cssHooks.opacity = {
        get: function (t, e) {
            return oi.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var i = t.style, n = t.currentStyle, r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(si, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = si.test(s) ? s.replace(si, r) : s + " " + r)
        }
    }), re.cssHooks.marginRight = T(ie.reliableMarginRight, function (t, e) {
        return e ? re.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
    }), re.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        re.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)r[t + Se[n] + e] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, ii.test(t) || (re.cssHooks[t + e].set = I)
    }), re.fn.extend({
        css: function (t, e) {
            return Ie(this, function (t, e, i) {
                var n, r, s = {}, o = 0;
                if (re.isArray(e)) {
                    for (n = ti(t), r = e.length; r > o; o++)s[e[o]] = re.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? re.style(t, e, i) : re.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ee(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = N, N.prototype = {
        constructor: N, init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (re.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = N.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.fx = N.prototype.init, re.fx.step = {};
    var pi, fi, mi = /^(?:toggle|show|hide)$/, gi = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"), vi = /queueHooks$/, yi = [F], bi = {
        "*": [function (t, e) {
            var i = this.createTween(t, e), n = i.cur(), r = gi.exec(e), s = r && r[3] || (re.cssNumber[t] ? "" : "px"), o = (re.cssNumber[t] || "px" !== s && +n) && gi.exec(re.css(i.elem, t)), a = 1, l = 20;
            if (o && o[3] !== s) {
                s = s || o[3], r = r || [], o = +n || 1;
                do a = a || ".5", o /= a, re.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
        }]
    };
    re.Animation = re.extend(L, {
        tweener: function (t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, r = t.length; r > n; n++)i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
        }, prefilter: function (t, e) {
            e ? yi.unshift(t) : yi.push(t)
        }
    }), re.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? re.extend({}, t) : {
            complete: i || !i && e || re.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !re.isFunction(e) && e
        };
        return n.duration = re.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in re.fx.speeds ? re.fx.speeds[n.duration] : re.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            re.isFunction(n.old) && n.old.call(this), n.queue && re.dequeue(this, n.queue)
        }, n
    }, re.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var r = re.isEmptyObject(t), s = re.speed(e, i, n), o = function () {
                var e = L(this, re.extend({}, t), s);
                (r || re._data(this, "finish")) && e.stop(!0)
            };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", s = re.timers, o = re._data(this);
                if (r)o[r] && o[r].stop && n(o[r]); else for (r in o)o[r] && o[r].stop && vi.test(r) && n(o[r]);
                for (r = s.length; r--;)s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                (e || !i) && re.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, i = re._data(this), n = i[t + "queue"], r = i[t + "queueHooks"], s = re.timers, o = n ? n.length : 0;
                for (i.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;)s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                for (e = 0; o > e; e++)n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), re.each(["toggle", "show", "hide"], function (t, e) {
        var i = re.fn[e];
        re.fn[e] = function (t, n, r) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(j(e, !0), t, n, r)
        }
    }), re.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        re.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), re.timers = [], re.fx.tick = function () {
        var t, e = re.timers, i = 0;
        for (pi = re.now(); i < e.length; i++)t = e[i], t() || e[i] !== t || e.splice(i--, 1);
        e.length || re.fx.stop(), pi = void 0
    }, re.fx.timer = function (t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function () {
        fi || (fi = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        clearInterval(fi), fi = null
    }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
            var n = setTimeout(e, t);
            i.stop = function () {
                clearTimeout(n)
            }
        })
    }, function () {
        var t, e, i, n, r;
        e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), r = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = r.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !r.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
    }();
    var _i = /\r/g;
    re.fn.extend({
        val: function (t) {
            var e, i, n, r = this[0];
            {
                if (arguments.length)return n = re.isFunction(t), this.each(function (i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
                        return null == t ? "" : t + ""
                    })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r)return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.trim(re.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)if (i = n[l], !(!i.selected && l !== r || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && re.nodeName(i.parentNode, "optgroup"))) {
                        if (e = re(i).val(), s)return e;
                        o.push(e)
                    }
                    return o
                }, set: function (t, e) {
                    for (var i, n, r = t.options, s = re.makeArray(e), o = r.length; o--;)if (n = r[o], re.inArray(re.valHooks.option.get(n), s) >= 0)try {
                        n.selected = i = !0
                    } catch (a) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wi, ki, xi = re.expr.attrHandle, Ci = /^(?:checked|selected)$/i, Di = ie.getSetAttribute, Ti = ie.input;
    re.fn.extend({
        attr: function (t, e) {
            return Ie(this, re.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        }
    }), re.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === xe ? re.prop(t, e, i) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), n = re.attrHooks[e] || (re.expr.match.bool.test(e) ? ki : wi)), void 0 === i ? n && "get"in n && null !== (r = n.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set"in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void re.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var i, n, r = 0, s = e && e.match(be);
            if (s && 1 === t.nodeType)for (; i = s[r++];)n = re.propFix[i] || i, re.expr.match.bool.test(i) ? Ti && Di || !Ci.test(i) ? t[n] = !1 : t[re.camelCase("default-" + i)] = t[n] = !1 : re.attr(t, i, ""), t.removeAttribute(Di ? i : n)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), ki = {
        set: function (t, e, i) {
            return e === !1 ? re.removeAttr(t, i) : Ti && Di || !Ci.test(i) ? t.setAttribute(!Di && re.propFix[i] || i, i) : t[re.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = xi[e] || re.find.attr;
        xi[e] = Ti && Di || !Ci.test(e) ? function (t, e, n) {
            var r, s;
            return n || (s = xi[e], xi[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, xi[e] = s), r
        } : function (t, e, i) {
            return i ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ti && Di || (re.attrHooks.value = {
        set: function (t, e, i) {
            return re.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
        }
    }), Di || (wi = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, xi.id = xi.name = xi.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, re.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        }, set: wi.set
    }, re.attrHooks.contenteditable = {
        set: function (t, e, i) {
            wi.set(t, "" === e ? !1 : e, i)
        }
    }, re.each(["width", "height"], function (t, e) {
        re.attrHooks[e] = {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (re.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Si = /^(?:input|select|textarea|button|object)$/i, Ei = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (t, e) {
            return Ie(this, re.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = re.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }
    }), re.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, i) {
            var n, r, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)return s = 1 !== o || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get"in r && null !== (n = r.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || re.each(["href", "src"], function (t, e) {
        re.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), ie.enctype || (re.propFix.enctype = "encoding");
    var Ii = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (t) {
            var e, i, n, r, s, o, a = 0, l = this.length, c = "string" == typeof t && t;
            if (re.isFunction(t))return this.each(function (e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(be) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ii, " ") : " ")) {
                for (s = 0; r = e[s++];)n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                o = re.trim(n), i.className !== o && (i.className = o)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, r, s, o, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))return this.each(function (e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(be) || []; l > a; a++)if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ii, " ") : "")) {
                for (s = 0; r = e[s++];)for (; n.indexOf(" " + r + " ") >= 0;)n = n.replace(" " + r + " ", " ");
                o = t ? re.trim(n) : "", i.className !== o && (i.className = o)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (i) {
                re(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function () {
                if ("string" === i)for (var e, n = 0, r = re(this), s = t.match(be) || []; e = s[n++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === xe || "boolean" === i) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ii, " ").indexOf(e) >= 0)return !0;
            return !1
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var $i = re.now(), Mi = /\?/, Ni = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
        var i, n = null, r = re.trim(e + "");
        return r && !re.trim(r.replace(Ni, function (t, e, r, s) {
            return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !s - !r, "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e)return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), i
    };
    var Ai, ji, Pi = /#.*$/, Fi = /([?&])_=[^&]*/, Hi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Li = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oi = /^(?:GET|HEAD)$/, Ri = /^\/\//, qi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Wi = {}, Bi = {}, zi = "*/".concat("*");
    try {
        ji = location.href
    } catch (Yi) {
        ji = fe.createElement("a"), ji.href = "", ji = ji.href
    }
    Ai = qi.exec(ji.toLowerCase()) || [], re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ji,
            type: "GET",
            isLocal: Li.test(Ai[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? q(q(t, re.ajaxSettings), e) : q(re.ajaxSettings, t)
        },
        ajaxPrefilter: O(Wi),
        ajaxTransport: O(Bi),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var r, u, v, y, _, k = e;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, o = n || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, i && (y = W(d, w, i)), y = B(d, y, w, r), r ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (re.lastModified[s] = _), _ = w.getResponseHeader("etag"), _ && (re.etag[s] = _)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, r = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", r ? f.resolveWith(h, [u, k, w]) : f.rejectWith(h, [w, k, v]), w.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]), m.fireWith(h, [w, k]), l && (p.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, s, o, a, l, c, u, d = re.ajaxSetup({}, e), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? re(h) : re.event, f = re.Deferred(), m = re.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, _ = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === b) {
                        if (!u)for (u = {}; e = Hi.exec(o);)u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? o : null
                },
                setRequestHeader: function (t, e) {
                    var i = t.toLowerCase();
                    return b || (t = y[i] = y[i] || t, v[t] = e), this
                },
                overrideMimeType: function (t) {
                    return b || (d.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else w.always(t[w.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || _;
                    return c && c.abort(e), i(0, e), this
                }
            };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((t || d.url || ji) + "").replace(Pi, "").replace(Ri, Ai[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (n = qi.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ai[1] && n[2] === Ai[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ai[3] || ("http:" === Ai[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Wi, d, e, w), 2 === b)return w;
            l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Oi.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Mi.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fi.test(s) ? s.replace(Fi, "$1_=" + $i++) : s + (Mi.test(s) ? "&" : "?") + "_=" + $i++)), d.ifModified && (re.lastModified[s] && w.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && w.setRequestHeader("If-None-Match", re.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zi + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers)w.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === b))return w.abort();
            _ = "abort";
            for (r in{success: 1, error: 1, complete: 1})w[r](d[r]);
            if (c = R(Bi, d, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, i)
                } catch (k) {
                    if (!(2 > b))throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, i) {
            return re.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return re.get(t, void 0, e, "script")
        }
    }), re.each(["get", "post"], function (t, e) {
        re[e] = function (t, i, n, r) {
            return re.isFunction(i) && (r = r || n, n = i, i = void 0), re.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), re._evalUrl = function (t) {
        return re.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, re.fn.extend({
        wrapAll: function (t) {
            if (re.isFunction(t))return this.each(function (e) {
                re(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (i) {
                re(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
        return !re.expr.filters.hidden(t)
    };
    var Ki = /%20/g, Ui = /\[\]$/, Vi = /\r?\n/g, Qi = /^(?:submit|button|image|reset|file)$/i, Xi = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
        var i, n = [], r = function (t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t))re.each(t, function () {
            r(this.name, this.value)
        }); else for (i in t)z(i, t[i], e, r);
        return n.join("&").replace(Ki, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Xi.test(this.nodeName) && !Qi.test(t) && (this.checked || !$e.test(t))
            }).map(function (t, e) {
                var i = re(this).val();
                return null == i ? null : re.isArray(i) ? re.map(i, function (t) {
                    return {name: e.name, value: t.replace(Vi, "\r\n")}
                }) : {name: e.name, value: i.replace(Vi, "\r\n")}
            }).get()
        }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || K()
    } : Y;
    var Gi = 0, Ji = {}, Zi = re.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in Ji)Ji[t](void 0, !0)
    }), ie.cors = !!Zi && "withCredentials"in Zi, Zi = ie.ajax = !!Zi, Zi && re.ajaxTransport(function (t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function (i, n) {
                    var r, s = t.xhr(), o = ++Gi;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i)void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                    s.send(t.hasContent && t.data || null), e = function (i, r) {
                        var a, l, c;
                        if (e && (r || 4 === s.readyState))if (delete Ji[o], e = void 0, s.onreadystatechange = re.noop, r)4 !== s.readyState && s.abort(); else {
                            c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (u) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                        c && n(a, l, c, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Ji[o] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), re.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = fe.head || re("head")[0] || fe.documentElement;
            return {
                send: function (n, r) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || r(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [], en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = tn.pop() || re.expando + "_" + $i++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function (e, i, n) {
        var r, s, o, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (Mi.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || re.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, n.always(function () {
            t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, tn.push(r)), o && re.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), re.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = de.exec(t), r = !i && [];
        return n ? [e.createElement(n[1])] : (n = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], n.childNodes))
    };
    var nn = re.fn.load;
    re.fn.load = function (t, e, i) {
        if ("string" != typeof t && nn)return nn.apply(this, arguments);
        var n, r, s, o = this, a = t.indexOf(" ");
        return a >= 0 && (n = re.trim(t.slice(a, t.length)), t = t.slice(0, a)), re.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), o.length > 0 && re.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function (t) {
            r = arguments, o.html(n ? re("<div>").append(re.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
                o.each(i, r || [t.responseText, e, t])
            }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    re.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, c, u = re.css(t, "position"), d = re(t), h = {};
            "static" === u && (t.style.position = "relative"), a = d.offset(), s = re.css(t, "top"), l = re.css(t, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [s, l]) > -1, c ? (n = d.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using"in e ? e.using.call(t, h) : d.css(h)
        }
    }, re.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                re.offset.setOffset(this, t, e)
            });
            var e, i, n = {top: 0, left: 0}, r = this[0], s = r && r.ownerDocument;
            if (s)return e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== xe && (n = r.getBoundingClientRect()), i = U(s), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        }, position: function () {
            if (this[0]) {
                var t, e, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - re.css(n, "marginTop", !0),
                    left: e.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || rn; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");)t = t.offsetParent;
                return t || rn
            })
        }
    }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = /Y/.test(e);
        re.fn[t] = function (n) {
            return Ie(this, function (t, n, r) {
                var s = U(t);
                return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? re(s).scrollLeft() : r, i ? r : re(s).scrollTop()) : t[n] = r)
            }, t, n, arguments.length, null)
        }
    }), re.each(["top", "left"], function (t, e) {
        re.cssHooks[e] = T(ie.pixelPosition, function (t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? re(t).position()[e] + "px" : i) : void 0
        })
    }), re.each({Height: "height", Width: "width"}, function (t, e) {
        re.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            re.fn[n] = function (n, r) {
                var s = arguments.length && (i || "boolean" != typeof n), o = i || (n === !0 || r === !0 ? "margin" : "border");
                return Ie(this, function (e, i, n) {
                    var r;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? re.css(e, i, o) : re.style(e, i, n, o)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var sn = t.jQuery, on = t.$;
    return re.noConflict = function (e) {
        return t.$ === re && (t.$ = on), e && t.jQuery === re && (t.jQuery = sn), re
    }, typeof e === xe && (t.jQuery = t.$ = re), re
}), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"), i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function (e, i, n) {
            var r = t.Event(i);
            return e.trigger(r, n), r.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t[0].href
        },
        handleRemote: function (n) {
            var r, s, o, a, l, c;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("with-credentials") || null, l = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    r = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var u = n.data("ujs:submit-button");
                    u && (o.push(u), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (r = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get", s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (r = n.data("method"), s = i.href(n), o = n.data("params") || null);
                return c = {
                    type: r || "GET", data: o, dataType: l, beforeSend: function (t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), i.fire(n, "ajax:beforeSend", [t, r]) ? void n.trigger("ajax:send", t) : !1
                    }, success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    }, complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    }, crossDomain: i.isCrossDomain(s)
                }, a && (c.xhrFields = {withCredentials: a}), s && (c.url = s), i.ajax(c)
            }
            return !1
        },
        isCrossDomain: function (t) {
            var e = document.createElement("a");
            e.href = location.href;
            var i = document.createElement("a");
            try {
                return i.href = t, i.href = i.href, !i.protocol || !i.host || e.protocol + "//" + e.host != i.protocol + "//" + i.host
            } catch (n) {
                return !0
            }
        },
        handleMethod: function (n) {
            var r = i.href(n), s = n.data("method"), o = n.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + r + '"></form>'), u = '<input name="_method" value="' + s + '" type="hidden" />';
            l === e || a === e || i.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function (e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function (e) {
            i.formElements(e, i.disableSelector).each(function () {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var i, n;
            i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            i.formElements(e, i.enableSelector).each(function () {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"), r = !1;
            return n ? (i.fire(t, "confirm") && (r = i.confirm(n), e = i.fire(t, "confirm:complete", [r])), r && e) : !0
        },
        blankInputs: function (e, i, n) {
            var r, s, o = t(), a = i || "input,textarea", l = e.find(a);
            return l.each(function () {
                if (r = t(this), s = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !s == !n) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return !0;
                    o = o.add(r)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(window).on("pageshow.rails", function () {
        t(t.rails.enableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var r = t(this), s = r.data("method"), o = r.data("params"), a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(r))return i.stopEverything(n);
        if (!a && r.is(i.linkDisableSelector) && i.disableElement(r), r.data("remote") !== e) {
            if (a && (!s || "GET" === s) && !o)return !0;
            var l = i.handleRemote(r);
            return l === !1 ? i.enableElement(r) : l.fail(function () {
                i.enableElement(r)
            }), !1
        }
        return s ? (i.handleMethod(r), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n))return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var r = i.handleRemote(n);
        return r === !1 ? i.enableFormElement(n) : r.fail(function () {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var r, s, o = t(this), a = o.data("remote") !== e;
        if (!i.allowAction(o))return i.stopEverything(n);
        if (o.attr("novalidate") == e && (r = i.blankInputs(o, i.requiredInputSelector), r && i.fire(o, "ajax:aborted:required", [r])))return i.stopEverything(n);
        if (a) {
            if (s = i.nonBlankInputs(o, i.fileInputSelector)) {
                setTimeout(function () {
                    i.disableFormElements(o)
                }, 13);
                var l = i.fire(o, "ajax:aborted:file", [s]);
                return l || setTimeout(function () {
                    i.enableFormElements(o)
                }, 13), l
            }
            return i.handleRemote(o), !1
        }
        setTimeout(function () {
            i.disableFormElements(o)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n))return i.stopEverything(e);
        var r = n.attr("name"), s = r ? {name: r, value: n.val()} : null;
        n.closest("form").data("ujs:submit-button", s)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery), function (t) {
    "use strict";
    t.ajaxPrefilter(function (t) {
        return t.iframe ? "iframe" : void 0
    }), t.ajaxTransport("iframe", function (e, i, n) {
        function r() {
            u.prop("disabled", !1), o.remove(), a.bind("load", function () {
                a.remove()
            }), a.attr("src", "javascript:false;")
        }

        var s, o = null, a = null, l = "iframe-" + t.now(), c = t(e.files).filter(":file:enabled"), u = null;
        return e.dataTypes.shift(), c.length ? (o = t("<form enctype='multipart/form-data' method='post'></form>").hide().attr({
            action: e.url,
            target: l
        }), "string" == typeof e.data && e.data.length > 0 && t.error("data must not be serialized"), t.each(e.data || {}, function (e, i) {
            t.isPlainObject(i) && (e = i.name, i = i.value), t("<input type='hidden' />").attr({
                name: e,
                value: i
            }).appendTo(o)
        }), t("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(o), s = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q=0.01" : "") : e.accepts["*"], t("<input type='hidden' name='X-Http-Accept'>").attr("value", s).appendTo(o), u = c.after(function () {
            return t(this).clone().prop("disabled", !0)
        }).next(), c.appendTo(o), {
            send: function (e, i) {
                a = t("<iframe src='javascript:false;' name='" + l + "' id='" + l + "' style='display:none'></iframe>"), a.bind("load", function () {
                    a.unbind("load").bind("load", function () {
                        var t = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document, e = t.documentElement ? t.documentElement : t.body, s = e.getElementsByTagName("textarea")[0], o = s && s.getAttribute("data-type") || null, a = s && s.getAttribute("data-status") || 200, l = s && s.getAttribute("data-statusText") || "OK", c = {
                            html: e.innerHTML,
                            text: o ? s.value : e ? e.textContent || e.innerText : null
                        };
                        r(), n.responseText || (n.responseText = c.text), i(a, l, c, o ? "Content-Type: " + o : null)
                    }), o[0].submit()
                }), t("body").append(o, a)
            }, abort: function () {
                null !== a && (a.unbind("load").attr("src", "javascript:false;"), r())
            }
        }) : void 0
    })
}(jQuery), function (t) {
    var i;
    t.remotipart = i = {
        setup: function (e) {
            e.one("ajax:beforeSend.remotipart", function (n, r, s) {
                return delete s.beforeSend, s.iframe = !0, s.files = t(t.rails.fileInputSelector, e), s.data = e.serializeArray(), s.processData = !1, void 0 === s.dataType && (s.dataType = "script *"), s.data.push({
                    name: "remotipart_submitted",
                    value: !0
                }), t.rails.fire(e, "ajax:remotipartSubmit", [r, s]) && t.rails.ajax(s), i.teardown(e), !1
            }).data("remotipartSubmitted", !0)
        }, teardown: function (t) {
            t.unbind("ajax:beforeSend.remotipart").removeData("remotipartSubmitted")
        }
    }, t(document).on("ajax:aborted:file", "form", function () {
        var n = t(this);
        return i.setup(n), !t.support.submitBubbles && t().jquery < "1.7" && t.rails.callFormSubmitBindings(n) === !1 ? t.rails.stopEverything(e) : (t.rails.handleRemote(n), !1)
    })
}(jQuery), /*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        var e = "ui-effects-", i = t;
        /*!
         * jQuery Color Animations v2.1.2
         * https://github.com/jquery/jquery-color
         *
         * Copyright 2014 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * Date: Wed Jan 16 08:47:09 2013 -0600
         */
        return t.effects = {effect: {}}, function (t, e) {
            function i(t, e, i) {
                var n = d[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }

            function n(e) {
                var i = c(), n = i._rgba = [];
                return e = e.toLowerCase(), f(l, function (t, r) {
                    var s, o = r.re.exec(e), a = o && r.parse(o), l = r.space || "rgba";
                    return a ? (s = i[l](a), i[u[l].cache] = s[u[l].cache], n = i._rgba = s._rgba, !1) : void 0
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, s.transparent), i) : s[e]
            }

            function r(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            var s, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", a = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], c = t.Color = function (e, i, n, r) {
                return new t.Color.fn.parse(e, i, n, r)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {
                "byte": {floor: !0, max: 255},
                percent: {max: 1},
                degrees: {mod: 360, floor: !0}
            }, h = c.support = {}, p = t("<p>")[0], f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
            }), c.fn = t.extend(c.prototype, {
                parse: function (r, o, a, l) {
                    if (r === e)return this._rgba = [null, null, null, null], this;
                    (r.jquery || r.nodeType) && (r = t(r).css(o), o = e);
                    var d = this, h = t.type(r), p = this._rgba = [];
                    return o !== e && (r = [r, o, a, l], h = "array"), "string" === h ? this.parse(n(r) || s._default) : "array" === h ? (f(u.rgba.props, function (t, e) {
                        p[e.idx] = i(r[e.idx], e)
                    }), this) : "object" === h ? (r instanceof c ? f(u, function (t, e) {
                        r[e.cache] && (d[e.cache] = r[e.cache].slice())
                    }) : f(u, function (e, n) {
                        var s = n.cache;
                        f(n.props, function (t, e) {
                            if (!d[s] && n.to) {
                                if ("alpha" === t || null == r[t])return;
                                d[s] = n.to(d._rgba)
                            }
                            d[s][e.idx] = i(r[t], e, !0)
                        }), d[s] && t.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, n.from && (d._rgba = n.from(d[s])))
                    }), this) : void 0
                }, is: function (t) {
                    var e = c(t), i = !0, n = this;
                    return f(u, function (t, r) {
                        var s, o = e[r.cache];
                        return o && (s = n[r.cache] || r.to && r.to(n._rgba) || [], f(r.props, function (t, e) {
                            return null != o[e.idx] ? i = o[e.idx] === s[e.idx] : void 0
                        })), i
                    }), i
                }, _space: function () {
                    var t = [], e = this;
                    return f(u, function (i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                }, transition: function (t, e) {
                    var n = c(t), r = n._space(), s = u[r], o = 0 === this.alpha() ? c("transparent") : this, a = o[s.cache] || s.to(o._rgba), l = a.slice();
                    return n = n[s.cache], f(s.props, function (t, r) {
                        var s = r.idx, o = a[s], c = n[s], u = d[r.type] || {};
                        null !== c && (null === o ? l[s] = c : (u.mod && (c - o > u.mod / 2 ? o += u.mod : o - c > u.mod / 2 && (o -= u.mod)), l[s] = i((c - o) * e + o, r)))
                    }), this[r](l)
                }, blend: function (e) {
                    if (1 === this._rgba[3])return this;
                    var i = this._rgba.slice(), n = i.pop(), r = c(e)._rgba;
                    return c(t.map(i, function (t, e) {
                        return (1 - n) * r[e] + n * t
                    }))
                }, toRgbaString: function () {
                    var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                }, toHslaString: function () {
                    var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                    });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                }, toHexString: function (e) {
                    var i = this._rgba.slice(), n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), c.fn.parse.prototype = c.fn, u.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
                var e, i, n = t[0] / 255, r = t[1] / 255, s = t[2] / 255, o = t[3], a = Math.max(n, r, s), l = Math.min(n, r, s), c = a - l, u = a + l, d = .5 * u;
                return e = l === a ? 0 : n === a ? 60 * (r - s) / c + 360 : r === a ? 60 * (s - n) / c + 120 : 60 * (n - r) / c + 240, i = 0 === c ? 0 : .5 >= d ? c / u : c / (2 - u), [Math.round(e) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
                var e = t[0] / 360, i = t[1], n = t[2], s = t[3], o = .5 >= n ? n * (1 + i) : n + i - n * i, a = 2 * n - o;
                return [Math.round(255 * r(a, o, e + 1 / 3)), Math.round(255 * r(a, o, e)), Math.round(255 * r(a, o, e - 1 / 3)), s]
            }, f(u, function (n, r) {
                var s = r.props, o = r.cache, l = r.to, u = r.from;
                c.fn[n] = function (n) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), n === e)return this[o].slice();
                    var r, a = t.type(n), d = "array" === a || "object" === a ? n : arguments, h = this[o].slice();
                    return f(s, function (t, e) {
                        var n = d["object" === a ? t : e.idx];
                        null == n && (n = h[e.idx]), h[e.idx] = i(n, e)
                    }), u ? (r = c(u(h)), r[o] = h, r) : c(h)
                }, f(s, function (e, i) {
                    c.fn[e] || (c.fn[e] = function (r) {
                        var s, o = t.type(r), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, c = this[l](), u = c[i.idx];
                        return "undefined" === o ? u : ("function" === o && (r = r.call(this, u), o = t.type(r)), null == r && i.empty ? this : ("string" === o && (s = a.exec(r), s && (r = u + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), c[i.idx] = r, this[l](c)))
                    })
                })
            }), c.hook = function (e) {
                var i = e.split(" ");
                f(i, function (e, i) {
                    t.cssHooks[i] = {
                        set: function (e, r) {
                            var s, o, a = "";
                            if ("transparent" !== r && ("string" !== t.type(r) || (s = n(r)))) {
                                if (r = c(s || r), !h.rgba && 1 !== r._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && o && o.style;)try {
                                        a = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {
                                    }
                                    r = r.blend(a && "transparent" !== a ? a : "_default")
                                }
                                r = r.toRgbaString()
                            }
                            try {
                                e.style[i] = r
                            } catch (l) {
                            }
                        }
                    }, t.fx.step[i] = function (e) {
                        e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, c.hook(o), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, s = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(i), function () {
            function e(e) {
                var i, n, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, s = {};
                if (r && r.length && r[0] && r[r[0]])for (n = r.length; n--;)i = r[n], "string" == typeof r[i] && (s[t.camelCase(i)] = r[i]); else for (i in r)"string" == typeof r[i] && (s[i] = r[i]);
                return s
            }

            function n(e, i) {
                var n, r, o = {};
                for (n in i)r = i[n], e[n] !== r && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(r))) && (o[n] = r));
                return o
            }

            var r = ["add", "remove", "toggle"], s = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, n) {
                t.fx.step[n] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (i.style(t.elem, n, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (i, s, o, a) {
                var l = t.speed(s, o, a);
                return this.queue(function () {
                    var s, o = t(this), a = o.attr("class") || "", c = l.children ? o.find("*").addBack() : o;
                    c = c.map(function () {
                        var i = t(this);
                        return {el: i, start: e(this)}
                    }), s = function () {
                        t.each(r, function (t, e) {
                            i[e] && o[e + "Class"](i[e])
                        })
                    }, s(), c = c.map(function () {
                        return this.end = e(this.el[0]), this.diff = n(this.start, this.end), this
                    }), o.attr("class", a), c = c.map(function () {
                        var e = this, i = t.Deferred(), n = t.extend({}, l, {
                            queue: !1, complete: function () {
                                i.resolve(e)
                            }
                        });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, c.get()).done(function () {
                        s(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (i, n, r, s) {
                        return n ? t.effects.animateClass.call(this, {add: i}, n, r, s) : e.apply(this, arguments)
                    }
                }(t.fn.addClass), removeClass: function (e) {
                    return function (i, n, r, s) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, n, r, s) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass), toggleClass: function (e) {
                    return function (i, n, r, s, o) {
                        return "boolean" == typeof n || void 0 === n ? r ? t.effects.animateClass.call(this, n ? {add: i} : {remove: i}, r, s, o) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, n, r, s)
                    }
                }(t.fn.toggleClass), switchClass: function (e, i, n, r, s) {
                    return t.effects.animateClass.call(this, {add: i, remove: e}, n, r, s)
                }
            })
        }(), function () {
            function i(e, i, n, r) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (r = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (r = n, n = i, i = {}), t.isFunction(n) && (r = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = r || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }

            t.extend(t.effects, {
                version: "1.11.4", save: function (t, i) {
                    for (var n = 0; n < i.length; n++)null !== i[n] && t.data(e + i[n], t[0].style[i[n]])
                }, restore: function (t, i) {
                    var n, r;
                    for (r = 0; r < i.length; r++)null !== i[r] && (n = t.data(e + i[r]), void 0 === n && (n = ""), t.css(i[r], n))
                }, setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                }, getBaseline: function (t, e) {
                    var i, n;
                    switch (t[0]) {
                        case"top":
                            i = 0;
                            break;
                        case"middle":
                            i = .5;
                            break;
                        case"bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case"left":
                            n = 0;
                            break;
                        case"center":
                            n = .5;
                            break;
                        case"right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {x: n, y: i}
                }, createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper"))return e.parent();
                    var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        "float": e.css("float")
                    }, n = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), r = {width: e.width(), height: e.height()}, s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return e.wrap(n), (e[0] === s || t.contains(e[0], s)) && t(s).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(r), n.css(i).show()
                }, removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                }, setTransition: function (e, i, n, r) {
                    return r = r || {}, t.each(i, function (t, i) {
                        var s = e.cssUnit(i);
                        s[0] > 0 && (r[i] = s[0] * n + s[1])
                    }), r
                }
            }), t.fn.extend({
                effect: function () {
                    function e(e) {
                        function i() {
                            t.isFunction(s) && s.call(r[0]), t.isFunction(e) && e()
                        }

                        var r = t(this), s = n.complete, a = n.mode;
                        (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), i()) : o.call(r[0], n, i)
                    }

                    var n = i.apply(this, arguments), r = n.mode, s = n.queue, o = t.effects.effect[n.effect];
                    return t.fx.off || !o ? r ? this[r](n.duration, n.complete) : this.each(function () {
                        n.complete && n.complete.call(this)
                    }) : s === !1 ? this.each(e) : this.queue(s || "fx", e)
                }, show: function (t) {
                    return function (e) {
                        if (n(e))return t.apply(this, arguments);
                        var r = i.apply(this, arguments);
                        return r.mode = "show", this.effect.call(this, r)
                    }
                }(t.fn.show), hide: function (t) {
                    return function (e) {
                        if (n(e))return t.apply(this, arguments);
                        var r = i.apply(this, arguments);
                        return r.mode = "hide", this.effect.call(this, r)
                    }
                }(t.fn.hide), toggle: function (t) {
                    return function (e) {
                        if (n(e) || "boolean" == typeof e)return t.apply(this, arguments);
                        var r = i.apply(this, arguments);
                        return r.mode = "toggle", this.effect.call(this, r)
                    }
                }(t.fn.toggle), cssUnit: function (e) {
                    var i = this.css(e), n = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }
            })
        }(), function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                }, Back: function (t) {
                    return t * t * (3 * t - 2)
                }, Bounce: function (t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }(), t.effects
    }), /*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e(e, n) {
            var r, s, o, a = e.nodeName.toLowerCase();
            return "area" === a ? (r = e.parentNode, s = r.name, e.href && s && "map" === r.nodeName.toLowerCase() ? (o = t("img[usemap='#" + s + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
                    return "hidden" === t.css(this, "visibility")
                }).length
        }

        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function (e) {
                var i = this.css("position"), n = "absolute" === i, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, s = this.parents().filter(function () {
                    var e = t(this);
                    return n && "static" === e.css("position") ? !1 : r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
                return "fixed" !== i && s.length ? s : t(this[0].ownerDocument || document)
            }, uniqueId: function () {
                var t = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            }, focusable: function (i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            }, tabbable: function (i) {
                var n = t.attr(i, "tabindex"), r = isNaN(n);
                return (r || n >= 0) && e(i, !r)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, i) {
            function n(e, i, n, s) {
                return t.each(r, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }

            var r = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], s = i.toLowerCase(), o = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
            t.fn["inner" + i] = function (e) {
                return void 0 === e ? o["inner" + i].call(this) : this.each(function () {
                    t(this).css(s, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function (e, r) {
                return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function () {
                    t(this).css(s, n(this, e, !0, r) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
            return function (i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function (e) {
                return function (i, n) {
                    return "number" == typeof i ? this.each(function () {
                        var e = this;
                        setTimeout(function () {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus), disableSelection: function () {
                var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            }(), enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }, zIndex: function (e) {
                if (void 0 !== e)return this.css("zIndex", e);
                if (this.length)for (var i, n, r = t(this[0]); r.length && r[0] !== document;) {
                    if (i = r.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(r.css("zIndex"), 10), !isNaN(n) && 0 !== n))return n;
                    r = r.parent()
                }
                return 0
            }
        }), t.ui.plugin = {
            add: function (e, i, n) {
                var r, s = t.ui[e].prototype;
                for (r in n)s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([i, n[r]])
            }, call: function (t, e, i, n) {
                var r, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))for (r = 0; r < s.length; r++)t.options[s[r][0]] && s[r][1].apply(t.element, i)
            }
        }
    }), /*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        var e = 0, i = Array.prototype.slice;
        return t.cleanData = function (e) {
            return function (i) {
                var n, r, s;
                for (s = 0; null != (r = i[s]); s++)try {
                    n = t._data(r, "events"), n && n.remove && t(r).triggerHandler("remove")
                } catch (o) {
                }
                e(i)
            }
        }(t.cleanData), t.widget = function (e, i, n) {
            var r, s, o, a, l = {}, c = e.split(".")[0];
            return e = e.split(".")[1], r = c + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][r.toLowerCase()] = function (e) {
                return !!t.data(e, r)
            }, t[c] = t[c] || {}, s = t[c][e], o = t[c][e] = function (t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
                return t.isFunction(n) ? void(l[e] = function () {
                    var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    }, r = function (t) {
                        return i.prototype[e].apply(this, t)
                    };
                    return function () {
                        var e, i = this._super, s = this._superApply;
                        return this._super = t, this._superApply = r, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
                    }
                }()) : void(l[e] = n)
            }), o.prototype = t.widget.extend(a, {widgetEventPrefix: s ? a.widgetEventPrefix || e : e}, l, {
                constructor: o,
                namespace: c,
                widgetName: e,
                widgetFullName: r
            }), s ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function (e) {
            for (var n, r, s = i.call(arguments, 1), o = 0, a = s.length; a > o; o++)for (n in s[o])r = s[o][n], s[o].hasOwnProperty(n) && void 0 !== r && (e[n] = t.isPlainObject(r) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], r) : t.widget.extend({}, r) : r);
            return e
        }, t.widget.bridge = function (e, n) {
            var r = n.prototype.widgetFullName || e;
            t.fn[e] = function (s) {
                var o = "string" == typeof s, a = i.call(arguments, 1), l = this;
                return o ? this.each(function () {
                    var i, n = t.data(this, r);
                    return "instance" === s ? (l = n, !1) : n ? t.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, a), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function () {
                    var e = t.data(this, r);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, r, new n(s, this))
                })), l
            }
        }, t.Widget = function () {
        }, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (i, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, i) {
                var n, r, s, o = e;
                if (0 === arguments.length)return t.widget.extend({}, this.options);
                if ("string" == typeof e)if (o = {}, n = e.split("."), e = n.shift(), n.length) {
                    for (r = o[e] = t.widget.extend({}, this.options[e]), s = 0; s < n.length - 1; s++)r[n[s]] = r[n[s]] || {}, r = r[n[s]];
                    if (e = n.pop(), 1 === arguments.length)return void 0 === r[e] ? null : r[e];
                    r[e] = i
                } else {
                    if (1 === arguments.length)return void 0 === this.options[e] ? null : this.options[e];
                    o[e] = i
                }
                return this._setOptions(o), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t)this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _on: function (e, i, n) {
                var r, s = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = r = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), t.each(n, function (n, o) {
                    function a() {
                        return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                    }

                    "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + s.eventNamespace, u = l[2];
                    u ? r.delegate(u, c, a) : i.bind(c, a)
                })
            },
            _off: function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }

                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var r, s, o = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)for (r in s)r in i || (i[r] = s[r]);
                return this.element.trigger(i, n), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, r, s) {
                "string" == typeof r && (r = {effect: r});
                var o, a = r ? r === !0 || "number" == typeof r ? i : r.effect || i : e;
                r = r || {}, "number" == typeof r && (r = {duration: r}), o = !t.isEmptyObject(r), r.complete = s, r.delay && n.delay(r.delay), o && t.effects && t.effects.effect[a] ? n[e](r) : a !== e && n[a] ? n[a](r.duration, r.easing, s) : n.queue(function (i) {
                    t(this)[e](), s && s.call(n[0]), i()
                })
            }
        }), t.widget
    }), /*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
    }(function (t) {
        var e = !1;
        return t(document).mouseup(function () {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.11.4",
            options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
            _mouseInit: function () {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function (i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (i) {
                if (!e) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this, r = 1 === i.which, s = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                    return r && !s && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button)return this._mouseUp(e);
                    if (!e.which)return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function (i) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), e = !1, !1
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        })
    }), /*!
 * jQuery UI Sortable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.sortable", t.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function (t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function () {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (e, i) {
                var n = null, r = !1, s = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                    return t.data(this, s.widgetName + "-item") === s ? (n = t(this), !1) : void 0
                }), t.data(e.target, s.widgetName + "-item") === s && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function () {
                    this === e.target && (r = !0)
                }), r)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function (e, i, n) {
                var r, s, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)for (r = this.containers.length - 1; r >= 0; r--)this.containers[r]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                var i, n, r, s, o = this.options, a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (n = this.items[i], r = n.item[0], s = this._intersectsWithPointer(n), s && n.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], r) : !0)) {
                    if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this, r = this.placeholder.offset(), s = this.options.axis, o = {};
                        s && "x" !== s || (o.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected), n = [];
                return e = e || {}, t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected), n = [];
                return e = e || {}, i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, r = n + this.helperProportions.height, s = t.left, o = s + t.width, a = t.top, l = a + t.height, c = this.offset.click.top, u = this.offset.click.left, d = "x" === this.options.axis || n + c > a && l > n + c, h = "y" === this.options.axis || e + u > s && o > e + u, p = d && h;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : s < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < o && a < n + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function (t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = e && i, r = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
                return n ? this.floating ? s && "right" === s || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" === r && i || "left" === r && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                function i() {
                    a.push(this)
                }

                var n, r, s, o, a = [], l = [], c = this._connectWith();
                if (c && e)for (n = c.length - 1; n >= 0; n--)for (s = t(c[n], this.document[0]), r = s.length - 1; r >= 0; r--)o = t.data(s[r], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--)l[n][0].each(i);
                return t(a)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var i = 0; i < e.length; i++)if (e[i] === t.item[0])return !1;
                    return !0
                })
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var i, n, r, s, o, a, l, c, u = this.items, d = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], h = this._connectWith();
                if (h && this.ready)for (i = h.length - 1; i >= 0; i--)for (r = t(h[i], this.document[0]), n = r.length - 1; n >= 0; n--)s = t.data(r[n], this.widgetFullName), s && s !== this && !s.options.disabled && (d.push([t.isFunction(s.options.items) ? s.options.items.call(s.element[0], e, {item: this.currentItem}) : t(s.options.items, s.element), s]), this.containers.push(s));
                for (i = d.length - 1; i >= 0; i--)for (o = d[i][1], a = d[i][0], n = 0, c = a.length; c > n; n++)l = t(a[n]), l.data(this.widgetName + "-item", o), u.push({
                    item: l,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            },
            refreshPositions: function (e) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, r, s;
                for (i = this.items.length - 1; i >= 0; i--)n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = r.outerWidth(), n.height = r.outerHeight()), s = r.offset(), n.left = s.left, n.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--)s = this.containers[i].element.offset(), this.containers[i].containerCache.left = s.left, this.containers[i].containerCache.top = s.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function () {
                        var n = e.currentItem[0].nodeName.toLowerCase(), r = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(r)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, r) : "img" === n && r.attr("src", e.currentItem.attr("src")), i || r.css("visibility", "hidden"), r
                    }, update: function (t, r) {
                        (!i || n.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function (e, i) {
                var n = this;
                e.children().each(function () {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function (e) {
                var i, n, r, s, o, a, l, c, u, d, h = null, p = null;
                for (i = this.containers.length - 1; i >= 0; i--)if (!t.contains(this.currentItem[0], this.containers[i].element[0]))if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (h && t.contains(this.containers[i].element[0], h.element[0]))continue;
                    h = this.containers[i], p = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (h)if (1 === this.containers.length)this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                    for (r = 1e4, s = null, u = h.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", a = u ? "width" : "height", d = u ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--)t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[o], c = !1, e[d] - l > this.items[n][a] / 2 && (c = !0), Math.abs(e[d] - l) < r && (r = Math.abs(e[d] - l), s = this.items[n], this.direction = c ? "up" : "down"));
                    if (!s && !this.options.dropOnEmpty)return;
                    if (this.currentContainer === this.containers[p])return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    s ? this._rearrange(e, s, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
            },
            _createHelper: function (e) {
                var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left"in e && (this.offset.click.left = e.left + this.margins.left), "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top"in e && (this.offset.click.top = e.top + this.margins.top), "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var e, i, n, r = this.options;
                "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], i = t(r.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(r[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i, n, r = this.options, s = e.pageX, o = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), r.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - r.grid[1] : i + r.grid[1] : i, n = this.originalPageX + Math.round((s - this.originalPageX) / r.grid[0]) * r.grid[0], s = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - r.grid[0] : n + r.grid[0] : n)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function (t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var r = this.counter;
                this._delay(function () {
                    r === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function (t, e) {
                function i(t, e, i) {
                    return function (n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }

                this.reverting = !1;
                var n, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && r.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (r.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), r.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), r.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--)e || r.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (r.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < r.length; n++)r[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }), /*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        return function () {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: 0, left: 0}
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: e.scrollTop(), left: e.scrollLeft()}
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {top: i.pageY, left: i.pageX}
                } : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
            }

            t.ui = t.ui || {};
            var r, s, o = Math.max, a = Math.abs, l = Math.round, c = /left|center|right/, u = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, p = /%$/, f = t.fn.position;
            t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== r)return r;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = n.children()[0];
                    return t("body").append(n), e = s.offsetWidth, n.css("overflow", "scroll"), i = s.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), r = e - i
                }, getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), r = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, s = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {width: s ? t.position.scrollbarWidth() : 0, height: r ? t.position.scrollbarWidth() : 0}
                }, getWithinInfo: function (e) {
                    var i = t(e || window), n = t.isWindow(i[0]), r = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: r,
                        offset: i.offset() || {left: 0, top: 0},
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n || r ? i.width() : i.outerWidth(),
                        height: n || r ? i.height() : i.outerHeight()
                    }
                }
            }, t.fn.position = function (r) {
                if (!r || !r.of)return f.apply(this, arguments);
                r = t.extend({}, r);
                var p, m, g, v, y, b, _ = t(r.of), w = t.position.getWithinInfo(r.within), k = t.position.getScrollInfo(w), x = (r.collision || "flip").split(" "), C = {};
                return b = n(_), _[0].preventDefault && (r.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function () {
                    var t, e, i = (r[this] || "").split(" ");
                    1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", t = d.exec(i[0]), e = d.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], r[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === r.at[0] ? y.left += m : "center" === r.at[0] && (y.left += m / 2), "bottom" === r.at[1] ? y.top += g : "center" === r.at[1] && (y.top += g / 2), p = e(C.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                    var n, c, u = t(this), d = u.outerWidth(), h = u.outerHeight(), f = i(this, "marginLeft"), b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + k.width, T = h + b + i(this, "marginBottom") + k.height, S = t.extend({}, y), E = e(C.my, u.outerWidth(), u.outerHeight());
                    "right" === r.my[0] ? S.left -= d : "center" === r.my[0] && (S.left -= d / 2), "bottom" === r.my[1] ? S.top -= h : "center" === r.my[1] && (S.top -= h / 2), S.left += E[0], S.top += E[1], s || (S.left = l(S.left), S.top = l(S.top)), n = {
                        marginLeft: f,
                        marginTop: b
                    }, t.each(["left", "top"], function (e, i) {
                        t.ui.position[x[e]] && t.ui.position[x[e]][i](S, {
                            targetWidth: m,
                            targetHeight: g,
                            elemWidth: d,
                            elemHeight: h,
                            collisionPosition: n,
                            collisionWidth: D,
                            collisionHeight: T,
                            offset: [p[0] + E[0], p[1] + E[1]],
                            my: r.my,
                            at: r.at,
                            within: w,
                            elem: u
                        })
                    }), r.using && (c = function (t) {
                        var e = v.left - S.left, i = e + m - d, n = v.top - S.top, s = n + g - h, l = {
                            target: {
                                element: _,
                                left: v.left,
                                top: v.top,
                                width: m,
                                height: g
                            },
                            element: {element: u, left: S.left, top: S.top, width: d, height: h},
                            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                            vertical: 0 > s ? "top" : n > 0 ? "bottom" : "middle"
                        };
                        d > m && a(e + i) < m && (l.horizontal = "center"), h > g && a(n + s) < g && (l.vertical = "middle"), l.important = o(a(e), a(i)) > o(a(n), a(s)) ? "horizontal" : "vertical", r.using.call(this, t, l)
                    }), u.offset(t.extend(S, {using: c}))
                })
            }, t.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, n = e.within, r = n.isWindow ? n.scrollLeft : n.offset.left, s = n.width, a = t.left - e.collisionPosition.marginLeft, l = r - a, c = a + e.collisionWidth - s - r;
                        e.collisionWidth > s ? l > 0 && 0 >= c ? (i = t.left + l + e.collisionWidth - s - r, t.left += l - i) : t.left = c > 0 && 0 >= l ? r : l > c ? r + s - e.collisionWidth : r : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = o(t.left - a, t.left)
                    }, top: function (t, e) {
                        var i, n = e.within, r = n.isWindow ? n.scrollTop : n.offset.top, s = e.within.height, a = t.top - e.collisionPosition.marginTop, l = r - a, c = a + e.collisionHeight - s - r;
                        e.collisionHeight > s ? l > 0 && 0 >= c ? (i = t.top + l + e.collisionHeight - s - r, t.top += l - i) : t.top = c > 0 && 0 >= l ? r : l > c ? r + s - e.collisionHeight : r : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = o(t.top - a, t.top)
                    }
                }, flip: {
                    left: function (t, e) {
                        var i, n, r = e.within, s = r.offset.left + r.scrollLeft, o = r.width, l = r.isWindow ? r.scrollLeft : r.offset.left, c = t.left - e.collisionPosition.marginLeft, u = c - l, d = c + e.collisionWidth - o - l, h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                        0 > u ? (i = t.left + h + p + f + e.collisionWidth - o - s, (0 > i || i < a(u)) && (t.left += h + p + f)) : d > 0 && (n = t.left - e.collisionPosition.marginLeft + h + p + f - l, (n > 0 || a(n) < d) && (t.left += h + p + f))
                    }, top: function (t, e) {
                        var i, n, r = e.within, s = r.offset.top + r.scrollTop, o = r.height, l = r.isWindow ? r.scrollTop : r.offset.top, c = t.top - e.collisionPosition.marginTop, u = c - l, d = c + e.collisionHeight - o - l, h = "top" === e.my[1], p = h ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                        0 > u ? (n = t.top + p + f + m + e.collisionHeight - o - s, (0 > n || n < a(u)) && (t.top += p + f + m)) : d > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, (i > 0 || a(i) < d) && (t.top += p + f + m))
                    }
                }, flipfit: {
                    left: function () {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    }, top: function () {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }, function () {
                var e, i, n, r, o, a = document.getElementsByTagName("body")[0], l = document.createElement("div");
                e = document.createElement(a ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, a && t.extend(n, {position: "absolute", left: "-1000px", top: "-1000px"});
                for (o in n)e.style[o] = n[o];
                e.appendChild(l), i = a || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", r = t(l).offset().left, s = r > 10 && 11 > r, e.innerHTML = "", i.removeChild(e)
            }()
        }(), t.ui.position
    }), /*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-carat-1-e"},
                items: "> *",
                menus: "ul",
                position: {my: "left-1 top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    }, "click .ui-menu-item": function (e) {
                        var i = t(e.target);
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (e) {
                        if (!this.previousFilter) {
                            var i = t(e.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                        }
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    }, blur: function (e) {
                        this._delay(function () {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    }, keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (e) {
                var i, n, r, s, o = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        o = !1, n = this.previousFilter || "", r = String.fromCharCode(e.keyCode), s = !1, clearTimeout(this.filterTimer), r === n ? s = !0 : r = n + r, i = this._filterMenuItems(r), i = s && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (r = String.fromCharCode(e.keyCode), i = this._filterMenuItems(r)), i.length ? (this.focus(e, i), this.previousFilter = r, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                o && e.preventDefault()
            },
            _activate: function (t) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, i, n = this, r = this.options.icons.submenu, s = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var e = t(this), i = e.parent(), n = t("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), e = s.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
                    var e = t(this);
                    n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            _setOption: function (t, e) {
                "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            focus: function (t, e) {
                var i, n;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
            },
            _scrollIntoView: function (e) {
                var i, n, r, s, o, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, r = e.offset().top - this.activeMenu.offset().top - i - n, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.outerHeight(), 0 > r ? this.activeMenu.scrollTop(s + r) : r + a > o && this.activeMenu.scrollTop(s + r - o + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {item: this.active}))
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (e) {
                var i = t.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function (e) {
                var i, n, r;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n - r < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function (e) {
                var i, n, r;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n + r > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function (e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return n.test(t.trim(t(this).text()))
                })
            }
        })
    }), /*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {my: "left top", at: "left bottom", collision: "none"},
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e, i, n, r = this.element[0].nodeName.toLowerCase(), s = "textarea" === r, o = "input" === r;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (r) {
                        if (this.element.prop("readOnly"))return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var s = t.ui.keyCode;
                        switch (r.keyCode) {
                            case s.PAGE_UP:
                                e = !0, this._move("previousPage", r);
                                break;
                            case s.PAGE_DOWN:
                                e = !0, this._move("nextPage", r);
                                break;
                            case s.UP:
                                e = !0, this._keyEvent("previous", r);
                                break;
                            case s.DOWN:
                                e = !0, this._keyEvent("next", r);
                                break;
                            case s.ENTER:
                                this.menu.active && (e = !0, r.preventDefault(), this.menu.select(r));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(r);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(r), r.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(r)
                        }
                    }, keypress: function (n) {
                        if (e)return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var r = t.ui.keyCode;
                            switch (n.keyCode) {
                                case r.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case r.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case r.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case r.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    }, input: function (t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    }, focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    }, blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                            var e = this;
                            this.document.one("mousedown", function (n) {
                                n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                            })
                        })
                    }, menufocus: function (e, i) {
                        var n, r;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                            t(e.target).trigger(e.originalEvent)
                        })) : (r = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: r}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(r.value), n = i.item.attr("aria-label") || r.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    }, menuselect: function (t, e) {
                        var i = e.item.data("ui-autocomplete-item"), n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _initSource: function () {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, r) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i, data: e, dataType: "json", success: function (t) {
                            r(t)
                        }, error: function () {
                            r([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var e = this.term === this._value(), i = this.menu.element.is(":visible"), n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                    return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, function (t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, i) {
                return t("<li>").text(i.label).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }, filter: function (e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function (t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            }, __response: function (e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete
    }), /*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i))return i;
                t = t.parent()
            }
            return 0
        }

        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.delegate(i, "mouseout", function () {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", r)
        }

        function r() {
            t.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function s(e, i) {
            t.extend(e, i);
            for (var n in i)null == i[n] && (e[n] = i[n]);
            return e
        }

        t.extend(t.ui, {datepicker: {version: "1.11.4"}});
        var o;
        return t.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return s(this._defaults, t || {}), this
            },
            _attachDatepicker: function (e, i) {
                var n, r, s;
                n = e.nodeName.toLowerCase(), r = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), s = this._newInst(t(e), r), s.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, s) : r && this._inlineDatepicker(e, s)
            },
            _newInst: function (e, i) {
                var r = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function (e, i) {
                var n, r, s, o = this._get(i, "appendText"), a = this._get(i, "isRTL");
                i.append && i.append.remove(), o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (r = this._get(i, "buttonText"), s = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: r,
                    title: r
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(s ? t("<img/>").attr({
                    src: s,
                    alt: r,
                    title: r
                }) : r)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function () {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, r, s = new Date(2009, 11, 20), o = this._get(t, "dateFormat");
                    o.match(/[DM]/) && (e = function (t) {
                        for (i = 0, n = 0, r = 0; r < t.length; r++)t[r].length > i && (i = t[r].length, n = r);
                        return n
                    }, s.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), t.input.attr("size", this._formatDate(t, s).length)
                }
            },
            _inlineDatepicker: function (e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (e, i, n, r, o) {
                var a, l, c, u, d, h = this._dialogInst;
                return h || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, t.data(this._dialogInput[0], "datepicker", h)), s(h.settings, r || {}), i = i && i.constructor === Date ? this._formatDate(h, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", h), this
            },
            _destroyDatepicker: function (e) {
                var i, n = t(e), r = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (r.append.remove(), r.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), o === r && (o = null))
            },
            _enableDatepicker: function (e) {
                var i, n, r = t(e), s = t.data(e, "datepicker");
                r.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, s.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = r.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function (e) {
                var i, n, r = t(e), s = t.data(e, "datepicker");
                r.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, s.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = r.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function (t) {
                if (!t)return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)if (this._disabledInputs[e] === t)return !0;
                return !1
            },
            _getInst: function (e) {
                try {
                    return t.data(e, "datepicker")
                } catch (i) {
                    throw"Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (e, i, n) {
                var r, o, a, l, c = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (r = i || {}, "string" == typeof i && (r = {}, r[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), s(c.settings, r), null !== a && void 0 !== r.dateFormat && void 0 === r.minDate && (c.settings.minDate = this._formatDate(c, a)), null !== l && void 0 !== r.dateFormat && void 0 === r.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled"in r && (r.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c))))
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function (e) {
                var i, n, r, s = t.datepicker._getInst(e.target), o = !0, a = s.dpDiv.is(".ui-datepicker-rtl");
                if (s._keyEvent = !0, t.datepicker._datepickerShowing)switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return r = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", s.dpDiv), r[0] && t.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, r[0]), i = t.datepicker._get(s, "onSelect"), i ? (n = t.datepicker._formatDate(s), i.apply(s.input ? s.input[0] : null, [n, s])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
                o && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function (e) {
                var i, n, r = t.datepicker._getInst(e.target);
                return t.datepicker._get(r, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(r, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function (e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal)try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (r) {
                }
                return !0
            },
            _showDatepicker: function (i) {
                if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                    var n, r, o, a, l, c, u;
                    n = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), r = t.datepicker._get(n, "beforeShow"), o = r ? r.apply(i, [i, n]) : {}, o !== !1 && (s(n.settings, o), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), a = !1, t(i).parents().each(function () {
                        return a |= "fixed" === t(this).css("position"), !a
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (c = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[c] ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[c || "show"](c ? u : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function (e) {
                this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e), s = n[1], a = 17, l = e.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && r.apply(l.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function (e, i, n) {
                var r = e.dpDiv.outerWidth(), s = e.dpDiv.outerHeight(), o = e.input ? e.input.outerWidth() : 0, a = e.input ? e.input.outerHeight() : 0, l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()), c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? r - o : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + r > l && l > r ? Math.abs(i.left + r - l) : 0), i.top -= Math.min(i.top, i.top + s > c && c > s ? Math.abs(s + a) : 0), i
            },
            _findPos: function (e) {
                for (var i, n = this._getInst(e), r = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)e = e[r ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (e) {
                var i, n, r, s, o = this._curInst;
                !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), n = this._get(o, "duration"), r = function () {
                    t.datepicker._tidyDialog(o)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), n, r) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, r), i || r(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target), n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (e, i, n) {
                var r = t(e), s = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(s, i + ("M" === n ? this._get(s, "showCurrentAtPos") : 0), n), this._updateDatepicker(s))
            },
            _gotoToday: function (e) {
                var i, n = t(e), r = this._getInst(n[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (i = new Date, r.selectedDay = i.getDate(), r.drawMonth = r.selectedMonth = i.getMonth(), r.drawYear = r.selectedYear = i.getFullYear()), this._notifyChange(r), this._adjustDate(n)
            },
            _selectMonthYear: function (e, i, n) {
                var r = t(e), s = this._getInst(r[0]);
                s["selected" + ("M" === n ? "Month" : "Year")] = s["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(r)
            },
            _selectDay: function (e, i, n, r) {
                var s, o = t(e);
                t(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = t("a", r).html(), s.selectedMonth = s.currentMonth = i, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
            },
            _clearDate: function (e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function (e, i) {
                var n, r = t(e), s = this._getInst(r[0]);
                i = null != i ? i : this._formatDate(s), s.input && s.input.val(i), this._updateAlternate(s), n = this._get(s, "onSelect"), n ? n.apply(s.input ? s.input[0] : null, [i, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (e) {
                var i, n, r, s = this._get(e, "altField");
                s && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), r = this.formatDate(i, n, this._getFormatConfig(e)), t(s).each(function () {
                    t(this).val(r)
                }))
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function (t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function (e, i, n) {
                if (null == e || null == i)throw"Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i)return null;
                var r, s, o, a, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, h = (n ? n.dayNames : null) || this._defaults.dayNames, p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function (t) {
                    var i = r + 1 < e.length && e.charAt(r + 1) === t;
                    return i && r++, i
                }, w = function (t) {
                    var e = _(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, r = "y" === t ? n : 1, s = new RegExp("^\\d{" + r + "," + n + "}"), o = i.substring(l).match(s);
                    if (!o)throw"Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                }, k = function (e, n, r) {
                    var s = -1, o = t.map(_(e) ? r : n, function (t, e) {
                        return [[e, t]]
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length)
                    });
                    if (t.each(o, function (t, e) {
                            var n = e[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (s = e[0], l += n.length, !1) : void 0
                        }), -1 !== s)return s + 1;
                    throw"Unknown name at position " + l
                }, x = function () {
                    if (i.charAt(l) !== e.charAt(r))throw"Unexpected literal at position " + l;
                    l++
                };
                for (r = 0; r < e.length; r++)if (b)"'" !== e.charAt(r) || _("'") ? x() : b = !1; else switch (e.charAt(r)) {
                    case"d":
                        v = w("d");
                        break;
                    case"D":
                        k("D", d, h);
                        break;
                    case"o":
                        y = w("o");
                        break;
                    case"m":
                        g = w("m");
                        break;
                    case"M":
                        g = k("M", p, f);
                        break;
                    case"y":
                        m = w("y");
                        break;
                    case"@":
                        a = new Date(w("@")), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case"!":
                        a = new Date((w("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case"'":
                        _("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                }
                if (l < i.length && (o = i.substr(l), !/^\s+/.test(o)))throw"Extra/unparsed characters found in date: " + o;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)for (g = 1, v = y; ;) {
                    if (s = this._getDaysInMonth(m, g - 1), s >= v)break;
                    g++, v -= s
                }
                if (a = this._daylightSavingAdjust(new Date(m, g - 1, v)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v)throw"Invalid date";
                return a
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (t, e, i) {
                if (!e)return "";
                var n, r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, s = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++, i
                }, c = function (t, e, i) {
                    var n = "" + e;
                    if (l(t))for (; n.length < i;)n = "0" + n;
                    return n
                }, u = function (t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                }, d = "", h = !1;
                if (e)for (n = 0; n < t.length; n++)if (h)"'" !== t.charAt(n) || l("'") ? d += t.charAt(n) : h = !1; else switch (t.charAt(n)) {
                    case"d":
                        d += c("d", e.getDate(), 2);
                        break;
                    case"D":
                        d += u("D", e.getDay(), r, s);
                        break;
                    case"o":
                        d += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case"m":
                        d += c("m", e.getMonth() + 1, 2);
                        break;
                    case"M":
                        d += u("M", e.getMonth(), o, a);
                        break;
                    case"y":
                        d += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                        break;
                    case"@":
                        d += e.getTime();
                        break;
                    case"!":
                        d += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case"'":
                        l("'") ? d += "'" : h = !0;
                        break;
                    default:
                        d += t.charAt(n)
                }
                return d
            },
            _possibleChars: function (t) {
                var e, i = "", n = !1, r = function (i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
                for (e = 0; e < t.length; e++)if (n)"'" !== t.charAt(e) || r("'") ? i += t.charAt(e) : n = !1; else switch (t.charAt(e)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        i += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        r("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
            },
            _get: function (t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null, r = this._getDefaultDate(t), s = r, o = this._getFormatConfig(t);
                    try {
                        s = this.parseDate(i, n, o) || r
                    } catch (a) {
                        n = e ? "" : n
                    }
                    t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), t.currentDay = n ? s.getDate() : 0, t.currentMonth = n ? s.getMonth() : 0, t.currentYear = n ? s.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (e, i, n) {
                var r = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                }, s = function (i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (n) {
                    }
                    for (var r = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = r.getFullYear(), o = r.getMonth(), a = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                        switch (c[2] || "d") {
                            case"d":
                            case"D":
                                a += parseInt(c[1], 10);
                                break;
                            case"w":
                            case"W":
                                a += 7 * parseInt(c[1], 10);
                                break;
                            case"m":
                            case"M":
                                o += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                                break;
                            case"y":
                            case"Y":
                                s += parseInt(c[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                        }
                        c = l.exec(i)
                    }
                    return new Date(s, o, a)
                }, o = null == i || "" === i ? n : "string" == typeof i ? s(i) : "number" == typeof i ? isNaN(i) ? n : r(i) : new Date(i.getTime());
                return o = o && "Invalid Date" === o.toString() ? n : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e, r = t.selectedMonth, s = t.selectedYear, o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), r === t.selectedMonth && s === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function (e) {
                var i = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function () {
                    var e = {
                        prev: function () {
                            t.datepicker._adjustDate(n, -i, "M")
                        }, next: function () {
                            t.datepicker._adjustDate(n, +i, "M")
                        }, hide: function () {
                            t.datepicker._hideDatepicker()
                        }, today: function () {
                            t.datepicker._gotoToday(n)
                        }, selectDay: function () {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        }, selectMonth: function () {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        }, selectYear: function () {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (t) {
                var e, i, n, r, s, o, a, l, c, u, d, h, p, f, m, g, v, y, b, _, w, k, x, C, D, T, S, E, I, $, M, N, A, j, P, F, H, L, O, R = new Date, q = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), W = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), z = this._get(t, "hideIfNoPrevNext"), Y = this._get(t, "navigationAsDateFormat"), K = this._getNumberOfMonths(t), U = this._get(t, "showCurrentAtPos"), V = this._get(t, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - U, te = t.drawYear;
                if (0 > Z && (Z += 12, te--), J)for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - K[0] * K[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;)Z--, 0 > Z && (Z = 11, te--);
                for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", r = this._get(t, "nextText"), r = Y ? this.formatDate(r, this._daylightSavingAdjust(new Date(te, Z + V, 1)), this._getFormatConfig(t)) : r, s = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + r + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? X : q, o = Y ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (W ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(t, "showWeek"), h = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", k = 0; k < K[0]; k++) {
                    for (x = "", this.maxRows = 4, C = 0; C < K[1]; C++) {
                        if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", S = "", Q) {
                            if (S += "<div class='ui-datepicker-group", K[1] > 1)switch (C) {
                                case 0:
                                    S += " ui-datepicker-group-first", T = " ui-corner-" + (W ? "right" : "left");
                                    break;
                                case K[1] - 1:
                                    S += " ui-datepicker-group-last", T = " ui-corner-" + (W ? "left" : "right");
                                    break;
                                default:
                                    S += " ui-datepicker-group-middle", T = ""
                            }
                            S += "'>"
                        }
                        for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? W ? s : n : "") + (/all|right/.test(T) && 0 === k ? W ? n : s : "") + this._generateMonthYearHeader(t, Z, te, G, J, k > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)I = (w + u) % 7, E += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[I] + "'>" + p[I] + "</span></th>";
                        for (S += E + "</tr></thead><tbody>", $ = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, $)), M = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, N = Math.ceil((M + $) / 7), A = Q && this.maxRows > N ? this.maxRows : N, this.maxRows = A, j = this._daylightSavingAdjust(new Date(te, Z, 1 - M)), P = 0; A > P; P++) {
                            for (S += "<tr>", F = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(j) + "</td>" : "", w = 0; 7 > w; w++)H = g ? g.apply(t.input ? t.input[0] : null, [j]) : [!0, ""], L = j.getMonth() !== Z, O = L && !y || !H[0] || G && G > j || J && j > J, F += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (j.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === j.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + H[1] + (j.getTime() === X.getTime() ? " " + this._currentClass : "") + (j.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !H[2] ? "" : " title='" + H[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + j.getMonth() + "' data-year='" + j.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + j.getDate() + "</span>" : "<a class='ui-state-default" + (j.getTime() === q.getTime() ? " ui-state-highlight" : "") + (j.getTime() === X.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + j.getDate() + "</a>") + "</td>", j.setDate(j.getDate() + 1), j = this._daylightSavingAdjust(j);
                            S += F + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && C === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
                    }
                    _ += x
                }
                return _ += c, t._keyEvent = !1, _
            },
            _generateMonthYearHeader: function (t, e, i, n, r, s, o, a) {
                var l, c, u, d, h, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), y = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
                if (s || !g)_ += "<span class='ui-datepicker-month'>" + o[e] + "</span>"; else {
                    for (l = n && n.getFullYear() === i, c = r && r.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!l || u >= n.getMonth()) && (!c || u <= r.getMonth()) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                    _ += "</select>"
                }
                if (y || (b += _ + (!s && g && v ? "" : "&#xa0;")), !t.yearshtml)if (t.yearshtml = "", s || !v)b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                    for (d = this._get(t, "yearRange").split(":"), h = (new Date).getFullYear(), p = function (t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? h + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? h : e
                    }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = r ? Math.min(m, r.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
                return b += this._get(t, "yearSuffix"), y && (b += (!s && g && v ? "" : "&#xa0;") + _), b += "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.drawYear + ("Y" === i ? e : 0), r = t.drawMonth + ("M" === i ? e : 0), s = Math.min(t.selectedDay, this._getDaysInMonth(n, r)) + ("D" === i ? e : 0), o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, r, s)));
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), r = i && i > e ? i : e;
                return n && r > n ? n : r
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var r = this._getNumberOfMonths(t), s = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : r[0] * r[1]), 1));
                return 0 > e && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(t, s)
            },
            _isInRange: function (t, e) {
                var i, n, r = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), o = null, a = null, l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), o = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += n), i[1].match(/[+\-].*/) && (a += n)), (!r || e.getTime() >= r.getTime()) && (!s || e.getTime() <= s.getTime()) && (!o || e.getFullYear() >= o) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var r = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), r, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function (e) {
            if (!this.length)return this;
            t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.4", t.datepicker
    }), /*
 * jQuery UI Timepicker
 *
 * Copyright 2010-2013, Francois Gelinas
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://fgelinas.com/code/timepicker
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.position.js (only if position settngs are used)
 *
 * Change version 0.1.0 - moved the t-rex up here
 *
 ____
 ___                                      .-~. /_"-._
 `-._~-.                                  / /_ "~o\  :Y
 \  \                                / : \~x.  ` ')
 ]  Y                              /  |  Y< ~-.__j
 /   !                        _.--~T : l  l<  /.-~
 /   /                 ____.--~ .   ` l /~\ \<|Y
 /   /             .-~~"        /| .    ',-~\ \L|
 /   /             /     .^   \ Y~Y \.^>/l_   "--'
 /   Y           .-"(  .  l__  j_j l_/ /~_.-~    .
 Y    l          /    \  )    ~~~." / `/"~ / \.__/l_
 |     \     _.-"      ~-{__     l  :  l._Z~-.___.--~
 |      ~---~           /   ~~"---\_  ' __[>
 l  .                _.^   ___     _>-y~
 \  \     .      .-~   .-~   ~>--"  /
 \  ~---"            /     ./  _.-'
 "-.,_____.,_  _.--~\     _.-~
 ~~     (   _}       -Row
 `. ~(
 )  \
 /,`--'~\--'~\
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ->T-Rex<-
 */
    function ($) {
        function Timepicker() {
            this.debug = !0, this._curInst = null, this._disabledInputs = [], this._timepickerShowing = !1, this._inDialog = !1, this._dialogClass = "ui-timepicker-dialog", this._mainDivId = "ui-timepicker-div", this._inlineClass = "ui-timepicker-inline", this._currentClass = "ui-timepicker-current", this._dayOverClass = "ui-timepicker-days-cell-over", this.regional = [], this.regional[""] = {
                hourText: "Hour",
                minuteText: "Minute",
                amPmText: ["AM", "PM"],
                closeButtonText: "Done",
                nowButtonText: "Now",
                deselectButtonText: "Deselect"
            }, this._defaults = {
                showOn: "focus",
                button: null,
                showAnim: "fadeIn",
                showOptions: {},
                appendText: "",
                beforeShow: null,
                onSelect: null,
                onClose: null,
                timeSeparator: ":",
                periodSeparator: " ",
                showPeriod: !1,
                showPeriodLabels: !0,
                showLeadingZero: !0,
                showMinutesLeadingZero: !0,
                altField: "",
                defaultTime: "now",
                myPosition: "left top",
                atPosition: "left bottom",
                onHourShow: null,
                onMinuteShow: null,
                hours: {starts: 0, ends: 23},
                minutes: {starts: 0, ends: 55, interval: 5},
                rows: 4,
                showHours: !0,
                showMinutes: !0,
                optionalMinutes: !1,
                showCloseButton: !1,
                showNowButton: !1,
                showDeselectButton: !1
            }, $.extend(this._defaults, this.regional[""]), this.tpDiv = $('<div id="' + this._mainDivId + '" class="ui-timepicker ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>')
        }

        function extendRemove(t, e) {
            $.extend(t, e);
            for (var i in e)(null == e[i] || void 0 == e[i]) && (t[i] = e[i]);
            return t
        }

        $.extend($.ui, {timepicker: {version: "0.3.2"}});
        var PROP_NAME = "timepicker", tpuuid = (new Date).getTime();
        $.extend(Timepicker.prototype, {
            markerClassName: "hasTimepicker", log: function () {
                this.debug && console.log.apply("", arguments)
            }, _widgetTimepicker: function () {
                return this.tpDiv
            }, setDefaults: function (t) {
                return extendRemove(this._defaults, t || {}), this
            }, _attachTimepicker: function (target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("time:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(), inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "tp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? (this._connectTimepicker(target, inst), this._setTimeFromField(inst)) : inline && this._inlineTimepicker(target, inst)
            }, _newInst: function (t, e) {
                var i = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: i,
                    input: t,
                    inline: e,
                    tpDiv: e ? $('<div class="' + this._inlineClass + ' ui-timepicker ui-widget  ui-helper-clearfix"></div>') : this.tpDiv
                }
            }, _connectTimepicker: function (t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keyup(this._doKeyUp).bind("setData.timepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.timepicker", function (t, i) {
                    return this._get(e, i)
                }), $.data(t, PROP_NAME, e))
            }, _doKeyDown: function (t) {
                var e = $.timepicker._getInst(t.target), i = !0;
                if (e._keyEvent = !0, $.timepicker._timepickerShowing)switch (t.keyCode) {
                    case 9:
                        $.timepicker._hideTimepicker(), i = !1;
                        break;
                    case 13:
                        return $.timepicker._updateSelectedValue(e), $.timepicker._hideTimepicker(), !1;
                    case 27:
                        $.timepicker._hideTimepicker();
                        break;
                    default:
                        i = !1
                } else 36 == t.keyCode && t.ctrlKey ? $.timepicker._showTimepicker(this) : i = !1;
                i && (t.preventDefault(), t.stopPropagation())
            }, _doKeyUp: function (t) {
                var e = $.timepicker._getInst(t.target);
                $.timepicker._setTimeFromField(e), $.timepicker._updateTimepicker(e)
            }, _attachments: function (t, e) {
                var i = this._get(e, "appendText"), n = this._get(e, "isRTL");
                e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[n ? "before" : "after"](e.append)), t.unbind("focus.timepicker", this._showTimepicker), t.unbind("click.timepicker", this._adjustZIndex), e.trigger && e.trigger.remove();
                var r = this._get(e, "showOn");
                if (("focus" == r || "both" == r) && (t.bind("focus.timepicker", this._showTimepicker), t.bind("click.timepicker", this._adjustZIndex)), "button" == r || "both" == r) {
                    var s = this._get(e, "button");
                    $(s).bind("click.timepicker", function () {
                        return $.timepicker._timepickerShowing && $.timepicker._lastInput == t[0] ? $.timepicker._hideTimepicker() : e.input.is(":disabled") || $.timepicker._showTimepicker(t[0]), !1
                    })
                }
            }, _inlineTimepicker: function (t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.tpDiv).bind("setData.timepicker", function (t, i, n) {
                    e.settings[i] = n
                }).bind("getData.timepicker", function (t, i) {
                    return this._get(e, i)
                }), $.data(t, PROP_NAME, e), this._setTimeFromField(e), this._updateTimepicker(e), e.tpDiv.show())
            }, _adjustZIndex: function (t) {
                t = t.target || t;
                var e = $.timepicker._getInst(t);
                e.tpDiv.css("zIndex", $.timepicker._getZIndex(t) + 1)
            }, _showTimepicker: function (t) {
                if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.timepicker._isDisabledTimepicker(t) && $.timepicker._lastInput != t) {
                    $.timepicker._hideTimepicker();
                    var e = $.timepicker._getInst(t);
                    $.timepicker._curInst && $.timepicker._curInst != e && $.timepicker._curInst.tpDiv.stop(!0, !0);
                    var i = $.timepicker._get(e, "beforeShow");
                    extendRemove(e.settings, i ? i.apply(t, [t, e]) : {}), e.lastVal = null, $.timepicker._lastInput = t, $.timepicker._setTimeFromField(e), $.timepicker._inDialog && (t.value = ""), $.timepicker._pos || ($.timepicker._pos = $.timepicker._findPos(t), $.timepicker._pos[1] += t.offsetHeight);
                    var n = !1;
                    $(t).parents().each(function () {
                        return n |= "fixed" == $(this).css("position"), !n
                    });
                    var r = {left: $.timepicker._pos[0], top: $.timepicker._pos[1]};
                    if ($.timepicker._pos = null, e.tpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), $.timepicker._updateTimepicker(e), !e.inline && "object" == typeof $.ui.position) {
                        e.tpDiv.position({
                            of: e.input,
                            my: $.timepicker._get(e, "myPosition"),
                            at: $.timepicker._get(e, "atPosition"),
                            collision: "flip"
                        });
                        var r = e.tpDiv.offset();
                        $.timepicker._pos = [r.top, r.left]
                    }
                    if (e._hoursClicked = !1, e._minutesClicked = !1, r = $.timepicker._checkOffset(e, r, n), e.tpDiv.css({
                            position: $.timepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
                            display: "none",
                            left: r.left + "px",
                            top: r.top + "px"
                        }), !e.inline) {
                        var s = $.timepicker._get(e, "showAnim"), o = $.timepicker._get(e, "duration"), a = function () {
                            $.timepicker._timepickerShowing = !0;
                            var t = $.timepicker._getBorders(e.tpDiv);
                            e.tpDiv.find("iframe.ui-timepicker-cover").css({
                                left: -t[0],
                                top: -t[1],
                                width: e.tpDiv.outerWidth(),
                                height: e.tpDiv.outerHeight()
                            })
                        };
                        $.timepicker._adjustZIndex(t), $.effects && $.effects[s] ? e.tpDiv.show(s, $.timepicker._get(e, "showOptions"), o, a) : e.tpDiv.show(s ? o : null, a), s && o || a(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.timepicker._curInst = e
                    }
                }
            }, _getZIndex: function (t) {
                for (var e, i, n = $(t), r = 0; n.length && n[0] !== document;)e = n.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(n.css("zIndex"), 10), isNaN(i) || 0 === i || i > r && (r = i)), n = n.parent();
                return r
            }, _refreshTimepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateTimepicker(e)
            }, _updateTimepicker: function (t) {
                t.tpDiv.empty().append(this._generateHTML(t)), this._rebindDialogEvents(t)
            }, _rebindDialogEvents: function (t) {
                var e = $.timepicker._getBorders(t.tpDiv), i = this;
                t.tpDiv.find("iframe.ui-timepicker-cover").css({
                    left: -e[0],
                    top: -e[1],
                    width: t.tpDiv.outerWidth(),
                    height: t.tpDiv.outerHeight()
                }).end().find(".ui-timepicker-minute-cell").unbind().bind("click", {fromDoubleClick: !1}, $.proxy($.timepicker.selectMinutes, this)).bind("dblclick", {fromDoubleClick: !0}, $.proxy($.timepicker.selectMinutes, this)).end().find(".ui-timepicker-hour-cell").unbind().bind("click", {fromDoubleClick: !1}, $.proxy($.timepicker.selectHours, this)).bind("dblclick", {fromDoubleClick: !0}, $.proxy($.timepicker.selectHours, this)).end().find(".ui-timepicker td a").unbind().bind("mouseout", function () {
                    $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-timepicker-prev") && $(this).removeClass("ui-timepicker-prev-hover"), -1 != this.className.indexOf("ui-timepicker-next") && $(this).removeClass("ui-timepicker-next-hover")
                }).bind("mouseover", function () {
                    i._isDisabledTimepicker(t.inline ? t.tpDiv.parent()[0] : t.input[0]) || ($(this).parents(".ui-timepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-timepicker-prev") && $(this).addClass("ui-timepicker-prev-hover"), -1 != this.className.indexOf("ui-timepicker-next") && $(this).addClass("ui-timepicker-next-hover"))
                }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end().find(".ui-timepicker-now").bind("click", function (t) {
                    $.timepicker.selectNow(t)
                }).end().find(".ui-timepicker-deselect").bind("click", function (t) {
                    $.timepicker.deselectTime(t)
                }).end().find(".ui-timepicker-close").bind("click", function () {
                    $.timepicker._hideTimepicker()
                }).end()
            }, _generateHTML: function (t) {
                var e, i, n, r, s = 1 == this._get(t, "showPeriod"), o = 1 == this._get(t, "showPeriodLabels"), a = 1 == this._get(t, "showLeadingZero"), l = 1 == this._get(t, "showHours"), c = 1 == this._get(t, "showMinutes"), u = this._get(t, "amPmText"), d = this._get(t, "rows"), h = 0, p = 0, f = 0, m = 0, g = 0, v = 0, y = Array(), b = this._get(t, "hours"), _ = null, w = 0, k = this._get(t, "hourText"), x = this._get(t, "showCloseButton"), C = this._get(t, "closeButtonText"), D = this._get(t, "showNowButton"), T = this._get(t, "nowButtonText"), S = this._get(t, "showDeselectButton"), E = this._get(t, "deselectButtonText"), I = x || D || S;
                for (e = b.starts; e <= b.ends; e++)y.push(e);
                if (_ = Math.ceil(y.length / d), o) {
                    for (w = 0; w < y.length; w++)y[w] < 12 ? f++ : m++;
                    w = 0, h = Math.floor(f / y.length * d), p = Math.floor(m / y.length * d), d != h + p && (f && (!m || !h || p && f / h >= m / p) ? h++ : p++), g = Math.min(h, 1), v = h + 1, _ = Math.ceil(0 == h ? m / p : 0 == p ? f / h : Math.max(f / h, m / p))
                }
                if (r = '<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>', l) {
                    for (r += '<td class="ui-timepicker-hours"><div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + k + '</div><table class="ui-timepicker">', i = 1; d >= i; i++) {
                        for (r += "<tr>", i == g && o && (r += '<th rowspan="' + h.toString() + '" class="periods" scope="row">' + u[0] + "</th>"), i == v && o && (r += '<th rowspan="' + p.toString() + '" class="periods" scope="row">' + u[1] + "</th>"), n = 1; _ >= n; n++)o && v > i && y[w] >= 12 ? r += this._generateHTMLHourCell(t, void 0, s, a) : (r += this._generateHTMLHourCell(t, y[w], s, a), w++);
                        r += "</tr>"
                    }
                    r += "</table></td>"
                }
                if (c && (r += '<td class="ui-timepicker-minutes">', r += this._generateHTMLMinutes(t), r += "</td>"), r += "</tr>", I) {
                    var $ = '<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';
                    D && ($ += '<button type="button" class="ui-timepicker-now ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + t.id.replace(/\\\\/g, "\\") + '" >' + T + "</button>"), S && ($ += '<button type="button" class="ui-timepicker-deselect ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + t.id.replace(/\\\\/g, "\\") + '" >' + E + "</button>"), x && ($ += '<button type="button" class="ui-timepicker-close ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + t.id.replace(/\\\\/g, "\\") + '" >' + C + "</button>"), r += $ + "</div></td></tr>"
                }
                return r += "</table>"
            }, _updateMinuteDisplay: function (t) {
                var e = this._generateHTMLMinutes(t);
                t.tpDiv.find("td.ui-timepicker-minutes").html(e), this._rebindDialogEvents(t)
            }, _generateHTMLMinutes: function (t) {
                var e, i, n = "", r = this._get(t, "rows"), s = Array(), o = this._get(t, "minutes"), a = null, l = 0, c = 1 == this._get(t, "showMinutesLeadingZero"), u = this._get(t, "onMinuteShow"), d = this._get(t, "minuteText");
                for (o.starts || (o.starts = 0), o.ends || (o.ends = 59), e = o.starts; e <= o.ends; e += o.interval)s.push(e);
                if (a = Math.round(s.length / r + .49), u && 0 == u.apply(t.input ? t.input[0] : null, [t.hours, t.minutes]))for (l = 0; l < s.length; l += 1)if (e = s[l], u.apply(t.input ? t.input[0] : null, [t.hours, e])) {
                    t.minutes = e;
                    break
                }
                for (n += '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + d + '</div><table class="ui-timepicker">', l = 0, i = 1; r >= i; i++) {
                    for (n += "<tr>"; i * a > l;) {
                        var e = s[l], h = "";
                        void 0 !== e && (h = 10 > e && c ? "0" + e.toString() : e.toString()), n += this._generateHTMLMinuteCell(t, e, h), l++
                    }
                    n += "</tr>"
                }
                return n += "</table>"
            }, _generateHTMLHourCell: function (t, e, i, n) {
                var r = e;
                e > 12 && i && (r = e - 12), 0 == r && i && (r = 12), 10 > r && n && (r = "0" + r);
                var s = "", o = !0, a = this._get(t, "onHourShow");
                return void 0 == e ? s = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>' : (a && (o = a.apply(t.input ? t.input[0] : null, [e])), s = o ? '<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#' + t.id.replace(/\\\\/g, "\\") + '" data-hour="' + e.toString() + '"><a class="ui-state-default ' + (e == t.hours ? "ui-state-active" : "") + '">' + r.toString() + "</a></td>" : '<td><span class="ui-state-default ui-state-disabled ' + (e == t.hours ? " ui-state-active " : " ") + '">' + r.toString() + "</span></td>")
            }, _generateHTMLMinuteCell: function (t, e, i) {
                var n = "", r = !0, s = this._get(t, "onMinuteShow");
                return s && (r = s.apply(t.input ? t.input[0] : null, [t.hours, e])), n = void 0 == e ? '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>' : r ? '<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#' + t.id.replace(/\\\\/g, "\\") + '" data-minute="' + e.toString() + '" ><a class="ui-state-default ' + (e == t.minutes ? "ui-state-active" : "") + '" >' + i + "</a></td>" : '<td><span class="ui-state-default ui-state-disabled" >' + i + "</span></td>"
            }, _destroyTimepicker: function (t) {
                var e = $(t), i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var n = t.nodeName.toLowerCase();
                    $.removeData(t, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus.timepicker", this._showTimepicker).unbind("click.timepicker", this._adjustZIndex)) : ("div" == n || "span" == n) && e.removeClass(this.markerClassName).empty()
                }
            }, _enableTimepicker: function (t) {
                var e = $(t), i = e.attr("id"), n = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var r = t.nodeName.toLowerCase();
                    if ("input" == r) {
                        t.disabled = !1;
                        var s = this._get(n, "button");
                        $(s).removeClass("ui-state-disabled").disabled = !1, n.trigger.filter("button").each(function () {
                            this.disabled = !1
                        }).end()
                    } else if ("div" == r || "span" == r) {
                        var o = e.children("." + this._inlineClass);
                        o.children().removeClass("ui-state-disabled"), o.find("button").each(function () {
                            this.disabled = !1
                        })
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (t) {
                        return t == i ? null : t
                    })
                }
            }, _disableTimepicker: function (t) {
                var e = $(t), i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var n = t.nodeName.toLowerCase();
                    if ("input" == n) {
                        var r = this._get(i, "button");
                        $(r).addClass("ui-state-disabled").disabled = !0, t.disabled = !0, i.trigger.filter("button").each(function () {
                            this.disabled = !0
                        }).end()
                    } else if ("div" == n || "span" == n) {
                        var s = e.children("." + this._inlineClass);
                        s.children().addClass("ui-state-disabled"), s.find("button").each(function () {
                            this.disabled = !0
                        })
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function (e) {
                        return e == t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = e.attr("id")
                }
            }, _isDisabledTimepicker: function (t) {
                if (!t)return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)if (this._disabledInputs[e] == t)return !0;
                return !1
            }, _checkOffset: function (t, e, i) {
                var n = t.tpDiv.outerWidth(), r = t.tpDiv.outerHeight(), s = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, a = document.documentElement.clientWidth + $(document).scrollLeft(), l = document.documentElement.clientHeight + $(document).scrollTop();
                return e.left -= this._get(t, "isRTL") ? n - s : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + o ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + r > l && l > r ? Math.abs(r + o) : 0), e
            }, _findPos: function (t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType);)t = t[i ? "previousSibling" : "nextSibling"];
                var n = $(t).offset();
                return [n.left, n.top]
            }, _getBorders: function (t) {
                var e = function (t) {
                    return {thin: 1, medium: 2, thick: 3}[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            }, _checkExternalClick: function (t) {
                if ($.timepicker._curInst) {
                    var e = $(t.target);
                    e[0].id == $.timepicker._mainDivId || 0 != e.parents("#" + $.timepicker._mainDivId).length || e.hasClass($.timepicker.markerClassName) || e.hasClass($.timepicker._triggerClass) || !$.timepicker._timepickerShowing || $.timepicker._inDialog && $.blockUI || $.timepicker._hideTimepicker()
                }
            }, _hideTimepicker: function (t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._timepickerShowing) {
                    var i = this._get(e, "showAnim"), n = this._get(e, "duration"), r = function () {
                        $.timepicker._tidyDialog(e), this._curInst = null
                    };
                    $.effects && $.effects[i] ? e.tpDiv.hide(i, $.timepicker._get(e, "showOptions"), n, r) : e.tpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, r), i || r(), this._timepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.tpDiv))), this._inDialog = !1;
                    var s = this._get(e, "onClose");
                    s && s.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e])
                }
            }, _tidyDialog: function (t) {
                t.tpDiv.removeClass(this._dialogClass).unbind(".ui-timepicker")
            }, _getInst: function (t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw"Missing instance data for this timepicker"
                }
            }, _get: function (t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            }, _setTimeFromField: function (t) {
                if (t.input.val() != t.lastVal) {
                    var e = this._get(t, "defaultTime"), i = "now" == e ? this._getCurrentTimeRounded(t) : e;
                    if (0 == t.inline && "" != t.input.val() && (i = t.input.val()), i instanceof Date)t.hours = i.getHours(), t.minutes = i.getMinutes(); else {
                        var n = t.lastVal = i;
                        if ("" == i)t.hours = -1, t.minutes = -1; else {
                            var r = this.parseTime(t, n);
                            t.hours = r.hours, t.minutes = r.minutes
                        }
                    }
                    $.timepicker._updateTimepicker(t)
                }
            }, _optionTimepicker: function (t, e, i) {
                var n = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e)return "defaults" == e ? $.extend({}, $.timepicker._defaults) : n ? "all" == e ? $.extend({}, n.settings) : this._get(n, e) : null;
                var r = e || {};
                "string" == typeof e && (r = {}, r[e] = i), n && (this._curInst == n && this._hideTimepicker(), extendRemove(n.settings, r), this._updateTimepicker(n))
            }, _setTimeTimepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setTime(i, e), this._updateTimepicker(i), this._updateAlternate(i, e))
            }, _setTime: function (t, e, i) {
                var n = t.hours, r = t.minutes;
                if (e instanceof Date)t.hours = e.getHours(), t.minutes = e.getMinutes(); else {
                    var e = this.parseTime(t, e);
                    t.hours = e.hours, t.minutes = e.minutes
                }
                n == t.hours && r == t.minutes || i || t.input.trigger("change"), this._updateTimepicker(t), this._updateSelectedValue(t)
            }, _getCurrentTimeRounded: function () {
                var t = new Date, e = t.getMinutes(), i = 5 * Math.round(e / 5);
                return t.setMinutes(i), t
            }, parseTime: function (t, e) {
                var i = new Object;
                if (i.hours = -1, i.minutes = -1, !e)return "";
                var n = this._get(t, "timeSeparator"), r = this._get(t, "amPmText"), s = this._get(t, "showHours"), o = this._get(t, "showMinutes"), a = this._get(t, "optionalMinutes"), l = 1 == this._get(t, "showPeriod"), c = e.indexOf(n);
                if (-1 != c ? (i.hours = parseInt(e.substr(0, c), 10), i.minutes = parseInt(e.substr(c + 1), 10)) : !s || o && !a ? !s && o && (i.minutes = parseInt(e, 10)) : i.hours = parseInt(e, 10), s) {
                    var u = e.toUpperCase();
                    i.hours < 12 && l && -1 != u.indexOf(r[1].toUpperCase()) && (i.hours += 12), 12 == i.hours && l && -1 != u.indexOf(r[0].toUpperCase()) && (i.hours = 0)
                }
                return i
            }, selectNow: function (t) {
                var e = $(t.target).attr("data-timepicker-instance-id"), i = $(e), n = this._getInst(i[0]), r = new Date;
                n.hours = r.getHours(), n.minutes = r.getMinutes(), this._updateSelectedValue(n), this._updateTimepicker(n), this._hideTimepicker()
            }, deselectTime: function (t) {
                var e = $(t.target).attr("data-timepicker-instance-id"), i = $(e), n = this._getInst(i[0]);
                n.hours = -1, n.minutes = -1, this._updateSelectedValue(n), this._hideTimepicker()
            }, selectHours: function (t) {
                var e = $(t.currentTarget), i = e.attr("data-timepicker-instance-id"), n = parseInt(e.attr("data-hour")), r = t.data.fromDoubleClick, s = $(i), o = this._getInst(s[0]), a = 1 == this._get(o, "showMinutes");
                if ($.timepicker._isDisabledTimepicker(s.attr("id")))return !1;
                e.parents(".ui-timepicker-hours:first").find("a").removeClass("ui-state-active"), e.children("a").addClass("ui-state-active"), o.hours = n;
                var l = this._get(o, "onMinuteShow");
                return l && this._updateMinuteDisplay(o), this._updateSelectedValue(o), o._hoursClicked = !0, (o._minutesClicked || r || 0 == a) && $.timepicker._hideTimepicker(), !1
            }, selectMinutes: function (t) {
                var e = $(t.currentTarget), i = e.attr("data-timepicker-instance-id"), n = parseInt(e.attr("data-minute")), r = t.data.fromDoubleClick, s = $(i), o = this._getInst(s[0]), a = 1 == this._get(o, "showHours");
                return $.timepicker._isDisabledTimepicker(s.attr("id")) ? !1 : (e.parents(".ui-timepicker-minutes:first").find("a").removeClass("ui-state-active"), e.children("a").addClass("ui-state-active"), o.minutes = n, this._updateSelectedValue(o), o._minutesClicked = !0, o._hoursClicked || r || 0 == a ? ($.timepicker._hideTimepicker(), !1) : !1)
            }, _updateSelectedValue: function (t) {
                var e = this._getParsedTime(t);
                t.input && (t.input.val(e), t.input.trigger("change"));
                var i = this._get(t, "onSelect");
                return i && i.apply(t.input ? t.input[0] : null, [e, t]), this._updateAlternate(t, e), e
            }, _getParsedTime: function (t) {
                if (-1 == t.hours && -1 == t.minutes)return "";
                (t.hours < t.hours.starts || t.hours > t.hours.ends) && (t.hours = 0), (t.minutes < t.minutes.starts || t.minutes > t.minutes.ends) && (t.minutes = 0);
                var e = "", i = 1 == this._get(t, "showPeriod"), n = 1 == this._get(t, "showLeadingZero"), r = 1 == this._get(t, "showHours"), s = 1 == this._get(t, "showMinutes"), o = 1 == this._get(t, "optionalMinutes"), a = this._get(t, "amPmText"), l = t.hours ? t.hours : 0, c = t.minutes ? t.minutes : 0, u = l ? l : 0, d = "";
                -1 == u && (u = 0), -1 == c && (c = 0), i && (0 == t.hours && (u = 12), t.hours < 12 ? e = a[0] : (e = a[1], u > 12 && (u -= 12)));
                var h = u.toString();
                n && 10 > u && (h = "0" + h);
                var p = c.toString();
                return 10 > c && (p = "0" + p), r && (d += h), !r || !s || o && 0 == p || (d += this._get(t, "timeSeparator")), !s || o && 0 == p || (d += p), r && e.length > 0 && (d += this._get(t, "periodSeparator") + e), d
            }, _updateAlternate: function (t, e) {
                var i = this._get(t, "altField");
                i && $(i).each(function (t, i) {
                    $(i).val(e)
                })
            }, _getTimeAsDateTimepicker: function (t) {
                var e = this._getInst(t);
                return -1 == e.hours && -1 == e.minutes ? "" : ((e.hours < e.hours.starts || e.hours > e.hours.ends) && (e.hours = 0), (e.minutes < e.minutes.starts || e.minutes > e.minutes.ends) && (e.minutes = 0), new Date(0, 0, 0, e.hours, e.minutes, 0))
            }, _getTimeTimepicker: function (t) {
                var e = this._getInst(t);
                return this._getParsedTime(e)
            }, _getHourTimepicker: function (t) {
                var e = this._getInst(t);
                return void 0 == e ? -1 : e.hours
            }, _getMinuteTimepicker: function (t) {
                var e = this._getInst(t);
                return void 0 == e ? -1 : e.minutes
            }
        }), $.fn.timepicker = function (t) {
            $.timepicker.initialized || ($(document).mousedown($.timepicker._checkExternalClick).find("body").append($.timepicker.tpDiv), $.timepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "getTime" != t && "getTimeAsDate" != t && "getHour" != t && "getMinute" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.timepicker["_" + t + "Timepicker"].apply($.timepicker, [this[0]].concat(e)) : this.each(function () {
                "string" == typeof t ? $.timepicker["_" + t + "Timepicker"].apply($.timepicker, [this].concat(e)) : $.timepicker._attachTimepicker(this, t)
            }) : $.timepicker["_" + t + "Timepicker"].apply($.timepicker, [this[0]].concat(e))
        }, $.timepicker = new Timepicker, $.timepicker.initialized = !1, $.timepicker.uuid = (new Date).getTime(), $.timepicker.version = "0.3.2", window["TP_jQuery_" + tpuuid] = $
    }(jQuery), function (t) {
    t.widget("ra.datetimepicker", {
        options: {showDate: !0, showTime: !0, datepicker: {}, timepicker: {}},
        _create: function () {
            var e = this;
            if (this.element.hide(), this.options.showTime) {
                var i = t('<div class="input-group"/>');
                this.timepicker = t('<input class="TIMEPICKER" type="text" value="' + this.options.timepicker.value + '" />'), this.timepicker.css("width", "65px"), this.timepicker.addClass("form-control"), i.append(this.timepicker), i.append(t('<div class="input-group-addon"><i class="icon-time"></i></div>')), i.insertAfter(this.element), this.timepicker.bind("change", function () {
                    e._onChange()
                }), this.timepicker.timepicker(this.options.timepicker)
            }
            if (this.options.showDate) {
                var i = t('<div class="input-group"/>');
                this.datepicker = t('<input type="text" value="' + this.options.datepicker.value + '" />'), this.datepicker.addClass("form-control"), i.css("margin-right", "15px"), i.append(this.datepicker), i.append(t('<div class="input-group-addon"><i class="icon-calendar"></i></div>')), i.insertAfter(this.element), this.datepicker.bind("change", function () {
                    e._onChange()
                }), this.datepicker.datepicker(this.options.datepicker)
            }
        },
        _onChange: function () {
            var t = [];
            this.options.showDate && t.push(this.datepicker.val()), this.options.showTime && t.push(this.timepicker.val()), this.element.val(t.join(" "))
        }
    })
}(jQuery), function (t) {
    var e = function () {
        var e = 65, i = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>', n = {
            eventName: "click",
            onShow: function () {
            },
            onBeforeShow: function () {
            },
            onHide: function () {
            },
            onChange: function () {
            },
            onSubmit: function () {
            },
            color: "ff0000",
            livePreview: !0,
            flat: !1
        }, r = function (e, i) {
            var n = H(e);
            t(i).data("colorpicker").fields.eq(1).val(n.r).end().eq(2).val(n.g).end().eq(3).val(n.b).end()
        }, s = function (e, i) {
            t(i).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()
        }, o = function (e, i) {
            t(i).data("colorpicker").fields.eq(0).val(O(e)).end()
        }, a = function (e, i) {
            t(i).data("colorpicker").selector.css("backgroundColor", "#" + O({
                    h: e.h,
                    s: 100,
                    b: 100
                })), t(i).data("colorpicker").selectorIndic.css({
                left: parseInt(150 * e.s / 100, 10),
                top: parseInt(150 * (100 - e.b) / 100, 10)
            })
        }, l = function (e, i) {
            t(i).data("colorpicker").hue.css("top", parseInt(150 - 150 * e.h / 360, 10))
        }, c = function (e, i) {
            t(i).data("colorpicker").currentColor.css("backgroundColor", "#" + O(e))
        }, u = function (e, i) {
            t(i).data("colorpicker").newColor.css("backgroundColor", "#" + O(e))
        }, d = function (i) {
            var n = i.charCode || i.keyCode || -1;
            if (n > e && 90 >= n || 32 == n)return !1;
            var r = t(this).parent().parent();
            r.data("colorpicker").livePreview === !0 && h.apply(this)
        }, h = function (e) {
            var i, n = t(this).parent().parent();
            n.data("colorpicker").color = i = this.parentNode.className.indexOf("_hex") > 0 ? P(A(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? M({
                h: parseInt(n.data("colorpicker").fields.eq(4).val(), 10),
                s: parseInt(n.data("colorpicker").fields.eq(5).val(), 10),
                b: parseInt(n.data("colorpicker").fields.eq(6).val(), 10)
            }) : F(N({
                r: parseInt(n.data("colorpicker").fields.eq(1).val(), 10),
                g: parseInt(n.data("colorpicker").fields.eq(2).val(), 10),
                b: parseInt(n.data("colorpicker").fields.eq(3).val(), 10)
            })), e && (r(i, n.get(0)), o(i, n.get(0)), s(i, n.get(0))), a(i, n.get(0)), l(i, n.get(0)), u(i, n.get(0)), n.data("colorpicker").onChange.apply(n, [i, O(i), H(i)])
        }, p = function () {
            var e = t(this).parent().parent();
            e.data("colorpicker").fields.parent().removeClass("colorpicker_focus")
        }, f = function () {
            e = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, t(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), t(this).parent().addClass("colorpicker_focus")
        }, m = function (e) {
            var i = t(this).parent().find("input").focus(), n = {
                el: t(this).parent().addClass("colorpicker_slider"),
                max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                y: e.pageY,
                field: i,
                val: parseInt(i.val(), 10),
                preview: t(this).parent().parent().data("colorpicker").livePreview
            };
            t(document).bind("mouseup", n, v), t(document).bind("mousemove", n, g)
        }, g = function (t) {
            return t.data.field.val(Math.max(0, Math.min(t.data.max, parseInt(t.data.val + t.pageY - t.data.y, 10)))), t.data.preview && h.apply(t.data.field.get(0), [!0]), !1
        }, v = function (e) {
            return h.apply(e.data.field.get(0), [!0]), e.data.el.removeClass("colorpicker_slider").find("input").focus(), t(document).unbind("mouseup", v), t(document).unbind("mousemove", g), !1
        }, y = function () {
            var e = {cal: t(this).parent(), y: t(this).offset().top};
            e.preview = e.cal.data("colorpicker").livePreview, t(document).bind("mouseup", e, _), t(document).bind("mousemove", e, b)
        }, b = function (t) {
            return h.apply(t.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, t.pageY - t.data.y))) / 150, 10)).get(0), [t.data.preview]), !1
        }, _ = function (e) {
            return r(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), o(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), t(document).unbind("mouseup", _), t(document).unbind("mousemove", b), !1
        }, w = function () {
            var e = {cal: t(this).parent(), pos: t(this).offset()};
            e.preview = e.cal.data("colorpicker").livePreview, t(document).bind("mouseup", e, x), t(document).bind("mousemove", e, k)
        }, k = function (t) {
            return h.apply(t.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, t.pageY - t.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, t.pageX - t.data.pos.left)) / 150, 10)).get(0), [t.data.preview]), !1
        }, x = function (e) {
            return r(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), o(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), t(document).unbind("mouseup", x), t(document).unbind("mousemove", k), !1
        }, C = function () {
            t(this).addClass("colorpicker_focus")
        }, D = function () {
            t(this).removeClass("colorpicker_focus")
        }, T = function () {
            var e = t(this).parent(), i = e.data("colorpicker").color;
            e.data("colorpicker").origColor = i, c(i, e.get(0)), e.data("colorpicker").onSubmit(i, O(i), H(i), e.data("colorpicker").el)
        }, S = function () {
            var e = t("#" + t(this).data("colorpickerId"));
            e.data("colorpicker").onBeforeShow.apply(this, [e.get(0)]);
            var i = t(this).offset(), n = $(), r = i.top + this.offsetHeight, s = i.left;
            return r + 176 > n.t + n.h && (r -= this.offsetHeight + 176), s + 356 > n.l + n.w && (s -= 356), e.css({
                left: s + "px",
                top: r + "px"
            }), 0 != e.data("colorpicker").onShow.apply(this, [e.get(0)]) && e.show(), t(document).bind("mousedown", {cal: e}, E), !1
        }, E = function (e) {
            I(e.data.cal.get(0), e.target, e.data.cal.get(0)) || (0 != e.data.cal.data("colorpicker").onHide.apply(this, [e.data.cal.get(0)]) && e.data.cal.hide(), t(document).unbind("mousedown", E))
        }, I = function (t, e, i) {
            if (t == e)return !0;
            if (t.contains)return t.contains(e);
            if (t.compareDocumentPosition)return !!(16 & t.compareDocumentPosition(e));
            for (var n = e.parentNode; n && n != i;) {
                if (n == t)return !0;
                n = n.parentNode
            }
            return !1
        }, $ = function () {
            var t = "CSS1Compat" == document.compatMode;
            return {
                l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft),
                t: window.pageYOffset || (t ? document.documentElement.scrollTop : document.body.scrollTop),
                w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth),
                h: window.innerHeight || (t ? document.documentElement.clientHeight : document.body.clientHeight)
            }
        }, M = function (t) {
            return {
                h: Math.min(360, Math.max(0, t.h)),
                s: Math.min(100, Math.max(0, t.s)),
                b: Math.min(100, Math.max(0, t.b))
            }
        }, N = function (t) {
            return {
                r: Math.min(255, Math.max(0, t.r)),
                g: Math.min(255, Math.max(0, t.g)),
                b: Math.min(255, Math.max(0, t.b))
            }
        }, A = function (t) {
            var e = 6 - t.length;
            if (e > 0) {
                for (var i = [], n = 0; e > n; n++)i.push("0");
                i.push(t), t = i.join("")
            }
            return t
        }, j = function (t) {
            var t = parseInt(t.indexOf("#") > -1 ? t.substring(1) : t, 16);
            return {r: t >> 16, g: (65280 & t) >> 8, b: 255 & t}
        }, P = function (t) {
            return F(j(t))
        }, F = function (t) {
            var e = {h: 0, s: 0, b: 0}, i = Math.min(t.r, t.g, t.b), n = Math.max(t.r, t.g, t.b), r = n - i;
            return e.b = n, e.s = 0 != n ? 255 * r / n : 0, e.h = 0 != e.s ? t.r == n ? (t.g - t.b) / r : t.g == n ? 2 + (t.b - t.r) / r : 4 + (t.r - t.g) / r : -1, e.h *= 60, e.h < 0 && (e.h += 360), e.s *= 100 / 255, e.b *= 100 / 255, e
        }, H = function (t) {
            var e = {}, i = Math.round(t.h), n = Math.round(255 * t.s / 100), r = Math.round(255 * t.b / 100);
            if (0 == n)e.r = e.g = e.b = r; else {
                var s = r, o = (255 - n) * r / 255, a = (s - o) * (i % 60) / 60;
                360 == i && (i = 0), 60 > i ? (e.r = s, e.b = o, e.g = o + a) : 120 > i ? (e.g = s, e.b = o, e.r = s - a) : 180 > i ? (e.g = s, e.r = o, e.b = o + a) : 240 > i ? (e.b = s, e.r = o, e.g = s - a) : 300 > i ? (e.b = s, e.g = o, e.r = o + a) : 360 > i ? (e.r = s, e.g = o, e.b = s - a) : (e.r = 0, e.g = 0, e.b = 0)
            }
            return {r: Math.round(e.r), g: Math.round(e.g), b: Math.round(e.b)}
        }, L = function (e) {
            var i = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
            return t.each(i, function (t, e) {
                1 == e.length && (i[t] = "0" + e)
            }), i.join("")
        }, O = function (t) {
            return L(H(t))
        }, R = function () {
            var e = t(this).parent(), i = e.data("colorpicker").origColor;
            e.data("colorpicker").color = i, r(i, e.get(0)), o(i, e.get(0)), s(i, e.get(0)), a(i, e.get(0)), l(i, e.get(0)), u(i, e.get(0))
        };
        return {
            init: function (e) {
                if (e = t.extend({}, n, e || {}), "string" == typeof e.color)e.color = P(e.color); else if (void 0 != e.color.r && void 0 != e.color.g && void 0 != e.color.b)e.color = F(e.color); else {
                    if (void 0 == e.color.h || void 0 == e.color.s || void 0 == e.color.b)return this;
                    e.color = M(e.color)
                }
                return this.each(function () {
                    if (!t(this).data("colorpickerId")) {
                        var n = t.extend({}, e);
                        n.origColor = e.color;
                        var g = "collorpicker_" + parseInt(1e3 * Math.random());
                        t(this).data("colorpickerId", g);
                        var v = t(i).attr("id", g);
                        n.flat ? v.appendTo(this).show() : v.appendTo(document.body), n.fields = v.find("input").bind("keyup", d).bind("change", h).bind("blur", p).bind("focus", f), v.find("span").bind("mousedown", m).end().find(">div.colorpicker_current_color").bind("click", R), n.selector = v.find("div.colorpicker_color").bind("mousedown", w), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = v.find("div.colorpicker_hue div"), v.find("div.colorpicker_hue").bind("mousedown", y), n.newColor = v.find("div.colorpicker_new_color"), n.currentColor = v.find("div.colorpicker_current_color"), v.data("colorpicker", n), v.find("div.colorpicker_submit").bind("mouseenter", C).bind("mouseleave", D).bind("click", T), r(n.color, v.get(0)), s(n.color, v.get(0)), o(n.color, v.get(0)), l(n.color, v.get(0)), a(n.color, v.get(0)), c(n.color, v.get(0)), u(n.color, v.get(0)), n.flat ? v.css({
                            position: "relative",
                            display: "block"
                        }) : t(this).bind(n.eventName, S)
                    }
                })
            }, showPicker: function () {
                return this.each(function () {
                    t(this).data("colorpickerId") && S.apply(this)
                })
            }, hidePicker: function () {
                return this.each(function () {
                    t(this).data("colorpickerId") && t("#" + t(this).data("colorpickerId")).hide()
                })
            }, setColor: function (e) {
                if ("string" == typeof e)e = P(e); else if (void 0 != e.r && void 0 != e.g && void 0 != e.b)e = F(e); else {
                    if (void 0 == e.h || void 0 == e.s || void 0 == e.b)return this;
                    e = M(e)
                }
                return this.each(function () {
                    if (t(this).data("colorpickerId")) {
                        var i = t("#" + t(this).data("colorpickerId"));
                        i.data("colorpicker").color = e, i.data("colorpicker").origColor = e, r(e, i.get(0)), s(e, i.get(0)), o(e, i.get(0)), l(e, i.get(0)), a(e, i.get(0)), c(e, i.get(0)), u(e, i.get(0))
                    }
                })
            }
        }
    }();
    t.fn.extend({
        ColorPicker: e.init,
        ColorPickerHide: e.hidePicker,
        ColorPickerShow: e.showPicker,
        ColorPickerSetColor: e.setColor
    })
}(jQuery), function (t) {
    var e;
    t.filters = e = {
        options: {regional: {datePicker: {dateFormat: "mm/dd/yy"}}},
        append: function (e, i, n, r, s, o, a) {
            var l = "f[" + i + "][" + a + "][v]", c = "f[" + i + "][" + a + "][o]";
            switch (n) {
                case"boolean":
                    var u = '<select class="input-sm form-control" name="' + l + '"><option value="_discard">...</option><option value="true"' + ("true" == r ? 'selected="selected"' : "") + ">" + RailsAdmin.I18n.t("true") + '</option><option value="false"' + ("false" == r ? 'selected="selected"' : "") + ">" + RailsAdmin.I18n.t("false") + '</option><option disabled="disabled">---------</option><option ' + ("_present" == r ? 'selected="selected"' : "") + ' value="_present">' + RailsAdmin.I18n.t("is_present") + "</option><option " + ("_blank" == r ? 'selected="selected"' : "") + ' value="_blank"  >' + RailsAdmin.I18n.t("is_blank") + "</option></select>";
                    break;
                case"date":
                case"datetime":
                case"timestamp":
                    var u = '<select class="switch-additionnal-fieldsets input-sm form-control" name="' + c + '"><option ' + ("default" == s ? 'selected="selected"' : "") + ' data-additional-fieldset="default" value="default">' + RailsAdmin.I18n.t("date") + "</option><option " + ("between" == s ? 'selected="selected"' : "") + ' data-additional-fieldset="between" value="between">' + RailsAdmin.I18n.t("between_and_") + "</option><option " + ("today" == s ? 'selected="selected"' : "") + ' value="today">' + RailsAdmin.I18n.t("today") + "</option><option " + ("yesterday" == s ? 'selected="selected"' : "") + ' value="yesterday">' + RailsAdmin.I18n.t("yesterday") + "</option><option " + ("this_week" == s ? 'selected="selected"' : "") + ' value="this_week">' + RailsAdmin.I18n.t("this_week") + "</option><option " + ("last_week" == s ? 'selected="selected"' : "") + ' value="last_week">' + RailsAdmin.I18n.t("last_week") + '</option><option disabled="disabled">---------</option><option ' + ("_not_null" == s ? 'selected="selected"' : "") + ' value="_not_null">' + RailsAdmin.I18n.t("is_present") + "</option><option " + ("_null" == s ? 'selected="selected"' : "") + ' value="_null" >' + RailsAdmin.I18n.t("is_blank") + "</option></select>", d = '<input class="date additional-fieldset default input-sm form-control" style="display:' + (s && "default" != s ? "none" : "inline-block") + ';" type="text" name="' + l + '[]" value="' + (r[0] || "") + '" /> <input placeholder="-\u221e" class="date additional-fieldset between input-sm form-control" style="display:' + ("between" == s ? "inline-block" : "none") + ';" type="text" name="' + l + '[]" value="' + (r[1] || "") + '" /> <input placeholder="\u221e" class="date additional-fieldset between input-sm form-control" style="display:' + ("between" == s ? "inline-block" : "none") + ';" type="text" name="' + l + '[]" value="' + (r[2] || "") + '" />';
                    break;
                case"enum":
                    var h = r instanceof Array ? !0 : !1, u = '<select style="display:' + (h ? "none" : "inline-block") + '" ' + (h ? "" : 'name="' + l + '"') + ' data-name="' + l + '" class="select-single input-sm form-control"><option value="_discard">...</option><option ' + ("_present" == r ? 'selected="selected"' : "") + ' value="_present">' + RailsAdmin.I18n.t("is_present") + "</option><option " + ("_blank" == r ? 'selected="selected"' : "") + ' value="_blank">' + RailsAdmin.I18n.t("is_blank") + '</option><option disabled="disabled">---------</option>' + o + '</select><select multiple="multiple" style="display:' + (h ? "inline-block" : "none") + '" ' + (h ? 'name="' + l + '[]"' : "") + ' data-name="' + l + '[]" class="select-multiple input-sm form-control">' + o + '</select> <a href="#" class="switch-select"><i class="icon-' + (h ? "minus" : "plus") + '"></i></a>';
                    break;
                case"string":
                case"text":
                case"belongs_to_association":
                    var u = '<select class="switch-additionnal-fieldsets input-sm form-control" value="' + s + '" name="' + c + '"><option data-additional-fieldset="additional-fieldset"' + ("like" == s ? 'selected="selected"' : "") + ' value="like">' + RailsAdmin.I18n.t("contains") + '</option><option data-additional-fieldset="additional-fieldset"' + ("is" == s ? 'selected="selected"' : "") + ' value="is">' + RailsAdmin.I18n.t("is_exactly") + '</option><option data-additional-fieldset="additional-fieldset"' + ("starts_with" == s ? 'selected="selected"' : "") + ' value="starts_with">' + RailsAdmin.I18n.t("starts_with") + '</option><option data-additional-fieldset="additional-fieldset"' + ("ends_with" == s ? 'selected="selected"' : "") + ' value="ends_with">' + RailsAdmin.I18n.t("ends_with") + '</option><option disabled="disabled">---------</option><option ' + ("_not_null" == s ? 'selected="selected"' : "") + ' value="_not_null">' + RailsAdmin.I18n.t("is_present") + "</option><option " + ("_null" == s ? 'selected="selected"' : "") + ' value="_null">' + RailsAdmin.I18n.t("is_blank") + "</option></select>", d = '<input class="additional-fieldset input-sm form-control" style="display:' + ("_blank" == s || "_present" == s ? "none" : "inline-block") + ';" type="text" name="' + l + '" value="' + r + '" /> ';
                    break;
                case"integer":
                case"decimal":
                case"float":
                    var u = '<select class="switch-additionnal-fieldsets input-sm form-control" name="' + c + '"><option ' + ("default" == s ? 'selected="selected"' : "") + ' data-additional-fieldset="default" value="default">' + RailsAdmin.I18n.t("number") + "</option><option " + ("between" == s ? 'selected="selected"' : "") + ' data-additional-fieldset="between" value="between">' + RailsAdmin.I18n.t("between_and_") + '</option><option disabled="disabled">---------</option><option ' + ("_not_null" == s ? 'selected="selected"' : "") + ' value="_not_null">' + RailsAdmin.I18n.t("is_present") + "</option><option " + ("_null" == s ? 'selected="selected"' : "") + ' value="_null" >' + RailsAdmin.I18n.t("is_blank") + "</option></select>", d = '<input class="additional-fieldset default input-sm form-control" style="display:' + (s && "default" != s ? "none" : "inline-block") + ';" type="' + n + '" name="' + l + '[]" value="' + (r[0] || "") + '" /> <input placeholder="-\u221e" class="additional-fieldset between input-sm form-control" style="display:' + ("between" == s ? "inline-block" : "none") + ';" type="' + n + '" name="' + l + '[]" value="' + (r[1] || "") + '" /> <input placeholder="\u221e" class="additional-fieldset between input-sm form-control" style="display:' + ("between" == s ? "inline-block" : "none") + ';" type="' + n + '" name="' + l + '[]" value="' + (r[2] || "") + '" />';
                    break;
                default:
                    var u = '<input type="text" class="input-sm form-control" name="' + l + '" value="' + r + '"/> '
            }
            var p = '<p class="filter form-search"><span class="label label-info form-label"><a href="#" class="delete"><i class="icon-trash icon-white"></i></a> ' + e + "</span> " + u + " " + (d || "") + "</p> ";
            t("#filters_box").append(p), t("#filters_box .date").datepicker(this.options.regional.datePicker), t("hr.filters_box:hidden").show("slow")
        }
    }, t(document).on("click", "#filters a", function (e) {
        e.preventDefault(), t.filters.append(t(this).data("field-label"), t(this).data("field-name"), t(this).data("field-type"), t(this).data("field-value"), t(this).data("field-operator"), t(this).data("field-options"), t.now().toString().slice(6, 11))
    }), t(document).on("click", "#filters_box .delete", function (e) {
        e.preventDefault(), form = t(this).parents("form"), t(this).parents(".filter").remove(), !t("#filters_box").children().length && t("hr.filters_box:visible").hide("slow")
    }), t(document).on("click", "#filters_box .switch-select", function (e) {
        e.preventDefault();
        var i = t(this).siblings("select:visible"), n = t(this).siblings("select:hidden");
        n.attr("name", n.data("name")).show("slow"), i.attr("name", null).hide("slow"), t(this).find("i").toggleClass("icon-plus icon-minus")
    }), t(document).on("change", "#filters_box .switch-additionnal-fieldsets", function () {
        var e = t(this).find("option:selected");
        (klass = t(e).data("additional-fieldset")) ? (t(this).siblings(".additional-fieldset:not(." + klass + ")").hide("slow"), t(this).siblings("." + klass).show("slow")) : t(this).siblings(".additional-fieldset").hide("slow")
    })
}(jQuery), function (t) {
    t.widget("ra.filteringMultiselect", {
        _cache: {}, options: {
            createQuery: function (t) {
                return {query: t}
            },
            sortable: !1,
            regional: {
                up: "Up",
                down: "Down",
                add: "Add",
                chooseAll: "Choose all",
                chosen: "Chosen records",
                clearAll: "Clear all",
                remove: "Remove",
                selectChoice: "Select your choice(s) and click"
            },
            searchDelay: 400,
            remote_source: null,
            xhr: !1
        }, _create: function () {
            this._cache = {}, this._build(), this._buildCache(), this._bindEvents()
        }, _build: function () {
            var e;
            this.wrapper = t('<div class="ra-multiselect">'), this.wrapper.insertAfter(this.element), this.header = t('<div class="ra-multiselect-header ui-helper-clearfix">'), this.filter = t('<input type="search" placeholder="' + this.options.regional.search + '" class="form-control ra-multiselect-search"/>'), this.header.append(this.filter), this.wrapper.append(this.header), this.columns = {
                left: t('<div class="ra-multiselect-column ra-multiselect-left">'),
                center: t('<div class="ra-multiselect-column ra-multiselect-center">'),
                right: t('<div class="ra-multiselect-column ra-multiselect-right">')
            };
            for (e in this.columns)this.columns.hasOwnProperty(e) && this.wrapper.append(this.columns[e]);
            this.collection = t('<select multiple="multiple"></select>'), this.collection.addClass("form-control ra-multiselect-collection"), this.addAll = t('<a href="#" class="ra-multiselect-item-add-all"><span class="ui-icon ui-icon-circle-triangle-e"></span>' + this.options.regional.chooseAll + "</a>"), this.columns.left.html(this.collection).append(this.addAll), this.collection.wrap('<div class="wrapper"/>'), this.add = t('<a href="#" class="ui-icon ui-icon-circle-triangle-e ra-multiselect-item-add">' + this.options.regional.add + "</a>"), this.remove = t('<a href="#" class="ui-icon ui-icon-circle-triangle-w ra-multiselect-item-remove">' + this.options.regional.remove + "</a>"), this.columns.center.append(this.add).append(this.remove), this.options.sortable && (this.up = t('<a href="#" class="ui-icon ui-icon-circle-triangle-n ra-multiselect-item-up">' + this.options.regional.up + "</a>"), this.down = t('<a href="#" class="ui-icon ui-icon-circle-triangle-s ra-multiselect-item-down">' + this.options.regional.down + "</a>"), this.columns.center.append(this.up).append(this.down)), this.selection = t('<select class="form-control ra-multiselect-selection" multiple="multiple"></select>'), this.removeAll = t('<a href="#" class="ra-multiselect-item-remove-all"><span class="ui-icon ui-icon-circle-triangle-w"></span>' + this.options.regional.clearAll + "</a>"), this.columns.right.append(this.selection).append(this.removeAll), this.selection.wrap('<div class="wrapper"/>'), this.element.css({display: "none"})
        }, _bindEvents: function () {
            var e = this;
            this.addAll.click(function (i) {
                e._select(t("option", e.collection)), i.preventDefault(), e.selection.trigger("change")
            }), this.add.click(function (i) {
                e._select(t(":selected", e.collection)), i.preventDefault(), e.selection.trigger("change")
            }), this.removeAll.click(function (i) {
                e._deSelect(t("option", e.selection)), i.preventDefault(), e.selection.trigger("change")
            }), this.remove.click(function (i) {
                e._deSelect(t(":selected", e.selection)), i.preventDefault(), e.selection.trigger("change")
            });
            var i = null;
            this.options.sortable && (this.up.click(function (i) {
                e._move("up", t(":selected", e.selection)), i.preventDefault()
            }), this.down.click(function (i) {
                e._move("down", t(":selected", e.selection)), i.preventDefault()
            })), this.filter.bind("keyup click", function () {
                i && clearTimeout(i), i = setTimeout(function () {
                    e._queryFilter(e.filter.val())
                }, e.options.searchDelay)
            })
        }, _queryFilter: function (e) {
            var i = this;
            i._query(e, function (e) {
                var n;
                i.collection.html("");
                for (n in e)e.hasOwnProperty(n) && !i.selected(e[n].id) && i.collection.append(t("<option></option>").attr("value", e[n].id).attr("title", e[n].label).text(e[n].label))
            })
        }, _buildCache: function () {
            var e = this;
            this.element.find("option").each(function (i, n) {
                n.selected ? (e._cache[n.value] = n.innerHTML, t(n).clone().appendTo(e.selection).attr("selected", !1).attr("title", t(n).text())) : (e._cache[n.value] = n.innerHTML, t(n).clone().appendTo(e.collection).attr("selected", !1).attr("title", t(n).text()))
            })
        }, _deSelect: function (e) {
            var i = this;
            e.each(function (t, e) {
                i.element.find('option[value="' + e.value + '"]').removeAttr("selected")
            }), t(e).appendTo(this.collection).attr("selected", !1)
        }, _query: function (e, i) {
            var n, r = [];
            if ("" === e) {
                if (!this.options.xhr)for (n in this._cache)this._cache.hasOwnProperty(n) && r.push({
                    id: n,
                    label: this._cache[n]
                });
                i.apply(this, [r])
            } else if (this.options.xhr)t.ajax({
                beforeSend: function (t) {
                    t.setRequestHeader("Accept", "application/json")
                }, url: this.options.remote_source, data: this.options.createQuery(e), success: i
            }); else {
                e = new RegExp(e + ".*", "i");
                for (n in this._cache)this._cache.hasOwnProperty(n) && e.test(this._cache[n]) && r.push({
                    id: n,
                    label: this._cache[n]
                });
                i.apply(this, [r])
            }
        }, _select: function (e) {
            var i = this;
            e.each(function (e, n) {
                var r = i.element.find('option[value="' + n.value + '"]');
                r.length ? r.attr("selected", "selected") : i.element.append(t("<option></option>").attr("value", n.value).attr("selected", "selected"))
            }), t(e).appendTo(this.selection).attr("selected", !1)
        }, _move: function (e, i) {
            var n = this;
            "up" == e ? i.each(function (e, i) {
                var r = t(i).prev();
                if (r.length > 0) {
                    var s = n.element.find('option[value="' + i.value + '"]'), o = n.element.find('option[value="' + r[0].value + '"]');
                    o.before(s), r.before(t(i))
                }
            }) : (t.fn.reverse = [].reverse, i.reverse().each(function (e, i) {
                var r = t(i).next();
                if (r.length > 0) {
                    var s = n.element.find('option[value="' + i.value + '"]'), o = n.element.find('option[value="' + r[0].value + '"]');
                    o.after(s), r.after(t(i))
                }
            }))
        }, selected: function (t) {
            return this.element.find('option[value="' + t + '"]').attr("selected")
        }, destroy: function () {
            this.wrapper.remove(), this.element.css({display: "inline"}), t.Widget.prototype.destroy.apply(this, arguments)
        }
    })
}(jQuery), function (t) {
    t.widget("ra.filteringSelect", {
        options: {
            createQuery: function (t) {
                return {query: t}
            }, minLength: 0, searchDelay: 200, remote_source: null, source: null, xhr: !1
        }, _create: function () {
            var e = this, i = this.element.hide(), n = i.children(":selected"), r = n.val() ? n.text() : "";
            this.options.source = this.options.xhr ? this.options.remote_source : i.children("option").map(function () {
                return {label: t(this).text(), value: this.value}
            }).toArray();
            var s = t('<div class="input-append filtering-select" style="float:left"></div>'), o = this.input = t('<input type="text">').val(r).addClass("form-control ra-filtering-select-input").attr("style", i.attr("style")).show().autocomplete({
                delay: this.options.searchDelay,
                minLength: this.options.minLength,
                source: this._getSourceFunction(this.options.source),
                select: function (n, r) {
                    var s = t("<option></option>").attr("value", r.item.id).attr("selected", "selected").text(r.item.value);
                    i.html(s), i.trigger("change", r.item.id), e._trigger("selected", n, {item: s}), t(e.element.parents(".controls")[0]).find(".update").removeClass("disabled")
                },
                change: function (n, r) {
                    if (!r.item) {
                        var s = new RegExp("^" + t.ui.autocomplete.escapeRegex(t(this).val()) + "$", "i"), a = !1;
                        if (i.children("option").each(function () {
                                return t(this).text().match(s) ? (this.selected = a = !0, !1) : void 0
                            }), !a || "" == t(this).val())return t(this).val(null), i.html(t('<option value="" selected="selected"></option>')), o.data("ui-autocomplete").term = "", t(e.element.parents(".controls")[0]).find(".update").addClass("disabled"), !1
                    }
                }
            }).keyup(function () {
                0 == t(this).val().length && (i.html(t('<option value="" selected="selected"></option>')), i.trigger("change"))
            });
            i.attr("placeholder") && o.attr("placeholder", i.attr("placeholder")), o.data("ui-autocomplete")._renderItem = function (e, i) {
                return t("<li></li>").data("ui-autocomplete-item", i).append(t("<a></a>").html(i.label || i.id)).appendTo(e)
            };
            var a = this.button = t('<label class="add-on ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" title="Show All Items" role="button"><span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-text">&nbsp;</span></label>').click(function () {
                return o.autocomplete("widget").is(":visible") ? void o.autocomplete("close") : (o.autocomplete("search", ""), void o.focus())
            });
            s.append(o).append(a).insertAfter(i)
        }, _getResultSet: function (e, i, n) {
            var r = new RegExp(t.ui.autocomplete.escapeRegex(e.term), "i");
            return t.map(i, function (i) {
                return (i.id || i.value) && (n || r.test(i.label)) ? {
                    label: i.label ? i.label.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.ui.autocomplete.escapeRegex(e.term) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>") : i.id,
                    value: i.label || i.id,
                    id: i.id || i.value
                } : void 0
            })
        }, _getSourceFunction: function (e) {
            var i = this, n = 0;
            return t.isArray(e) ? function (t, n) {
                n(i._getResultSet(t, e, !1))
            } : "string" == typeof e ? function (r, s) {
                this.xhr && this.xhr.abort(), this.xhr = t.ajax({
                    url: e,
                    data: i.options.createQuery(r.term),
                    dataType: "json",
                    autocompleteRequest: ++n,
                    success: function (t) {
                        this.autocompleteRequest === n && s(i._getResultSet(r, t, !0))
                    },
                    error: function () {
                        this.autocompleteRequest === n && s([])
                    }
                })
            } : e
        }, destroy: function () {
            this.input.remove(), this.button.remove(), this.element.show(), t.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery), function (t) {
    t.widget("ra.remoteForm", {
        _create: function () {
            var e = this, i = e.element, n = i.find("select").first().data("options") && i.find("select").first().data("options")["edit-url"];
            "undefined" != typeof n && n.length && i.on("dblclick", ".ra-multiselect option", function (t) {
                e._bindModalOpening(t, n.replace("__ID__", this.value))
            }), i.find(".create").unbind().bind("click", function (i) {
                e._bindModalOpening(i, t(this).data("link"))
            }), i.find(".update").unbind().bind("click", function (n) {
                (value = i.find("select").val()) ? e._bindModalOpening(n, t(this).data("link").replace("__ID__", value)) : n.preventDefault()
            })
        }, _bindModalOpening: function (e, i) {
            if (e.preventDefault(), widget = this, t("#modal").length)return !1;
            var n = this._getModal();
            setTimeout(function () {
                t.ajax({
                    url: i, beforeSend: function (t) {
                        t.setRequestHeader("Accept", "text/javascript")
                    }, success: function (t) {
                        n.find(".modal-body").html(t), widget._bindFormEvents()
                    }, error: function (t) {
                        n.find(".modal-body").html(t.responseText)
                    }, dataType: "text"
                })
            }, 200)
        }, _bindFormEvents: function () {
            var e = this, i = this._getModal(), n = i.find("form"), r = i.find(":submit[name=_save]").html(), s = i.find(":submit[name=_continue]").html();
            i.find(".form-actions").remove(), n.attr("data-remote", !0), i.find(".modal-header-title").text(n.data("title")), i.find(".cancel-action").unbind().click(function () {
                return i.modal("hide"), !1
            }).html(s), i.find(".save-action").unbind().click(function () {
                return n.submit(), !1
            }).html(r), t(document).trigger("rails_admin.dom_ready", [n]), n.bind("ajax:complete", function (n, r, s) {
                if ("error" == s)i.find(".modal-body").html(r.responseText), e._bindFormEvents(); else {
                    var o = t.parseJSON(r.responseText), a = '<option value="' + o.id + '" selected>' + o.label + "</option>", l = e.element.find("select").filter(":hidden");
                    if (e.element.find(".filtering-select").length) {
                        var c = e.element.find(".filtering-select").children(".ra-filtering-select-input");
                        c.val(o.label), l.find("option[value=" + o.id + "]").length || (l.html(a).val(o.id), e.element.find(".update").removeClass("disabled"))
                    } else {
                        var c = e.element.find(".ra-filtering-select-input"), u = e.element.find(".ra-multiselect");
                        u.find("option[value=" + o.id + "]").length ? (l.find("option[value=" + o.id + "]").text(o.label), u.find("option[value= " + o.id + "]").text(o.label)) : (l.prepend(a), u.find("select.ra-multiselect-selection").append(a))
                    }
                    e._trigger("success"), i.modal("hide")
                }
            })
        }, _getModal: function () {
            var e = this;
            return e.dialog || (e.dialog = t('<div id="modal" class="modal fade">            <div class="modal-dialog">            <div class="modal-content">            <div class="modal-header">              <a href="#" class="close" data-dismiss="modal">&times;</a>              <h3 class="modal-header-title">...</h3>            </div>            <div class="modal-body">              ...            </div>            <div class="modal-footer">              <a href="#" class="btn cancel-action">...</a>              <a href="#" class="btn btn-primary save-action">...</a>            </div>            </div>            </div>          </div>').modal({
                keyboard: !0,
                backdrop: !0,
                show: !0
            }).on("hidden.bs.modal", function () {
                e.dialog.remove(), e.dialog = null
            })), this.dialog
        }
    })
}(jQuery),// copyright chris wanstrath
    function (t) {
        function e(e, n, r) {
            var s = this;
            return this.on("click.pjax", e, function (e) {
                var o = t.extend({}, h(n, r));
                o.container || (o.container = t(this).attr("data-pjax") || s), i(e, o)
            })
        }

        function i(e, i, n) {
            n = h(i, n);
            var s = e.currentTarget;
            if ("A" !== s.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";
            if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== s.protocol || location.host !== s.host || s.hash && s.href.replace(s.hash, "") === location.href.replace(location.hash, "") || s.href === location.href + "#")) {
                var o = {url: s.href, container: t(s).attr("data-pjax"), target: s, fragment: null};
                r(t.extend({}, o, n)), e.preventDefault()
            }
        }

        function n(e, i, n) {
            n = h(i, n);
            var s = e.currentTarget;
            if ("FORM" !== s.tagName.toUpperCase())throw"$.pjax.submit requires a form element";
            var o = {
                type: s.method,
                url: s.action,
                data: t(s).serializeArray(),
                container: t(s).attr("data-pjax"),
                target: s,
                fragment: null
            };
            r(t.extend({}, o, n)), e.preventDefault()
        }

        function r(e) {
            function i(e, i) {
                var r = t.Event(e, {relatedTarget: n});
                return a.trigger(r, i), !r.isDefaultPrevented()
            }

            e = t.extend(!0, {}, t.ajaxSettings, r.defaults, e), t.isFunction(e.url) && (e.url = e.url());
            var n = e.target, s = d(e.url).hash, a = e.context = p(e.container);
            e.data || (e.data = {}), e.data._pjax = a.selector;
            var l;
            e.beforeSend = function (t, n) {
                "GET" !== n.type && (n.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", a.selector);
                return i("pjax:beforeSend", [t, n]) ? (n.timeout > 0 && (l = setTimeout(function () {
                    i("pjax:timeout", [t, e]) && t.abort("timeout")
                }, n.timeout), n.timeout = 0), void(e.requestUrl = d(n.url).href)) : !1
            }, e.complete = function (t, n) {
                l && clearTimeout(l), i("pjax:complete", [t, n, e]), i("pjax:end", [t, e])
            }, e.error = function (t, n, r) {
                var s = m("", t, e), a = i("pjax:error", [t, n, r, e]);
                "GET" == e.type && "abort" !== n && a && o(s.url)
            }, e.success = function (n, l, u) {
                var h = m(n, u, e);
                if (!h.contents)return void o(h.url);
                if (r.state = {
                        id: e.id || c(),
                        url: h.url,
                        title: h.title,
                        container: a.selector,
                        fragment: e.fragment,
                        timeout: e.timeout
                    }, (e.push || e.replace) && window.history.replaceState(r.state, h.title, h.url), h.title && (document.title = h.title), a.html(h.contents), "number" == typeof e.scrollTo && t(window).scrollTop(e.scrollTo), (e.replace || e.push) && window._gaq && _gaq.push(["_trackPageview"]), "" !== s) {
                    var p = d(h.url);
                    p.hash = s, r.state.url = p.href, window.history.replaceState(r.state, h.title, p.href);
                    var f = t(p.hash);
                    f.length && t(window).scrollTop(f.offset().top)
                }
                i("pjax:success", [n, l, u, e])
            }, r.state || (r.state = {
                id: c(),
                url: window.location.href,
                title: document.title,
                container: a.selector,
                fragment: e.fragment,
                timeout: e.timeout
            }, window.history.replaceState(r.state, document.title));
            var h = r.xhr;
            h && h.readyState < 4 && (h.onreadystatechange = t.noop, h.abort()), r.options = e;
            var h = r.xhr = t.ajax(e);
            return h.readyState > 0 && (e.push && !e.replace && (g(r.state.id, a.clone().contents()), window.history.pushState(null, "", u(e.requestUrl))), i("pjax:start", [h, e]), i("pjax:send", [h, e])), r.xhr
        }

        function s(e, i) {
            var n = {url: window.location.href, push: !1, replace: !0, scrollTo: !1};
            return r(t.extend(n, h(e, i)))
        }

        function o(t) {
            window.history.replaceState(null, "", "#"), window.location.replace(t)
        }

        function a(e) {
            var i = e.state;
            if (i && i.container) {
                var n = t(i.container);
                if (n.length) {
                    var s = _[i.id];
                    if (!r.state)return void(r.state = i);
                    var a = r.state.id < i.id ? "forward" : "back";
                    v(a, r.state.id, n.clone().contents());
                    var l = t.Event("pjax:popstate", {state: i, direction: a});
                    n.trigger(l);
                    var c = {
                        id: i.id,
                        url: i.url,
                        container: n,
                        push: !1,
                        fragment: i.fragment,
                        timeout: i.timeout,
                        scrollTo: !1
                    };
                    s ? (n.trigger("pjax:start", [null, c]), i.title && (document.title = i.title), n.html(s), r.state = i, n.trigger("pjax:end", [null, c])) : r(c), n[0].offsetHeight
                } else o(location.href)
            }
        }

        function l(e) {
            var i = t.isFunction(e.url) ? e.url() : e.url, n = e.type ? e.type.toUpperCase() : "GET", r = t("<form>", {
                method: "GET" === n ? "GET" : "POST",
                action: i,
                style: "display:none"
            });
            "GET" !== n && "POST" !== n && r.append(t("<input>", {
                type: "hidden",
                name: "_method",
                value: n.toLowerCase()
            }));
            var s = e.data;
            if ("string" == typeof s)t.each(s.split("&"), function (e, i) {
                var n = i.split("=");
                r.append(t("<input>", {type: "hidden", name: n[0], value: n[1]}))
            }); else if ("object" == typeof s)for (key in s)r.append(t("<input>", {
                type: "hidden",
                name: key,
                value: s[key]
            }));
            t(document.body).append(r), r.submit()
        }

        function c() {
            return (new Date).getTime()
        }

        function u(t) {
            return t.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
        }

        function d(t) {
            var e = document.createElement("a");
            return e.href = t, e
        }

        function h(e, i) {
            return e && i ? i.container = e : i = t.isPlainObject(e) ? e : {container: e}, i.container && (i.container = p(i.container)), i
        }

        function p(e) {
            if (e = t(e), e.length) {
                if ("" !== e.selector && e.context === document)return e;
                if (e.attr("id"))return t("#" + e.attr("id"));
                throw"cant get selector for pjax container!"
            }
            throw"no pjax container for " + e.selector
        }

        function f(t, e) {
            return t.filter(e).add(t.find(e))
        }

        function m(e, i, n) {
            var r = {};
            if (r.url = u(i.getResponseHeader("X-PJAX-URL") || n.requestUrl), /<html/i.test(e))var s = t(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]), o = t(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]); else var s = o = t(e);
            if (0 === o.length)return r;
            if (r.title = f(s, "title").last().text(), n.fragment) {
                if ("body" === n.fragment)var a = o; else var a = f(o, n.fragment).first();
                a.length && (r.contents = a.contents(), r.title || (r.title = a.attr("title") || a.data("title")))
            } else/<html/i.test(e) || (r.contents = o);
            return r.contents && (r.contents = r.contents.not("title"), r.contents.find("title").remove()), r.title && (r.title = t.trim(r.title)), r
        }

        function g(t, e) {
            for (_[t] = e, k.push(t); w.length;)delete _[w.shift()];
            for (; k.length > r.defaults.maxCacheLength;)delete _[k.shift()]
        }

        function v(t, e, i) {
            var n, r;
            _[e] = i, "forward" === t ? (n = k, r = w) : (n = w, r = k), n.push(e), (e = r.pop()) && delete _[e]
        }

        function y() {
            t.fn.pjax = e, t.pjax = r, t.pjax.enable = t.noop, t.pjax.disable = b, t.pjax.click = i, t.pjax.submit = n, t.pjax.reload = s, t.pjax.defaults = {
                timeout: 650,
                push: !0,
                replace: !1,
                type: "GET",
                dataType: "html",
                scrollTo: 0,
                maxCacheLength: 20
            }, t(window).bind("popstate.pjax", a)
        }

        function b() {
            t.fn.pjax = function () {
                return this
            }, t.pjax = l, t.pjax.enable = y, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload = function () {
                window.location.reload()
            }, t(window).unbind("popstate.pjax", a)
        }

        var _ = {}, w = [], k = [];
        t.inArray("state", t.event.props) < 0 && t.event.props.push("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), t.support.pjax ? y() : b()
    }(jQuery), function (t) {
    window.NestedFormEvents = function () {
        this.addFields = t.proxy(this.addFields, this), this.removeFields = t.proxy(this.removeFields, this)
    }, NestedFormEvents.prototype = {
        addFields: function (e) {
            var i = e.currentTarget, n = t(i).data("association"), r = t("#" + t(i).data("blueprint-id")), s = r.data("blueprint"), o = (t(i).closest(".fields").closestChild("input, textarea, select").eq(0).attr("name") || "").replace(new RegExp("[[a-z_]+]$"), "");
            if (o)for (var a = o.match(/[a-z_]+_attributes(?=\]\[(new_)?\d+\])/g) || [], l = o.match(/[0-9]+/g) || [], c = 0; c < a.length; c++)l[c] && (s = s.replace(new RegExp("(_" + a[c] + ")_.+?_", "g"), "$1_" + l[c] + "_"), s = s.replace(new RegExp("(\\[" + a[c] + "\\])\\[.+?\\]", "g"), "$1[" + l[c] + "]"));
            var u = new RegExp("new_" + n, "g"), d = this.newId();
            s = t.trim(s.replace(u, d));
            var h = this.insertFields(s, n, i);
            return h.trigger({type: "nested:fieldAdded", field: h}).trigger({
                type: "nested:fieldAdded:" + n,
                field: h
            }), !1
        }, newId: function () {
            return (new Date).getTime()
        }, insertFields: function (e, i, n) {
            var r = t(n).data("target");
            return r ? t(e).appendTo(t(r)) : t(e).insertBefore(n)
        }, removeFields: function (e) {
            var i = t(e.currentTarget), n = i.data("association"), r = i.prev("input[type=hidden]");
            r.val("1");
            var s = i.closest(".fields");
            return s.hide(), s.trigger({type: "nested:fieldRemoved", field: s}).trigger({
                type: "nested:fieldRemoved:" + n,
                field: s
            }), !1
        }
    }, window.nestedFormEvents = new NestedFormEvents, t(document).delegate("form a.add_nested_fields", "click", nestedFormEvents.addFields).delegate("form a.remove_nested_fields", "click", nestedFormEvents.removeFields)
}(jQuery), /*
 * Copyright 2011, Tobias Lindig
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 */
    function (t) {
        t.fn.closestChild = function (e) {
            if (e && "" != e) {
                var i = [];
                for (i.push(this); i.length > 0;)for (var n = i.shift(), r = n.children(), s = 0; s < r.length; ++s) {
                    var o = t(r[s]);
                    if (o.is(e))return o;
                    i.push(o)
                }
            }
            return t()
        }
    }(jQuery), function () {
    var t;
    t = jQuery, t(document).ready(function () {
        return window.nestedFormEvents.insertFields = function (e, i, n) {
            var r;
            return r = t(n).closest(".controls").siblings(".tab-content"), r.append(e), r.children().last()
        }
    }), t(document).on("nested:fieldAdded", "form", function (e) {
        var i, n, r, s, o, a, l;
        return n = e.field.addClass("tab-pane").attr("id", "unique-id-" + (new Date).getTime()), s = t('<li><a data-toggle="tab" href="#' + n.attr("id") + '">' + n.children(".object-infos").data("object-label") + "</a></li>"), a = n.closest(".control-group"), i = a.children(".controls"), o = void 0 !== i.data("nestedone"), r = i.children(".nav"), e = a.children(".tab-content"), l = i.find(".toggler"), r.append(s), t(window.document).trigger("rails_admin.dom_ready", [n, a]), s.children("a").tab("show"), o || r.select(":hidden").show("slow"), e.select(":hidden").show("slow"), l.addClass("active").removeClass("disabled").children("i").addClass("icon-chevron-down").removeClass("icon-chevron-right"), o ? i.find(".add_nested_fields").removeClass("add_nested_fields").html(n.children(".object-infos").data("object-label")) : void 0
    }), t(document).on("nested:fieldRemoved", "form", function (t) {
        var e, i, n, r, s, o, a, l;
        return r = t.field, s = r.closest(".control-group").children(".controls").children(".nav"), n = s.children("li").has("a[href=#" + r.attr("id") + "]"), a = r.closest(".control-group"), i = a.children(".controls"), o = void 0 !== i.data("nestedone"), l = i.find(".toggler"), (n.next().length ? n.next() : n.prev()).children("a:first").tab("show"), n.remove(), 0 === s.children().length && (s.select(":visible").hide("slow"), l.removeClass("active").addClass("disabled").children("i").removeClass("icon-chevron-down").addClass("icon-chevron-right")), o ? (e = l.next(), e.addClass("add_nested_fields").html(e.data("add-label"))) : void 0
    })
}.call(this), function () {
    var t;
    this.RailsAdmin = function () {
        function t() {
        }

        return t
    }(), this.RailsAdmin.I18n = t = function () {
        function t() {
        }

        return t.init = function (t) {
            this.locale = t
        }, t.t = function (t) {
            var e;
            return e = t.charAt(0).toUpperCase() + t.replace("_", " ").slice(1), this.locale[t] || e
        }, t
    }()
}.call(this), /* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e() {
            var t = document.createElement("bootstrap"), e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e)if (void 0 !== t.style[i])return {end: e[i]};
            return !1
        }

        t.fn.emulateTransitionEnd = function (e) {
            var i = !1, n = this;
            t(this).one("bsTransitionEnd", function () {
                i = !0
            });
            var r = function () {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(r, e), this
        }, t(function () {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.affix"), s = "object" == typeof e && e;
                r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
            })
        }

        var i = function (e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.2.0", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset)return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = t(document).height(), n = this.$target.scrollTop(), r = this.$element.offset(), s = this.options.offset, o = s.top, a = s.bottom;
                "object" != typeof s && (a = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
                var l = null != this.unpin && n + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= e - a ? "bottom" : null != o && o >= n ? "top" : !1;
                if (this.affixed !== l) {
                    null != this.unpin && this.$element.css("top", "");
                    var c = "affix" + (l ? "-" + l : ""), u = t.Event(c + ".bs.affix");
                    this.$element.trigger(u), u.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(c).trigger(t.Event(c.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({top: e - this.$element.height() - a}))
                }
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
            return t.fn.affix = n, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var i = t(this), n = i.data();
                n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), r = i.data("bs.alert");
                r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
            })
        }

        var i = '[data-dismiss="alert"]', n = function (e) {
            t(e).on("click", i, this.close)
        };
        n.VERSION = "3.2.0", n.prototype.close = function (e) {
            function i() {
                s.detach().trigger("closed.bs.alert").remove()
            }

            var n = t(this), r = n.attr("data-target");
            r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t(r);
            e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i())
        };
        var r = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = r, this
        }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), /* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.button"), s = "object" == typeof e && e;
                r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
            })
        }

        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
            var i = "disabled", n = this.$element, r = n.is("input") ? "val" : "html", s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[r]()), n[r](null == s[e] ? this.options[e] : s[e]), setTimeout(t.proxy(function () {
                "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
            }
            t && this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.carousel"), s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e), o = "string" == typeof e ? e : s.slide;
                r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
            })
        }

        var i = function (e, i) {
            this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, i.prototype.keydown = function (t) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }, i.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.to = function (e) {
            var i = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                i.to(e)
            }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", t(this.$items[e]))
        }, i.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function (e, i) {
            var n = this.$element.find(".item.active"), r = i || n[e](), s = this.interval, o = "next" == e ? "left" : "right", a = "next" == e ? "first" : "last", l = this;
            if (!r.length) {
                if (!this.options.wrap)return;
                r = this.$element.find(".item")[a]()
            }
            if (r.hasClass("active"))return this.sliding = !1;
            var c = r[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: o});
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                    d && d.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {relatedTarget: c, direction: o});
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, n.addClass(o), r.addClass(o), n.one("bsTransitionEnd", function () {
                    r.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(1e3 * n.css("transition-duration").slice(0, -1))) : (n.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = n, this
        }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (i) {
            var n, r = t(this), s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var o = t.extend({}, s.data(), r.data()), a = r.attr("data-slide-to");
                a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
            }
        }), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.collapse"), s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !r && s.toggle && "show" == e && (e = !e), r || n.data("bs.collapse", r = new i(this, s)), "string" == typeof e && r[e]()
            })
        }

        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, i.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var i = t.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var r = n.data("bs.collapse");
                        if (r && r.transitioning)return;
                        e.call(n, "hide"), r || n.data("bs.collapse", null)
                    }
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0), this.transitioning = 1;
                    var o = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return o.call(this);
                    var a = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350)[s](this.$element[0][a])
                }
            }
        }, i.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var n = function () {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
                }
            }
        }, i.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = t.fn.collapse;
        t.fn.collapse = e, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = n, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
            var n, r = t(this), s = r.attr("data-target") || i.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = t(s), a = o.data("bs.collapse"), l = a ? "toggle" : r.data(), c = r.attr("data-parent"), u = c && t(c);
            a && a.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + c + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(o, l)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            e && 3 === e.which || (t(r).remove(), t(s).each(function () {
                var n = i(t(this)), r = {relatedTarget: this};
                n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown", r))
            }))
        }

        function i(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function n(e) {
            return this.each(function () {
                var i = t(this), n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
            })
        }

        var r = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', o = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        o.VERSION = "3.2.0", o.prototype.toggle = function (n) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var s = i(r), o = s.hasClass("open");
                if (e(), !o) {
                    "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {relatedTarget: this};
                    if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented())return;
                    r.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, o.prototype.keydown = function (e) {
            if (/(38|40|27)/.test(e.keyCode)) {
                var n = t(this);
                if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var r = i(n), o = r.hasClass("open");
                    if (!o || o && 27 == e.keyCode)return 27 == e.which && r.find(s).trigger("focus"), n.trigger("click");
                    var a = " li:not(.divider):visible a", l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (l.length) {
                        var c = l.index(l.filter(":focus"));
                        38 == e.keyCode && c > 0 && c--, 40 == e.keyCode && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
    }(jQuery), /* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e, n) {
            return this.each(function () {
                var r = t(this), s = r.data("bs.modal"), o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
                s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
            })
        }

        var i = function (e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {backdrop: !0, keyboard: !0, show: !0}, i.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function (e) {
            var i = this, n = t.Event("show.bs.modal", {relatedTarget: e});
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
                var n = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                var r = t.Event("shown.bs.modal", {relatedTarget: e});
                n ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(r)
            }))
        }, i.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, i.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, i.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function (e) {
            var i = this, n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && n;
                if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function () {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s()
            } else e && e()
        }, i.prototype.checkScrollbar = function () {
            document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
        }, i.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", "")
        }, i.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
            var n = t(this), r = n.attr("href"), s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), o = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(r) && r}, s.data(), n.data());
            n.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(s, o, this)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(i, n) {
            var r = t.proxy(this.process, this);
            this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.scrollspy"), s = "object" == typeof i && i;
                r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
            })
        }

        e.VERSION = "3.2.0", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = "offset", i = 0;
            t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
            var n = this;
            this.$body.find(this.selector).map(function () {
                var n = t(this), r = n.data("target") || n.attr("href"), s = /^#./.test(r) && t(r);
                return s && s.length && s.is(":visible") && [[s[e]().top + i, r]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), r = this.offsets, s = this.targets, o = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n)return o != (t = s[s.length - 1]) && this.activate(t);
            if (o && e <= r[0])return o != (t = s[0]) && this.activate(t);
            for (t = r.length; t--;)o != s[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.tab");
                r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
            })
        }

        var i = function (e) {
            this.element = t(e)
        };
        i.VERSION = "3.2.0", i.prototype.show = function () {
            var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var r = i.find(".active:last a")[0], s = t.Event("show.bs.tab", {relatedTarget: r});
                if (e.trigger(s), !s.isDefaultPrevented()) {
                    var o = t(n);
                    this.activate(e.closest("li"), i), this.activate(o, o.parent(), function () {
                        e.trigger({type: "shown.bs.tab", relatedTarget: r})
                    })
                }
            }
        }, i.prototype.activate = function (e, i, n) {
            function r() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
            }

            var s = i.find("> .active"), o = n && t.support.transition && s.hasClass("fade");
            o ? s.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), s.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, this
        }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (i) {
            i.preventDefault(), e.call(t(this), "show")
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.tooltip"), s = "object" == typeof e && e;
                (r || "destroy" != e) && (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
            })
        }

        var i = function (t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
        };
        i.VERSION = "3.2.0", i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {selector: "body", padding: 0}
        }, i.prototype.init = function (e, i, n) {
            this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
            for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
                var o = r[s];
                if ("click" == o)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != o) {
                    var a = "hover" == o ? "mouseenter" : "focusin", l = "hover" == o ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function () {
            return i.DEFAULTS
        }, i.prototype.getOptions = function (e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, i.prototype.getDelegateOptions = function () {
            var e = {}, i = this.getDefaults();
            return this._options && t.each(this._options, function (t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, i.prototype.enter = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show()
        }, i.prototype.leave = function (e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(document.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i)return;
                var n = this, r = this.tip(), s = this.getUID(this.type);
                this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, a = /\s?auto?\s?/i, l = a.test(o);
                l && (o = o.replace(a, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                var c = this.getPosition(), u = r[0].offsetWidth, d = r[0].offsetHeight;
                if (l) {
                    var h = o, p = this.$element.parent(), f = this.getPosition(p);
                    o = "bottom" == o && c.top + c.height + d - f.scroll > f.height ? "top" : "top" == o && c.top - f.scroll - d < 0 ? "bottom" : "right" == o && c.right + u > f.width ? "left" : "left" == o && c.left - u < f.left ? "right" : o, r.removeClass(h).addClass(o)
                }
                var m = this.getCalculatedOffset(o, c, u, d);
                this.applyPlacement(m, o);
                var g = function () {
                    n.$element.trigger("shown.bs." + n.type), n.hoverState = null
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
            }
        }, i.prototype.applyPlacement = function (e, i) {
            var n = this.tip(), r = n[0].offsetWidth, s = n[0].offsetHeight, o = parseInt(n.css("margin-top"), 10), a = parseInt(n.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
                using: function (t) {
                    n.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth, c = n[0].offsetHeight;
            "top" == i && c != s && (e.top = e.top + s - c);
            var u = this.getViewportAdjustedDelta(i, e, l, c);
            u.left ? e.left += u.left : e.top += u.top;
            var d = u.left ? 2 * u.left - r + l : 2 * u.top - s + c, h = u.left ? "left" : "top", p = u.left ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(d, n[0][p], h)
        }, i.prototype.replaceArrow = function (t, e, i) {
            this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
        }, i.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function () {
            function e() {
                "in" != i.hoverState && n.detach(), i.$element.trigger("hidden.bs." + i.type)
            }

            var i = this, n = this.tip(), r = t.Event("hide.bs." + this.type);
            return this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
        }, i.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function () {
            return this.getTitle()
        }, i.prototype.getPosition = function (e) {
            e = e || this.$element;
            var i = e[0], n = "BODY" == i.tagName;
            return t.extend({}, "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null, {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
                width: n ? t(window).width() : e.outerWidth(),
                height: n ? t(window).height() : e.outerHeight()
            }, n ? {top: 0, left: 0} : e.offset())
        }, i.prototype.getCalculatedOffset = function (t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {top: e.top + e.height / 2 - n / 2, left: e.left + e.width}
        }, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
            var r = {top: 0, left: 0};
            if (!this.$viewport)return r;
            var s = this.options.viewport && this.options.viewport.padding || 0, o = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - o.scroll, l = e.top + s - o.scroll + n;
                a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
            } else {
                var c = e.left - s, u = e.left + s + i;
                c < o.left ? r.left = o.left - c : u > o.width && (r.left = o.left + o.width - u)
            }
            return r
        }, i.prototype.getTitle = function () {
            var t, e = this.$element, i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        }, i.prototype.getUID = function (t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, i.prototype.tip = function () {
            return this.$tip = this.$tip || t(this.options.template)
        }, i.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.validate = function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, i.prototype.enable = function () {
            this.enabled = !0
        }, i.prototype.disable = function () {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function (e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function () {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(jQuery), /* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), r = n.data("bs.popover"), s = "object" == typeof e && e;
                (r || "destroy" != e) && (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
            })
        }

        var i = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.2.0", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
            return i.DEFAULTS
        }, i.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, i.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, i.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, i.prototype.tip = function () {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery), /*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
    function (t) {
        var e = function () {
            "use strict";
            return {
                isMsie: function () {
                    return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                }, isBlankString: function (t) {
                    return !t || /^\s*$/.test(t)
                }, escapeRegExChars: function (t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                }, isString: function (t) {
                    return "string" == typeof t
                }, isNumber: function (t) {
                    return "number" == typeof t
                }, isArray: t.isArray, isFunction: t.isFunction, isObject: t.isPlainObject, isUndefined: function (t) {
                    return "undefined" == typeof t
                }, toStr: function (t) {
                    return e.isUndefined(t) || null === t ? "" : t + ""
                }, bind: t.proxy, each: function (e, i) {
                    function n(t, e) {
                        return i(e, t)
                    }

                    t.each(e, n)
                }, map: t.map, filter: t.grep, every: function (e, i) {
                    var n = !0;
                    return e ? (t.each(e, function (t, r) {
                        return (n = i.call(null, r, t, e)) ? void 0 : !1
                    }), !!n) : n
                }, some: function (e, i) {
                    var n = !1;
                    return e ? (t.each(e, function (t, r) {
                        return (n = i.call(null, r, t, e)) ? !1 : void 0
                    }), !!n) : n
                }, mixin: t.extend, getUniqueId: function () {
                    var t = 0;
                    return function () {
                        return t++
                    }
                }(), templatify: function (e) {
                    function i() {
                        return String(e)
                    }

                    return t.isFunction(e) ? e : i
                }, defer: function (t) {
                    setTimeout(t, 0)
                }, debounce: function (t, e, i) {
                    var n, r;
                    return function () {
                        var s, o, a = this, l = arguments;
                        return s = function () {
                            n = null, i || (r = t.apply(a, l))
                        }, o = i && !n, clearTimeout(n), n = setTimeout(s, e), o && (r = t.apply(a, l)), r
                    }
                }, throttle: function (t, e) {
                    var i, n, r, s, o, a;
                    return o = 0, a = function () {
                        o = new Date, r = null, s = t.apply(i, n)
                    }, function () {
                        var l = new Date, c = e - (l - o);
                        return i = this, n = arguments, 0 >= c ? (clearTimeout(r), r = null, o = l, s = t.apply(i, n)) : r || (r = setTimeout(a, c)), s
                    }
                }, noop: function () {
                }
            }
        }(), i = "0.10.5", n = function () {
            "use strict";
            function t(t) {
                return t = e.toStr(t), t ? t.split(/\s+/) : []
            }

            function i(t) {
                return t = e.toStr(t), t ? t.split(/\W+/) : []
            }

            function n(t) {
                return function () {
                    var i = [].slice.call(arguments, 0);
                    return function (n) {
                        var r = [];
                        return e.each(i, function (i) {
                            r = r.concat(t(e.toStr(n[i])))
                        }), r
                    }
                }
            }

            return {nonword: i, whitespace: t, obj: {nonword: n(i), whitespace: n(t)}}
        }(), r = function () {
            "use strict";
            function i(i) {
                this.maxSize = e.isNumber(i) ? i : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
            }

            function n() {
                this.head = this.tail = null
            }

            function r(t, e) {
                this.key = t, this.val = e, this.prev = this.next = null
            }

            return e.mixin(i.prototype, {
                set: function (t, e) {
                    var i, n = this.list.tail;
                    this.size >= this.maxSize && (this.list.remove(n), delete this.hash[n.key]), (i = this.hash[t]) ? (i.val = e, this.list.moveToFront(i)) : (i = new r(t, e), this.list.add(i), this.hash[t] = i, this.size++)
                }, get: function (t) {
                    var e = this.hash[t];
                    return e ? (this.list.moveToFront(e), e.val) : void 0
                }, reset: function () {
                    this.size = 0, this.hash = {}, this.list = new n
                }
            }), e.mixin(n.prototype, {
                add: function (t) {
                    this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                }, remove: function (t) {
                    t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                }, moveToFront: function (t) {
                    this.remove(t), this.add(t)
                }
            }), i
        }(), s = function () {
            "use strict";
            function t(t) {
                this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix))
            }

            function i() {
                return (new Date).getTime()
            }

            function n(t) {
                return JSON.stringify(e.isUndefined(t) ? null : t)
            }

            function r(t) {
                return JSON.parse(t)
            }

            var s, o;
            try {
                s = window.localStorage, s.setItem("~~~", "!"), s.removeItem("~~~")
            } catch (a) {
                s = null
            }
            return o = s && window.JSON ? {
                _prefix: function (t) {
                    return this.prefix + t
                }, _ttlKey: function (t) {
                    return this._prefix(t) + this.ttlKey
                }, get: function (t) {
                    return this.isExpired(t) && this.remove(t), r(s.getItem(this._prefix(t)))
                }, set: function (t, r, o) {
                    return e.isNumber(o) ? s.setItem(this._ttlKey(t), n(i() + o)) : s.removeItem(this._ttlKey(t)), s.setItem(this._prefix(t), n(r))
                }, remove: function (t) {
                    return s.removeItem(this._ttlKey(t)), s.removeItem(this._prefix(t)), this
                }, clear: function () {
                    var t, e, i = [], n = s.length;
                    for (t = 0; n > t; t++)(e = s.key(t)).match(this.keyMatcher) && i.push(e.replace(this.keyMatcher, ""));
                    for (t = i.length; t--;)this.remove(i[t]);
                    return this
                }, isExpired: function (t) {
                    var n = r(s.getItem(this._ttlKey(t)));
                    return e.isNumber(n) && i() > n ? !0 : !1
                }
            } : {get: e.noop, set: e.noop, remove: e.noop, clear: e.noop, isExpired: e.noop}, e.mixin(t.prototype, o), t
        }(), o = function () {
            "use strict";
            function i(e) {
                e = e || {}, this.cancelled = !1, this.lastUrl = null, this._send = e.transport ? n(e.transport) : t.ajax, this._get = e.rateLimiter ? e.rateLimiter(this._get) : this._get, this._cache = e.cache === !1 ? new r(0) : l
            }

            function n(i) {
                return function (n, r) {
                    function s(t) {
                        e.defer(function () {
                            a.resolve(t)
                        })
                    }

                    function o(t) {
                        e.defer(function () {
                            a.reject(t)
                        })
                    }

                    var a = t.Deferred();
                    return i(n, r, s, o), a
                }
            }

            var s = 0, o = {}, a = 6, l = new r(10);
            return i.setMaxPendingRequests = function (t) {
                a = t
            }, i.resetCache = function () {
                l.reset()
            }, e.mixin(i.prototype, {
                _get: function (t, e, i) {
                    function n(e) {
                        i && i(null, e), u._cache.set(t, e)
                    }

                    function r() {
                        i && i(!0)
                    }

                    function l() {
                        s--, delete o[t], u.onDeckRequestArgs && (u._get.apply(u, u.onDeckRequestArgs), u.onDeckRequestArgs = null)
                    }

                    var c, u = this;
                    this.cancelled || t !== this.lastUrl || ((c = o[t]) ? c.done(n).fail(r) : a > s ? (s++, o[t] = this._send(t, e).done(n).fail(r).always(l)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                }, get: function (t, i, n) {
                    var r;
                    return e.isFunction(i) && (n = i, i = {}), this.cancelled = !1, this.lastUrl = t, (r = this._cache.get(t)) ? e.defer(function () {
                        n && n(null, r)
                    }) : this._get(t, i, n), !!r
                }, cancel: function () {
                    this.cancelled = !0
                }
            }), i
        }(), a = function () {
            "use strict";
            function i(e) {
                e = e || {}, e.datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
            }

            function n(t) {
                return t = e.filter(t, function (t) {
                    return !!t
                }), t = e.map(t, function (t) {
                    return t.toLowerCase()
                })
            }

            function r() {
                return {ids: [], children: {}}
            }

            function s(t) {
                for (var e = {}, i = [], n = 0, r = t.length; r > n; n++)e[t[n]] || (e[t[n]] = !0, i.push(t[n]));
                return i
            }

            function o(t, e) {
                function i(t, e) {
                    return t - e
                }

                var n = 0, r = 0, s = [];
                t = t.sort(i), e = e.sort(i);
                for (var o = t.length, a = e.length; o > n && a > r;)t[n] < e[r] ? n++ : t[n] > e[r] ? r++ : (s.push(t[n]), n++, r++);
                return s
            }

            return e.mixin(i.prototype, {
                bootstrap: function (t) {
                    this.datums = t.datums, this.trie = t.trie
                }, add: function (t) {
                    var i = this;
                    t = e.isArray(t) ? t : [t], e.each(t, function (t) {
                        var s, o;
                        s = i.datums.push(t) - 1, o = n(i.datumTokenizer(t)), e.each(o, function (t) {
                            var e, n, o;
                            for (e = i.trie, n = t.split(""); o = n.shift();)e = e.children[o] || (e.children[o] = r()), e.ids.push(s)
                        })
                    })
                }, get: function (t) {
                    var i, r, a = this;
                    return i = n(this.queryTokenizer(t)), e.each(i, function (t) {
                        var e, i, n, s;
                        if (r && 0 === r.length)return !1;
                        for (e = a.trie, i = t.split(""); e && (n = i.shift());)e = e.children[n];
                        return e && 0 === i.length ? (s = e.ids.slice(0), void(r = r ? o(r, s) : s)) : (r = [], !1)
                    }), r ? e.map(s(r), function (t) {
                        return a.datums[t]
                    }) : []
                }, reset: function () {
                    this.datums = [], this.trie = r()
                }, serialize: function () {
                    return {datums: this.datums, trie: this.trie}
                }
            }), i
        }(), l = function () {
            "use strict";
            function n(t) {
                return t.local || null
            }

            function r(n) {
                var r, s;
                return s = {
                    url: null,
                    thumbprint: "",
                    ttl: 864e5,
                    filter: null,
                    ajax: {}
                }, (r = n.prefetch || null) && (r = e.isString(r) ? {url: r} : r, r = e.mixin(s, r), r.thumbprint = i + r.thumbprint, r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", !r.url && t.error("prefetch requires url to be set")), r
            }

            function s(i) {
                function n(t) {
                    return function (i) {
                        return e.debounce(i, t)
                    }
                }

                function r(t) {
                    return function (i) {
                        return e.throttle(i, t)
                    }
                }

                var s, o;
                return o = {
                    url: null,
                    cache: !0,
                    wildcard: "%QUERY",
                    replace: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    send: null,
                    filter: null,
                    ajax: {}
                }, (s = i.remote || null) && (s = e.isString(s) ? {url: s} : s, s = e.mixin(o, s), s.rateLimiter = /^throttle$/i.test(s.rateLimitBy) ? r(s.rateLimitWait) : n(s.rateLimitWait), s.ajax.type = s.ajax.type || "GET", s.ajax.dataType = s.ajax.dataType || "json", delete s.rateLimitBy, delete s.rateLimitWait, !s.url && t.error("remote requires url to be set")), s
            }

            return {local: n, prefetch: r, remote: s}
        }();
        !function (i) {
            "use strict";
            function r(e) {
                e && (e.local || e.prefetch || e.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = e.limit || 5, this.sorter = c(e.sorter), this.dupDetector = e.dupDetector || u, this.local = l.local(e), this.prefetch = l.prefetch(e), this.remote = l.remote(e), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
                    datumTokenizer: e.datumTokenizer,
                    queryTokenizer: e.queryTokenizer
                }), this.storage = this.cacheKey ? new s(this.cacheKey) : null
            }

            function c(t) {
                function i(e) {
                    return e.sort(t)
                }

                function n(t) {
                    return t
                }

                return e.isFunction(t) ? i : n
            }

            function u() {
                return !1
            }

            var d, h;
            return d = i.Bloodhound, h = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, i.Bloodhound = r, r.noConflict = function () {
                return i.Bloodhound = d, r
            }, r.tokenizers = n, e.mixin(r.prototype, {
                _loadPrefetch: function (e) {
                    function i(t) {
                        s.clear(), s.add(e.filter ? e.filter(t) : t), s._saveToStorage(s.index.serialize(), e.thumbprint, e.ttl)
                    }

                    var n, r, s = this;
                    return (n = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(n), r = t.Deferred().resolve()) : r = t.ajax(e.url, e.ajax).done(i), r
                }, _getFromRemote: function (t, e) {
                    function i(t, i) {
                        e(t ? [] : s.remote.filter ? s.remote.filter(i) : i)
                    }

                    var n, r, s = this;
                    if (this.transport)return t = t || "", r = encodeURIComponent(t), n = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, r), this.transport.get(n, this.remote.ajax, i)
                }, _cancelLastRemoteRequest: function () {
                    this.transport && this.transport.cancel()
                }, _saveToStorage: function (t, e, i) {
                    this.storage && (this.storage.set(h.data, t, i), this.storage.set(h.protocol, location.protocol, i), this.storage.set(h.thumbprint, e, i))
                }, _readFromStorage: function (t) {
                    var e, i = {};
                    return this.storage && (i.data = this.storage.get(h.data), i.protocol = this.storage.get(h.protocol), i.thumbprint = this.storage.get(h.thumbprint)), e = i.thumbprint !== t || i.protocol !== location.protocol, i.data && !e ? i.data : null
                }, _initialize: function () {
                    function i() {
                        r.add(e.isFunction(s) ? s() : s)
                    }

                    var n, r = this, s = this.local;
                    return n = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), s && n.done(i), this.transport = this.remote ? new o(this.remote) : null, this.initPromise = n.promise()
                }, initialize: function (t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                }, add: function (t) {
                    this.index.add(t)
                }, get: function (t, i) {
                    function n(t) {
                        var n = s.slice(0);
                        e.each(t, function (t) {
                            var i;
                            return i = e.some(n, function (e) {
                                return r.dupDetector(t, e)
                            }), !i && n.push(t), n.length < r.limit
                        }), i && i(r.sorter(n))
                    }

                    var r = this, s = [], o = !1;
                    s = this.index.get(t), s = this.sorter(s).slice(0, this.limit), s.length < this.limit ? o = this._getFromRemote(t, n) : this._cancelLastRemoteRequest(), o || (s.length > 0 || !this.transport) && i && i(s)
                }, clear: function () {
                    this.index.reset()
                }, clearPrefetchCache: function () {
                    this.storage && this.storage.clear()
                }, clearRemoteCache: function () {
                    this.transport && o.resetCache()
                }, ttAdapter: function () {
                    return e.bind(this.get, this)
                }
            }), r
        }(this);
        var c = function () {
            return {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion"></div>'
            }
        }(), u = function () {
            "use strict";
            var t = {
                wrapper: {position: "relative", display: "inline-block"},
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
                inputWithNoHint: {position: "relative", verticalAlign: "top"},
                dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
                suggestions: {display: "block"},
                suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
                suggestionChild: {whiteSpace: "normal"},
                ltr: {left: "0", right: "auto"},
                rtl: {left: "auto", right: " 0"}
            };
            return e.isMsie() && e.mixin(t.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {marginTop: "-1px"}), t
        }(), d = function () {
            "use strict";
            function i(e) {
                e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
            }

            var n = "typeahead:";
            return e.mixin(i.prototype, {
                trigger: function (t) {
                    var e = [].slice.call(arguments, 1);
                    this.$el.trigger(n + t, e)
                }
            }), i
        }(), h = function () {
            "use strict";
            function t(t, e, i, n) {
                var r;
                if (!i)return this;
                for (e = e.split(l), i = n ? a(i, n) : i, this._callbacks = this._callbacks || {}; r = e.shift();)this._callbacks[r] = this._callbacks[r] || {
                        sync: [],
                        async: []
                    }, this._callbacks[r][t].push(i);
                return this
            }

            function e(e, i, n) {
                return t.call(this, "async", e, i, n)
            }

            function i(e, i, n) {
                return t.call(this, "sync", e, i, n)
            }

            function n(t) {
                var e;
                if (!this._callbacks)return this;
                for (t = t.split(l); e = t.shift();)delete this._callbacks[e];
                return this
            }

            function r(t) {
                var e, i, n, r, o;
                if (!this._callbacks)return this;
                for (t = t.split(l), n = [].slice.call(arguments, 1); (e = t.shift()) && (i = this._callbacks[e]);)r = s(i.sync, this, [e].concat(n)), o = s(i.async, this, [e].concat(n)), r() && c(o);
                return this
            }

            function s(t, e, i) {
                function n() {
                    for (var n, r = 0, s = t.length; !n && s > r; r += 1)n = t[r].apply(e, i) === !1;
                    return !n
                }

                return n
            }

            function o() {
                var t;
                return t = window.setImmediate ? function (t) {
                    setImmediate(function () {
                        t()
                    })
                } : function (t) {
                    setTimeout(function () {
                        t()
                    }, 0)
                }
            }

            function a(t, e) {
                return t.bind ? t.bind(e) : function () {
                    t.apply(e, [].slice.call(arguments, 0))
                }
            }

            var l = /\s+/, c = o();
            return {onSync: i, onAsync: e, off: n, trigger: r}
        }(), p = function (t) {
            "use strict";
            function i(t, i, n) {
                for (var r, s = [], o = 0, a = t.length; a > o; o++)s.push(e.escapeRegExChars(t[o]));
                return r = n ? "\\b(" + s.join("|") + ")\\b" : "(" + s.join("|") + ")", i ? new RegExp(r) : new RegExp(r, "i")
            }

            var n = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
            return function (r) {
                function s(e) {
                    var i, n, s;
                    return (i = a.exec(e.data)) && (s = t.createElement(r.tagName), r.className && (s.className = r.className), n = e.splitText(i.index), n.splitText(i[0].length), s.appendChild(n.cloneNode(!0)), e.parentNode.replaceChild(s, n)), !!i
                }

                function o(t, e) {
                    for (var i, n = 3, r = 0; r < t.childNodes.length; r++)i = t.childNodes[r], i.nodeType === n ? r += e(i) ? 1 : 0 : o(i, e)
                }

                var a;
                r = e.mixin({}, n, r), r.node && r.pattern && (r.pattern = e.isArray(r.pattern) ? r.pattern : [r.pattern], a = i(r.pattern, r.caseSensitive, r.wordsOnly), o(r.node, s))
            }
        }(window.document), f = function () {
            "use strict";
            function i(i) {
                var r, s, a, l, c = this;
                i = i || {}, i.input || t.error("input is missing"), r = e.bind(this._onBlur, this), s = e.bind(this._onFocus, this), a = e.bind(this._onKeydown, this), l = e.bind(this._onInput, this), this.$hint = t(i.hint), this.$input = t(i.input).on("blur.tt", r).on("focus.tt", s).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
                    o[t.which || t.keyCode] || e.defer(e.bind(c._onInput, c, t))
                }) : this.$input.on("input.tt", l), this.query = this.$input.val(), this.$overflowHelper = n(this.$input)
            }

            function n(e) {
                return t('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: e.css("font-family"),
                    fontSize: e.css("font-size"),
                    fontStyle: e.css("font-style"),
                    fontVariant: e.css("font-variant"),
                    fontWeight: e.css("font-weight"),
                    wordSpacing: e.css("word-spacing"),
                    letterSpacing: e.css("letter-spacing"),
                    textIndent: e.css("text-indent"),
                    textRendering: e.css("text-rendering"),
                    textTransform: e.css("text-transform")
                }).insertAfter(e)
            }

            function r(t, e) {
                return i.normalizeQuery(t) === i.normalizeQuery(e)
            }

            function s(t) {
                return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
            }

            var o;
            return o = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            }, i.normalizeQuery = function (t) {
                return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
            }, e.mixin(i.prototype, h, {
                _onBlur: function () {
                    this.resetInputValue(), this.trigger("blurred")
                }, _onFocus: function () {
                    this.trigger("focused")
                }, _onKeydown: function (t) {
                    var e = o[t.which || t.keyCode];
                    this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                }, _onInput: function () {
                    this._checkInputValue()
                }, _managePreventDefault: function (t, e) {
                    var i, n, r;
                    switch (t) {
                        case"tab":
                            n = this.getHint(), r = this.getInputValue(), i = n && n !== r && !s(e);
                            break;
                        case"up":
                        case"down":
                            i = !s(e);
                            break;
                        default:
                            i = !1
                    }
                    i && e.preventDefault()
                }, _shouldTrigger: function (t, e) {
                    var i;
                    switch (t) {
                        case"tab":
                            i = !s(e);
                            break;
                        default:
                            i = !0
                    }
                    return i
                }, _checkInputValue: function () {
                    var t, e, i;
                    t = this.getInputValue(), e = r(t, this.query), i = e ? this.query.length !== t.length : !1, this.query = t, e ? i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                }, focus: function () {
                    this.$input.focus()
                }, blur: function () {
                    this.$input.blur()
                }, getQuery: function () {
                    return this.query
                }, setQuery: function (t) {
                    this.query = t
                }, getInputValue: function () {
                    return this.$input.val()
                }, setInputValue: function (t, e) {
                    this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                }, resetInputValue: function () {
                    this.setInputValue(this.query, !0)
                }, getHint: function () {
                    return this.$hint.val()
                }, setHint: function (t) {
                    this.$hint.val(t)
                }, clearHint: function () {
                    this.setHint("")
                }, clearHintIfInvalid: function () {
                    var t, e, i, n;
                    t = this.getInputValue(), e = this.getHint(), i = t !== e && 0 === e.indexOf(t), n = "" !== t && i && !this.hasOverflow(), !n && this.clearHint()
                }, getLanguageDirection: function () {
                    return (this.$input.css("direction") || "ltr").toLowerCase()
                }, hasOverflow: function () {
                    var t = this.$input.width() - 2;
                    return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                }, isCursorAtEnd: function () {
                    var t, i, n;
                    return t = this.$input.val().length, i = this.$input[0].selectionStart, e.isNumber(i) ? i === t : document.selection ? (n = document.selection.createRange(), n.moveStart("character", -t), t === n.text.length) : !0
                }, destroy: function () {
                    this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                }
            }), i
        }(), m = function () {
            "use strict";
            function i(i) {
                i = i || {}, i.templates = i.templates || {}, i.source || t.error("missing source"), i.name && !s(i.name) && t.error("invalid dataset name: " + i.name), this.query = null, this.highlight = !!i.highlight, this.name = i.name || e.getUniqueId(), this.source = i.source, this.displayFn = n(i.display || i.displayKey), this.templates = r(i.templates, this.displayFn), this.$el = t(c.dataset.replace("%CLASS%", this.name))
            }

            function n(t) {
                function i(e) {
                    return e[t]
                }

                return t = t || "value", e.isFunction(t) ? t : i
            }

            function r(t, i) {
                function n(t) {
                    return "<p>" + i(t) + "</p>"
                }

                return {
                    empty: t.empty && e.templatify(t.empty),
                    header: t.header && e.templatify(t.header),
                    footer: t.footer && e.templatify(t.footer),
                    suggestion: t.suggestion || n
                }
            }

            function s(t) {
                return /^[_a-zA-Z0-9-]+$/.test(t)
            }

            var o = "ttDataset", a = "ttValue", l = "ttDatum";
            return i.extractDatasetName = function (e) {
                return t(e).data(o)
            }, i.extractValue = function (e) {
                return t(e).data(a)
            }, i.extractDatum = function (e) {
                return t(e).data(l)
            }, e.mixin(i.prototype, h, {
                _render: function (i, n) {
                    function r() {
                        return m.templates.empty({query: i, isEmpty: !0})
                    }

                    function s() {
                        function r(e) {
                            var i;
                            return i = t(c.suggestion).append(m.templates.suggestion(e)).data(o, m.name).data(a, m.displayFn(e)).data(l, e), i.children().each(function () {
                                t(this).css(u.suggestionChild)
                            }), i
                        }

                        var s, d;
                        return s = t(c.suggestions).css(u.suggestions), d = e.map(n, r), s.append.apply(s, d), m.highlight && p({
                            className: "tt-highlight",
                            node: s[0],
                            pattern: i
                        }), s
                    }

                    function d() {
                        return m.templates.header({query: i, isEmpty: !f})
                    }

                    function h() {
                        return m.templates.footer({query: i, isEmpty: !f})
                    }

                    if (this.$el) {
                        var f, m = this;
                        this.$el.empty(), f = n && n.length, !f && this.templates.empty ? this.$el.html(r()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? h() : null) : f && this.$el.html(s()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? h() : null), this.trigger("rendered")
                    }
                }, getRoot: function () {
                    return this.$el
                }, update: function (t) {
                    function e(e) {
                        i.canceled || t !== i.query || i._render(t, e)
                    }

                    var i = this;
                    this.query = t, this.canceled = !1, this.source(t, e)
                }, cancel: function () {
                    this.canceled = !0
                }, clear: function () {
                    this.cancel(), this.$el.empty(), this.trigger("rendered")
                }, isEmpty: function () {
                    return this.$el.is(":empty")
                }, destroy: function () {
                    this.$el = null
                }
            }), i
        }(), g = function () {
            "use strict";
            function i(i) {
                var r, s, o, a = this;
                i = i || {}, i.menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(i.datasets, n), r = e.bind(this._onSuggestionClick, this), s = e.bind(this._onSuggestionMouseEnter, this), o = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(i.menu).on("click.tt", ".tt-suggestion", r).on("mouseenter.tt", ".tt-suggestion", s).on("mouseleave.tt", ".tt-suggestion", o), e.each(this.datasets, function (t) {
                    a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                })
            }

            function n(t) {
                return new m(t)
            }

            return e.mixin(i.prototype, h, {
                _onSuggestionClick: function (e) {
                    this.trigger("suggestionClicked", t(e.currentTarget))
                }, _onSuggestionMouseEnter: function (e) {
                    this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
                }, _onSuggestionMouseLeave: function () {
                    this._removeCursor()
                }, _onRendered: function () {
                    function t(t) {
                        return t.isEmpty()
                    }

                    this.isEmpty = e.every(this.datasets, t), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                }, _hide: function () {
                    this.$menu.hide()
                }, _show: function () {
                    this.$menu.css("display", "block")
                }, _getSuggestions: function () {
                    return this.$menu.find(".tt-suggestion")
                }, _getCursor: function () {
                    return this.$menu.find(".tt-cursor").first()
                }, _setCursor: function (t, e) {
                    t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                }, _removeCursor: function () {
                    this._getCursor().removeClass("tt-cursor")
                }, _moveCursor: function (t) {
                    var e, i, n, r;
                    if (this.isOpen) {
                        if (i = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), n = e.index(i) + t, n = (n + 1) % (e.length + 1) - 1, -1 === n)return void this.trigger("cursorRemoved");
                        -1 > n && (n = e.length - 1), this._setCursor(r = e.eq(n)), this._ensureVisible(r)
                    }
                }, _ensureVisible: function (t) {
                    var e, i, n, r;
                    e = t.position().top, i = e + t.outerHeight(!0), n = this.$menu.scrollTop(), r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > e ? this.$menu.scrollTop(n + e) : i > r && this.$menu.scrollTop(n + (i - r))
                }, close: function () {
                    this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                }, open: function () {
                    this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                }, setLanguageDirection: function (t) {
                    this.$menu.css("ltr" === t ? u.ltr : u.rtl)
                }, moveCursorUp: function () {
                    this._moveCursor(-1)
                }, moveCursorDown: function () {
                    this._moveCursor(1)
                }, getDatumForSuggestion: function (t) {
                    var e = null;
                    return t.length && (e = {
                        raw: m.extractDatum(t),
                        value: m.extractValue(t),
                        datasetName: m.extractDatasetName(t)
                    }), e
                }, getDatumForCursor: function () {
                    return this.getDatumForSuggestion(this._getCursor().first())
                }, getDatumForTopSuggestion: function () {
                    return this.getDatumForSuggestion(this._getSuggestions().first())
                }, update: function (t) {
                    function i(e) {
                        e.update(t)
                    }

                    e.each(this.datasets, i)
                }, empty: function () {
                    function t(t) {
                        t.clear()
                    }

                    e.each(this.datasets, t), this.isEmpty = !0
                }, isVisible: function () {
                    return this.isOpen && !this.isEmpty
                }, destroy: function () {
                    function t(t) {
                        t.destroy()
                    }

                    this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, t)
                }
            }), i
        }(), v = function () {
            "use strict";
            function i(i) {
                var r, s, o;
                i = i || {}, i.input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!i.autoselect, this.minLength = e.isNumber(i.minLength) ? i.minLength : 1, this.$node = n(i.input, i.withHint), r = this.$node.find(".tt-dropdown-menu"), s = this.$node.find(".tt-input"), o = this.$node.find(".tt-hint"), s.on("blur.tt", function (t) {
                    var i, n, o;
                    i = document.activeElement, n = r.is(i), o = r.has(i).length > 0, e.isMsie() && (n || o) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function () {
                        s.focus()
                    }))
                }), r.on("mousedown.tt", function (t) {
                    t.preventDefault()
                }), this.eventBus = i.eventBus || new d({el: s}), this.dropdown = new g({
                    menu: r,
                    datasets: i.datasets
                }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new f({
                    input: s,
                    hint: o
                }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
            }

            function n(e, i) {
                var n, s, a, l;
                n = t(e), s = t(c.wrapper).css(u.wrapper), a = t(c.dropdown).css(u.dropdown), l = n.clone().css(u.hint).css(r(n)), l.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                    autocomplete: "off",
                    spellcheck: "false",
                    tabindex: -1
                }), n.data(o, {
                    dir: n.attr("dir"),
                    autocomplete: n.attr("autocomplete"),
                    spellcheck: n.attr("spellcheck"),
                    style: n.attr("style")
                }), n.addClass("tt-input").attr({
                    autocomplete: "off",
                    spellcheck: !1
                }).css(i ? u.input : u.inputWithNoHint);
                try {
                    !n.attr("dir") && n.attr("dir", "auto")
                } catch (d) {
                }
                return n.wrap(s).parent().prepend(i ? l : null).append(a)
            }

            function r(t) {
                return {
                    backgroundAttachment: t.css("background-attachment"),
                    backgroundClip: t.css("background-clip"),
                    backgroundColor: t.css("background-color"),
                    backgroundImage: t.css("background-image"),
                    backgroundOrigin: t.css("background-origin"),
                    backgroundPosition: t.css("background-position"),
                    backgroundRepeat: t.css("background-repeat"),
                    backgroundSize: t.css("background-size")
                }
            }

            function s(t) {
                var i = t.find(".tt-input");
                e.each(i.data(o), function (t, n) {
                    e.isUndefined(t) ? i.removeAttr(n) : i.attr(n, t)
                }), i.detach().removeData(o).removeClass("tt-input").insertAfter(t), t.remove()
            }

            var o = "ttAttrs";
            return e.mixin(i.prototype, {
                _onSuggestionClicked: function (t, e) {
                    var i;
                    (i = this.dropdown.getDatumForSuggestion(e)) && this._select(i)
                }, _onCursorMoved: function () {
                    var t = this.dropdown.getDatumForCursor();
                    this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                }, _onCursorRemoved: function () {
                    this.input.resetInputValue(), this._updateHint()
                }, _onDatasetRendered: function () {
                    this._updateHint()
                }, _onOpened: function () {
                    this._updateHint(), this.eventBus.trigger("opened")
                }, _onClosed: function () {
                    this.input.clearHint(), this.eventBus.trigger("closed")
                }, _onFocused: function () {
                    this.isActivated = !0, this.dropdown.open()
                }, _onBlurred: function () {
                    this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
                }, _onEnterKeyed: function (t, e) {
                    var i, n;
                    i = this.dropdown.getDatumForCursor(), n = this.dropdown.getDatumForTopSuggestion(), i ? (this._select(i), e.preventDefault()) : this.autoselect && n && (this._select(n), e.preventDefault())
                }, _onTabKeyed: function (t, e) {
                    var i;
                    (i = this.dropdown.getDatumForCursor()) ? (this._select(i), e.preventDefault()) : this._autocomplete(!0)
                }, _onEscKeyed: function () {
                    this.dropdown.close(), this.input.resetInputValue()
                }, _onUpKeyed: function () {
                    var t = this.input.getQuery();
                    this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                }, _onDownKeyed: function () {
                    var t = this.input.getQuery();
                    this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                }, _onLeftKeyed: function () {
                    "rtl" === this.dir && this._autocomplete()
                }, _onRightKeyed: function () {
                    "ltr" === this.dir && this._autocomplete()
                }, _onQueryChanged: function (t, e) {
                    this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                }, _onWhitespaceChanged: function () {
                    this._updateHint(), this.dropdown.open()
                }, _setLanguageDirection: function () {
                    var t;
                    this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                }, _updateHint: function () {
                    var t, i, n, r, s, o;
                    t = this.dropdown.getDatumForTopSuggestion(), t && this.dropdown.isVisible() && !this.input.hasOverflow() ? (i = this.input.getInputValue(), n = f.normalizeQuery(i), r = e.escapeRegExChars(n), s = new RegExp("^(?:" + r + ")(.+$)", "i"), o = s.exec(t.value), o ? this.input.setHint(i + o[1]) : this.input.clearHint()) : this.input.clearHint()
                }, _autocomplete: function (t) {
                    var e, i, n, r;
                    e = this.input.getHint(), i = this.input.getQuery(), n = t || this.input.isCursorAtEnd(), e && i !== e && n && (r = this.dropdown.getDatumForTopSuggestion(), r && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
                }, _select: function (t) {
                    this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
                }, open: function () {
                    this.dropdown.open()
                }, close: function () {
                    this.dropdown.close()
                }, setVal: function (t) {
                    t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                }, getVal: function () {
                    return this.input.getQuery()
                }, destroy: function () {
                    this.input.destroy(), this.dropdown.destroy(), s(this.$node), this.$node = null
                }
            }), i
        }();
        !function () {
            "use strict";
            var i, n, r;
            i = t.fn.typeahead, n = "ttTypeahead", r = {
                initialize: function (i, r) {
                    function s() {
                        var s, o, a = t(this);
                        e.each(r, function (t) {
                            t.highlight = !!i.highlight
                        }), o = new v({
                            input: a,
                            eventBus: s = new d({el: a}),
                            withHint: e.isUndefined(i.hint) ? !0 : !!i.hint,
                            minLength: i.minLength,
                            autoselect: i.autoselect,
                            datasets: r
                        }), a.data(n, o)
                    }

                    return r = e.isArray(r) ? r : [].slice.call(arguments, 1), i = i || {}, this.each(s)
                }, open: function () {
                    function e() {
                        var e, i = t(this);
                        (e = i.data(n)) && e.open()
                    }

                    return this.each(e)
                }, close: function () {
                    function e() {
                        var e, i = t(this);
                        (e = i.data(n)) && e.close()
                    }

                    return this.each(e)
                }, val: function (e) {
                    function i() {
                        var i, r = t(this);
                        (i = r.data(n)) && i.setVal(e)
                    }

                    function r(t) {
                        var e, i;
                        return (e = t.data(n)) && (i = e.getVal()), i
                    }

                    return arguments.length ? this.each(i) : r(this.first())
                }, destroy: function () {
                    function e() {
                        var e, i = t(this);
                        (e = i.data(n)) && (e.destroy(), i.removeData(n))
                    }

                    return this.each(e)
                }
            }, t.fn.typeahead = function (e) {
                var i;
                return r[e] && "initialize" !== e ? (i = this.filter(function () {
                    return !!t(this).data(n)
                }), r[e].apply(i, [].slice.call(arguments, 1))) : r.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function () {
                return t.fn.typeahead = i, this
            }
        }()
    }(window.jQuery), function () {
    $(document).on("rails_admin.dom_ready", function (t, e) {
        var i, n, r, s, o, a, l, c;
        return e = e ? e : $("form"), e.length && (e.find("[data-color]").each(function () {
            var t;
            return t = this, $(this).ColorPicker({
                color: $(t).val(), onShow: function (t) {
                    return $(t).fadeIn(500), !1
                }, onHide: function (t) {
                    return $(t).fadeOut(500), !1
                }, onChange: function (e, i) {
                    return $(t).val(i), $(t).css("backgroundColor", "#" + i)
                }
            })
        }), e.find("[data-datetimepicker]").each(function () {
            return $(this).datetimepicker($(this).data("options"))
        }), e.find("[data-enumeration]").each(function () {
            return $(this).is("[multiple]") ? $(this).filteringMultiselect($(this).data("options")) : $(this).filteringSelect($(this).data("options"))
        }), e.find("[data-fileupload]").each(function () {
            var t;
            return t = this, $(this).on("click", ".delete input[type='checkbox']", function () {
                return $(t).children(".toggle").toggle("slow")
            })
        }), e.find("[data-fileupload]").change(function () {
            var t, e, i, n;
            return i = this, e = $("#" + i.id).parent().children(".preview"), e.length || (e = $("#" + i.id).parent().prepend($("<img />").addClass("preview")).find("img.preview"), e.parent().find("img:not(.preview)").hide()), t = $("#" + i.id).val().split(".").pop().toLowerCase(), i.files && i.files[0] && -1 !== $.inArray(t, ["gif", "png", "jpg", "jpeg", "bmp"]) ? (n = new FileReader, n.onload = function (t) {
                return e.attr("src", t.target.result)
            }, n.readAsDataURL(i.files[0]), e.show()) : e.hide()
        }), e.find("[data-filteringmultiselect]").each(function () {
            return $(this).filteringMultiselect($(this).data("options")), $(this).parents("#modal").length ? $(this).parents(".control-group").find(".btn").remove() : $(this).parents(".control-group").first().remoteForm()
        }), e.find("[data-filteringselect]").each(function () {
            return $(this).filteringSelect($(this).data("options")), $(this).parents("#modal").length ? $(this).parents(".control-group").find(".btn").remove() : $(this).parents(".control-group").first().remoteForm()
        }), e.find("[data-nestedmany]").each(function () {
            var t, e, i, n;
            return t = $(this).parents(".control-group").first(), e = t.find("> .controls > .nav"), i = t.find("> .tab-content"), n = t.find("> .controls > .btn-group > .toggler"), i.children(".fields:not(.tab-pane)").addClass("tab-pane").each(function () {
                return $(this).attr("id", "unique-id-" + (new Date).getTime() + Math.floor(1e5 * Math.random())), e.append('<li><a data-toggle="tab" href="#' + this.id + '">' + $(this).children(".object-infos").data("object-label") + "</a></li>")
            }), 0 === e.find("> li.active").length && e.find("> li > a[data-toggle='tab']:first").tab("show"), 0 === e.children().length ? (e.hide(), i.hide(), n.addClass("disabled").removeClass("active").children("i").addClass("icon-chevron-right")) : n.hasClass("active") ? (e.show(), i.show(), n.children("i").addClass("icon-chevron-down")) : (e.hide(), i.hide(), n.children("i").addClass("icon-chevron-right"))
        }), e.find("[data-nestedone]").each(function () {
            var t, e, i, n, r;
            return t = $(this).parents(".control-group").first(), i = t.find("> .controls > .nav"), n = t.find("> .tab-content"), r = t.find("> .controls > .btn-group > .toggler"), n.children(".fields:not(.tab-pane)").addClass("tab-pane active").each(function () {
                return t.find("> .controls .add_nested_fields").removeClass("add_nested_fields").html($(this).children(".object-infos").data("object-label")), i.append('<li><a data-toggle="tab" href="#' + this.id + '">' + $(this).children(".object-infos").data("object-label") + "</a></li>")
            }), e = i.find("> li > a[data-toggle='tab']:first"), e.tab("show"), t.find("> .controls > [data-target]:first").html('<i class="icon-white"></i> ' + e.html()), i.hide(), 0 === i.children().length ? (i.hide(), n.hide(), r.addClass("disabled").removeClass("active").children("i").addClass("icon-chevron-right")) : r.hasClass("active") ? (r.children("i").addClass("icon-chevron-down"), n.show()) : (r.children("i").addClass("icon-chevron-right"), n.hide())
        }), e.find("[data-polymorphic]").each(function () {
            var t, e, i, n;
            return i = $(this), t = i.parents(".control-group").first(), e = t.find("select").last(), n = i.data("urls"), i.on("change", function () {
                return "" === $(this).val() ? e.html('<option value=""></option>') : $.ajax({
                    url: n[i.val()],
                    data: {compact: !0, all: !0},
                    beforeSend: function (t) {
                        return t.setRequestHeader("Accept", "application/json")
                    },
                    success: function (t) {
                        var i;
                        return i = "<option></option>", $(t).each(function (t, e) {
                            return i += '<option value="' + e.id + '">' + e.label + "</option>"
                        }), e.html(i)
                    }
                })
            })
        }), o = function () {
            return e.find("[data-richtext=ckeditor]").not(".ckeditored").each(function () {
                var t;
                try {
                    (t = window.CKEDITOR.instances[this.id]) && t.destroy(!0)
                } catch (e) {
                }
                return window.CKEDITOR.replace(this, $(this).data("options")), $(this).addClass("ckeditored")
            })
        }, i = e.find("[data-richtext=ckeditor]").not(".ckeditored"), i.length && (window.CKEDITOR ? o() : (c = i.first().data("options"), window.CKEDITOR_BASEPATH = c.base_location, $.getScript(c.jspath, function () {
            return function () {
                return o()
            }
        }(this)))), a = function () {
            return function (t) {
                return t.each(function () {
                    var t;
                    return c = $(this).data("options"), t = this, $.getScript(c.locations.mode, function () {
                        return $("head").append('<link href="' + c.locations.theme + '" rel="stylesheet" media="all" type="text/css">'), CodeMirror.fromTextArea(t, c.options), $(t).addClass("codemirrored")
                    })
                })
            }
        }(this), n = e.find("[data-richtext=codemirror]").not(".codemirrored"), n.length && (this.array = n, window.CodeMirror ? a(this.array) : (c = $(n[0]).data("options"), $("head").append('<link href="' + c.csspath + '" rel="stylesheet" media="all" type="text/css">'), $.getScript(c.jspath, function (t) {
            return function () {
                return a(t.array)
            }
        }(this)))), s = function () {
            return function (t, e) {
                return t.each(function () {
                    return $(this).addClass("bootstrap-wysihtml5ed"), $(this).closest(".controls").addClass("well"), $(this).wysihtml5(e)
                })
            }
        }(this), n = e.find("[data-richtext=bootstrap-wysihtml5]").not(".bootstrap-wysihtml5ed"), n.length && (this.array = n, c = $(n[0]).data("options"), r = $.parseJSON(c.config_options), window.wysihtml5 ? s(this.array, r) : ($("head").append('<link href="' + c.csspath + '" rel="stylesheet" media="all" type="text/css">'), $.getScript(c.jspath, function (t) {
            return function () {
                return s(t.array, r)
            }
        }(this)))), l = function () {
            return function (t) {
                return t.each(function () {
                    var t;
                    return c = $(this).data("options"), r = $.parseJSON(c.config_options), r ? r.inlineMode || (r.inlineMode = !1) : r = {inlineMode: !1}, t = r.imageUploadURL ? r.imageUploadParams = {authenticity_token: $("meta[name=csrf-token]").attr("content")} : void 0, $(this).addClass("froala-wysiwyged"), $(this).editable(r), t ? $(this).on("editable.imageError", function (t, e, i) {
                        alert("error uploading image: " + i.message), 0 === i.code || 1 === i.code || 2 === i.code || 3 === i.code || 4 === i.code || 5 === i.code || 6 === i.code || 7 === i.code
                    }).on("editable.afterRemoveImage", function (t, e, i) {
                        e.options.imageDeleteParams = {
                            src: i.attr("src"),
                            authenticity_token: $("meta[name=csrf-token]").attr("content")
                        }, e.deleteImage(i)
                    }).on("editable.imageDeleteSuccess", function () {
                    }).on("editable.imageDeleteError", function (t, e, i) {
                        return alert("error deleting image: " + i.message)
                    }) : void 0
                })
            }
        }(this), n = e.find("[data-richtext=froala-wysiwyg]").not(".froala-wysiwyged"), n.length) ? (c = $(n[0]).data("options"), $.isFunction($.fn.editable) ? l(n) : ($("head").append('<link href="' + c.csspath + '" rel="stylesheet" media="all" type="text/css">'), $.getScript(c.jspath, function () {
            return function () {
                return l(n)
            }
        }(this)))) : void 0
    })
}.call(this), function () {
    var t;
    t = jQuery, t(document).on("click", "#list input.toggle", function () {
        return t("#list [name='bulk_ids[]']").prop("checked", t(this).is(":checked"))
    }), t(document).on("click", ".pjax", function (e) {
        if (e.which > 1 || e.metaKey || e.ctrlKey); else {
            if (t.support.pjax)return e.preventDefault(), t.pjax({
                container: t(this).data("pjax-container") || "[data-pjax-container]",
                url: t(this).data("href") || t(this).attr("href"),
                timeout: 2e3
            });
            if (t(this).data("href"))return window.location = t(this).data("href")
        }
    }), t(document).on("submit", ".pjax-form", function (e) {
        return t.support.pjax ? (e.preventDefault(), t.pjax({
            container: t(this).data("pjax-container") || "[data-pjax-container]",
            url: this.action + (-1 !== this.action.indexOf("?") ? "&" : "?") + t(this).serialize(),
            timeout: 2e3
        })) : void 0
    }), t(document).on("pjax:start", function () {
        return t("#loading").show()
    }).on("pjax:end", function () {
        return t("#loading").hide()
    }), t(document).on("click", "[data-target]", function () {
        if (!t(this).hasClass("disabled")) {
            if (t(this).has("i.icon-chevron-down").length)return t(this).removeClass("active").children("i").toggleClass("icon-chevron-down icon-chevron-right"), t(t(this).data("target")).select(":visible").hide("slow");
            if (t(this).has("i.icon-chevron-right").length)return t(this).addClass("active").children("i").toggleClass("icon-chevron-down icon-chevron-right"), t(t(this).data("target")).select(":hidden").show("slow")
        }
    }), t(document).on("click", ".form-horizontal legend", function () {
        return t(this).has("i.icon-chevron-down").length ? (t(this).siblings(".control-group:visible").hide("slow"), t(this).children("i").toggleClass("icon-chevron-down icon-chevron-right")) : t(this).has("i.icon-chevron-right").length ? (t(this).siblings(".control-group:hidden").show("slow"), t(this).children("i").toggleClass("icon-chevron-down icon-chevron-right")) : void 0
    }), t(document).on("click", "form .tab-content .tab-pane a.remove_nested_one_fields", function () {
        return t(this).children('input[type="hidden"]').val(t(this).hasClass("active")).siblings("i").toggleClass("icon-check icon-trash")
    }), t(document).ready(function () {
        return t(document).trigger("rails_admin.dom_ready")
    }), t(document).on("pjax:end", function () {
        return t(document).trigger("rails_admin.dom_ready")
    }), t(document).on("rails_admin.dom_ready", function () {
        return t(".animate-width-to").each(function () {
            var e, i;
            return e = t(this).data("animate-length"), i = t(this).data("animate-width-to"), t(this).animate({width: i}, e, "easeOutQuad")
        }), t(".form-horizontal legend").has("i.icon-chevron-right").each(function () {
            return t(this).siblings(".control-group").hide()
        }), t(".table").tooltip({selector: "th[rel=tooltip]"}), t("[formnovalidate]").on("click", function () {
            return t(this).closest("form").attr("novalidate", !0)
        })
    }), t(document).on("click", "#fields_to_export label input#check_all", function () {
        var e;
        return e = t("#fields_to_export label input"), t("#fields_to_export label input#check_all").is(":checked") ? t(e).prop("checked", !0) : t(e).prop("checked", !1)
    }), t(document).on("pjax:popstate", function () {
        t(document).one("pjax:end", function (e) {
            t(e.target).find("script").each(function () {
                t.globalEval(this.text || this.textContent || this.innerHTML || "")
            })
        })
    })
}.call(this), function () {
}.call(this);