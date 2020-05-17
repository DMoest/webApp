/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order view
*/

/* global */

"use strict";

import { menu } from "./menu.js";
import order from "./order.js";

var orderList = (function () {
    function showOrders() {
        order.getOrders(renderElements);
    }

    function renderElements(orders) {
        var root = document.getElementById("root");

        root.innerHTML = "<h1>Beställningar</h1>";

        /* High order function map() 31.40 andreas del 2. */
        var elements = orders.map(function(order_) {
            var element = document.createElement("p");

            element.textContent = order_.name;
            root.appendChild(element);

            return element;
        });

        console.info(elements); /* Rensa innan inlämning */

        menu.showMenu("shopping_cart"); /* skapar/visar menu med markerat val */
    }

    var publicAPI = {
        showOrders: showOrders
    };

    return publicAPI;
})();

export default orderList;
