/*!
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
                    for (var s = i.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var c = this[a], l = t.data(c, e);
                        if (l)if (t.isFunction(l[o]) && "_" !== o.charAt(0)) {
                            var f = l[o].apply(l, s);
                            if (void 0 !== f)return f
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
                    }(), l = n("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[l] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = c(o);
                    f = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var n = c(t);
                if ("none" === n.display)return i();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!l || !n[l] || "border-box" !== n[l]), h = 0, p = s.length; p > h; h++) {
                    var d = s[h], m = n[d];
                    m = u(t, m);
                    var y = parseFloat(m);
                    r[d] = isNaN(y) ? 0 : y
                }
                var v = r.paddingLeft + r.paddingRight, g = r.paddingTop + r.paddingBottom, b = r.marginLeft + r.marginRight, E = r.marginTop + r.marginBottom, L = r.borderLeftWidth + r.borderRightWidth, x = r.borderTopWidth + r.borderBottomWidth, w = a && f, S = e(n.width);
                S !== !1 && (r.width = S + (w ? 0 : v + L));
                var _ = e(n.height);
                return _ !== !1 && (r.height = _ + (w ? 0 : g + x)), r.innerWidth = r.width - (v + L), r.innerHeight = r.height - (g + x), r.outerWidth = r.width + b, r.outerHeight = r.height + E, r
            }
        }

        function u(e, n) {
            if (t.getComputedStyle || -1 === n.indexOf("%"))return n;
            var i = e.style, o = i.left, r = e.runtimeStyle, s = r && r.left;
            return s && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, s && (r.left = s), n
        }

        var c, l, f, h = !1;
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
        var a = document.createElement("div"), u = e(a, "div");
        r = u ? e : o
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

        var u = r("transition"), c = r("transform"), l = u && c, f = !!r("perspective"), h = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[u], p = ["transform", "transition", "transitionDuration", "transitionProperty"], d = function () {
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
                var i = d[n] || n;
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
        var m = f ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function (t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function (t, e) {
            this.getPosition();
            var n = this.position.x, i = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10), s = o === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)return void this.layoutPosition();
            var a = t - n, u = e - i, c = {}, l = this.layout.options;
            a = l.isOriginLeft ? a : -a, u = l.isOriginTop ? u : -u, c.transform = m(a, u), this.transition({
                to: c,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, a.prototype.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = l ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
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
        var y = c && i(c) + ",opacity";
        a.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: y,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(h, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
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
        var g = {transitionProperty: "", transitionDuration: ""};
        return a.prototype.removeTransitionStyles = function () {
            this.css(g)
        }, a.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function () {
            if (!u || !parseFloat(this.layout.options.transitionDuration))return void this.removeElem();
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
        return "[object Array]" === f.call(t)
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

    function s(n, s, f, p, d, m) {
        function y(t, n) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !h(t))return void(u && u.error("Bad " + this.constructor.namespace + " element: " + t));
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
            var i = ++v;
            this.element.outlayerGUID = i, g[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var v = 0, g = {};
        return y.namespace = "outlayer", y.Item = m, y.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, e(y.prototype, f.prototype), y.prototype.option = function (t) {
            e(this.options, t)
        }, y.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, y.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, y.prototype._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                var s = e[o], a = new n(s, this);
                i.push(a)
            }
            return i
        }, y.prototype._filterFindItemElements = function (t) {
            t = i(t);
            for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                var s = t[o];
                if (h(s))if (e) {
                    d(s, e) && n.push(s);
                    for (var a = s.querySelectorAll(e), u = 0, c = a.length; c > u; u++)n.push(a[u])
                } else n.push(s)
            }
            return n
        }, y.prototype.getItemElements = function () {
            for (var t = [], e = 0, n = this.items.length; n > e; e++)t.push(this.items[e].element);
            return t
        }, y.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, y.prototype._init = y.prototype.layout, y.prototype._resetLayout = function () {
            this.getSize()
        }, y.prototype.getSize = function () {
            this.size = p(this.element)
        }, y.prototype._getMeasurement = function (t, e) {
            var n, i = this.options[t];
            i ? ("string" == typeof i ? n = this.element.querySelector(i) : h(i) && (n = i), this[t] = n ? p(n)[e] : i) : this[t] = 0
        }, y.prototype.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, y.prototype._getItemsForLayout = function (t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                o.isIgnored || e.push(o)
            }
            return e
        }, y.prototype._layoutItems = function (t, e) {
            function n() {
                i.emitEvent("layoutComplete", [i, t])
            }

            var i = this;
            if (!t || !t.length)return void n();
            this._itemsOn(t, "layout", n);
            for (var o = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, o.push(u)
            }
            this._processLayoutQueue(o)
        }, y.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, y.prototype._processLayoutQueue = function (t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, y.prototype._positionItem = function (t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, y.prototype._postLayout = function () {
            this.resizeContainer()
        }, y.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, y.prototype._getContainerSize = l, y.prototype._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, y.prototype._itemsOn = function (t, e, n) {
            function i() {
                return o++, o === r && n.call(s), !0
            }

            for (var o = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var c = t[a];
                c.on(e, i)
            }
        }, y.prototype.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, y.prototype.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, y.prototype.stamp = function (t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, y.prototype.unstamp = function (t) {
            if (t = this._find(t))for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                o(i, this.stamps), this.unignore(i)
            }
        }, y.prototype._find = function (t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
        }, y.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, y.prototype._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, y.prototype._manageStamp = l, y.prototype._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(), n = this._boundingRect, i = p(t), o = {
                left: e.left - n.left - i.marginLeft,
                top: e.top - n.top - i.marginTop,
                right: n.right - e.right - i.marginRight,
                bottom: n.bottom - e.bottom - i.marginBottom
            };
            return o
        }, y.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, y.prototype.bindResize = function () {
            this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
        }, y.prototype.unbindResize = function () {
            this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound = !1
        }, y.prototype.onresize = function () {
            function t() {
                e.resize(), delete e.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, y.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, y.prototype.needsResizeLayout = function () {
            var t = p(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, y.prototype.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, y.prototype.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, y.prototype.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, y.prototype.reveal = function (t) {
            var e = t && t.length;
            if (e)for (var n = 0; e > n; n++) {
                var i = t[n];
                i.reveal()
            }
        }, y.prototype.hide = function (t) {
            var e = t && t.length;
            if (e)for (var n = 0; e > n; n++) {
                var i = t[n];
                i.hide()
            }
        }, y.prototype.getItem = function (t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t)return i
            }
        }, y.prototype.getItems = function (t) {
            if (t && t.length) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n], r = this.getItem(o);
                    r && e.push(r)
                }
                return e
            }
        }, y.prototype.remove = function (t) {
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
        }, y.prototype.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize();
            var o = this.element.outlayerGUID;
            delete g[o], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, y.data = function (t) {
            var e = t && t.outlayerGUID;
            return e && g[e]
        }, y.create = function (t, n) {
            function i() {
                y.apply(this, arguments)
            }

            return Object.create ? i.prototype = Object.create(y.prototype) : e(i.prototype, y.prototype), i.prototype.constructor = i, i.defaults = e({}, y.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = y.data, i.Item = function () {
                m.apply(this, arguments)
            }, i.Item.prototype = new m, s(function () {
                for (var e = r(t), n = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, l = n.length; l > s; s++) {
                    var f, h = n[s], p = h.getAttribute(o);
                    try {
                        f = p && JSON.parse(p)
                    } catch (d) {
                        u && u.error("Error parsing " + o + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + d);
                        continue
                    }
                    var m = new i(h, f);
                    c && c.data(h, t, m)
                }
            }), c && c.bridget && c.bridget(t, i), i
        }, y.Item = m, y
    }

    var a = t.document, u = t.console, c = t.jQuery, l = function () {
    }, f = Object.prototype.toString, h = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
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
            for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = n(r, s), u = {
                x: this.columnWidth * a,
                y: s
            }, c = s + t.size.outerHeight, l = this.cols + 1 - r.length, f = 0; l > f; f++)this.colYs[a + f] = c;
            return u
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
            for (var u = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, c = s; a >= c; c++)this.colYs[c] = Math.max(u, this.colYs[c])
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
}(window);