// ==UserScript==
// @name         adblock
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  去除所有网站广告
// @author       silenceyear
// @required     https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js
// @grant        none
// ==/UserScript==
function loadjscssfile(filename){
    var fileref=document.createElement('script')//创建标签
    fileref.setAttribute("type","text/javascript")//定义属性type的值为text/javascript
    fileref.setAttribute("src", filename)//文件的地址
    document.getElementsByTagName("head")[0].appendChild(fileref)
}
if (typeof jQuery == 'undefined') {
    loadjscssfile("https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js");
}
$(function () {
    var ua = navigator.userAgent;
    var clientCode = 0b0000;

    if (/MicroMessenger/i.test(ua)) {
        clientCode = clientCode|0b0001;
    }

    if (/(iPhone|iPad|iPod|iOS)/i.test(ua)) {
        clientCode = clientCode|0b0010;
    } else if (/(Android)/i.test(ua)) {
        clientCode = clientCode|0b0100;
    } else {
        clientCode = clientCode|0b1000;
    }

    console.log(clientCode);

    if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {

    }
})();
