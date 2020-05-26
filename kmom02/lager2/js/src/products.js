/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: products
*/

import { baseUrl, apiKey } from "../variables.js";
// import orders from "./orders.js";

"use strict";

var products = {
    allProducts: [],

    getAllProducts(callback) {
        if (products.allProducts.length > 0) {
            return callback();
        }

        fetch(`${baseUrl}products?api_key=${apiKey}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                products.allProducts = result.data;

                return callback();
            });
    },

    getProduct: function(productId) {
        return products.allProducts.filter(function(product) {
            return product.id == productId;
        })[0];
    },

    // updateProductStock: function(productId) {
    //     let product = getProduct(productId);
    //     return console.info(getProduct(item));
    // },

    // checkProductStock: function(orderId) {
    //     let order = orders.getOrder(orderId);

    //     array.forEach(orderItem => {
    //         let product = products.getProduct(productId);

    //         return console.info("product -> ", product.name, "amount -> ", product.amount);
    //     });
    // },

};

export default products;
