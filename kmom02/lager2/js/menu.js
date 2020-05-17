/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: menu
*/

/* global navigation */

"use strict";

import { home } from "./home.js";
import { productList } from "./product_list.js";
import { productDetails } from "./product_details.js";
import orderList from "./order_list.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            {name: "Hem", class: "home", nav: home.showHome},
            {name: "Produkter", class: "storage", nav: productList.showProducts},
            {name: "Detaljer", class: "info_outline", nav: productDetails.showProduct},
            {name: "Beställningar", class: "shopping_cart", nav: orderList.showOrders},
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

        window.rootElement.appendChild(navigation);
    },
};

export { menu };
