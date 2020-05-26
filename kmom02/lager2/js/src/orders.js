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
    var allOrders = [];

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

    function getOrder(orderItemId) {
        console.info("orders.allOrders -> ", orders.allOrders);

        return orders.allOrders.filter(function(orderItem) {
            return orderItem.id == orderItemId;
        })[0];
    }

    function updateOrder(order_) {
        fetch(`${baseUrl}orders?api_key=${apiKey}`, {
            body: JSON.stringify(order_),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        })
            .then(function () {
                order_.order_items.map(function(orderItem) {
                    if (products.checkProductStock(orderItem.id) >= orderItem.amount) {
                        console.info("OrderItem amount -> ", orderItem.amount);
                        // updateProduct(orderItem);
                    }
                });
            });

        console.info("apiKey: ", apiKey);

        // fetch(`${baseUrl}orders?api_key=${apiKey}`)
        //     .then(function() {
        //         order_.order_items.map(function(item) {
        //             return products.updateProductStock(item);
        //         });
        //     });
    }

    var publicAPI = {
        allOrders: allOrders,
        getAllOrders: getAllOrders,
        getOrder: getOrder,
        updateOrder: updateOrder
    };

    return publicAPI;
})();

export default orders;
