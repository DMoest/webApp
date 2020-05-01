/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - Lagerappen
 * Daniel Andersson, DAAP19
*/

"use strict";

(function () {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";

    home.showHome();
})();
