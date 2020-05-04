/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global */

"use strict";

import { home } from "./home.js";
import { about } from "./about.js";
import { github } from "./github.js";
import { report } from "./report.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            {name: "Me", class: "person", nav: home.showHome},
            {name: "Om", class: "school", nav: about.showAbout},
            {name: "Github", class: "folder", nav: github.showGithub},
            {name: "Redovisa", class: "assignment", nav: report.showReport}
        ];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    }
};

export { menu };
