// ==UserScript==
// @name         expand_drone_repo_list
// @namespace    http://github.com/chkhd/tampermonkey-scripts
// @version      0.1
// @description  Expand drone repo list by default
// @author       chkhd
// @match        http://<insert drone url>/*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    let observer = new MutationObserver(() => {
        let button = document.getElementsByClassName('more-button')

        if (button.length > 0) {
            button[0].click()
        }
    })

    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false,
        }
    )
})();
