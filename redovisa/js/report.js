/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global menu */

"use strict";

import { menu } from "./menu.js";

var md = window.markdownit();

var report = {
    showReport: function () {
        window.mainContainer.innerHTML = "";

        fetch("markdown/kmom01.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("assignment");
    }
};

export { report };
