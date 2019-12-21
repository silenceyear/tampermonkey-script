// ==UserScript==
// @name         adblock
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  去除所有网站广告
// @author       silenceyear
// @require      https://libs.baidu.com/jquery/1.7.2/jquery.min.js
// @match        http*://*
// @grant        none
// @run-at       document-end
// ==/UserScript==
$(function () {
    var url = location.href;

    console.log(url);
})();
