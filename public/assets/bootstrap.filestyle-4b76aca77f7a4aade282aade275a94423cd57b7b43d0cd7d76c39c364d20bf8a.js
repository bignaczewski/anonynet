/*
 * bootstrap-filestyle
 * doc: http://markusslima.github.io/bootstrap-filestyle/
 * github: https://github.com/markusslima/bootstrap-filestyle
 *
 * Copyright (c) 2014 Markus Vinicius da Silva Lima
 * Version 1.1.2
 * Licensed under the MIT license.
 */
!function (t) {
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
}(window.jQuery);