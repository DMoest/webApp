/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - Lagerappen
 * Daniel Andersson, DAAP19
*/

"use strict";

var item = (function () {
    var showItem = function (product) {
        window.mainContainer.innerHTML = "";

        var apiKey = "43cd935f2bd048cc1aa5af2359181e0d";
        var root = document.getElementById("root");
        var title = document.createElement("h1");

        title.textContent = product.name;

        window.mainContainer.appendChild(title);

        // FETCH:
        fetch('https://lager.emilfolino.se/v2/products/{product.id}?api_key=43cd935f2bd048cc1aa5af2359181e0d')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                var productId = document.createElement("p");

                productId.textContent = "ID: " + product.id;

                var productArticleNr = document.createElement("p");

                productArticleNr.textContent = "Artikel nr: " + product.article_number;

                var productName = document.createElement("p");

                productName.textContent = "Namn: " + product.name;

                var productDesc = document.createElement("p");

                productDesc.textContent = "Beskrivning: " + product.description;

                var productSpec = document.createElement("p");

                productSpec.textContent = "Specifikationer: " + product.specifiers;

                var productStock = document.createElement("p");

                productStock.textContent = "Saldo: " + product.stock;

                var productLocation = document.createElement("p");

                productLocation.textContent = "Plats: " + product.location;

                var productPrice = document.createElement("p");

                productPrice.textContent = "Pris: " + product.price;

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

        window.menu.showMenu("info_outline");
    };

    return {
        showItem: showItem
    };
})(item);

export { item };
