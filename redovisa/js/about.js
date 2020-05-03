/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global menu */

"use strict";

var md = window.markdownit();

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        fetch("markdown/about.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("school");
    };

    return {
        showAbout: showAbout
    };
})(about);
