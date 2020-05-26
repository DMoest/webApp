/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: products list
*/

"use strict";

import menu from "../menu.js";
import products from "../src/products.js";
import productDetails from "./product_detailsView.js";

let productList = {
    showProducts() {
        products.getAllProducts(productList.renderProducts);
    },

    renderProducts() {
        let root = document.getElementById("root");

        root.innerHTML = "";

        let container = document.createElement("div");

        container.className = "container";

        container.innerHTML = "<h1>Produkter</h1>";

        root.appendChild(container);

        products.allProducts.map(function (product) {
            let productElement = document.createElement("p");

            productElement.className = "container_productElement container_productElement-link";

            productElement.textContent = product.name;

            productElement.addEventListener("click", function() {
                return productDetails.showProduct(product.id);
            });

            container.appendChild(productElement);
        });

        menu.showMenu("storage"); /* skapar/visar menu med markerat val */
    }
};

export default productList;
