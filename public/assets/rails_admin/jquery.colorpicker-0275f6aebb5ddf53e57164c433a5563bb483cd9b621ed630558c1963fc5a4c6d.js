!function (t) {
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
            var n = F(e);
            t(i).data("colorpicker").fields.eq(1).val(n.r).end().eq(2).val(n.g).end().eq(3).val(n.b).end()
        }, o = function (e, i) {
            t(i).data("colorpicker").fields.eq(4).val(e.h).end().eq(5).val(e.s).end().eq(6).val(e.b).end()
        }, s = function (e, i) {
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
            n.data("colorpicker").color = i = this.parentNode.className.indexOf("_hex") > 0 ? P(A(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? $({
                h: parseInt(n.data("colorpicker").fields.eq(4).val(), 10),
                s: parseInt(n.data("colorpicker").fields.eq(5).val(), 10),
                b: parseInt(n.data("colorpicker").fields.eq(6).val(), 10)
            }) : H(N({
                r: parseInt(n.data("colorpicker").fields.eq(1).val(), 10),
                g: parseInt(n.data("colorpicker").fields.eq(2).val(), 10),
                b: parseInt(n.data("colorpicker").fields.eq(3).val(), 10)
            })), e && (r(i, n.get(0)), s(i, n.get(0)), o(i, n.get(0))), a(i, n.get(0)), l(i, n.get(0)), u(i, n.get(0)), n.data("colorpicker").onChange.apply(n, [i, O(i), F(i)])
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
            return r(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), s(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), t(document).unbind("mouseup", _), t(document).unbind("mousemove", b), !1
        }, w = function () {
            var e = {cal: t(this).parent(), pos: t(this).offset()};
            e.preview = e.cal.data("colorpicker").livePreview, t(document).bind("mouseup", e, x), t(document).bind("mousemove", e, k)
        }, k = function (t) {
            return h.apply(t.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, t.pageY - t.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, t.pageX - t.data.pos.left)) / 150, 10)).get(0), [t.data.preview]), !1
        }, x = function (e) {
            return r(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), s(e.data.cal.data("colorpicker").color, e.data.cal.get(0)), t(document).unbind("mouseup", x), t(document).unbind("mousemove", k), !1
        }, C = function () {
            t(this).addClass("colorpicker_focus")
        }, D = function () {
            t(this).removeClass("colorpicker_focus")
        }, T = function () {
            var e = t(this).parent(), i = e.data("colorpicker").color;
            e.data("colorpicker").origColor = i, c(i, e.get(0)), e.data("colorpicker").onSubmit(i, O(i), F(i), e.data("colorpicker").el)
        }, S = function () {
            var e = t("#" + t(this).data("colorpickerId"));
            e.data("colorpicker").onBeforeShow.apply(this, [e.get(0)]);
            var i = t(this).offset(), n = M(), r = i.top + this.offsetHeight, o = i.left;
            return r + 176 > n.t + n.h && (r -= this.offsetHeight + 176), o + 356 > n.l + n.w && (o -= 356), e.css({
                left: o + "px",
                top: r + "px"
            }), 0 != e.data("colorpicker").onShow.apply(this, [e.get(0)]) && e.show(), t(document).bind("mousedown", {cal: e}, I), !1
        }, I = function (e) {
            E(e.data.cal.get(0), e.target, e.data.cal.get(0)) || (0 != e.data.cal.data("colorpicker").onHide.apply(this, [e.data.cal.get(0)]) && e.data.cal.hide(), t(document).unbind("mousedown", I))
        }, E = function (t, e, i) {
            if (t == e)return !0;
            if (t.contains)return t.contains(e);
            if (t.compareDocumentPosition)return !!(16 & t.compareDocumentPosition(e));
            for (var n = e.parentNode; n && n != i;) {
                if (n == t)return !0;
                n = n.parentNode
            }
            return !1
        }, M = function () {
            var t = "CSS1Compat" == document.compatMode;
            return {
                l: window.pageXOffset || (t ? document.documentElement.scrollLeft : document.body.scrollLeft),
                t: window.pageYOffset || (t ? document.documentElement.scrollTop : document.body.scrollTop),
                w: window.innerWidth || (t ? document.documentElement.clientWidth : document.body.clientWidth),
                h: window.innerHeight || (t ? document.documentElement.clientHeight : document.body.clientHeight)
            }
        }, $ = function (t) {
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
            return H(j(t))
        }, H = function (t) {
            var e = {h: 0, s: 0, b: 0}, i = Math.min(t.r, t.g, t.b), n = Math.max(t.r, t.g, t.b), r = n - i;
            return e.b = n, e.s = 0 != n ? 255 * r / n : 0, e.h = 0 != e.s ? t.r == n ? (t.g - t.b) / r : t.g == n ? 2 + (t.b - t.r) / r : 4 + (t.r - t.g) / r : -1, e.h *= 60, e.h < 0 && (e.h += 360), e.s *= 100 / 255, e.b *= 100 / 255, e
        }, F = function (t) {
            var e = {}, i = Math.round(t.h), n = Math.round(255 * t.s / 100), r = Math.round(255 * t.b / 100);
            if (0 == n)e.r = e.g = e.b = r; else {
                var o = r, s = (255 - n) * r / 255, a = (o - s) * (i % 60) / 60;
                360 == i && (i = 0), 60 > i ? (e.r = o, e.b = s, e.g = s + a) : 120 > i ? (e.g = o, e.b = s, e.r = o - a) : 180 > i ? (e.g = o, e.r = s, e.b = s + a) : 240 > i ? (e.b = o, e.r = s, e.g = o - a) : 300 > i ? (e.b = o, e.g = s, e.r = s + a) : 360 > i ? (e.r = o, e.g = s, e.b = o - a) : (e.r = 0, e.g = 0, e.b = 0)
            }
            return {r: Math.round(e.r), g: Math.round(e.g), b: Math.round(e.b)}
        }, L = function (e) {
            var i = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
            return t.each(i, function (t, e) {
                1 == e.length && (i[t] = "0" + e)
            }), i.join("")
        }, O = function (t) {
            return L(F(t))
        }, R = function () {
            var e = t(this).parent(), i = e.data("colorpicker").origColor;
            e.data("colorpicker").color = i, r(i, e.get(0)), s(i, e.get(0)), o(i, e.get(0)), a(i, e.get(0)), l(i, e.get(0)), u(i, e.get(0))
        };
        return {
            init: function (e) {
                if (e = t.extend({}, n, e || {}), "string" == typeof e.color)e.color = P(e.color); else if (void 0 != e.color.r && void 0 != e.color.g && void 0 != e.color.b)e.color = H(e.color); else {
                    if (void 0 == e.color.h || void 0 == e.color.s || void 0 == e.color.b)return this;
                    e.color = $(e.color)
                }
                return this.each(function () {
                    if (!t(this).data("colorpickerId")) {
                        var n = t.extend({}, e);
                        n.origColor = e.color;
                        var g = "collorpicker_" + parseInt(1e3 * Math.random());
                        t(this).data("colorpickerId", g);
                        var v = t(i).attr("id", g);
                        n.flat ? v.appendTo(this).show() : v.appendTo(document.body), n.fields = v.find("input").bind("keyup", d).bind("change", h).bind("blur", p).bind("focus", f), v.find("span").bind("mousedown", m).end().find(">div.colorpicker_current_color").bind("click", R), n.selector = v.find("div.colorpicker_color").bind("mousedown", w), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = v.find("div.colorpicker_hue div"), v.find("div.colorpicker_hue").bind("mousedown", y), n.newColor = v.find("div.colorpicker_new_color"), n.currentColor = v.find("div.colorpicker_current_color"), v.data("colorpicker", n), v.find("div.colorpicker_submit").bind("mouseenter", C).bind("mouseleave", D).bind("click", T), r(n.color, v.get(0)), o(n.color, v.get(0)), s(n.color, v.get(0)), l(n.color, v.get(0)), a(n.color, v.get(0)), c(n.color, v.get(0)), u(n.color, v.get(0)), n.flat ? v.css({
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
                if ("string" == typeof e)e = P(e); else if (void 0 != e.r && void 0 != e.g && void 0 != e.b)e = H(e); else {
                    if (void 0 == e.h || void 0 == e.s || void 0 == e.b)return this;
                    e = $(e)
                }
                return this.each(function () {
                    if (t(this).data("colorpickerId")) {
                        var i = t("#" + t(this).data("colorpickerId"));
                        i.data("colorpicker").color = e, i.data("colorpicker").origColor = e, r(e, i.get(0)), o(e, i.get(0)), s(e, i.get(0)), l(e, i.get(0)), a(e, i.get(0)), c(e, i.get(0)), u(e, i.get(0))
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
}(jQuery);