// ==UserScript==
// @name         RevertGrayStyleWebsites
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Revert Gray Style Websites.
// @match        *://*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const observer = new MutationObserver(() => {
    let ht = document.querySelector("html");
    let bd = document.querySelector("body");
    if (ht.style.filter.includes("grayscale")) {
      ht.style.filter = "none";
    } else if (bd.style.filter.includes("grayscale")) {
      bd.style.filter = "none";
    }
  });
  const config = { subtree: true, childList: true };
  observer.observe(document, config);
})();
