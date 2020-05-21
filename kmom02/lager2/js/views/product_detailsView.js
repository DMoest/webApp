/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: product detalis
*/

"use strict";

import products from "../src/products.js";
import productList from "./product_listView.js";
import utils from "../utils.js";
import menu from "../menu.js";

let productDetails = {
    showProduct: function(productId) {
        let root = document.getElementById("root");
        let product = products.getProduct(productId);
        console.info("(productDetails) Product ->", product);

        utils.removeNodes("root");

        root.appendChild(utils.createElement({
            type: "a",
            className: "button",
            textContent: "Tillbaka",
            href: "#",
            onclick: productList.showProducts
        }));

        root.appendChild(utils.createElement({
            type: "h1",
            textContent: product.name
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "ID: " + product.id
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Artikelnr: " + product.article_number
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Beskrivning: " + product.description
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Specifikationer: " + product.specifiers
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Saldo: " + product.stock
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Plats: " + product.location
        }));

        root.appendChild(utils.createElement({
            type: "p",
            textContent: "Pris: " + product.price
        }));

        menu.showMenu("info_outline");
    }
};

export default productDetails;
