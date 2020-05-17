/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order
*/

/* global */

"use strict";

import { menu } from "./menu.js";
import { baseUrl, apiKey } from "./variables.js";

var order = (function() {
    function getOrders(callback) {
        fetch(`${baseUrl}orders?api_key=${apiKey}`)
            .then(function (result) {
                return result.json();
            })
            .then(function (result) {
                // console.info("Här är RESULT som en array i funktionen getOrders: ");
                console.info(result);
                if (callback) {
                    // console.info("Callback skickas med!");
                    callback(result.data);
                }
            });

        menu.showMenu("shopping_cart");
    }

    var publicAPI = {
        getOrders: getOrders
    };

    return publicAPI;
})();

export default order;
