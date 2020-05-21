/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order view
*/

/* global */

"use strict";

import menu from "../menu.js";
import orders from "../src/orders.js";
import orderDetails from "./order_detailsView.js";

var orderList = (function () {
    function showOrders() {
        orders.getAllOrders(renderElements);
    }

    function renderElements(orders) {
        let root = document.getElementById("root");

        root.innerHTML = "<h1>Ordrar</h1>";

        /* High order function map() 31.40 andreas del 2. */
        var orderElements = orders.map(function(order_) {
            var element = document.createElement("p");

            element.className = "orderElement";

            element.textContent = order_.name;

            element.addEventListener("click", function() {
                return orderDetails.showOrder(order_.id);
            });
            root.appendChild(element);

            return element;
        });

        menu.showMenu("shopping_cart"); /* skapar/visar menu med markerat val */

        return orderElements;
    }

    var publicAPI = {
        showOrders: showOrders
    };

    return publicAPI;
})();

export default orderList;
