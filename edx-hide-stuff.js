// ==UserScript==
// @name         edx-hide-stuff
// @namespace    http://github.com/chkhd/tampermonkey-scripts
// @version      0.1
// @description  Hide annoying stuff on edX
// @author       chkhd
// @match        https://courses.edx.org/courses/*
// @grant        none
// ==/UserScript==

(function() {
	// Hide annoying green promo for certificate
	document.getElementsByClassName('action-toggle-verification-sock')[0].style.borderColor="white"
	document.getElementsByClassName('action-toggle-verification-sock')[0].style.backgroundColor="white"	
	document.getElementsByClassName('action-toggle-verification-sock')[0].style.display="none"

	// Hide annoying message bar on course access end
	document.getElementsByClassName("course-expiration-message")[0].style.display="none"
})();
