/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: products list
*/

"use strict";

import { menu } from "./menu.js";
import { products } from "./products.js";
import { productDetails } from "./product_details.js";

let productList = {
    showProducts() {
        products.getAllProducts(productList.renderProducts);
    },

    renderProducts() {
        let root = document.getElementById("root");

        root.innerHTML = "<h1>Produkter</h1>";

        products.allProducts.map(function (product) {
            let productElement = document.createElement("p");

            productElement.className = "productElement";

            productElement.textContent = product.name;

            productElement.addEventListener("click", function() {
                return productDetails.showProduct(product.id);
            });

            root.appendChild(productElement);
        });

        menu.showMenu("storage");
    }
};

export { productList };
