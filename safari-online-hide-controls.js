// ==UserScript==
// @name         safari-online-hide-controls
// @namespace    http://github.com/chkhd/tampermonkey-scripts
// @version      0.1
// @description  Hide content content controls on Safari online
// @author       chkhd
// @match        https://learning.oreilly.com/library/view/*
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByClassName('interface-control-btns')[0].hidden = true
})();

