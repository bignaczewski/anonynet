// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require i18n
//= require imageloaded.pkgd.min.js
//= require masonry.pkgd.min.js
//= require modenizr.js
//= require refile
//= require nprogress
//= require nprogress-turbolinks
//= require bootstrap-sprockets
//= require twitter/bootstrap/rails/confirm
//= require jquery.infinite-pages
//= require turbolinks
//= require_tree .

$(document).ready(function () { // wrong choice considering turbolinks. but works if jquery_turbolinks is in gemfile
//$(document).on('ready page:load', function () { // needless if jquery_turbolink exist

    var container = document.querySelector('#masonry');
    var msnry = new Masonry(container, {
        columnWidth: '.post',
        itemSelector: '.post',
        isAnimated: !Modernizr.csstransitions
    });

    imagesLoaded(container, function () {
        msnry = new Masonry(container);
    });

});