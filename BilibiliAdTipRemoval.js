// ==UserScript==
// @name         BilibiliAdTipRemoval
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Bilibili.com adblock-tips.
// @author       Winston Shu
// @match        *://www.bilibili.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    window.onload = () => {
        let tip = document.querySelector(".adblock-tips");
        if (tip) {
            tip.remove();
        }
    };
})();
