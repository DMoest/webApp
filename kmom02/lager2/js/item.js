/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: item
*/

/* global */

"use strict";

import { menu } from "./menu.js";

var item = {
    showItem: function (item) {
        window.mainContainer.innerHTML = "";

        var apiKey = '43cd935f2bd048cc1aa5af2359181e0d';
        var title = document.createElement("h1");

        title.textContent = item.name;

        window.mainContainer.appendChild(title);

        // FETCH:
        fetch('https://lager.emilfolino.se/v2/products/{item.id}?api_key=' + apiKey)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                var productId = document.createElement("p");
                var productArticleNr = document.createElement("p");
                var productName = document.createElement("p");
                var productDesc = document.createElement("p");
                var productSpec = document.createElement("p");
                var productStock = document.createElement("p");
                var productLocation = document.createElement("p");
                var productPrice = document.createElement("p");

                productId.textContent = "ID: " + item.id;
                productArticleNr.textContent = "Artikel nr: " + item.article_number;
                productName.textContent = "Namn: " + item.name;
                productDesc.textContent = "Beskrivning: " + item.description;
                productSpec.textContent = "Specifikationer: " + item.specifiers;
                productStock.textContent = "Saldo: " + item.stock;
                productLocation.textContent = "Plats: " + item.location;
                productPrice.textContent = "Pris: " + item.price;

                window.mainContainer.appendChild(productId);
                window.mainContainer.appendChild(productArticleNr);
                window.mainContainer.appendChild(productName);
                window.mainContainer.appendChild(productDesc);
                window.mainContainer.appendChild(productSpec);
                window.mainContainer.appendChild(productStock);
                window.mainContainer.appendChild(productLocation);
                window.mainContainer.appendChild(productPrice);
            });

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("info_outline");
    }
};

export { item };
