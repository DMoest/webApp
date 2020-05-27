/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global */

"use strict";

import { menu } from "./menu.js";

var md = window.markdownit();

var report = {
    reportFiles: [
        "kmom01.md",
        "kmom02.md",
    ],

    showReport: function () {
        window.mainContainer.innerHTML = "";

        var reportElements = [];

        report.reportFiles.forEach(function(file) {
            var kmom = file.split(".")[0];
            var reportElement = document.createElement("div");

            reportElement.className = kmom;

            reportElements.push(reportElement);

            window.mainContainer.appendChild(reportElement);

            fetch("markdown/" + file)
                .then(function(response) {
                    return response.text();
                })
                .then(function(result) {
                    reportElement.innerHTML = md.render(result);
                });
        });

        menu.showMenu("assignment");
    },
};

export { report };
