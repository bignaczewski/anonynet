/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;)if (e[n].listener === t)return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var r = e.prototype, i = this, o = i.EventEmitter;
    r.getListeners = function (e) {
        var t, n, r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r)r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
        return n
    }, r.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function (e, n) {
        var r, i = this.getListenersAsObject(e), o = "object" == typeof n;
        for (r in i)i.hasOwnProperty(r) && -1 === t(i[r], n) && i[r].push(o ? n : {listener: n, once: !1});
        return this
    }, r.on = n("addListener"), r.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, r.once = n("addOnceListener"), r.defineEvent = function (e) {
        return this.getListeners(e), this
    }, r.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
        return this
    }, r.removeListener = function (e, n) {
        var r, i, o = this.getListenersAsObject(e);
        for (i in o)o.hasOwnProperty(i) && (r = t(o[i], n), -1 !== r && o[i].splice(r, 1));
        return this
    }, r.off = n("removeListener"), r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function (e, t, n) {
        var r, i, o = e ? this.removeListener : this.addListener, a = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)for (r = n.length; r--;)o.call(this, t, n[r]); else for (r in t)t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
        return this
    }, r.removeEvent = function (e) {
        var t, n = typeof e, r = this._getEvents();
        if ("string" === n)delete r[e]; else if ("object" === n)for (t in r)r.hasOwnProperty(t) && e.test(t) && delete r[t]; else delete this._events;
        return this
    }, r.removeAllListeners = n("removeEvent"), r.emitEvent = function (e, t) {
        var n, r, i, o, a = this.getListenersAsObject(e);
        for (i in a)if (a.hasOwnProperty(i))for (r = a[i].length; r--;)n = a[i][r], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, r.trigger = n("emitEvent"), r.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, r.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, r._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, r._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return i.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, r = function () {
    };
    n.addEventListener ? r = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (r = function (e, n, r) {
        e[n + r] = r.handleEvent ? function () {
            var n = t(e);
            r.handleEvent.call(r, n)
        } : function () {
            var n = t(e);
            r.call(e, n)
        }, e.attachEvent("on" + n, e[n + r])
    });
    var i = function () {
    };
    n.removeEventListener ? i = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (i = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var o = {bind: r, unbind: i};
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, r) {
        return t(e, n, r)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function r(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function i(e) {
        return "[object Array]" === d.call(e)
    }

    function o(e) {
        var t = [];
        if (i(e))t = e; else if ("number" == typeof e.length)for (var n = 0, r = e.length; r > n; n++)t.push(e[n]); else t.push(e);
        return t
    }

    function a(e, t, n) {
        if (!(this instanceof a))return new a(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = r({}, this.options), "function" == typeof t ? n = t : r(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
        var i = this;
        setTimeout(function () {
            i.check()
        })
    }

    function s(e) {
        this.img = e
    }

    function c(e) {
        this.src = e, p[e] = this
    }

    var u = e.jQuery, l = e.console, f = void 0 !== l, d = Object.prototype.toString;
    a.prototype = new t, a.prototype.options = {}, a.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var r = n.nodeType;
            if (r && (1 === r || 9 === r || 11 === r))for (var i = n.querySelectorAll("img"), o = 0, a = i.length; a > o; o++) {
                var s = i[o];
                this.addImage(s)
            }
        }
    }, a.prototype.addImage = function (e) {
        var t = new s(e);
        this.images.push(t)
    }, a.prototype.check = function () {
        function e(e, i) {
            return t.options.debug && f && l.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
        }

        var t = this, n = 0, r = this.images.length;
        if (this.hasAnyBroken = !1, !r)return void this.complete();
        for (var i = 0; r > i; i++) {
            var o = this.images[i];
            o.on("confirm", e), o.check()
        }
    }, a.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, a.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, u && (u.fn.imagesLoaded = function (e, t) {
        var n = new a(this, e, t);
        return n.jqDeferred.promise(u(this))
    }), s.prototype = new t, s.prototype.check = function () {
        var e = p[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)return void this.confirm(e.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var t = this;
        e.on("confirm", function (e, n) {
            return t.confirm(e.isLoaded, n), !0
        }), e.check()
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("confirm", this, t)
    };
    var p = {};
    return c.prototype = new t, c.prototype.check = function () {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
        }
    }, c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function (e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, a
});