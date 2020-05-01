/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - Lagerappen
 * Daniel Andersson, DAAP19
*/

"use strict";

var menu = (function () {
    var showMenu = function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            {name: "Hem", class: "home", nav: home.showHome},
            {name: "Lager", class: "storage", nav: stock.showStock},
            {name: "Item", class: "info_outline", nav: item.showItem}
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
    };

    return {
        showMenu: showMenu
    };
})(menu);
