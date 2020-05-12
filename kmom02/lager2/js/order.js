/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order
*/

"use strict";

import { menu } from "./menu.js";
import { baseUrl, apiKey } from "./variables.js";
// import orderView from "../views/order_view.js";

var order = {
    showOrders: function(callback) {
        fetch(`${baseUrl}orders?api_key=${apiKey}`)
            .then(function (result) {
                return result.json();
            })
            .then(function (result) {
                console.info("Här är RESULT som en array i funktionen showOrders: ");
                console.info(result);
                if (callback) {
                    callback(result.data);
                }
            });

        menu.showMenu("shopping_cart");
    },
};

export default order;
