/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: products
*/

"use strict";

var products = {
    allProducts: [],

    getAllProducts(callback) {
        var apiKey = "43cd935f2bd048cc1aa5af2359181e0d";

        if (products.allProducts.length > 0) {
            return callback();
        }

        fetch('https://lager.emilfolino.se/v2/products?api_key=' + apiKey)
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
    }
};

export { products };
