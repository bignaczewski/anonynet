!function (t) {
    t.fn.bootstrapFileInput = function () {
        this.each(function (e, n) {
            var i = t(n);
            if ("undefined" == typeof i.attr("data-bfi-disabled")) {
                var o = "Browse";
                "undefined" != typeof i.attr("title") && (o = i.attr("title"));
                var r = "";
                i.attr("class") && (r = " " + i.attr("class")), i.wrap('<a class="file-input-wrapper btn btn-default ' + r + '"></a>').parent().prepend(t("<span></span>").html(o))
            }
        }).promise().done(function () {
            t(".file-input-wrapper").mousemove(function (e) {
                var n, i, o, r, s, a, u, c;
                i = t(this), n = i.find("input"), o = i.offset().left, r = i.offset().top, s = n.width(), a = n.height(), u = e.pageX, c = e.pageY, moveInputX = u - o - s + 20, moveInputY = c - r - a / 2, n.css({
                    left: moveInputX,
                    top: moveInputY
                })
            }), t("body").on("change", ".file-input-wrapper input[type=file]", function () {
                var e;
                if (e = t(this).val(), t(this).parent().next(".file-input-name").remove(), e = t(this).prop("files") && t(this).prop("files").length > 1 ? t(this)[0].files.length + " files" : e.substring(e.lastIndexOf("\\") + 1, e.length)) {
                    var n = t(this).data("filename-placement");
                    "inside" === n ? (t(this).siblings("span").html(e), t(this).attr("title", e)) : t(this).parent().after('<span class="file-input-name">' + e + "</span>")
                }
            })
        })
    };
    var e = "<style>.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }.file-input-name { margin-left: 8px; }</style>";
    t("link[rel=stylesheet]").eq(0).before(e)
}(jQuery);