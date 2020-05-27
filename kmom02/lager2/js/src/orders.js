/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order
*/

/* global */

"use strict";

import { baseUrl, apiKey } from "../variables.js";

var orders = {
    allOrders: [],

    getAllOrders: function(callback) {
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
    },

    getOrder: function(orderItemId) {
        console.info("orders.allOrders -> ", orders.allOrders);

        return orders.allOrders.filter(function(orderItem) {
            return orderItem.id == orderItemId;
        })[0];
    },

    updateOrder: function(order) {
        var orderfile = {
            name:       order.name,
            id:         order.id,
            status_id:  200,
            api_key:     apiKey
        };

        console.info("apiKey: ", apiKey);

        fetch(`${baseUrl}orders?api_key=${apiKey}`, {
            body: JSON.stringify(orderfile),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        })
            .then(function () {
                order.order_items.foreach(function (orderItem) {
                    console.info("Utanför IF-sats ");
                    if (orderItem.amount >= orderItem.stock) {
                        console.info("OrderItem amount INSIDE IF -> ", orderItem.amount);
                    }
                });
            });
    },

    updateProduct: function(orderItem) {
        var updateProduct = {
            id: orderItem.product_id,
            name: orderItem.name,
            stock: (orderItem.stock - orderItem.amount),
            api_key: apiKey
        };

        fetch(`${baseUrl}products`, {
            body: JSON.stringify(updateProduct),
            headers: {
                'content-type': 'application/json'
            },
            method: 'PUT'
        })
            .then(function(response) {
                console.log(response);
            });
    },

    // var publicAPI = {
    //     allOrders: allOrders,
    //     getAllOrders: getAllOrders,
    //     getOrder: getOrder,
    //     updateOrder: updateOrder
    // }

    // return publicAPI;
};

export default orders;
