/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order
*/

/* global */

"use strict";

import { baseUrl, apiKey } from "../variables.js";
import products from "../src/products.js";

var orders = (function() {
    // var allOrders = [];

    function getAllOrders(callback) {
        fetch(`${baseUrl}orders?api_key=${apiKey}`)
            .then(function (result) {
                return result.json();
            })
            .then(function (result) {
                orders.allOrders = result.data;

                if (callback) {
                    callback(result.data);
                }
            });
    }

    function getOrder(orderId) {
        // console.info("orders.getAllOrders -> ", orders.getAllOrders);
        // console.info("orderId ->", orderId);

        return orders.allOrders.filter(function(order) {
            return order.id == orderId;
        })[0];
    }

    function updateOrder(order_) {
        // var orderData = {
        //     name: order_.name,
        //     id: order_.id,
        //     status_is: order_.status_is,
        //     api_key: apiKey
        // };

        console.info("apiKey: ", apiKey);

        fetch(`${baseUrl}orders?api_key=${apiKey}`)
            .then(function() {
                order_.order_items.map(function(item) {
                    return products.updateProductStock(item);
                });
            });
    }

    var publicAPI = {
        getAllOrders: getAllOrders,
        getOrder: getOrder,
        updateOrder: updateOrder
    };

    return publicAPI;
})();

export default orders;
