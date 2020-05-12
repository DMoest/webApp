/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order
*/

/* global renderOrders renderElements */

"use strict";

import order from "../js/order.js";

var orderView = {

    renderOrders: function() {
        order.showOrders(renderElements);
    },

    renderElements: function(orders) {
        var root = document.getElementById("root");

        var elements = orders.map(function(order_) {
            var element = document.createElement("p");

            element.textContent = order_.name;
            root.appendChild(element);

            return element;
        });

        order.showOrders(renderOrders);

        console.info("Här är ELEMENTS i renderElements-fuktionen: ");
        console.info(elements);
    },
};

export default orderView;
