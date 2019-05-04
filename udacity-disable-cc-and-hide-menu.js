// ==UserScript==
// @name udacity-disable-cc-and-hide-menu
// @description Hide lesson menu and disable captions by default
// @namespace https://github.com/chkhd
// @homepageURL https://github.com/chkhd/tampermonkey-scripts
// @include https://classroom.udacity.com/*
// @version 0.1.0
// @license MIT
// @author chkhd
// @run-at document-end
// @grant none
// @downloadURL https://github.com/chkhd/tampermonkey-scripts/raw/master/udacity-disable-cc-and-hide-menu.js
// @updateURL https://github.com/chkhd/tampermonkey-scripts/raw/master/udacity-disable-cc-and-hide-menu.js
// ==/UserScript==

(() => {
  const HAMBURGER = 'hamburger--hamburger-link--3-KRS'
  const PLAYER = '.video.video-stream.html5-main-video'
  const CC_ENABLED = 'cc_load_policy=1'
  const CC_DISABLED = 'cc_load_policy=0'

  function hideMenu() {
    if (document.getElementsByTagName('nav')[0].className.indexOf("hidden") === -1) {
      document.getElementsByClassName(HAMBURGER)[0].click()
    }
  }

  function disableCC() {
    let playerContainer = document.querySelector(PLAYER)

    if (playerContainer === null) {
      return null
    }

    let playerIframe = playerContainer.firstChild

    if (playerIframe.src.includes(CC_ENABLED)) {
      playerIframe.src = playerIframe.src.replace(CC_ENABLED, CC_DISABLED)
    }
  }

  let observer = new MutationObserver(() => {
    disableCC()
    hideMenu()
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
})()

