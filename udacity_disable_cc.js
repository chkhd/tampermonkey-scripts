// ==UserScript==
// @name         udacity_disable_subtitles
// @namespace    https://github.com/chkhd/tampermonkey-scripts
// @version      0.1
// @description  Udacity disable subtitles
// @author       chkhd
// @match        https://classroom.udacity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let observer = new MutationObserver(() => {
        let subtitles = document.querySelector("video").textTracks

        if (subtitles.length > 0) {
            subtitles[1].mode = "hidden"
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
