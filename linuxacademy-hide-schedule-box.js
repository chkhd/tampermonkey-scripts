// ==UserScript==
// @name         linuxacademy-hide-schedule-box
// @namespace    http://github.com/chkhd
// @version      0.1
// @homePageURL  https://github.com/chkhd/tampermonkey-scripts
// @downloadURL  https://github.com/chkhd/tampermonkey-scripts/blob/master/linuxacademy-hide-schedule-box.js
// @updateURL    https://github.com/chkhd/tampermonkey-scripts/blob/master/linuxacademy-hide-schedule-box.js
// @license      MIT
// @description  Stop pestering me with schedule on Linux Academy
// @author       chkhd
// @match        https://linuxacademy.com/cp/modules/view/id/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(".library-welcome-box-close").click()
})();
