/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global */

"use strict";

import { menu } from "./menu.js";

var md = window.markdownit();

var about = {
    showAbout: function () {
        window.mainContainer.innerHTML = "";

        fetch("markdown/about.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("school");
    }
};

export { about };
