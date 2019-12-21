// ==UserScript==
// @name         adblock
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  去除所有网站广告
// @author       silenceyear
// @require      https://libs.baidu.com/jquery/1.7.2/jquery.min.js
// @match        *
// @grant        none
// @run-at       document-end
// ==/UserScript==
var adMatcher = {};

adMatcher[/^*$/] = [
    function () {
        console.log('userscript loaded.')
    }
];

$(function () {
    const url = location.href;

    const hide = function (fun) {
        const type = $.type(fun);
        if ('string'===type) {
            $(fun).hide();
        } else if ('function'===type) {
            fun();
        }
    };

    for (const key in adMatcher) {
        if (key.test(url)) {
            const fun = adMatcher[key];
            const type = $.type(fun);
            if ('array'===type) {
                for (let i = 0; i < fun.length; i++) {
                    const f = fun[i];
                    hide(f)
                }
            }
        }
    }
})();
