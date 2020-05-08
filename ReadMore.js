// ==UserScript==
// @name         ReadMore
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  去除所有网站广告
// @author       silenceyear
// @grant        none
// @match *://blog.csdn.net/*/article/details/*
// ==/UserScript==
function loadjscssfile(filename) {
    var fileref = document.createElement('script')//创建标签
    fileref.setAttribute("type", "text/javascript")//定义属性type的值为text/javascript
    fileref.setAttribute("src", filename)//文件的地址
    document.getElementsByTagName("head")[0].appendChild(fileref)
}

if (typeof jQuery == 'undefined') {
    loadjscssfile("https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js");
}

$(function () {
    console.log('url match');
    let host = location.host;
    if (host.indexOf('csdn.net') > -1) {
        $('a.btn_open_app_prompt_box.read_more_article').click();
        $('a.app-bt-cance.read_more_btn').click();
        $('.mask-lock-box.isshow-mask-lock-box').remove();
        $('.app-open-box .recommend_user_info .flag').remove();
    }
})();