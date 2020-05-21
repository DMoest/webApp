/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: menu
*/

/* global navigation */

"use strict";

import home from "./home.js";
import productList from "./views/product_listView.js";
import productDetails from "./views/product_detailsView.js";
import orderList from "./views/order_listView.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [
            {name: "Hem", class: "home", nav: home.showHome},
            {name: "Produkter", class: "storage", nav: productList.showProducts},
            {name: "Beställningar", class: "shopping_cart", nav: orderList.showOrders},
            {name: "Detaljer", class: "info_outline", nav: productDetails.showProduct},
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

export default menu;
