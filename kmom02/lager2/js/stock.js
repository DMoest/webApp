/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: stock
*/

/* global mainContainer */

"use strict";

import { menu } from "./menu.js";
import { item } from "./item.js";

// var md = window.markdownit();

var stock = {
    showStock: function () {
        window.mainContainer.innerHTML = "";

        var apiKey = "43cd935f2bd048cc1aa5af2359181e0d";
        var root = document.getElementById("root");

        var header = document.createElement("h1");

        header.textContent = "Lager del 1";
        window.mainContainer.appendChild(header);

        // FETCH:
        fetch('https://lager.emilfolino.se/v2/products?api_key=' + apiKey)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                result.data.forEach(function(product) {
                    var productElement = document.createElement("p");

                    productElement.className = "productElement";

                    productElement.textContent = product.name;
                    productElement.addEventListener("click", function handleClick(event) {
                        // console.log(event);
                        // console.info(product.id);
                        // console.info(product.article_number);
                        // console.info(product.name);
                        // console.log(product.description);
                        // console.log(product.specifiers);
                        // console.log(product.stock);
                        // console.log(product.location);
                        // console.log(product.price);

                        return item.showItem(product);
                    });
                    window.mainContainer.appendChild(productElement);
                });
                // console.info(result);
            });

        root.appendChild(mainContainer);

        menu.showMenu("storage");
    }
};

export { stock };
