/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global */

"use strict";

import { home } from "./home.js";

(function () {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";

    home.showHome();
})();
