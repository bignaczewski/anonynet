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
    function n(t) {
        var e = t.length, n = oe.type(t);
        return "function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (oe.isFunction(e))return oe.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType)return oe.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (he.test(e))return oe.filter(e, t, n);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function (t) {
            return oe.inArray(t, e) >= 0 !== n
        })
    }

    function o(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = we[t] = {};
        return oe.each(t.match(be) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), oe.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Te, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n
                } catch (o) {
                }
                oe.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function c(t) {
        var e;
        for (e in t)if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
        return !0
    }

    function u(t, e, n, i) {
        if (oe.acceptData(t)) {
            var o, r, s = oe.expando, a = t.nodeType, l = a ? oe.cache : t, c = a ? t[s] : t[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e)return c || (c = a ? t[s] = K.pop() || oe.guid++ : s), l[c] || (l[c] = a ? {} : {toJSON: oe.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = oe.extend(l[c], e) : l[c].data = oe.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[oe.camelCase(e)])) : o = r, o
        }
    }

    function d(t, e, n) {
        if (oe.acceptData(t)) {
            var i, o, r = t.nodeType, s = r ? oe.cache : t, a = r ? t[oe.expando] : oe.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in i ? e = [e] : (e = oe.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;)delete i[e[o]];
                    if (n ? !c(i) : !oe.isEmptyObject(i))return
                }
                (n || (delete s[a].data, c(s[a]))) && (r ? oe.cleanData([t], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
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
        var e = Pe.split("|"), n = t.createDocumentFragment();
        if (n.createElement)for (; e.length;)n.createElement(e.pop());
        return n
    }

    function g(t, e) {
        var n, i, o = 0, r = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
        if (!r)for (r = [], n = t.childNodes || t; null != (i = n[o]); o++)!e || oe.nodeName(i, e) ? r.push(i) : oe.merge(r, g(i, e));
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], r) : r
    }

    function v(t) {
        $e.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"))
    }

    function _(t, e) {
        if (1 === e.nodeType && oe.hasData(t)) {
            var n, i, o, r = oe._data(t), s = oe._data(e, r), a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)for (i = 0, o = a[n].length; o > i; i++)oe.event.add(e, n, a[n][i])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    function k(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[oe.expando]) {
                o = oe._data(e);
                for (i in o.events)oe.removeEvent(e, i, o.handle);
                e.removeAttribute(oe.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && $e.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, n) {
        var i, o = oe(n.createElement(e)).appendTo(n.body), r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function T(t) {
        var e = fe, n = Ze[t];
        return n || (n = C(t, e), "none" !== n && n || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Je.detach()), Ze[t] = n), n
    }

    function E(t, e) {
        return {
            get: function () {
                var n = t();
                if (null != n)return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t)return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = pn.length; o--;)if (e = pn[o] + n, e in t)return e;
        return i
    }

    function D(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (r[s] = oe._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && De(i) && (r[s] = oe._data(i, "olddisplay", T(i.nodeName)))) : (o = De(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function N(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function $(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += oe.css(t, n + Se[r], !0, o)), i ? ("content" === n && (s -= oe.css(t, "padding" + Se[r], !0, o)), "margin" !== n && (s -= oe.css(t, "border" + Se[r] + "Width", !0, o))) : (s += oe.css(t, "padding" + Se[r], !0, o), "padding" !== n && (s += oe.css(t, "border" + Se[r] + "Width", !0, o)));
        return s
    }

    function A(t, e, n) {
        var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = tn(t), s = ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = en(t, e, r), (0 > o || null == o) && (o = t.style[e]), on.test(o))return o;
            i = s && (ne.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + $(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function I(t, e, n, i, o) {
        return new I.prototype.init(t, e, n, i, o)
    }

    function j() {
        return setTimeout(function () {
            fn = void 0
        }), fn = oe.now()
    }

    function M(t, e) {
        var n, i = {height: t}, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)n = Se[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function L(t, e, n) {
        for (var i, o = (wn[e] || []).concat(wn["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, e, t))return i
    }

    function P(t, e, n) {
        var i, o, r, s, a, l, c, u, d = this, h = {}, p = t.style, f = t.nodeType && De(t), m = oe._data(t, "fxshow");
        n.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, d.always(function () {
            d.always(function () {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(t, "display"), u = "none" === c ? oe._data(t, "olddisplay") || T(t.nodeName) : c, "inline" === u && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in e)if (o = e[i], gn.exec(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                if ("show" !== o || !m || void 0 === m[i])continue;
                f = !0
            }
            h[i] = m && m[i] || oe.style(t, i)
        } else c = void 0;
        if (oe.isEmptyObject(h))"inline" === ("none" === c ? T(t.nodeName) : c) && (p.display = c); else {
            m ? "hidden"in m && (f = m.hidden) : m = oe._data(t, "fxshow", {}), r && (m.hidden = !f), f ? oe(t).show() : d.done(function () {
                oe(t).hide()
            }), d.done(function () {
                var e;
                oe._removeData(t, "fxshow");
                for (e in h)oe.style(t, e, h[e])
            });
            for (i in h)s = L(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function O(t, e) {
        var n, i, o, r, s;
        for (n in t)if (i = oe.camelCase(n), o = e[i], r = t[n], oe.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = oe.cssHooks[i], s && "expand"in s) {
            r = s.expand(r), delete t[i];
            for (n in r)n in t || (t[n] = r[n], e[n] = o)
        } else e[i] = o
    }

    function F(t, e, n) {
        var i, o, r = 0, s = bn.length, a = oe.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var e = fn || j(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++)c.tweens[s].run(r);
            return a.notifyWith(t, [c, r, n]), 1 > r && l ? n : (a.resolveWith(t, [c]), !1)
        }, c = a.promise({
            elem: t,
            props: oe.extend({}, e),
            opts: oe.extend(!0, {specialEasing: {}}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: fn || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (o)return this;
                for (o = !0; i > n; n++)c.tweens[n].run(1);
                return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
            }
        }), u = c.props;
        for (O(u, c.opts.specialEasing); s > r; r++)if (i = bn[r].call(c, t, u, c.opts))return i;
        return oe.map(u, L, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, r = e.toLowerCase().match(be) || [];
            if (oe.isFunction(n))for (; i = r[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function R(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(t[a] || [], function (t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var r = {}, s = t === Bn;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function q(t, e) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && oe.extend(!0, t, n), t
    }

    function W(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)for (s in a)if (a[s] && a[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0]in n)r = l[0]; else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function z(t, e, n, i) {
        var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1])for (s in t.converters)c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r;)if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s)for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && t["throws"])e = s(e); else try {
                e = s(e)
            } catch (d) {
                return {state: "parsererror", error: s ? d : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: e}
    }

    function B(t, e, n, i) {
        var o;
        if (oe.isArray(e))oe.each(e, function (e, o) {
            n || Kn.test(t) ? i(t, o) : B(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        }); else if (n || "object" !== oe.type(e))i(t, e); else for (o in e)B(t + "[" + o + "]", e[o], n, i)
    }

    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {
        }
    }

    function Y() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function V(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }

    var K = [], X = K.slice, Q = K.concat, G = K.push, J = K.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ne = {}, ie = "1.11.2", oe = function (t, e) {
        return new oe.fn.init(t, e)
    }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, se = /^-ms-/, ae = /-([\da-z])/gi, le = function (t, e) {
        return e.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: ie, constructor: oe, selector: "", length: 0, toArray: function () {
            return X.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
        }, pushStack: function (t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t, e) {
            return oe.each(this, t, e)
        }, map: function (t) {
            return this.pushStack(oe.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(X.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: G, sort: K.sort, splice: K.splice
    }, oe.extend = oe.fn.extend = function () {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (o = arguments[a]))for (i in o)t = s[i], n = o[i], s !== n && (c && n && (oe.isPlainObject(n) || (e = oe.isArray(n))) ? (e ? (e = !1, r = t && oe.isArray(t) ? t : []) : r = t && oe.isPlainObject(t) ? t : {}, s[i] = oe.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === oe.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === oe.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            return !oe.isArray(t) && t - parseFloat(t) + 1 >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t))return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)for (e in t)return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && oe.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(se, "ms-").replace(ae, le)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e, i) {
            var o, r = 0, s = t.length, a = n(t);
            if (i) {
                if (a)for (; s > r && (o = e.apply(t[r], i), o !== !1); r++); else for (r in t)if (o = e.apply(t[r], i), o === !1)break
            } else if (a)for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++); else for (r in t)if (o = e.call(t[r], r, t[r]), o === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(re, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)), i
        }, inArray: function (t, e, n) {
            var i;
            if (e) {
                if (J)return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
            }
            return -1
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i;)t[o++] = e[i++];
            if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
            return t.length = o, t
        }, grep: function (t, e, n) {
            for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)i = !e(t[r], r), i !== a && o.push(t[r]);
            return o
        }, map: function (t, e, i) {
            var o, r = 0, s = t.length, a = n(t), l = [];
            if (a)for (; s > r; r++)o = e(t[r], r, i), null != o && l.push(o); else for (r in t)o = e(t[r], r, i), null != o && l.push(o);
            return Q.apply([], l)
        }, guid: 1, proxy: function (t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), oe.isFunction(t) ? (n = X.call(arguments, 2), i = function () {
                return t.apply(e || this, n.concat(X.call(arguments)))
            }, i.guid = t.guid = t.guid || oe.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
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
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, p, f, m;
                if ((e ? e.ownerDocument || e : R) !== I && A(e), e = e || I, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return n;
                if (!i && M) {
                    if (11 !== a && (o = ye.exec(t)))if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode)return n;
                            if (r.id === s)return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && F(e, r) && r.id === s)return n.push(r), n
                    } else {
                        if (o[2])return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = o[3]) && x.getElementsByClassName)return J.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (x.qsa && (!L || !L.test(t))) {
                        if (p = d = H, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = T(t), (d = e.getAttribute("id")) ? p = d.replace(we, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + h(c[l]);
                            f = be.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m)try {
                            return J.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[H] = !0, t
            }

            function o(t) {
                var e = I.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)_.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = W++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, c = [q, r];
                    if (s) {
                        for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, s))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || o) {
                        if (l = e[H] || (e[H] = {}), (a = l[i]) && a[0] === q && a[1] === r)return c[2] = a[2];
                        if (l[i] = c, c[2] = t(e, n, s))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++)e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
                return s
            }

            function v(t, e, n, o, r, s) {
                return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, s)), i(function (i, s, a, l) {
                    var c, u, d, h = [], p = [], f = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : g(v, h, t, a, l), b = n ? r || (i ? t : f || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? te(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = g(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = p(function (t) {
                    return t === e
                }, s, !0), c = p(function (t) {
                    return te(e, t) > -1
                }, s, !0), u = [function (t, n, i) {
                    var o = !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; o > a; a++)if (n = _.relative[t[a].type])u = [p(f(u), n)]; else {
                    if (n = _.filter[t[a].type].apply(null, t[a].matches), n[H]) {
                        for (i = ++a; o > i && !_.relative[t[i].type]; i++);
                        return v(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && h(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, s = function (i, s, a, l, c) {
                    var u, d, h, p = 0, f = "0", m = i && [], v = [], y = D, b = i || r && _.find.TAG("*", c), w = q += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (D = s !== I && s); f !== x && null != (u = b[f]); f++) {
                        if (r && u) {
                            for (d = 0; h = t[d++];)if (h(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (q = w)
                        }
                        o && ((u = !h && u) && p--, i && m.push(u))
                    }
                    if (p += f, o && f !== p) {
                        for (d = 0; h = n[d++];)h(m, v, s, a);
                        if (i) {
                            if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = Q.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (q = w, D = y), m
                };
                return o ? i(s) : s
            }

            var w, x, _, k, C, T, E, S, D, N, $, A, I, j, M, L, P, O, F, H = "sizzle" + 1 * new Date, R = t.document, q = 0, W = 0, z = n(), B = n(), U = n(), Y = function (t, e) {
                return t === e && ($ = !0), 0
            }, V = 1 << 31, K = {}.hasOwnProperty, X = [], Q = X.pop, G = X.push, J = X.push, Z = X.slice, te = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                return -1
            }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), he = new RegExp(se), pe = new RegExp("^" + oe + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), _e = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, ke = function () {
                A()
            };
            try {
                J.apply(X = Z.call(R.childNodes), R.childNodes), X[R.childNodes.length].nodeType
            } catch (Ce) {
                J = {
                    apply: X.length ? function (t, e) {
                        G.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, A = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : R;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), M = !C(i), x.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function (t) {
                    return j.appendChild(t).id = H, !i.getElementsByName || !i.getElementsByName(H).length
                }), x.getById ? (_.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && M) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, _.filter.ID = function (t) {
                    var e = t.replace(xe, _e);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function (t) {
                    var e = t.replace(xe, _e);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), _.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, _.find.CLASS = x.getElementsByClassName && function (t, e) {
                        return M ? e.getElementsByClassName(t) : void 0
                    }, P = [], L = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function (t) {
                    j.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
                }), o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = ve.test(O = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (t) {
                    x.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), P.push("!=", se)
                }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), e = ve.test(j.compareDocumentPosition), F = e || ve.test(j.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, Y = e ? function (t, e) {
                    if (t === e)return $ = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && F(R, t) ? -1 : e === i || e.ownerDocument === R && F(R, e) ? 1 : N ? te(N, t) - te(N, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return $ = !0, 0;
                    var n, o = 0, r = t.parentNode, a = e.parentNode, l = [t], c = [e];
                    if (!r || !a)return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : N ? te(N, t) - te(N, e) : 0;
                    if (r === a)return s(t, e);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = e; n = n.parentNode;)c.unshift(n);
                    for (; l[o] === c[o];)o++;
                    return o ? s(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0
                }, i) : I
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== I && A(t), n = n.replace(de, "='$1']"), !(!x.matchesSelector || !M || P && P.test(n) || L && L.test(n)))try {
                    var i = O.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (o) {
                }
                return e(n, I, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== I && A(t), F(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== I && A(t);
                var n = _.attrHandle[e.toLowerCase()], i = n && K.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
                return void 0 !== i ? i : x.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if ($ = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(Y), $) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return N = null, t
            }, k = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += k(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += k(e);
                return n
            }, _ = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
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
                        return t[1] = t[1].replace(xe, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xe, _e).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = z[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && z(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, d, h, p, f, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (u = g[H] || (g[H] = {}), c = u[t] || [], p = c[0] === q && c[1], h = c[0] === q && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)if (1 === d.nodeType && ++h && d === e) {
                                        u[t] = [q, p, h];
                                        break
                                    }
                                } else if (y && (c = (e[H] || (e[H] = {}))[t]) && c[0] === q)h = c[1]; else for (; (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[H] || (d[H] = {}))[t] = [q, h]), d !== e)););
                                return h -= o, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[H] ? r(n) : r.length > 1 ? (o = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;)i = te(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = E(t.replace(le, "$1"));
                        return o[H] ? i(function (t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(xe, _e), function (e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, _e).toLowerCase(), function (e) {
                            var n;
                            do if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === j
                    }, focus: function (t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
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
                        return !_.pseudos.empty(t)
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
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[w] = a(w);
            for (w in{submit: !0, reset: !0})_.pseudos[w] = l(w);
            return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = e.tokenize = function (t, n) {
                var i, o, r, s, a, l, c, u = B[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = t, l = [], c = _.preFilter; a;) {
                    (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (s in _.filter)!(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, E = e.compile = function (t, e) {
                var n, i = [], o = [], r = U[t + " "];
                if (!r) {
                    for (e || (e = T(t)), n = e.length; n--;)r = y(e[n]), r[H] ? i.push(r) : o.push(r);
                    r = U(t, b(o, i)), r.selector = t
                }
                return r
            }, S = e.select = function (t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t, d = !i && T(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && M && _.relative[r[1].type]) {
                        if (e = (_.find.ID(s.matches[0].replace(xe, _e), e) || [])[0], !e)return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);)if ((l = _.find[a]) && (i = l(s.matches[0].replace(xe, _e), be.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && h(r), !t)return J.apply(n, i), n;
                        break
                    }
                }
                return (c || E(t, d))(i, e, !M, n, be.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = H.split("").sort(Y).join("") === H, x.detectDuplicates = !!$, A(), x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(I.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(ee, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var ue = oe.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
    oe.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function (t) {
            var e, n = [], i = this, o = i.length;
            if ("string" != typeof t)return this.pushStack(oe(t).filter(function () {
                for (e = 0; o > e; e++)if (oe.contains(i[e], this))return !0
            }));
            for (e = 0; o > e; e++)oe.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        }, filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        }, is: function (t) {
            return !!i(this, "string" == typeof t && ue.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = oe.fn.init = function (t, e) {
        var n, i;
        if (!t)return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), de.test(n[1]) && oe.isPlainObject(e))for (n in e)oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = fe.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2])return pe.find(t);
                this.length = 1, this[0] = i
            }
            return this.context = fe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
    };
    ge.prototype = oe.fn, pe = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
    oe.extend({
        dir: function (t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));)1 === o.nodeType && i.push(o), o = o[e];
            return i
        }, sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), oe.fn.extend({
        has: function (t) {
            var e, n = oe(t, this), i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)if (oe.contains(this, n[e]))return !0
            })
        }, closest: function (t, e) {
            for (var n, i = 0, o = this.length, r = [], s = ue.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        }, index: function (t) {
            return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return oe.dir(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return oe.dir(t, "parentNode", n)
        }, next: function (t) {
            return o(t, "nextSibling")
        }, prev: function (t) {
            return o(t, "previousSibling")
        }, nextAll: function (t) {
            return oe.dir(t, "nextSibling")
        }, prevAll: function (t) {
            return oe.dir(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return oe.dir(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return oe.dir(t, "previousSibling", n)
        }, siblings: function (t) {
            return oe.sibling((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return oe.sibling(t.firstChild)
        }, contents: function (t) {
            return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
        }
    }, function (t, e) {
        oe.fn[t] = function (n, i) {
            var o = oe.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[t] || (o = oe.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g, we = {};
    oe.Callbacks = function (t) {
        t = "string" == typeof t ? we[t] || r(t) : oe.extend({}, t);
        var e, n, i, o, s, a, l = [], c = !t.once && [], u = function (r) {
            for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                n = !1;
                break
            }
            e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var i = l.length;
                    !function r(e) {
                        oe.each(e, function (e, n) {
                            var i = oe.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), e ? o = l.length : n && (a = i, u(n))
                }
                return this
            }, remove: function () {
                return l && oe.each(arguments, function (t, n) {
                    for (var i; (i = oe.inArray(n, l, i)) > -1;)l.splice(i, 1), e && (o >= i && o--, s >= i && s--)
                }), this
            }, has: function (t) {
                return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], o = 0, this
            }, disable: function () {
                return l = c = n = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = void 0, n || d.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (t, n) {
                return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return d
    }, oe.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return oe.Deferred(function (n) {
                        oe.each(e, function (e, r) {
                            var s = oe.isFunction(t[e]) && t[e];
                            o[r[1]](function () {
                                var t = s && s.apply(this, arguments);
                                t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? oe.extend(t, i) : i
                }
            }, o = {};
            return i.pipe = i.then, oe.each(e, function (t, r) {
                var s = r[2], a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        }, when: function (t) {
            var e, n, i, o = 0, r = X.call(arguments), s = r.length, a = 1 !== s || t && oe.isFunction(t.promise) ? s : 0, l = 1 === a ? t : oe.Deferred(), c = function (t, n, i) {
                return function (o) {
                    n[t] = this, i[t] = arguments.length > 1 ? X.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var xe;
    oe.fn.ready = function (t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? oe.readyWait++ : oe.ready(!0)
        }, ready: function (t) {
            if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body)return setTimeout(oe.ready);
                oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (xe.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function (e) {
        if (!xe)if (xe = oe.Deferred(), "complete" === fe.readyState)setTimeout(oe.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
            fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && fe.documentElement
            } catch (i) {
            }
            n && n.doScroll && !function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return xe.promise(e)
    };
    var _e, ke = "undefined";
    for (_e in oe(ne))break;
    ne.ownLast = "0" !== _e, ne.inlineBlockNeedsLayout = !1, oe(function () {
        var t, e, n, i;
        n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
        var t = fe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ne.deleteExpando = !1
            }
        }
        t = null
    }(), oe.acceptData = function (t) {
        var e = oe.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Te = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !c(t)
        },
        data: function (t, e, n) {
            return u(t, e, n)
        },
        removeData: function (t, e) {
            return d(t, e)
        },
        _data: function (t, e, n) {
            return u(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return d(t, e, !0)
        }
    }), oe.fn.extend({
        data: function (t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                oe.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                oe.data(this, t, e)
            }) : r ? l(r, t, oe.data(r, t)) : void 0
        }, removeData: function (t) {
            return this.each(function () {
                oe.removeData(this, t)
            })
        }
    }), oe.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = oe._data(t, e), n && (!i || oe.isArray(n) ? i = oe._data(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = oe.queue(t, e), i = n.length, o = n.shift(), r = oe._queueHooks(t, e), s = function () {
                oe.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return oe._data(t, n) || oe._data(t, n, {
                    empty: oe.Callbacks("once memory").add(function () {
                        oe._removeData(t, e + "queue"), oe._removeData(t, n)
                    })
                })
        }
    }), oe.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                oe.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, o = oe.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = oe._data(r[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Se = ["Top", "Right", "Bottom", "Left"], De = function (t, e) {
        return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
    }, Ne = oe.access = function (t, e, n, i, o, r, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === oe.type(n)) {
            o = !0;
            for (a in n)oe.access(t, e, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                return c.call(oe(t), n)
            })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
    }, $e = /^(?:checkbox|radio)$/i;
    !function () {
        var t = fe.createElement("input"), e = fe.createElement("div"), n = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                ne.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(), function () {
        var e, n, i = fe.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ae = /^(?:input|select|textarea)$/i, Ie = /^key/, je = /^(?:mouse|pointer|contextmenu)|click/, Me = /^(?:focusinfocus|focusoutblur)$/, Le = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, m, g = oe._data(t);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                    return typeof oe === ke || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;)r = Le.exec(e[a]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (c = oe.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), oe.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, m, g = oe.hasData(t) && oe._data(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(be) || [""], c = e.length; c--;)if (a = Le.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;)s = h[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                    l && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || oe.removeEvent(t, p, g.handle), delete u[p])
                } else for (p in u)oe.event.remove(t, p + e[c], n, i, !0);
                oe.isEmptyObject(u) && (delete g.handle, oe._removeData(t, "events"))
            }
        },
        trigger: function (e, n, i, o) {
            var r, s, a, l, c, u, d, h = [i || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Me.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[oe.expando] ? e : new oe.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), c = oe.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !oe.isWindow(i)) {
                    for (l = c.delegateType || p, Me.test(l + p) || (a = a.parentNode); a; a = a.parentNode)h.push(a), u = a;
                    u === (i.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || t)
                }
                for (d = 0; (a = h[d++]) && !e.isPropagationStopped();)e.type = d > 1 ? l : c.bindType || p, r = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && oe.acceptData(a) && (e.result = r.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && s && i[p] && !oe.isWindow(i)) {
                    u = i[s], u && (i[s] = null), oe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {
                    }
                    oe.event.triggered = void 0, u && (i[s] = u)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = oe.event.fix(t);
            var e, n, i, o, r, s = [], a = X.call(arguments), l = (oe._data(this, "events") || {})[t.type] || [], c = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = oe.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (o = [], r = 0; a > r; r++)i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                o.length && s.push({elem: l, handlers: o})
            }
            return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
        },
        fix: function (t) {
            if (t[oe.expando])return t;
            var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = je.test(o) ? this.mouseHooks : Ie.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(r), e = i.length; e--;)n = i[e], t[n] = r[n];
            return t.target || (t.target = r.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
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
                var n, i, o, r = e.button, s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || fe, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
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
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return oe.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var o = oe.extend(new oe.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
            i ? oe.event.trigger(o, null, e) : oe.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === ke && (t[i] = null), t.detachEvent(i, n))
    }, oe.Event = function (t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {
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
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        oe.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return (!o || o !== i && !oe.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target, n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        }, postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
        }, teardown: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function () {
            return Ae.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Ae.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                }), oe._data(e, "changeBubbles", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return oe.event.remove(this, "._change"), !Ae.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            oe.event.simulate(e, t.target, oe.event.fix(t), !0)
        };
        oe.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, o = oe._data(i, e);
                o || i.addEventListener(t, n, !0), oe._data(i, e, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = oe._data(i, e) - 1;
                o ? oe._data(i, e, o) : (i.removeEventListener(t, n, !0), oe._removeData(i, e))
            }
        }
    }), oe.fn.extend({
        on: function (t, e, n, i, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (r in t)this.on(r, e, n, t[r], o);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = p; else if (!i)return this;
            return 1 === o && (s = i, i = function (t) {
                return oe().off(t), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function () {
                oe.event.add(this, t, i, n, e)
            })
        }, one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t)this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                oe.event.remove(this, t, n, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                oe.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? oe.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Oe = / jQuery\d+="(?:null|\d+)"/g, Fe = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"), He = /^\s+/, Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qe = /<([\w:]+)/, We = /<tbody/i, ze = /<|&#?\w+;/, Be = /<(?:script|style|link)/i, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, Ye = /^$|\/(?:java|ecma)script/i, Ve = /^true\/(.*)/, Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Qe = m(fe), Ge = Qe.appendChild(fe.createElement("div"));
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, oe.extend({
        clone: function (t, e, n) {
            var i, o, r, s, a, l = oe.contains(t.ownerDocument, t);
            if (ne.html5Clone || oe.isXMLDoc(t) || !Fe.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Ge.innerHTML = t.outerHTML, Ge.removeChild(r = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))for (i = g(r), a = g(t), s = 0; null != (o = a[s]); ++s)i[s] && k(o, i[s]);
            if (e)if (n)for (a = a || g(t), i = i || g(r), s = 0; null != (o = a[s]); s++)_(o, i[s]); else _(t, r);
            return i = g(r, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = a = o = null, r
        }, buildFragment: function (t, e, n, i) {
            for (var o, r, s, a, l, c, u, d = t.length, h = m(e), p = [], f = 0; d > f; f++)if (r = t[f], r || 0 === r)if ("object" === oe.type(r))oe.merge(p, r.nodeType ? [r] : r); else if (ze.test(r)) {
                for (a = a || h.appendChild(e.createElement("div")), l = (qe.exec(r) || ["", ""])[1].toLowerCase(), u = Xe[l] || Xe._default, a.innerHTML = u[1] + r.replace(Re, "<$1></$2>") + u[2], o = u[0]; o--;)a = a.lastChild;
                if (!ne.leadingWhitespace && He.test(r) && p.push(e.createTextNode(He.exec(r)[0])), !ne.tbody)for (r = "table" !== l || We.test(r) ? "<table>" !== u[1] || We.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;)oe.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(e.createTextNode(r));
            for (a && h.removeChild(a), ne.appendChecked || oe.grep(g(p, "input"), v), f = 0; r = p[f++];)if ((!i || -1 === oe.inArray(r, i)) && (s = oe.contains(r.ownerDocument, r), a = g(h.appendChild(r), "script"), s && x(a), n))for (o = 0; r = a[o++];)Ye.test(r.type || "") && n.push(r);
            return a = null, h
        }, cleanData: function (t, e) {
            for (var n, i, o, r, s = 0, a = oe.expando, l = oe.cache, c = ne.deleteExpando, u = oe.event.special; null != (n = t[s]); s++)if ((e || oe.acceptData(n)) && (o = n[a], r = o && l[o])) {
                if (r.events)for (i in r.events)u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== ke ? n.removeAttribute(a) : n[a] = null, K.push(o))
            }
        }
    }), oe.fn.extend({
        text: function (t) {
            return Ne(this, function (t) {
                return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
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
            for (var n, i = t ? oe.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                t.options && oe.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return oe.clone(this, t, e)
            })
        }, html: function (t) {
            return Ne(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof t || Be.test(t) || !ne.htmlSerialize && Fe.test(t) || !ne.leadingWhitespace && He.test(t) || Xe[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        }, detach: function (t) {
            return this.remove(t, !0)
        }, domManip: function (t, e) {
            t = Q.apply([], t);
            var n, i, o, r, s, a, l = 0, c = this.length, u = this, d = c - 1, h = t[0], p = oe.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ne.checkClone && Ue.test(h))return this.each(function (n) {
                var i = u.eq(n);
                p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = oe.map(g(a, "script"), b), o = r.length; c > l; l++)i = a, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, g(i, "script"))), e.call(this[l], i, l);
                if (o)for (s = r[r.length - 1].ownerDocument, oe.map(r, w), l = 0; o > l; l++)i = r[l], Ye.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
                a = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        oe.fn[t] = function (t) {
            for (var n, i = 0, o = [], r = oe(t), s = r.length - 1; s >= i; i++)n = i === s ? this : this.clone(!0), oe(r[i])[e](n), G.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Je, Ze = {};
    !function () {
        var t;
        ne.shrinkWrapBlocks = function () {
            if (null != t)return t;
            t = !1;
            var e, n, i;
            return n = fe.getElementsByTagName("body")[0], n && n.style ? (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var tn, en, nn = /^margin/, on = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"), rn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, en = function (t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || tn(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)), on.test(s) && nn.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : fe.documentElement.currentStyle && (tn = function (t) {
        return t.currentStyle
    }, en = function (t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || tn(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), on.test(s) && !rn.test(e) && (i = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    }), function () {
        function e() {
            var e, n, i, o;
            n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, o = e.appendChild(fe.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
        }

        var n, i, o, r, s, a, l;
        n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
            reliableHiddenOffsets: function () {
                return null == a && e(), a
            }, boxSizingReliable: function () {
                return null == s && e(), s
            }, pixelPosition: function () {
                return null == r && e(), r
            }, reliableMarginRight: function () {
                return null == l && e(), l
            }
        }))
    }(), oe.swap = function (t, e, n, i) {
        var o, r, s = {};
        for (r in e)s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e)t.style[r] = s[r];
        return o
    };
    var sn = /alpha\([^)]*\)/i, an = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, cn = new RegExp("^(" + Ee + ")(.*)$", "i"), un = new RegExp("^([+-])=(" + Ee + ")", "i"), dn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, hn = {letterSpacing: "0", fontWeight: "400"}, pn = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = en(t, "opacity");
                        return "" === n ? "1" : n
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
        cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = oe.camelCase(e), l = t.style;
                if (e = oe.cssProps[a] || (oe.cssProps[a] = S(l, a)), s = oe.cssHooks[e] || oe.cssHooks[a], void 0 === n)return s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                if (r = typeof n, "string" === r && (o = un.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set"in s && void 0 === (n = s.set(t, n, i)))))try {
                    l[e] = n
                } catch (c) {
                }
            }
        },
        css: function (t, e, n, i) {
            var o, r, s, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = S(t.style, a)), s = oe.cssHooks[e] || oe.cssHooks[a], s && "get"in s && (r = s.get(t, !0, n)), void 0 === r && (r = en(t, e, i)), "normal" === r && e in hn && (r = hn[e]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (t, e) {
        oe.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? ln.test(oe.css(t, "display")) && 0 === t.offsetWidth ? oe.swap(t, dn, function () {
                    return A(t, e, i)
                }) : A(t, e, i) : void 0
            }, set: function (t, n, i) {
                var o = i && tn(t);
                return N(t, n, i ? $(t, e, i, ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function (t, e) {
            return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var n = t.style, i = t.currentStyle, o = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = E(ne.reliableMarginRight, function (t, e) {
        return e ? oe.swap(t, {display: "inline-block"}, en, [t, "marginRight"]) : void 0
    }), oe.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        oe.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + Se[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nn.test(t) || (oe.cssHooks[t + e].set = N)
    }), oe.fn.extend({
        css: function (t, e) {
            return Ne(this, function (t, e, n) {
                var i, o, r = {}, s = 0;
                if (oe.isArray(e)) {
                    for (i = tn(t), o = e.length; o > s; s++)r[e[s]] = oe.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return D(this, !0)
        }, hide: function () {
            return D(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                De(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = I, I.prototype = {
        constructor: I, init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = I.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            }, set: function (t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, oe.fx = I.prototype.init, oe.fx.step = {};
    var fn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [P], wn = {
        "*": [function (t, e) {
            var n = this.createTween(t, e), i = n.cur(), o = vn.exec(e), r = o && o[3] || (oe.cssNumber[t] ? "" : "px"), s = (oe.cssNumber[t] || "px" !== r && +i) && vn.exec(oe.css(n.elem, t)), a = 1, l = 20;
            if (s && s[3] !== r) {
                r = r || s[3], o = o || [], s = +i || 1;
                do a = a || ".5", s /= a, oe.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
        }]
    };
    oe.Animation = oe.extend(F, {
        tweener: function (t, e) {
            oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++)n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
        }, prefilter: function (t, e) {
            e ? bn.unshift(t) : bn.push(t)
        }
    }), oe.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? oe.extend({}, t) : {
            complete: n || !n && e || oe.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !oe.isFunction(e) && e
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
        }, i
    }, oe.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(De).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var o = oe.isEmptyObject(t), r = oe.speed(e, n, i), s = function () {
                var e = F(this, oe.extend({}, t), r);
                (o || oe._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, o = null != t && t + "queueHooks", r = oe.timers, s = oe._data(this);
                if (o)s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && yn.test(o) && i(s[o]);
                for (o = r.length; o--;)r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                (e || !n) && oe.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = oe._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = oe.timers, s = i ? i.length : 0;
                for (n.finish = !0, oe.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;)r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function (t, e) {
        var n = oe.fn[e];
        oe.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, i, o)
        }
    }), oe.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        oe.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), oe.timers = [], oe.fx.tick = function () {
        var t, e = oe.timers, n = 0;
        for (fn = oe.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || oe.fx.stop(), fn = void 0
    }, oe.fx.timer = function (t) {
        oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        mn || (mn = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
        clearInterval(mn), mn = null
    }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, e) {
        return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var t, e, n, i, o;
        e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = fe.createElement("select"), o = n.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = o.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
    }();
    var xn = /\r/g;
    oe.fn.extend({
        val: function (t) {
            var e, n, i, o = this[0];
            {
                if (arguments.length)return i = oe.isFunction(t), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? t.call(this, n, oe(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o)return e = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = oe.find.attr(t, "value");
                    return null != e ? e : oe.trim(oe.text(t))
                }
            }, select: {
                get: function (t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                        if (e = oe(n).val(), r)return e;
                        s.push(e)
                    }
                    return s
                }, set: function (t, e) {
                    for (var n, i, o = t.options, r = oe.makeArray(e), s = o.length; s--;)if (i = o[s], oe.inArray(oe.valHooks.option.get(i), r) >= 0)try {
                        i.selected = n = !0
                    } catch (a) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var _n, kn, Cn = oe.expr.attrHandle, Tn = /^(?:checked|selected)$/i, En = ne.getSetAttribute, Sn = ne.input;
    oe.fn.extend({
        attr: function (t, e) {
            return Ne(this, oe.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function (t, e, n) {
            var i, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)return typeof t.getAttribute === ke ? oe.prop(t, e, n) : (1 === r && oe.isXMLDoc(t) || (e = e.toLowerCase(), i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? kn : _n)), void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = oe.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void oe.removeAttr(t, e))
        }, removeAttr: function (t, e) {
            var n, i, o = 0, r = e && e.match(be);
            if (r && 1 === t.nodeType)for (; n = r[o++];)i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? Sn && En || !Tn.test(n) ? t[i] = !1 : t[oe.camelCase("default-" + n)] = t[i] = !1 : oe.attr(t, n, ""), t.removeAttribute(En ? n : i)
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), kn = {
        set: function (t, e, n) {
            return e === !1 ? oe.removeAttr(t, n) : Sn && En || !Tn.test(n) ? t.setAttribute(!En && oe.propFix[n] || n, n) : t[oe.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Cn[e] || oe.find.attr;
        Cn[e] = Sn && En || !Tn.test(e) ? function (t, e, i) {
            var o, r;
            return i || (r = Cn[e], Cn[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Cn[e] = r), o
        } : function (t, e, n) {
            return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Sn && En || (oe.attrHooks.value = {
        set: function (t, e, n) {
            return oe.nodeName(t, "input") ? void(t.defaultValue = e) : _n && _n.set(t, e, n)
        }
    }), En || (_n = {
        set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Cn.id = Cn.name = Cn.coords = function (t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        }, set: _n.set
    }, oe.attrHooks.contenteditable = {
        set: function (t, e, n) {
            _n.set(t, "" === e ? !1 : e, n)
        }
    }, oe.each(["width", "height"], function (t, e) {
        oe.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Dn = /^(?:input|select|textarea|button|object)$/i, Nn = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (t, e) {
            return Ne(this, oe.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = oe.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {
                }
            })
        }
    }), oe.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
            var i, o, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)return r = 1 !== s || !oe.isXMLDoc(t), r && (e = oe.propFix[e] || e, o = oe.propHooks[e]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Dn.test(t.nodeName) || Nn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function (t, e) {
        oe.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var $n = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, s, a = 0, l = this.length, c = "string" == typeof t && t;
            if (oe.isFunction(t))return this.each(function (e) {
                oe(this).addClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(be) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($n, " ") : " ")) {
                for (r = 0; o = e[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = oe.trim(i), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, o, r, s, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t))return this.each(function (e) {
                oe(this).removeClass(t.call(this, e, this.className))
            });
            if (c)for (e = (t || "").match(be) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($n, " ") : "")) {
                for (r = 0; o = e[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                s = t ? oe.trim(i) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (n) {
                oe(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function () {
                if ("string" === n)for (var e, i = 0, o = oe(this), r = t.match(be) || []; e = r[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === ke || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
            })
        }, hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($n, " ").indexOf(e) >= 0)return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        oe.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }, bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var An = oe.now(), In = /\?/, jn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
        var n, i = null, o = oe.trim(e + "");
        return o && !oe.trim(o.replace(jn, function (t, e, o, r) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e)return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
    };
    var Mn, Ln, Pn = /#.*$/, On = /([?&])_=[^&]*/, Fn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Hn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, qn = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zn = {}, Bn = {}, Un = "*/".concat("*");
    try {
        Ln = location.href
    } catch (Yn) {
        Ln = fe.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    Mn = Wn.exec(Ln.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ln,
            type: "GET",
            isLocal: Hn.test(Mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? q(q(t, oe.ajaxSettings), e) : q(oe.ajaxSettings, t)
        },
        ajaxPrefilter: H(zn),
        ajaxTransport: H(Bn),
        ajax: function (t, e) {
            function n(t, e, n, i) {
                var o, u, v, y, w, _ = e;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, s = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = W(d, x, n)), y = z(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (oe.etag[r] = w)), 204 === t || "HEAD" === d.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, u = y.data, v = y.error, o = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || _) + "", o ? f.resolveWith(h, [u, _, x]) : f.rejectWith(h, [x, _, v]), x.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), m.fireWith(h, [x, _]), l && (p.trigger("ajaxComplete", [x, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, r, s, a, l, c, u, d = oe.ajaxSetup({}, e), h = d.context || d, p = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event, f = oe.Deferred(), m = oe.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === b) {
                        if (!u)for (u = {}; e = Fn.exec(s);)u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? s : null
                },
                setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, v[t] = e), this
                },
                overrideMimeType: function (t) {
                    return b || (d.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || w;
                    return c && c.abort(e), n(0, e), this
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Ln) + "").replace(Pn, "").replace(qn, Mn[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Mn[1] && i[2] === Mn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Mn[3] || ("http:" === Mn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), R(zn, d, e, x), 2 === b)return x;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rn.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (In.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = On.test(r) ? r.replace(On, "$1_=" + An++) : r + (In.test(r) ? "&" : "?") + "_=" + An++)), d.ifModified && (oe.lastModified[r] && x.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && x.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b))return x.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})x[o](d[o]);
            if (c = R(Bn, d, e, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, n)
                } catch (_) {
                    if (!(2 > b))throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return oe.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function (t, e) {
        oe[e] = function (t, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), oe._evalUrl = function (t) {
        return oe.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, oe.fn.extend({
        wrapAll: function (t) {
            if (oe.isFunction(t))return this.each(function (e) {
                oe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return this.each(oe.isFunction(t) ? function (e) {
                oe(this).wrapInner(t.call(this, e))
            } : function () {
                var e = oe(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = oe.isFunction(t);
            return this.each(function (n) {
                oe(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
    }, oe.expr.filters.visible = function (t) {
        return !oe.expr.filters.hidden(t)
    };
    var Vn = /%20/g, Kn = /\[\]$/, Xn = /\r?\n/g, Qn = /^(?:submit|button|image|reset|file)$/i, Gn = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (t, e) {
        var n, i = [], o = function (t, e) {
            e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t))oe.each(t, function () {
            o(this.name, this.value)
        }); else for (n in t)B(n, t[n], e, o);
        return i.join("&").replace(Vn, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Gn.test(this.nodeName) && !Qn.test(t) && (this.checked || !$e.test(t))
            }).map(function (t, e) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (t) {
                    return {name: e.name, value: t.replace(Xn, "\r\n")}
                }) : {name: e.name, value: n.replace(Xn, "\r\n")}
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || Y()
    } : U;
    var Jn = 0, Zn = {}, ti = oe.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in Zn)Zn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials"in ti, ti = ne.ajax = !!ti, ti && oe.ajaxTransport(function (t) {
        if (!t.crossDomain || ne.cors) {
            var e;
            return {
                send: function (n, i) {
                    var o, r = t.xhr(), s = ++Jn;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n)void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), e = function (n, o) {
                        var a, l, c;
                        if (e && (o || 4 === r.readyState))if (delete Zn[s], e = void 0, r.onreadystatechange = oe.noop, o)4 !== r.readyState && r.abort(); else {
                            c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch (u) {
                                l = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                        c && i(a, l, c, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Zn[s] = e : e()
                }, abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), oe.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function (i, o) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                }, abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [], ni = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = ei.pop() || oe.expando + "_" + An++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function (e, n, i) {
        var o, r, s, a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ni, "$1" + o) : e.jsonp !== !1 && (e.url += (In.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || oe.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, i.always(function () {
            t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, ei.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || fe;
        var i = de.exec(t), o = !n && [];
        return i ? [e.createElement(i[1])] : (i = oe.buildFragment([t], e, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var ii = oe.fn.load;
    oe.fn.load = function (t, e, n) {
        if ("string" != typeof t && ii)return ii.apply(this, arguments);
        var i, o, r, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = oe.trim(t.slice(a, t.length)), t = t.slice(0, a)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && oe.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
        }).complete(n && function (t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        oe.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), oe.expr.filters.animated = function (t) {
        return oe.grep(oe.timers, function (e) {
            return t === e.elem
        }).length
    };
    var oi = t.document.documentElement;
    oe.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, l, c, u = oe.css(t, "position"), d = oe(t), h = {};
            "static" === u && (t.style.position = "relative"), a = d.offset(), r = oe.css(t, "top"), l = oe.css(t, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [r, l]) > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using"in e ? e.using.call(t, h) : d.css(h)
        }
    }, oe.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
            if (r)return e = r.documentElement, oe.contains(e, o) ? (typeof o.getBoundingClientRect !== ke && (i = o.getBoundingClientRect()), n = V(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        }, position: function () {
            if (this[0]) {
                var t, e, n = {top: 0, left: 0}, i = this[0];
                return "fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), n.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - oe.css(i, "marginTop", !0),
                    left: e.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");)t = t.offsetParent;
                return t || oi
            })
        }
    }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = /Y/.test(e);
        oe.fn[t] = function (i) {
            return Ne(this, function (t, i, o) {
                var r = V(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function (t, e) {
        oe.cssHooks[e] = E(ne.pixelPosition, function (t, n) {
            return n ? (n = en(t, e), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0
        })
    }), oe.each({Height: "height", Width: "width"}, function (t, e) {
        oe.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            oe.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Ne(this, function (e, n, i) {
                    var o;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? oe.css(e, n, s) : oe.style(e, n, i, s)
                }, e, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var ri = t.jQuery, si = t.$;
    return oe.noConflict = function (e) {
        return t.$ === oe && (t.$ = si), e && t.jQuery === oe && (t.jQuery = ri), oe
    }, typeof e === ke && (t.jQuery = t.$ = oe), oe
}), /*
 jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
 jQuery plugin for drop-in fix binded events problem caused by Turbolinks

 The MIT License
 Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */
    function () {
        var t, e;
        t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
            version: "2.1.0",
            isReady: !1,
            use: function (t, n) {
                return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + n + ".turbo", this.onFetch)
            },
            addCallback: function (n) {
                return t.turbo.isReady && n(t), e.on("turbo:ready", function () {
                    return n(t)
                })
            },
            onLoad: function () {
                return t.turbo.isReady = !0, e.trigger("turbo:ready")
            },
            onFetch: function () {
                return t.turbo.isReady = !1
            },
            register: function () {
                return t(this.onLoad), t.fn.ready = this.addCallback
            }
        }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
    }.call(this), function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
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
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function (e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i), o.result !== !1
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
        handleRemote: function (i) {
            var o, r, s, a, l, c;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    o = i.attr("method"), r = i.attr("action"), s = i.serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (s.push(u), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), s = i.data("params") || null);
                return c = {
                    type: o || "GET", data: s, dataType: l, beforeSend: function (t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o]) ? void i.trigger("ajax:send", t) : !1
                    }, success: function (t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    }, complete: function (t, e) {
                        i.trigger("ajax:complete", [t, e])
                    }, error: function (t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    }, crossDomain: n.isCrossDomain(r)
                }, a && (c.xhrFields = {withCredentials: a}), r && (c.url = r), n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function (t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !n.protocol || !n.host || e.protocol + "//" + e.host != n.protocol + "//" + n.host
            } catch (i) {
                return !0
            }
        },
        handleMethod: function (i) {
            var o = n.href(i), r = i.data("method"), s = i.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + o + '"></form>'), u = '<input name="_method" value="' + r + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && c.attr("target", s), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function (e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function (e) {
            n.formElements(e, n.disableSelector).each(function () {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            n.formElements(e, n.enableSelector).each(function () {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, i = t.data("confirm"), o = !1;
            return i ? (n.fire(t, "confirm") && (o = n.confirm(i), e = n.fire(t, "confirm:complete", [o])), o && e) : !0
        },
        blankInputs: function (e, n, i) {
            var o, r, s = t(), a = n || "input,textarea", l = e.find(a);
            return l.each(function () {
                if (o = t(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length)return !0;
                    s = s.add(o)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function () {
        t(t.rails.enableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var o = t(this), r = o.data("method"), s = o.data("params"), a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o))return n.stopEverything(i);
        if (!a && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e) {
            if (a && (!r || "GET" === r) && !s)return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.fail(function () {
                n.enableElement(o)
            }), !1
        }
        return r ? (n.handleMethod(o), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var o, r, s = t(this), a = s.data("remote") !== e;
        if (!n.allowAction(s))return n.stopEverything(i);
        if (s.attr("novalidate") == e && (o = n.blankInputs(s, n.requiredInputSelector), o && n.fire(s, "ajax:aborted:required", [o])))return n.stopEverything(i);
        if (a) {
            if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [r]);
                return l || setTimeout(function () {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function () {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i))return n.stopEverything(e);
        var o = i.attr("name"), r = o ? {name: o, value: i.val()} : null;
        i.closest("form").data("ujs:submit-button", r)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), function () {
    var t = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    this.I18n = function () {
        function e(e) {
            this.translations = null != e ? e : {}, this.translate = t(this.translate, this)
        }

        return e.translate = function (t, e) {
            return void 0 !== window.i18n ? window.i18n.translate(t, e) : void 0
        }, e.prototype.translate = function (t, e) {
            var n, i, o, r, s, a, l;
            for (r = t.split("."), n = 0, o = r.length; o > n; n++)a = r[n], s = this._getRawTranslation(null != s ? s : this.translations, a);
            for (i in e)l = e[i], s = s.replace(new RegExp("%{" + i + "}", "g"), l);
            return null != s ? s : a
        }, e.prototype._getRawTranslation = function (t, e) {
            return t[e]
        }, e
    }(), $.get("/translations", function (t) {
        return window.i18n = new I18n(t)
    }), window.translate = window.t = I18n.translate
}.call(this), /*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
    function () {
        function t() {
        }

        function e(t, e) {
            for (var n = t.length; n--;)if (t[n].listener === e)return n;
            return -1
        }

        function n(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }

        var i = t.prototype, o = this, r = o.EventEmitter;
        i.getListeners = function (t) {
            var e, n, i = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (n in i)i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, i.flattenListeners = function (t) {
            var e, n = [];
            for (e = 0; t.length > e; e += 1)n.push(t[e].listener);
            return n
        }, i.getListenersAsObject = function (t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, i.addListener = function (t, n) {
            var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
            for (i in o)o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {listener: n, once: !1});
            return this
        }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
            return this.addListener(t, {listener: e, once: !0})
        }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
            return this.getListeners(t), this
        }, i.defineEvents = function (t) {
            for (var e = 0; t.length > e; e += 1)this.defineEvent(t[e]);
            return this
        }, i.removeListener = function (t, n) {
            var i, o, r = this.getListenersAsObject(t);
            for (o in r)r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function (t, e, n) {
            var i, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)for (i = n.length; i--;)r.call(this, e, n[i]); else for (i in e)e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
            return this
        }, i.removeEvent = function (t) {
            var e, n = typeof t, i = this._getEvents();
            if ("string" === n)delete i[t]; else if ("object" === n)for (e in i)i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
            var n, i, o, r, s = this.getListenersAsObject(t);
            for (o in s)if (s.hasOwnProperty(o))for (i = s[o].length; i--;)n = s[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this), function (t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function (t, n, i) {
        t[n + i] = i.handleEvent ? function () {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function () {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function () {
    };
    n.removeEventListener ? o = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function (t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {bind: i, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : t.eventie = r
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return e(t, n, i)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, n) {
    function i(t, e) {
        for (var n in e)t[n] = e[n];
        return t
    }

    function o(t) {
        return "[object Array]" === h.call(t)
    }

    function r(t) {
        var e = [];
        if (o(t))e = t; else if ("number" == typeof t.length)for (var n = 0, i = t.length; i > n; n++)e.push(t[n]); else e.push(t);
        return e
    }

    function s(t, e, n) {
        if (!(this instanceof s))return new s(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = r(t), this.options = i({}, this.options), "function" == typeof e ? n = e : i(this.options, e), n && this.on("always", n), this.getImages(), c && (this.jqDeferred = new c.Deferred);
        var o = this;
        setTimeout(function () {
            o.check()
        })
    }

    function a(t) {
        this.img = t
    }

    function l(t) {
        this.src = t, p[t] = this
    }

    var c = t.jQuery, u = t.console, d = void 0 !== u, h = Object.prototype.toString;
    s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var n = this.elements[t];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i))for (var o = n.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                var a = o[r];
                this.addImage(a)
            }
        }
    }, s.prototype.addImage = function (t) {
        var e = new a(t);
        this.images.push(e)
    }, s.prototype.check = function () {
        function t(t, o) {
            return e.options.debug && d && u.log("confirm", t, o), e.progress(t), n++, n === i && e.complete(), !0
        }

        var e = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken = !1, !i)return void this.complete();
        for (var o = 0; i > o; o++) {
            var r = this.images[o];
            r.on("confirm", t), r.check()
        }
    }, s.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var n = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[n](e)
            }
        })
    }, c && (c.fn.imagesLoaded = function (t, e) {
        var n = new s(this, t, e);
        return n.jqDeferred.promise(c(this))
    }), a.prototype = new e, a.prototype.check = function () {
        var t = p[this.img.src] || new l(this.img.src);
        if (t.isConfirmed)return void this.confirm(t.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var e = this;
        t.on("confirm", function (t, n) {
            return e.confirm(t.isLoaded, n), !0
        }), t.check()
    }, a.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var p = {};
    return l.prototype = new e, l.prototype.check = function () {
        if (!this.isChecked) {
            var t = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.src, this.isChecked = !0
        }
    }, l.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, l.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, l.prototype.confirm = function (t, e) {
        this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, l.prototype.unbindProxyEvents = function (t) {
        n.unbind(t.target, "load", this), n.unbind(t.target, "error", this)
    }, s
}), /*!
 * Masonry PACKAGED v3.2.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
    !function (t) {
        function e() {
        }

        function n(t) {
            function n(e) {
                e.prototype.option || (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, n) {
                t.fn[e] = function (o) {
                    if ("string" == typeof o) {
                        for (var s = i.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var c = this[a], u = t.data(c, e);
                            if (u)if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var d = u[o].apply(u, s);
                                if (void 0 !== d)return d
                            } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var i = t.data(this, e);
                        i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
                    })
                }
            }

            if (t) {
                var r = "undefined" == typeof console ? e : function (t) {
                    console.error(t)
                };
                return t.bridget = function (t, e) {
                    n(e), o(t, e)
                }, t.bridget
            }
        }

        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window), function (t) {
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function (t, n, i) {
        t[n + i] = i.handleEvent ? function () {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function () {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var o = function () {
    };
    n.removeEventListener ? o = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (o = function (t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var r = {bind: i, unbind: o};
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this), function (t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function n(t) {
        var n = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || n || i()
    }

    function i() {
        e.isReady = !0;
        for (var t = 0, n = s.length; n > t; t++) {
            var i = s[t];
            i()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
    }

    var r = t.document, s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function () {
    function t() {
    }

    function e(t, e) {
        for (var n = t.length; n--;)if (t[n].listener === e)return n;
        return -1
    }

    function n(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var i = t.prototype, o = this, r = o.EventEmitter;
    i.getListeners = function (t) {
        var e, n, i = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (n in i)i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1)n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function (t, n) {
        var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
        for (i in o)o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
        return this.getListeners(t), this
    }, i.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1)this.defineEvent(t[e]);
        return this
    }, i.removeListener = function (t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r)r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function (t, e, n) {
        var i, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)for (i = n.length; i--;)r.call(this, e, n[i]); else for (i in e)e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function (t) {
        var e, n = typeof t, i = this._getEvents();
        if ("string" === n)delete i[t]; else if (t instanceof RegExp)for (e in i)i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
        var n, i, o, r, s = this.getListenersAsObject(t);
        for (o in s)if (s.hasOwnProperty(o))for (i = s[o].length; i--;)n = s[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function (t) {
    function e(t) {
        if (t) {
            if ("string" == typeof i[t])return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = n.length; r > o; o++)if (e = n[o] + t, "string" == typeof i[e])return e
        }
    }

    var n = "Webkit Moz ms Ms O".split(" "), i = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function (t) {
    function e(t) {
        var e = parseFloat(t), n = -1 === t.indexOf("%") && !isNaN(e);
        return n && e
    }

    function n() {
    }

    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, n = s.length; n > e; e++) {
            var i = s[e];
            t[i] = 0
        }
        return t
    }

    function o(n) {
        function o() {
            if (!h) {
                h = !0;
                var i = t.getComputedStyle;
                if (c = function () {
                        var t = i ? function (t) {
                            return i(t, null)
                        } : function (t) {
                            return t.currentStyle
                        };
                        return function (e) {
                            var n = t(e);
                            return n || r("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                    }(), u = n("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = c(o);
                    d = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var n = c(t);
                if ("none" === n.display)return i();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!u || !n[u] || "border-box" !== n[u]), h = 0, p = s.length; p > h; h++) {
                    var f = s[h], m = n[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var v = r.paddingLeft + r.paddingRight, y = r.paddingTop + r.paddingBottom, b = r.marginLeft + r.marginRight, w = r.marginTop + r.marginBottom, x = r.borderLeftWidth + r.borderRightWidth, _ = r.borderTopWidth + r.borderBottomWidth, k = a && d, C = e(n.width);
                C !== !1 && (r.width = C + (k ? 0 : v + x));
                var T = e(n.height);
                return T !== !1 && (r.height = T + (k ? 0 : y + _)), r.innerWidth = r.width - (v + x), r.innerHeight = r.height - (y + _), r.outerWidth = r.width + b, r.outerHeight = r.height + w, r
            }
        }

        function l(e, n) {
            if (t.getComputedStyle || -1 === n.indexOf("%"))return n;
            var i = e.style, o = i.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
        }

        var c, u, d, h = !1;
        return a
    }

    var r = "undefined" == typeof console ? n : function (t) {
        console.error(t)
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function (t) {
    function e(t, e) {
        return t[s](e)
    }

    function n(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }

    function i(t, e) {
        n(t);
        for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)if (i[o] === t)return !0;
        return !1
    }

    function o(t, i) {
        return n(t), e(t, i)
    }

    var r, s = function () {
        if (t.matchesSelector)return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
            var o = e[n], r = o + "MatchesSelector";
            if (t[r])return r
        }
    }();
    if (s) {
        var a = document.createElement("div"), l = e(a, "div");
        r = l ? e : o
    } else r = i;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype), function (t) {
    function e(t, e) {
        for (var n in e)t[n] = e[n];
        return t
    }

    function n(t) {
        for (var e in t)return !1;
        return e = null, !0
    }

    function i(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    function o(t, o, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
        }

        var l = r("transition"), c = r("transform"), u = l && c, d = !!r("perspective"), h = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[l], p = ["transform", "transition", "transitionDuration", "transitionProperty"], f = function () {
            for (var t = {}, e = 0, n = p.length; n > e; e++) {
                var i = p[e], o = r(i);
                o && o !== i && (t[i] = o)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, a.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function () {
            this.size = o(this.element)
        }, a.prototype.css = function (t) {
            var e = this.element.style;
            for (var n in t) {
                var i = f[n] || n;
                e[i] = t[n]
            }
        }, a.prototype.getPosition = function () {
            var t = s(this.element), e = this.layout.options, n = e.isOriginLeft, i = e.isOriginTop, o = parseInt(t[n ? "left" : "right"], 10), r = parseInt(t[i ? "top" : "bottom"], 10);
            o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
        }, a.prototype.layoutPosition = function () {
            var t = this.layout.size, e = this.layout.options, n = {};
            e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
        };
        var m = d ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x, i = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)return void this.layoutPosition();
            var a = t - n, l = e - i, c = {}, u = this.layout.options;
            a = u.isOriginLeft ? a : -a, l = u.isOriginTop ? l : -l, c.transform = m(a, l), this.transition({
                to: c,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd)e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to)e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var g = c && i(c) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: g,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(h, this, !1))
        }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        a.prototype.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn, i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var o = e.onEnd[i];
                    o.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
        }, a.prototype._removeStyles = function (t) {
            var e = {};
            for (var n in t)e[n] = "";
            this.css(e)
        };
        var y = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function () {
            this.css(y)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!l || !parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
            var t = this;
            this.on("transitionEnd", function () {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var t = this.layout.options;
            this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
        }, a.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, a.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, a
    }

    var r = t.getComputedStyle, s = r ? function (t) {
        return r(t, null)
    } : function (t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function (t) {
    function e(t, e) {
        for (var n in e)t[n] = e[n];
        return t
    }

    function n(t) {
        return "[object Array]" === d.call(t)
    }

    function i(t) {
        var e = [];
        if (n(t))e = t; else if (t && "number" == typeof t.length)for (var i = 0, o = t.length; o > i; i++)e.push(t[i]); else e.push(t);
        return e
    }

    function o(t, e) {
        var n = p(e, t);
        -1 !== n && e.splice(n, 1)
    }

    function r(t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }

    function s(n, s, d, p, f, m) {
        function g(t, n) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !h(t))return void(l && l.error("Bad " + this.constructor.namespace + " element: " + t));
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
            var i = ++v;
            this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var v = 0, y = {};
        return g.namespace = "outlayer", g.Item = m, g.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, e(g.prototype, d.prototype), g.prototype.option = function (t) {
            e(this.options, t)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                var s = e[o], a = new n(s, this);
                i.push(a)
            }
            return i
        }, g.prototype._filterFindItemElements = function (t) {
            t = i(t);
            for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                var s = t[o];
                if (h(s))if (e) {
                    f(s, e) && n.push(s);
                    for (var a = s.querySelectorAll(e), l = 0, c = a.length; c > l; l++)n.push(a[l])
                } else n.push(s)
            }
            return n
        }, g.prototype.getItemElements = function () {
            for (var t = [], e = 0, n = this.items.length; n > e; e++)t.push(this.items[e].element);
            return t
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = p(this.element)
        }, g.prototype._getMeasurement = function (t, e) {
            var n, i = this.options[t];
            i ? ("string" == typeof i ? n = this.element.querySelector(i) : h(i) && (n = i), this[t] = n ? p(n)[e] : i) : this[t] = 0
        }, g.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, g.prototype._getItemsForLayout = function (t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                o.isIgnored || e.push(o)
            }
            return e
        }, g.prototype._layoutItems = function (t, e) {
            function n() {
                i.emitEvent("layoutComplete", [i, t])
            }

            var i = this;
            if (!t || !t.length)return void n();
            this._itemsOn(t, "layout", n);
            for (var o = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], l = this._getItemLayoutPosition(a);
                l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
            }
            this._processLayoutQueue(o)
        }, g.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, g.prototype._processLayoutQueue = function (t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, g.prototype._positionItem = function (t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, g.prototype._getContainerSize = u, g.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, g.prototype._itemsOn = function (t, e, n) {
            function i() {
                return o++, o === r && n.call(s), !0
            }

            for (var o = 0, r = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                var c = t[a];
                c.on(e, i)
            }
        }, g.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, g.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, g.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, g.prototype.unstamp = function (t) {
            if (t = this._find(t))for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                o(i, this.stamps), this.unignore(i)
            }
        }, g.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, g.prototype._manageStamp = u, g.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), n = this._boundingRect, i = p(t), o = {
                left: e.left - n.left - i.marginLeft,
                top: e.top - n.top - i.marginTop,
                right: n.right - e.right - i.marginRight,
                bottom: n.bottom - e.bottom - i.marginBottom
            };
            return o
        }, g.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var t = p(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, g.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, g.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, g.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)for (var n = 0; e > n; n++) {
                var i = t[n];
                i.reveal()
            }
        }, g.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)for (var n = 0; e > n; n++) {
                var i = t[n];
                i.hide()
            }
        }, g.prototype.getItem = function (t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t)return i
            }
        }, g.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n], r = this.getItem(o);
                    r && e.push(r)
                }
                return e
            }
        }, g.prototype.remove = function (t) {
            t = i(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function () {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var n = 0, r = e.length; r > n; n++) {
                    var s = e[n];
                    s.remove(), o(s, this.items)
                }
            }
        }, g.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete y[o], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, g.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && y[e]
        }, g.create = function (t, n) {
            function i() {
                g.apply(this, arguments)
            }

            return Object.create ? i.prototype = Object.create(g.prototype) : e(i.prototype, g.prototype), i.prototype.constructor = i, i.defaults = e({}, g.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = g.data, i.Item = function () {
                m.apply(this, arguments)
            }, i.Item.prototype = new m, s(function () {
                for (var e = r(t), n = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, u = n.length; u > s; s++) {
                    var d, h = n[s], p = h.getAttribute(o);
                    try {
                        d = p && JSON.parse(p)
                    } catch (f) {
                        l && l.error("Error parsing " + o + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + f);
                        continue
                    }
                    var m = new i(h, d);
                    c && c.data(h, t, m)
                }
            }), c && c.bridget && c.bridget(t, i), i
        }, g.Item = m, g
    }

    var a = t.document, l = t.console, c = t.jQuery, u = function () {
    }, d = Object.prototype.toString, h = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
        return t instanceof HTMLElement
    } : function (t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, p = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function (t) {
    function e(t, e) {
        var i = t.create("masonry");
        return i.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, i.prototype.getContainerWidth = function () {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element, n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
            o = Math.min(o, this.cols);
            for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = n(r, s), l = {
                x: this.columnWidth * a,
                y: s
            }, c = s + t.size.outerHeight, u = this.cols + 1 - r.length, d = 0; u > d; d++)this.colYs[a + d] = c;
            return l
        }, i.prototype._getColGroup = function (t) {
            if (2 > t)return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                var o = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function (t) {
            var n = e(t), i = this._getElementOffset(t), o = this.options.isOriginLeft ? i.left : i.right, r = o + n.outerWidth, s = Math.floor(o / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, c = s; a >= c; c++)this.colYs[c] = Math.max(l, this.colYs[c])
        }, i.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {height: this.maxY};
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, i
    }

    var n = Array.prototype.indexOf ? function (t, e) {
        return t.indexOf(e)
    } : function (t, e) {
        for (var n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            if (o === e)return n
        }
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), window.Modernizr = function (t, e, n) {
    function i(t) {
        b.cssText = t
    }

    function o(t, e) {
        return i(k.join(t + ";") + (e || ""))
    }

    function r(t, e) {
        return typeof t === e
    }

    function s(t, e) {
        return !!~("" + t).indexOf(e)
    }

    function a(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!s(o, "-") && b[o] !== n)return "pfx" == e ? o : !0
        }
        return !1
    }

    function l(t, e, i) {
        for (var o in t) {
            var s = e[t[o]];
            if (s !== n)return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s
        }
        return !1
    }

    function c(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1), o = (t + " " + T.join(i + " ") + i).split(" ");
        return r(e, "string") || r(e, "undefined") ? a(o, e) : (o = (t + " " + E.join(i + " ") + i).split(" "), l(o, e, n))
    }

    function u() {
        f.input = function (n) {
            for (var i = 0, o = n.length; o > i; i++)$[n[i]] = !!(n[i]in w);
            return $.list && ($.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), $
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (t) {
            for (var i, o, r, s = 0, a = t.length; a > s; s++)w.setAttribute("type", o = t[s]), i = "text" !== w.type, i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), N[t[s]] = !!i;
            return N
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var d, h, p = "2.8.3", f = {}, m = !0, g = e.documentElement, v = "modernizr", y = e.createElement(v), b = y.style, w = e.createElement("input"), x = ":)", _ = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), C = "Webkit Moz O ms", T = C.split(" "), E = C.toLowerCase().split(" "), S = {svg: "http://www.w3.org/2000/svg"}, D = {}, N = {}, $ = {}, A = [], I = A.slice, j = function (t, n, i, o) {
        var r, s, a, l, c = e.createElement("div"), u = e.body, d = u || e.createElement("body");
        if (parseInt(i, 10))for (; i--;)a = e.createElement("div"), a.id = o ? o[i] : v + (i + 1), c.appendChild(a);
        return r = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), s = n(c, t), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l), !!s
    }, M = function () {
        function t(t, o) {
            o = o || e.createElement(i[t] || "div"), t = "on" + t;
            var s = t in o;
            return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
        }

        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t
    }(), L = {}.hasOwnProperty;
    h = r(L, "undefined") || r(L.call, "undefined") ? function (t, e) {
        return e in t && r(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return L.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var e = this;
        if ("function" != typeof e)throw new TypeError;
        var n = I.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var o = function () {
                };
                o.prototype = e.prototype;
                var r = new o, s = e.apply(r, n.concat(I.call(arguments)));
                return Object(s) === s ? s : r
            }
            return e.apply(t, n.concat(I.call(arguments)))
        };
        return i
    }), D.flexbox = function () {
        return c("flexWrap")
    }, D.canvas = function () {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }, D.canvastext = function () {
        return !(!f.canvas || !r(e.createElement("canvas").getContext("2d").fillText, "function"))
    }, D.webgl = function () {
        return !!t.WebGLRenderingContext
    }, D.touch = function () {
        var n;
        return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : j(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
            n = 9 === t.offsetTop
        }), n
    }, D.geolocation = function () {
        return "geolocation"in navigator
    }, D.postmessage = function () {
        return !!t.postMessage
    }, D.websqldatabase = function () {
        return !!t.openDatabase
    }, D.indexedDB = function () {
        return !!c("indexedDB", t)
    }, D.hashchange = function () {
        return M("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
    }, D.history = function () {
        return !(!t.history || !history.pushState)
    }, D.draganddrop = function () {
        var t = e.createElement("div");
        return "draggable"in t || "ondragstart"in t && "ondrop"in t
    }, D.websockets = function () {
        return "WebSocket"in t || "MozWebSocket"in t
    }, D.rgba = function () {
        return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
    }, D.hsla = function () {
        return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
    }, D.multiplebgs = function () {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
    }, D.backgroundsize = function () {
        return c("backgroundSize")
    }, D.borderimage = function () {
        return c("borderImage")
    }, D.borderradius = function () {
        return c("borderRadius")
    }, D.boxshadow = function () {
        return c("boxShadow")
    }, D.textshadow = function () {
        return "" === e.createElement("div").style.textShadow
    }, D.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(b.opacity)
    }, D.cssanimations = function () {
        return c("animationName")
    }, D.csscolumns = function () {
        return c("columnCount")
    }, D.cssgradients = function () {
        var t = "background-image:", e = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "linear-gradient(left top,#9f9, white);";
        return i((t + "-webkit- ".split(" ").join(e + t) + k.join(n + t)).slice(0, -t.length)), s(b.backgroundImage, "gradient")
    }, D.cssreflections = function () {
        return c("boxReflect")
    }, D.csstransforms = function () {
        return !!c("transform")
    }, D.csstransforms3d = function () {
        var t = !!c("perspective");
        return t && "webkitPerspective"in g.style && j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), t
    }, D.csstransitions = function () {
        return c("transition")
    }, D.fontface = function () {
        var t;
        return j('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
            var o = e.getElementById("smodernizr"), r = o.sheet || o.styleSheet, s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }), t
    }, D.generatedcontent = function () {
        var t;
        return j(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
            t = e.offsetHeight >= 3
        }), t
    }, D.video = function () {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (i) {
        }
        return n
    }, D.audio = function () {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {
        }
        return n
    }, D.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, D.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (t) {
            return !1
        }
    }, D.webworkers = function () {
        return !!t.Worker
    }, D.applicationcache = function () {
        return !!t.applicationCache
    }, D.svg = function () {
        return !!e.createElementNS && !!e.createElementNS(S.svg, "svg").createSVGRect
    }, D.inlinesvg = function () {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == S.svg
    }, D.smil = function () {
        return !!e.createElementNS && /SVGAnimate/.test(_.call(e.createElementNS(S.svg, "animate")))
    }, D.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(_.call(e.createElementNS(S.svg, "clipPath")))
    };
    for (var P in D)h(D, P) && (d = P.toLowerCase(), f[d] = D[P](), A.push((f[d] ? "" : "no-") + d));
    return f.input || u(), f.addTest = function (t, e) {
        if ("object" == typeof t)for (var i in t)h(t, i) && f.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), f[t] !== n)return f;
            e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
        }
        return f
    }, i(""), y = w = null, function (t, e) {
        function n(t, e) {
            var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
            return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var t = y.elements;
            return "string" == typeof t ? t.split(" ") : t
        }

        function o(t) {
            var e = v[t[m]];
            return e || (e = {}, g++, t[m] = g, v[g] = e), e
        }

        function r(t, n, i) {
            if (n || (n = e), u)return n.createElement(t);
            i || (i = o(n));
            var r;
            return r = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || p.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
        }

        function s(t, n) {
            if (t || (t = e), u)return t.createDocumentFragment();
            n = n || o(t);
            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++)r.createElement(a[s]);
            return r
        }

        function a(t, e) {
            e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                return y.shivMethods ? r(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(y, e.frag)
        }

        function l(t) {
            t || (t = e);
            var i = o(t);
            return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, i), t
        }

        var c, u, d = "3.7.0", h = t.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", g = 0, v = {};
        !function () {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", c = "hidden"in t, u = 1 == t.childNodes.length || function () {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                    }()
            } catch (n) {
                c = !0, u = !0
            }
        }();
        var y = {
            elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: h.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: h.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: s
        };
        t.html5 = y, l(e)
    }(this, e), f._version = p, f._prefixes = k, f._domPrefixes = E, f._cssomPrefixes = T, f.hasEvent = M, f.testProp = function (t) {
        return a([t])
    }, f.testAllProps = c, f.testStyles = j, f.prefixed = function (t, e, n) {
        return e ? c(t, e, n) : c(t, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), f
}(this, this.document), function (t, e, n) {
    function i(t) {
        return "[object Function]" == g.call(t)
    }

    function o(t) {
        return "string" == typeof t
    }

    function r() {
    }

    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t
    }

    function a() {
        var t = v.shift();
        y = 1, t ? t.t ? f(function () {
            ("c" == t.t ? h.injectCss : h.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
        }, 0) : (t(), a()) : y = 0
    }

    function l(t, n, i, o, r, l, c) {
        function u(e) {
            if (!p && s(d.readyState) && (b.r = p = 1, !y && a(), d.onload = d.onreadystatechange = null, e)) {
                "img" != t && f(function () {
                    x.removeChild(d)
                }, 50);
                for (var i in E[n])E[n].hasOwnProperty(i) && E[n][i].onload()
            }
        }

        var c = c || h.errorTimeout, d = e.createElement(t), p = 0, g = 0, b = {t: i, s: n, e: r, a: l, x: c};
        1 === E[n] && (g = 1, E[n] = []), "object" == t ? d.data = n : (d.src = n, d.type = t), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            u.call(this, g)
        }, v.splice(o, 0, b), "img" != t && (g || 2 === E[n] ? (x.insertBefore(d, w ? null : m), f(u, c)) : E[n].push(d))
    }

    function c(t, e, n, i, r) {
        return y = 0, e = e || "j", o(t) ? l("c" == e ? k : _, t, e, this.i++, n, i, r) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
    }

    function u() {
        var t = h;
        return t.loader = {load: c, i: 0}, t
    }

    var d, h, p = e.documentElement, f = t.setTimeout, m = e.getElementsByTagName("script")[0], g = {}.toString, v = [], y = 0, b = "MozAppearance"in p.style, w = b && !!e.createRange().compareNode, x = w ? p : m.parentNode, p = t.opera && "[object Opera]" == g.call(t.opera), p = !!e.attachEvent && !p, _ = b ? "object" : p ? "script" : "img", k = p ? "script" : _, C = Array.isArray || function (t) {
            return "[object Array]" == g.call(t)
        }, T = [], E = {}, S = {
        timeout: function (t, e) {
            return e.length && (t.timeout = e[0]), t
        }
    };
    h = function (t) {
        function e(t) {
            var e, n, i, t = t.split("!"), o = T.length, r = t.pop(), s = t.length, r = {
                url: r,
                origUrl: r,
                prefixes: t
            };
            for (n = 0; s > n; n++)i = t[n].split("="), (e = S[i.shift()]) && (r = e(r, i));
            for (n = 0; o > n; n++)r = T[n](r);
            return r
        }

        function s(t, o, r, s, a) {
            var l = e(t), c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, r, s, a) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(o) || i(c)) && r.load(function () {
                u(), o && o(l.origUrl, a, s), c && c(l.origUrl, a, s), E[l.url] = 2
            })))
        }

        function a(t, e) {
            function n(t, n) {
                if (t) {
                    if (o(t))n || (d = function () {
                        var t = [].slice.call(arguments);
                        h.apply(this, t), p()
                    }), s(t, d, e, 0, c); else if (Object(t) === t)for (l in a = function () {
                        var e, n = 0;
                        for (e in t)t.hasOwnProperty(e) && n++;
                        return n
                    }(), t)t.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function () {
                        var t = [].slice.call(arguments);
                        h.apply(this, t), p()
                    } : d[l] = function (t) {
                        return function () {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), p()
                        }
                    }(h[l])), s(t[l], d, e, l, c))
                } else!n && p()
            }

            var a, l, c = !!t.test, u = t.load || t.both, d = t.callback || r, h = d, p = t.complete || r;
            n(c ? t.yep : t.nope, !!u), u && n(u)
        }

        var l, c, d = this.yepnope.loader;
        if (o(t))s(t, 0, d, 0); else if (C(t))for (l = 0; l < t.length; l++)c = t[l], o(c) ? s(c, 0, d, 0) : C(c) ? h(c) : Object(c) === c && a(c, d); else Object(t) === t && a(t, d)
    }, h.addPrefix = function (t, e) {
        S[t] = e
    }, h.addFilter = function (t) {
        T.push(t)
    }, h.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", d = function () {
        e.removeEventListener("DOMContentLoaded", d, 0), e.readyState = "complete"
    }, 0)), t.yepnope = u(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, o, l, c) {
        var u, d, p = e.createElement("script"), o = o || h.errorTimeout;
        p.src = t;
        for (d in i)p.setAttribute(d, i[d]);
        n = c ? a : n || r, p.onreadystatechange = p.onload = function () {
            !u && s(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, f(function () {
            u || (u = 1, n(1))
        }, o), l ? p.onload() : m.parentNode.insertBefore(p, m)
    }, t.yepnope.injectCss = function (t, n, i, o, s, l) {
        var c, o = e.createElement("link"), n = l ? a : n || r;
        o.href = t, o.rel = "stylesheet", o.type = "text/css";
        for (c in i)o.setAttribute(c, i[c]);
        s || (m.parentNode.insertBefore(o, m), f(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, function () {
    "use strict";
    document.addEventListener && document.addEventListener("change", function (t) {
        var e = t.target;
        if ("INPUT" === e.tagName && "file" === e.type && e.getAttribute("data-direct")) {
            if (!e.files)return;
            var n = e.files[0], i = e.previousSibling, o = function (t, n) {
                var i = document.createEvent("CustomEvent");
                i.initCustomEvent(t, !0, !1, n), e.dispatchEvent(i)
            };
            if (n) {
                var r = e.getAttribute("data-url"), s = JSON.parse(e.getAttribute("data-fields") || "null"), a = new FormData;
                s && Object.keys(s).forEach(function (t) {
                    a.append(t, s[t])
                }), a.append(e.getAttribute("data-as"), n);
                var l = new XMLHttpRequest;
                l.addEventListener("load", function () {
                    if (e.classList.remove("uploading"), o("upload:complete", l.responseText), l.status >= 200 && l.status < 300 || 304 === l.status) {
                        var t = e.getAttribute("data-id") || JSON.parse(l.responseText).id;
                        i && (i.value = JSON.stringify({
                            id: t,
                            filename: n.name,
                            content_type: n.type,
                            size: n.size
                        })), e.removeAttribute("name"), o("upload:success", l.responseText)
                    } else o("upload:failure", l.responseText)
                }), l.upload.addEventListener("progress", function (t) {
                    t.lengthComputable && o("upload:progress", t)
                }), l.open("POST", r, !0), l.send(a), e.classList.add("uploading"), o("upload:start", l)
            }
        }
    })
}(), function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
}(this, function () {
    function t(t, e, n) {
        return e > t ? e : t > n ? n : t
    }

    function e(t) {
        return 100 * (-1 + t)
    }

    function n(t, n, i) {
        var o;
        return o = "translate3d" === c.positionUsing ? {transform: "translate3d(" + e(t) + "%,0,0)"} : "translate" === c.positionUsing ? {transform: "translate(" + e(t) + "%,0)"} : {"margin-left": e(t) + "%"}, o.transition = "all " + n + "ms " + i, o
    }

    function i(t, e) {
        var n = "string" == typeof t ? t : s(t);
        return n.indexOf(" " + e + " ") >= 0
    }

    function o(t, e) {
        var n = s(t), o = n + e;
        i(n, e) || (t.className = o.substring(1))
    }

    function r(t, e) {
        var n, o = s(t);
        i(t, e) && (n = o.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
    }

    function s(t) {
        return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
    }

    function a(t) {
        t && t.parentNode && t.parentNode.removeChild(t)
    }

    var l = {};
    l.version = "0.1.6";
    var c = l.settings = {
        minimum: .08,
        easing: "ease",
        positionUsing: "",
        speed: 200,
        trickle: !0,
        trickleRate: .02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function (t) {
        var e, n;
        for (e in t)n = t[e], void 0 !== n && t.hasOwnProperty(e) && (c[e] = n);
        return this
    }, l.status = null, l.set = function (e) {
        var i = l.isStarted();
        e = t(e, c.minimum, 1), l.status = 1 === e ? null : e;
        var o = l.render(!i), r = o.querySelector(c.barSelector), s = c.speed, a = c.easing;
        return o.offsetWidth, u(function (t) {
            "" === c.positionUsing && (c.positionUsing = l.getPositioningCSS()), d(r, n(e, s, a)), 1 === e ? (d(o, {
                transition: "none",
                opacity: 1
            }), o.offsetWidth, setTimeout(function () {
                d(o, {transition: "all " + s + "ms linear", opacity: 0}), setTimeout(function () {
                    l.remove(), t()
                }, s)
            }, s)) : setTimeout(t, s)
        }), this
    }, l.isStarted = function () {
        return "number" == typeof l.status
    }, l.start = function () {
        l.status || l.set(0);
        var t = function () {
            setTimeout(function () {
                l.status && (l.trickle(), t())
            }, c.trickleSpeed)
        };
        return c.trickle && t(), this
    }, l.done = function (t) {
        return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
    }, l.inc = function (e) {
        var n = l.status;
        return n ? ("number" != typeof e && (e = (1 - n) * t(Math.random() * n, .1, .95)), n = t(n + e, 0, .994), l.set(n)) : l.start()
    }, l.trickle = function () {
        return l.inc(Math.random() * c.trickleRate)
    }, function () {
        var t = 0, e = 0;
        l.promise = function (n) {
            return n && "resolved" != n.state() ? (0 == e && l.start(), t++, e++, n.always(function () {
                e--, 0 == e ? (t = 0, l.done()) : l.set((t - e) / t)
            }), this) : this
        }
    }(), l.render = function (t) {
        if (l.isRendered())return document.getElementById("nprogress");
        o(document.documentElement, "nprogress-busy");
        var n = document.createElement("div");
        n.id = "nprogress", n.innerHTML = c.template;
        var i, r = n.querySelector(c.barSelector), s = t ? "-100" : e(l.status || 0), u = document.querySelector(c.parent);
        return d(r, {
            transition: "all 0 linear",
            transform: "translate3d(" + s + "%,0,0)"
        }), c.showSpinner || (i = n.querySelector(c.spinnerSelector), i && a(i)), u != document.body && o(u, "nprogress-custom-parent"), u.appendChild(n), n
    }, l.remove = function () {
        r(document.documentElement, "nprogress-busy"), r(document.querySelector(c.parent), "nprogress-custom-parent");
        var t = document.getElementById("nprogress");
        t && a(t)
    }, l.isRendered = function () {
        return !!document.getElementById("nprogress")
    }, l.getPositioningCSS = function () {
        var t = document.body.style, e = "WebkitTransform"in t ? "Webkit" : "MozTransform"in t ? "Moz" : "msTransform"in t ? "ms" : "OTransform"in t ? "O" : "";
        return e + "Perspective"in t ? "translate3d" : e + "Transform"in t ? "translate" : "margin"
    };
    var u = function () {
        function t() {
            var n = e.shift();
            n && n(t)
        }

        var e = [];
        return function (n) {
            e.push(n), 1 == e.length && t()
        }
    }(), d = function () {
        function t(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (t, e) {
                return e.toUpperCase()
            })
        }

        function e(t) {
            var e = document.body.style;
            if (t in e)return t;
            for (var n, i = o.length, r = t.charAt(0).toUpperCase() + t.slice(1); i--;)if (n = o[i] + r, n in e)return n;
            return t
        }

        function n(n) {
            return n = t(n), r[n] || (r[n] = e(n))
        }

        function i(t, e, i) {
            e = n(e), t.style[e] = i
        }

        var o = ["Webkit", "O", "Moz", "ms"], r = {};
        return function (t, e) {
            var n, o, r = arguments;
            if (2 == r.length)for (n in e)o = e[n], void 0 !== o && e.hasOwnProperty(n) && i(t, n, o); else i(t, r[1], r[2])
        }
    }();
    return l
}), jQuery(function () {
    jQuery(document).on("page:fetch", function () {
        NProgress.start()
    }), jQuery(document).on("page:receive", function () {
        NProgress.set(.7)
    }), jQuery(document).on("page:change", function () {
        NProgress.done()
    }), jQuery(document).on("page:restore", function () {
        NProgress.remove()
    })
}), /* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.affix"), r = "object" == typeof e && e;
                o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
            })
        }

        var n = function (e, i) {
            this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function (t, e, n, i) {
            var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
            if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
            if ("bottom" == this.affixed)return null != n ? o + this.unpin <= r.top ? !1 : "bottom" : t - i >= o + s ? !1 : "bottom";
            var a = null == this.affixed, l = a ? o : r.top, c = a ? s : e;
            return null != n && n >= o ? "top" : null != i && l + c >= t - i ? "bottom" : !1
        }, n.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset)return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(), i = this.options.offset, o = i.top, r = i.bottom, s = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
                var a = this.getState(s, e, o, r);
                if (this.affixed != a) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented())return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == a && this.$element.offset({top: s - e - r})
            }
        };
        var i = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
            return t.fn.affix = i, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var n = t(this), i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var n = t(this), o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
            })
        }

        var n = '[data-dismiss="alert"]', i = function (e) {
            t(e).on("click", n, this.close)
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
            function n() {
                s.detach().trigger("closed.bs.alert").remove()
            }

            var o = t(this), r = o.attr("data-target");
            r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t(r);
            e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var o = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
            return t.fn.alert = o, this
        }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
    }(jQuery), /* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.button"), r = "object" == typeof e && e;
                o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }

        var n = function (e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
        };
        n.VERSION = "3.3.5", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
            var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", r = i.data();
            e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
                i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, n.prototype.toggle = function () {
            var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var i = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
            return t.fn.button = i, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
            var i = t(n.target);
            i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.carousel"), r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), s = "string" == typeof e ? e : r.slide;
                o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
            })
        }

        var n = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, n.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
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
            }
        }, n.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, n.prototype.getItemIndex = function (t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, n.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
            if (i && !this.options.wrap)return e;
            var o = "prev" == t ? -1 : 1, r = (n + o) % this.$items.length;
            return this.$items.eq(r)
        }, n.prototype.to = function (t) {
            var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, n.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, n.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, n.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, n.prototype.slide = function (e, i) {
            var o = this.$element.find(".item.active"), r = i || this.getItemForDirection(e, o), s = this.interval, a = "next" == e ? "left" : "right", l = this;
            if (r.hasClass("active"))return this.sliding = !1;
            var c = r[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                    d && d.addClass("active")
                }
                var h = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
                    r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(h)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
            }
        };
        var i = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = i, this
        };
        var o = function (n) {
            var i, o = t(this), r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var s = t.extend({}, r.data(), o.data()), a = o.attr("data-slide-to");
                a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), n.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var n = t(this);
                e.call(n, n.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }

        function n(e) {
            return this.each(function () {
                var n = t(this), o = n.data("bs.collapse"), r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
            })
        }

        var i = function (e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, i.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function () {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition)return a.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, i.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function () {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, i.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, i.prototype.getParent = function () {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
                var o = t(i);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var o = t.fn.collapse;
        t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = o, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
            var o = t(this);
            o.attr("data-target") || i.preventDefault();
            var r = e(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
            n.call(r, a)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }

        function n(n) {
            n && 3 === n.which || (t(o).remove(), t(r).each(function () {
                var i = t(this), o = e(i), r = {relatedTarget: this};
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))))
            }))
        }

        function i(e) {
            return this.each(function () {
                var n = t(this), i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
            })
        }

        var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
        s.VERSION = "3.3.5", s.prototype.toggle = function (i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var r = e(o), s = r.hasClass("open");
                if (n(), !s) {
                    "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                    var a = {relatedTarget: this};
                    if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                    o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, s.prototype.keydown = function (n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var i = t(this);
                if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = e(i), s = o.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                    var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                    if (l.length) {
                        var c = l.index(n.target);
                        38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery), /* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.tab");
                o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
            })
        }

        var n = function (e) {
            this.element = t(e)
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
            var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
            if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"), r = t.Event("hide.bs.tab", {relatedTarget: e[0]}), s = t.Event("show.bs.tab", {relatedTarget: o[0]});
                if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var a = t(i);
                    this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                        o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    })
                }
            }
        }, n.prototype.activate = function (e, i, o) {
            function r() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }

            var s = i.find("> .active"), a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
            s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
            return t.fn.tab = i, this
        };
        var o = function (n) {
            n.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery), /* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
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
            for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
            return !1
        }

        t.fn.emulateTransitionEnd = function (e) {
            var n = !1, i = this;
            t(this).one("bsTransitionEnd", function () {
                n = !0
            });
            var o = function () {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
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
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function n(n) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.scrollspy"), r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }

        e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function () {
            var e = this, n = "offset", i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                var e = t(this), o = e.data("target") || e.attr("href"), r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [[r[n]().top + i, o]] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, r = this.targets, s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i)return s != (t = r[r.length - 1]) && this.activate(t);
            if (s && e < o[0])return this.activeTarget = null, this.clear();
            for (t = o.length; t--;)s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function () {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var i = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = i, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                n.call(e, e.data())
            })
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e, i) {
            return this.each(function () {
                var o = t(this), r = o.data("bs.modal"), s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
                r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
            })
        }

        var n = function (e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, n.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, n.prototype.show = function (e) {
            var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = t.Event("shown.bs.modal", {relatedTarget: e});
                o ? i.$dialog.one("bsTransitionEnd", function () {
                    i.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            }))
        }, n.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
        }, n.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, n.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, n.prototype.resize = function () {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, n.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, n.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, n.prototype.backdrop = function (e) {
            var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function () {
                    i.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
            } else e && e()
        }, n.prototype.handleUpdate = function () {
            this.adjustDialog()
        }, n.prototype.adjustDialog = function () {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, n.prototype.resetAdjustments = function () {
            this.$element.css({paddingLeft: "", paddingRight: ""})
        }, n.prototype.checkScrollbar = function () {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, n.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, n.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", this.originalBodyPad)
        }, n.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var i = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
            return t.fn.modal = i, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
            var i = t(this), o = i.attr("href"), r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), s = r.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, r.data(), i.data());
            i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                    i.is(":visible") && i.trigger("focus")
                })
            }), e.call(r, s, this)
        })
    }(jQuery), /* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.tooltip"), r = "object" == typeof e && e;
                (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
            })
        }

        var n = function (t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
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
        }, n.prototype.init = function (e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var s = o[r];
                if ("click" == s)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin", l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.getOptions = function (e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, n.prototype.getDelegateOptions = function () {
            var e = {}, n = this.getDefaults();
            return this._options && t.each(this._options, function (t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, n.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show())
        }, n.prototype.isInStateTrue = function () {
            for (var t in this.inState)if (this.inState[t])return !0;
            return !1
        }, n.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide())
        }, n.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !i)return;
                var o = this, r = this.tip(), s = this.getUID(this.type);
                this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
                c && (a = a.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(), d = r[0].offsetWidth, h = r[0].offsetHeight;
                if (c) {
                    var p = a, f = this.getPosition(this.$viewport);
                    a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, r.removeClass(p).addClass(a)
                }
                var m = this.getCalculatedOffset(a, u, d, h);
                this.applyPlacement(m, a);
                var g = function () {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
            }
        }, n.prototype.applyPlacement = function (e, n) {
            var i = this.tip(), o = i[0].offsetWidth, r = i[0].offsetHeight, s = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
                using: function (t) {
                    i.css({top: Math.round(t.top), left: Math.round(t.left)})
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth, c = i[0].offsetHeight;
            "top" == n && c != r && (e.top = e.top + r - c);
            var u = this.getViewportAdjustedDelta(n, e, l, c);
            u.left ? e.left += u.left : e.top += u.top;
            var d = /top|bottom/.test(n), h = d ? 2 * u.left - o + l : 2 * u.top - r + c, p = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(h, i[0][p], d)
        }, n.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, n.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, n.prototype.hide = function (e) {
            function i() {
                "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
            }

            var o = this, r = t(this.$tip), s = t.Event("hide.bs." + this.type);
            return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
        }, n.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, n.prototype.hasContent = function () {
            return this.getTitle()
        }, n.prototype.getPosition = function (e) {
            e = e || this.$element;
            var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
            var r = i ? {
                top: 0,
                left: 0
            } : e.offset(), s = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
            return t.extend({}, o, s, a, r)
        }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {top: e.top + e.height / 2 - i / 2, left: e.left + e.width}
        }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
            var o = {top: 0, left: 0};
            if (!this.$viewport)return o;
            var r = this.options.viewport && this.options.viewport.padding || 0, s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - r - s.scroll, l = e.top + r - s.scroll + i;
                a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = e.left - r, u = e.left + r + n;
                c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
            }
            return o
        }, n.prototype.getTitle = function () {
            var t, e = this.$element, n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        }, n.prototype.getUID = function (t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t
        }, n.prototype.tip = function () {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, n.prototype.enable = function () {
            this.enabled = !0
        }, n.prototype.disable = function () {
            this.enabled = !1
        }, n.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, n.prototype.toggle = function (e) {
            var n = this;
            e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, n.prototype.destroy = function () {
            var t = this;
            clearTimeout(this.timeout), this.hide(function () {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = i, this
        }
    }(jQuery), /* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
    +function (t) {
        "use strict";
        function e(e) {
            return this.each(function () {
                var i = t(this), o = i.data("bs.popover"), r = "object" == typeof e && e;
                (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
            })
        }

        var n = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
        n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
            return n.DEFAULTS
        }, n.prototype.setContent = function () {
            var t = this.tip(), e = this.getTitle(), n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, n.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, n.prototype.getContent = function () {
            var t = this.$element, e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, n.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
            return t.fn.popover = i, this
        }
    }(jQuery), function () {
    var t;
    $.fn.twitter_bootstrap_confirmbox = {
        defaults: {
            title: null,
            proceed: "OK",
            proceed_class: "btn proceed",
            cancel: "Cancel",
            cancel_class: "btn cancel",
            fade: !1
        }
    }, t = function (t, e, n) {
        var i, o;
        return o = "function" == typeof $().emulateTransitionEnd ? 3 : 2, i = $(2 === o ? '<div class="modal hide" id="confirmation_dialog"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">\xd7</button> <h3 class="modal-title">...</h3> </div> <div class="modal-body"></div> <div class="modal-footer"></div> </div>' : '<div class="modal" id="confirmation_dialog" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">\xd7</button> <h4 class="modal-title">...</h4> </div> <div class="modal-body"></div> <div class="modal-footer"></div> </div> </div> </div>'), (e.data("confirm-fade") || $.fn.twitter_bootstrap_confirmbox.defaults.fade) && i.addClass("fade"), i.find(".modal-header").find(".modal-title").html(e.data("confirm-title") || $.fn.twitter_bootstrap_confirmbox.defaults.title || window.top.location.origin).end().end().find(".modal-body").html(t.toString().replace(/\n/g, "<br />")).end().find(".modal-footer").append($("<a />", {
            href: "#",
            "data-dismiss": "modal"
        }).html(e.data("confirm-cancel") || $.fn.twitter_bootstrap_confirmbox.defaults.cancel).addClass($.fn.twitter_bootstrap_confirmbox.defaults.cancel_class).addClass(e.data("confirm-cancel-class") || "btn-default").click(function (t) {
            return t.preventDefault(), i.modal("hide")
        }), $("<a />", {href: "#"}).html(e.data("confirm-proceed") || $.fn.twitter_bootstrap_confirmbox.defaults.proceed).addClass($.fn.twitter_bootstrap_confirmbox.defaults.proceed_class).addClass(e.data("confirm-proceed-class") || "btn-primary").click(function (t) {
            return t.preventDefault(), i.modal("hide"), n()
        })).end().on("hidden", function () {
            return $(this).remove()
        }).modal("show").appendTo(document.body)
    }, "function" == typeof $().modal && ($.rails.allowAction = function (e) {
        var n, i;
        return i = e.data("confirm"), n = !1, i ? ($.rails.fire(e, "confirm") && t(i, e, function () {
            var t, i;
            return $.rails.fire(e, "confirm:complete", [n]) ? (t = $.rails.allowAction, $.rails.allowAction = function () {
                return !0
            }, e.get(0).click ? e.get(0).click() : "undefined" != typeof Event && null !== Event ? (i = new Event("click", {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: 0,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                button: 0,
                relatedTarget: document.body.parentNode
            }), e.get(0).dispatchEvent(i)) : $.isFunction(document.createEvent) && (i = document.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, document.body.parentNode), e.get(0).dispatchEvent(i)), $.rails.allowAction = t) : void 0
        }), !1) : !0
    })
}.call(this), function () {
    var t = [].slice;
    !function (e, n) {
        var i;
        return i = function () {
            function t(t, n) {
                this.options = e.extend({}, this.defaults, n), this.$container = e(t), this.$table = e(t).find("table"), this.$context = e(this.options.context), this.init()
            }

            return t.prototype.defaults = {
                debug: !1,
                navSelector: "a[rel=next]",
                buffer: 1e3,
                loading: null,
                success: null,
                error: null,
                context: n,
                state: {paused: !1, loading: !1}
            }, t.prototype.init = function () {
                var t, e;
                return e = null, t = function (t) {
                    return function () {
                        return t.check()
                    }
                }(this), this.$context.scroll(function () {
                    return e && (clearTimeout(e), e = null), e = setTimeout(t, 250)
                })
            }, t.prototype._log = function (t) {
                return this.options.debug && "undefined" != typeof console && null !== console ? console.log(t) : void 0
            }, t.prototype.check = function () {
                var t, e, n;
                return e = this.$container.find(this.options.navSelector), 0 === e.size() ? this._log("No more pages to load") : (n = this.$context.scrollTop() + this.$context.height(), t = e.offset().top - n, this.options.state.paused ? this._log("Paused") : this.options.state.loading ? this._log("Waiting...") : t > this.options.buffer ? this._log(t - this.options.buffer + "px remaining...") : this.next())
            }, t.prototype.next = function () {
                return this.options.state.done ? this._log("Loaded all pages") : (this._loading(), e.getScript(this.$container.find(this.options.navSelector).attr("href")).done(function (t) {
                    return function () {
                        return t._success()
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t._error()
                    }
                }(this)))
            }, t.prototype._loading = function () {
                return this.options.state.loading = !0, this._log("Loading next page..."), "function" == typeof this.options.loading ? this.$container.find(this.options.navSelector).each(this.options.loading) : void 0
            }, t.prototype._success = function () {
                return this.options.state.loading = !1, this._log("New page loaded!"), "function" == typeof this.options.success ? this.$container.find(this.options.navSelector).each(this.options.success) : void 0
            }, t.prototype._error = function () {
                return this.options.state.loading = !1, this._log("Error loading new page :("), "function" == typeof this.options.error ? this.$container.find(this.options.navSelector).each(this.options.error) : void 0
            }, t.prototype.pause = function () {
                return this.options.state.paused = !0, this._log("Scroll checks paused")
            }, t.prototype.resume = function () {
                return this.options.state.paused = !1, this._log("Scroll checks resumed"), this.check()
            }, t
        }(), e.fn.extend({
            infinitePages: function () {
                var n, o;
                return o = arguments[0], n = 2 <= arguments.length ? t.call(arguments, 1) : [], this.each(function () {
                    var t, r;
                    return t = e(this), r = t.data("infinitepages"), r || t.data("infinitepages", r = new i(this, o)), "string" == typeof o ? r[o].apply(r, n) : void 0
                })
            }
        })
    }(window.jQuery, window)
}.call(this), function () {
    var t, e = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    t = function () {
        function t() {
        }

        var n, i;
        return t.defaults = {
            align: "right",
            delay: 4e3,
            dismiss: !0,
            spacing: 10,
            target: "body",
            title: !1,
            type: null,
            "class": ["alert", "growlyflash", "fade"],
            before_show: function () {
                return this.el.css(this.calc_css_position())
            }
        }, t.KEY_MAPPING = {
            alert: "warning",
            error: "danger",
            notice: "info",
            success: "success"
        }, t.DISMISS = '<button type="close" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>', n = function (t) {
            return t.replace(/^./, function (t) {
                return t.toUpperCase()
            })
        }, i = t.helpers = {
            dismiss: function () {
                return t.DISMISS
            }, title: function (t) {
                return "<strong>" + n(t) + "!</strong> "
            }
        }, t.FlashStruct = function () {
            function e(e, n) {
                this.msg = e, this.key = n, this.type = t.KEY_MAPPING[this.key]
            }

            return e.prototype.toString = function () {
                var t;
                return JSON.stringify((t = {}, t["" + this.msg] = this.key, t))
            }, e
        }(), t.Alert = function () {
            function t(t, n) {
                var o, r, s, a, l, c, u;
                this.flash = t, this.opts = n, this.close = e(this.close, this), this.show = e(this.show, this), l = this.opts, u = l.title, c = l.target, s = l.dismiss, r = l.delay, o = l.before_show, a = "", s && (a += i.dismiss()), u && (a += i.title(this.opts)), a += this.flash.msg, this.el = $("<div>", {
                    html: a,
                    "class": this.class_list().join(" "),
                    role: "alert"
                }), this.el.appendTo(c), null != o && o.call(this), this.show(), r && setTimeout(this.close, this.opts.delay)
            }

            var n, o;
            return n = function (t, e) {
                return this.splice(-~this.indexOf(t), 0, t + "-" + e)
            }, o = function (t) {
                return parseInt($(t).css("top"))
            }, t.prototype.class_list = function () {
                var t, e;
                return e = [].concat(this.opts["class"]), t = n.bind(e), this.opts.dismiss && t("alert", "dismissable"), null != this.opts.type && t("alert", this.opts.type), null != this.opts.align && t("growlyflash", this.opts.align), e
            }, t.prototype.show = function () {
                return this.el.toggleClass("in", !0)
            }, t.prototype.close = function () {
                var t;
                return "function" == typeof(t = this.el).alert ? t.alert("close") : void 0
            }, t.prototype.calc_top_offset = function (t) {
                var e, n;
                return n = t.spacing, e = o(this.el), this.el.siblings(".growlyflash").each(function () {
                    return e = Math.max(e, o(this) + $(this).outerHeight() + n)
                }), e
            }, t.prototype.calc_css_position = function (t) {
                return null == t && (t = {}), t.top = this.calc_top_offset(this.opts) + "px", "center" === this.opts.align && (t.marginLeft = "-" + this.el.outerWidth() / 2 + "px"), t
            }, t
        }(), t
    }(), window.Growlyflash = t, $.growlyflash = function (e, n) {
        var i;
        return null == n && (n = {}), n = $.extend(!0, {}, t.defaults, {type: e.type}, n), i = new t.Alert(e, n), e instanceof t.FlashStruct ? e : i
    }
}.call(this), function () {
    var t = [].slice, e = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    Growlyflash.Listener = function () {
        function n(t) {
            null == this.stack && (this.stack = new r), null != window.flashes && this.process_static(), $(t).on(i, function (t) {
                return function (e, n) {
                    return t.stack.push_only_fresh(a(n.getResponseHeader(o)))
                }
            }(this))
        }

        var i, o, r, s, a;
        return r = function () {
            function n() {
                var e;
                e = 1 <= arguments.length ? t.call(arguments, 0) : [], this.items = e
            }

            return n.prototype.purge = function () {
                return setTimeout(function (t) {
                    return function () {
                        return t.items.splice(0)
                    }
                }(this), 100)
            }, n.prototype.push = function (t, e) {
                return $.growlyflash(t), this.items.push(null != e ? e : t.toString())
            }, n.prototype.push_only_fresh = function (t) {
                var n, i, o, r, s;
                for (s = this.items.slice(-t.length), o = 0, r = t.length; r > o; o++)n = t[o], i = n.toString(), e.call(s, i) < 0 && this.push(n, i);
                return this.purge()
            }, n
        }(), o = "X-Message", i = "ajax:complete ajaxComplete", s = function (t) {
            var e, n, i;
            null == t && (t = {}), n = [];
            for (i in t)e = t[i], null != e && n.push(new Growlyflash.FlashStruct(e, i));
            return n
        }, a = function (t) {
            return null == t ? [] : s($.parseJSON(decodeURIComponent(t)))
        }, n.prototype.process_static = function () {
            var t, e, n, i;
            for (i = s(window.flashes), e = 0, n = i.length; n > e; e++)t = i[e], this.stack.push(t);
            return delete window.flashes
        }, n
    }(), Growlyflash.listen_on = function (t) {
        return null != this.listener ? this.listener : this.listener = new this.Listener(t)
    }
}.call(this), function () {
    jQuery(function () {
        return Growlyflash.listen_on(this)
    })
}.call(this), /*
 * bootstrap-filestyle
 * doc: http://markusslima.github.io/bootstrap-filestyle/
 * github: https://github.com/markusslima/bootstrap-filestyle
 *
 * Copyright (c) 2014 Markus Vinicius da Silva Lima
 * Version 1.1.2
 * Licensed under the MIT license.
 */
    function (t) {
        "use strict";
        var e = function (e, n) {
            this.options = n, this.$elementFilestyle = [], this.$element = t(e)
        };
        e.prototype = {
            clear: function () {
                this.$element.val(""), this.$elementFilestyle.find(":text").val(""), this.$elementFilestyle.find(".badge").remove()
            }, destroy: function () {
                this.$element.removeAttr("style").removeData("filestyle").val(""), this.$elementFilestyle.remove()
            }, disabled: function (t) {
                if (t === !0)this.options.disabled || (this.$element.attr("disabled", "true"), this.$elementFilestyle.find("label").attr("disabled", "true"), this.options.disabled = !0); else {
                    if (t !== !1)return this.options.disabled;
                    this.options.disabled && (this.$element.removeAttr("disabled"), this.$elementFilestyle.find("label").removeAttr("disabled"), this.options.disabled = !1)
                }
            }, buttonBefore: function (t) {
                if (t === !0)this.options.buttonBefore || (this.options.buttonBefore = !0, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles())); else {
                    if (t !== !1)return this.options.buttonBefore;
                    this.options.buttonBefore && (this.options.buttonBefore = !1, this.options.input && (this.$elementFilestyle.remove(), this.constructor(), this.pushNameFiles()))
                }
            }, icon: function (t) {
                if (t === !0)this.options.icon || (this.options.icon = !0, this.$elementFilestyle.find("label").prepend(this.htmlIcon())); else {
                    if (t !== !1)return this.options.icon;
                    this.options.icon && (this.options.icon = !1, this.$elementFilestyle.find(".glyphicon").remove())
                }
            }, input: function (t) {
                if (t === !0)this.options.input || (this.options.input = !0, this.options.buttonBefore ? this.$elementFilestyle.append(this.htmlInput()) : this.$elementFilestyle.prepend(this.htmlInput()), this.$elementFilestyle.find(".badge").remove(), this.pushNameFiles(), this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn")); else {
                    if (t !== !1)return this.options.input;
                    if (this.options.input) {
                        this.options.input = !1, this.$elementFilestyle.find(":text").remove();
                        var e = this.pushNameFiles();
                        e.length > 0 && this.options.badge && this.$elementFilestyle.find("label").append(' <span class="badge">' + e.length + "</span>"), this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")
                    }
                }
            }, size: function (t) {
                if (void 0 === t)return this.options.size;
                var e = this.$elementFilestyle.find("label"), n = this.$elementFilestyle.find("input");
                e.removeClass("btn-lg btn-sm"), n.removeClass("input-lg input-sm"), "nr" != t && (e.addClass("btn-" + t), n.addClass("input-" + t))
            }, buttonText: function (t) {
                return void 0 === t ? this.options.buttonText : (this.options.buttonText = t, void this.$elementFilestyle.find("label span").html(this.options.buttonText))
            }, buttonName: function (t) {
                return void 0 === t ? this.options.buttonName : (this.options.buttonName = t, void this.$elementFilestyle.find("label").attr({"class": "btn " + this.options.buttonName}))
            }, iconName: function (t) {
                return void 0 === t ? this.options.iconName : void this.$elementFilestyle.find(".glyphicon").attr({"class": ".glyphicon " + this.options.iconName})
            }, htmlIcon: function () {
                return this.options.icon ? '<span class="glyphicon ' + this.options.iconName + '"></span> ' : ""
            }, htmlInput: function () {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" disabled> ' : ""
            }, pushNameFiles: function () {
                var t = "", e = [];
                void 0 === this.$element[0].files ? e[0] = {name: this.$element[0] && this.$element[0].value} : e = this.$element[0].files;
                for (var n = 0; n < e.length; n++)t += e[n].name.split("\\").pop() + ", ";
                return this.$elementFilestyle.find(":text").val("" !== t ? t.replace(/\, $/g, "") : ""), e
            }, constructor: function () {
                var e = this, n = "", i = e.$element.attr("id"), o = "";
                "" !== i && i || (i = "filestyle-" + t(".bootstrap-filestyle").length, e.$element.attr({id: i})), o = '<span class="group-span-filestyle ' + (e.options.input ? "input-group-btn" : "") + '"><label for="' + i + '" class="btn ' + e.options.buttonName + " " + ("nr" == e.options.size ? "" : "btn-" + e.options.size) + '" ' + (e.options.disabled ? 'disabled="true"' : "") + ">" + e.htmlIcon() + e.options.buttonText + "</label></span>", n = e.options.buttonBefore ? o + e.htmlInput() : e.htmlInput() + o, e.$elementFilestyle = t('<div class="bootstrap-filestyle input-group">' + n + "</div>"), e.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (t) {
                    return 13 === t.keyCode || 32 === t.charCode ? (e.$elementFilestyle.find("label").click(), !1) : void 0
                }), e.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(e.$elementFilestyle), e.options.disabled && e.$element.attr("disabled", "true"), e.$element.change(function () {
                    var t = e.pushNameFiles();
                    0 == e.options.input && e.options.badge ? 0 == e.$elementFilestyle.find(".badge").length ? e.$elementFilestyle.find("label").append(' <span class="badge">' + t.length + "</span>") : 0 == t.length ? e.$elementFilestyle.find(".badge").remove() : e.$elementFilestyle.find(".badge").html(t.length) : e.$elementFilestyle.find(".badge").remove()
                }), window.navigator.userAgent.search(/firefox/i) > -1 && e.$elementFilestyle.find("label").click(function () {
                    return e.$element.click(), !1
                })
            }
        };
        var n = t.fn.filestyle;
        t.fn.filestyle = function (n, i) {
            var o = "", r = this.each(function () {
                if ("file" === t(this).attr("type")) {
                    var r = t(this), s = r.data("filestyle"), a = t.extend({}, t.fn.filestyle.defaults, n, "object" == typeof n && n);
                    s || (r.data("filestyle", s = new e(this, a)), s.constructor()), "string" == typeof n && (o = s[n](i))
                }
            });
            return void 0 !== typeof o ? o : r
        }, t.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: !0,
            badge: !0,
            icon: !0,
            buttonBefore: !1,
            disabled: !1
        }, t.fn.filestyle.noConflict = function () {
            return t.fn.filestyle = n, this
        }, t(function () {
            t(".filestyle").each(function () {
                var e = t(this), n = {
                    input: "false" === e.attr("data-input") ? !1 : !0,
                    icon: "false" === e.attr("data-icon") ? !1 : !0,
                    buttonBefore: "true" === e.attr("data-buttonBefore") ? !0 : !1,
                    disabled: "true" === e.attr("data-disabled") ? !0 : !1,
                    size: e.attr("data-size"),
                    buttonText: e.attr("data-buttonText"),
                    buttonName: e.attr("data-buttonName"),
                    iconName: e.attr("data-iconName"),
                    badge: "false" === e.attr("data-badge") ? !1 : !0
                };
                e.filestyle(n)
            })
        })
    }(window.jQuery), function () {
    var t, e, n, i, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, w, x, _, k, C, T, E, S, D, N, $, A, I, j, M, L, P, O, F, H, R, q, W, z, B, U, Y, V, K, X, Q, G, J, Z, te, ee, ne = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        }, ie = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)oe.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, oe = {}.hasOwnProperty, re = [].slice, se = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    j = {}, h = 10, G = !1, F = null, y = null, A = null, q = null, ee = null, i = {
        BEFORE_CHANGE: "page:before-change",
        FETCH: "page:fetch",
        RECEIVE: "page:receive",
        CHANGE: "page:change",
        UPDATE: "page:update",
        LOAD: "page:load",
        RESTORE: "page:restore",
        BEFORE_UNLOAD: "page:before-unload",
        EXPIRE: "page:expire"
    }, k = function (t) {
        var e;
        return t = new n(t), Y(), d(), null != F && F.start(), G && (e = J(t.absolute)) ? (C(e), T(t, null, !1)) : T(t, X)
    }, J = function (t) {
        var e;
        return e = j[t], e && !e.transitionCacheDisabled ? e : void 0
    }, w = function (t) {
        return null == t && (t = !0), G = t
    }, b = function (t) {
        return null == t && (t = !0), c ? t ? null != F ? F : F = new r("html") : (null != F && F.uninstall(), F = null) : void 0
    }, T = function (t, e, n) {
        return null == n && (n = !0), Z(i.FETCH, {url: t.absolute}), null != ee && ee.abort(), ee = new XMLHttpRequest, ee.open("GET", t.withoutHashForIE10compatibility(), !0), ee.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), ee.setRequestHeader("X-XHR-Referer", q), ee.onload = function () {
            var n;
            return Z(i.RECEIVE, {url: t.absolute}), (n = O()) ? (W(t), z(), p.apply(null, _(n)), I(), "function" == typeof e && e(), Z(i.LOAD)) : document.location.href = v() || t.absolute
        }, F && n && (ee.onprogress = function () {
            return function (t) {
                var e;
                return e = t.lengthComputable ? t.loaded / t.total * 100 : F.value + (100 - F.value) / 10, F.advanceTo(e)
            }
        }(this)), ee.onloadend = function () {
            return ee = null
        }, ee.onerror = function () {
            return document.location.href = t.absolute
        }, ee.send()
    }, C = function (t) {
        return null != ee && ee.abort(), p(t.title, t.body), H(t), Z(i.RESTORE)
    }, d = function () {
        var t;
        return t = new n(y.url), j[t.absolute] = {
            url: t.relative,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset,
            cachedAt: (new Date).getTime(),
            transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
        }, m(h)
    }, L = function (t) {
        return null == t && (t = h), /^[\d]+$/.test(t) ? h = parseInt(t) : void 0
    }, m = function (t) {
        var e, n, o, r, s, a;
        for (s = Object.keys(j), e = s.map(function (t) {
            return j[t].cachedAt
        }).sort(function (t, e) {
            return e - t
        }), a = [], n = 0, r = s.length; r > n; n++)o = s[n], j[o].cachedAt <= e[t] && (Z(i.EXPIRE, j[o]), a.push(delete j[o]));
        return a
    }, p = function (e, n, o, r) {
        return Z(i.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(n, document.body), null != o && t.update(o), Q(), r && x(), y = window.history.state, null != F && F.done(), Z(i.CHANGE), Z(i.UPDATE)
    }, x = function () {
        var t, e, n, i, o, r, s, a, l, c, u, d;
        for (d = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), n = 0, o = d.length; o > n; n++)if (u = d[n], "" === (l = u.type) || "text/javascript" === l) {
            for (e = document.createElement("script"), c = u.attributes, i = 0, r = c.length; r > i; i++)t = c[i], e.setAttribute(t.name, t.value);
            u.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(u.innerHTML)), a = u.parentNode, s = u.nextSibling, a.removeChild(u), a.insertBefore(e, s)
        }
    }, V = function (t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, Q = function () {
        var t, e;
        return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, W = function (t) {
        return (t = new n(t)).absolute !== q ? window.history.pushState({
            turbolinks: !0,
            url: t.absolute
        }, "", t.absolute) : void 0
    }, z = function () {
        var t, e;
        return (t = ee.getResponseHeader("X-XHR-Redirected-To")) ? (t = new n(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function () {
        var t;
        return null != (t = ee.getResponseHeader("Location")) && new n(t).crossOrigin() ? t : void 0
    }, Y = function () {
        return q = document.location.href
    }, U = function () {
        return window.history.replaceState({turbolinks: !0, url: document.location.href}, "", document.location.href)
    }, B = function () {
        return y = window.history.state
    }, I = function () {
        var t;
        return navigator.userAgent.match(/Firefox/) && !(t = new n).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, H = function (t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, X = function () {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, f = function (t) {
        var e, n, i;
        if (null == t || "object" != typeof t)return t;
        e = new t.constructor;
        for (n in t)i = t[n], e[n] = f(i);
        return e
    }, P = function (t) {
        var e, n;
        return n = (null != (e = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? e[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", n
    }, Z = function (t, e) {
        var n;
        return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), n = document.createEvent("Events"), e && (n.data = e), n.initEvent(t, !0, !0), document.dispatchEvent(n)
    }, M = function (t) {
        return !Z(i.BEFORE_CHANGE, {url: t})
    }, O = function () {
        var t, e, n, i, o, r;
        return e = function () {
            var t;
            return 400 <= (t = ee.status) && 600 > t
        }, r = function () {
            var t;
            return null != (t = ee.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, i = function (t) {
            var e, n, i, o, r;
            for (o = t.querySelector("head").childNodes, r = [], e = 0, n = o.length; n > e; e++)i = o[e], null != ("function" == typeof i.getAttribute ? i.getAttribute("data-turbolinks-track") : void 0) && r.push(i.getAttribute("src") || i.getAttribute("href"));
            return r
        }, t = function (t) {
            var e;
            return A || (A = i(document)), e = i(t), e.length !== A.length || o(e, A).length !== A.length
        }, o = function (t, e) {
            var n, i, o, r, s;
            for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), r = [], n = 0, i = t.length; i > n; n++)s = t[n], ne.call(e, s) >= 0 && r.push(s);
            return r
        }, !e() && r() && (n = g(ee.responseText), n && !t(n)) ? n : void 0
    }, _ = function (e) {
        var n;
        return n = e.querySelector("title"), [null != n ? n.textContent : void 0, V(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {
        get: function (t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'),
                token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
            }
        }, update: function (t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, g = function (t) {
        var e;
        return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, n = function () {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }

        return t.prototype.withoutHash = function () {
            return this.href.replace(this.hash, "").replace("#", "")
        }, t.prototype.withoutHashForIE10compatibility = function () {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function () {
            return 0 === this.hash.length
        }, t.prototype.crossOrigin = function () {
            return this.origin !== (new t).origin
        }, t.prototype._parse = function () {
            var t;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), o = function (t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
        }

        return ie(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
            var t, n, i, o;
            for (n = 1 <= arguments.length ? re.call(arguments, 0) : [], i = 0, o = n.length; o > i; i++)t = n[i], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function () {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._anchored = function () {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new n).withoutHash()
        }, e.prototype._nonHtml = function () {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function () {
            var t, e;
            for (e = this.originalElement; !t && e !== document;)t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function () {
            return 0 !== this.link.target.length
        }, e
    }(n), e = function () {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (M(this.link.absolute) || te(this.link.href), this.event.preventDefault()))
        }

        return t.installHandlerLast = function (e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function (e) {
            return new t(e)
        }, t.prototype._extractLink = function () {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName;)t = t.parentNode;
            return "A" === t.nodeName && 0 !== t.href.length ? this.link = new o(t) : void 0
        }, t.prototype._validForTurbolinks = function () {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function () {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), r = function () {
        function t(t) {
            this.elementSelector = t, this._trickle = se(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }

        var e;
        return e = "turbolinks-progress-bar", t.prototype.install = function () {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, t.prototype.uninstall = function () {
            return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
        }, t.prototype.start = function () {
            return this.advanceTo(5)
        }, t.prototype.advanceTo = function (t) {
            var e;
            if (t > (e = this.value) && 100 >= e) {
                if (this.value = t, this._updateStyle(), 100 === this.value)return this._stopTrickle();
                if (this.value > 0)return this._startTrickle()
            }
        }, t.prototype.done = function () {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, t.prototype._reset = function () {
            var t;
            return t = this.opacity, setTimeout(function (t) {
                return function () {
                    return t.opacity = 0, t._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function (e) {
                return function () {
                    return e.value = 0, e.opacity = t, e._withSpeed(0, function () {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, t.prototype._startTrickle = function () {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, t.prototype._stopTrickle = function () {
            return delete this.trickling
        }, t.prototype._trickle = function () {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, t.prototype._withSpeed = function (t, e) {
            var n, i;
            return n = this.speed, this.speed = t, i = e(), this.speed = n, i
        }, t.prototype._updateStyle = function (t) {
            return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, t.prototype._changeContentToForceRepaint = function () {
            return this.content = "" === this.content ? " " : ""
        }, t.prototype._createCSSRule = function () {
            return this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, t
    }(), u = function (t) {
        return setTimeout(t, 500)
    }, D = function () {
        return document.addEventListener("DOMContentLoaded", function () {
            return Z(i.CHANGE), Z(i.UPDATE)
        }, !0)
    }, $ = function () {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
            return jQuery.trim(e.responseText) ? Z(i.UPDATE) : void 0
        }) : void 0
    }, N = function (t) {
        var e, i;
        return (null != (i = t.state) ? i.turbolinks : void 0) ? (e = j[new n(t.state.url).absolute]) ? (d(), C(e)) : te(t.target.location.href) : void 0
    }, S = function () {
        return U(), B(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function () {
            return U(), B()
        }, !1), u(function () {
            return window.addEventListener("popstate", N, !1)
        })
    }, E = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && E, s = !navigator.userAgent.match(/CriOS\//), K = "GET" === (R = P("request_method")) || "" === R, c = l && s && K, a = document.addEventListener && document.createEvent, a && (D(), $()), c ? (te = k, S()) : te = function (t) {
        return document.location.href = t
    }, this.Turbolinks = {
        visit: te,
        pagesCached: L,
        enableTransitionCache: w,
        enableProgressBar: b,
        allowLinkExtensions: o.allowExtensions,
        supported: c,
        EVENTS: f(i)
    }
}.call(this), function () {
}.call(this), function () {
    $(document).ready(function () {
        $(".hide-comments").click(function (t) {
            t.preventDefault(), $(this).parent().hide()
        })
    }), $(document).on("upload:start", "form", function () {
        $(this).find("input[type=submit]").attr("disabled", !0), NProgress.start()
    }), $(document).on("upload:progress", "form", function (t) {
        var e, n, i, o;
        o = t.originalEvent.detail, e = o.loaded, i = o.total, n = Math.round(e / i * 100), NProgress.set(n)
    }), $(document).on("upload:complete", "form", function () {
        $(this).find("input.uploading").length || ($(this).find("input[type=submit]").removeAttr("disabled"), NProgress.done())
    })
}.call(this), $(document).ready(function () {
    var t = document.querySelector("#masonry"), e = new Masonry(t, {
        columnWidth: ".post",
        itemSelector: ".post",
        isAnimated: !Modernizr.csstransitions
    });
    imagesLoaded(t, function () {
        e = new Masonry(t)
    })
});