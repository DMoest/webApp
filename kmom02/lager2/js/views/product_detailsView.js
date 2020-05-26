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

        // console.info("(productDetails) Product ->", product);

        utils.removeNodes("root");

        root.appendChild(utils.createElement({
            type: "a",
            className: "button",
            textContent: "Tillbaka",
            href: "#",
            onclick: productList.showProducts
        }));

        root.appendChild(utils.createElement({
            type:           "div",
            id:      "container",
            className:      "container_productElements"
        }));

        let productElements = document.getElementById("container");

        productElements.appendChild(utils.createElement({
            type:           "h1",
            textContent:    product.name,
            className:      "container_productItem-header"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "ID ",
            className:      "container_productItem-label"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.id,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "Artikelnr ",
            className:     "container_productItem-label"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.article_number,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "Beskrivning ",
            className:      "container_productItem-label"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.description,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type: "p",
            textContent: "Specifikationer ",
            className:      "container_productItem-label"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.specifiers,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "Saldo ",
            className:      "container_productItem-label"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.stock,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "Plats ",
            className:      "container_productItem-label"
        }));
        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.location,
            className:      "container_productItem-data"
        }));

        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    "Pris ",
            className:      "container_productItem-label"
        }));
        productElements.appendChild(utils.createElement({
            type:           "p",
            textContent:    product.price,
            className:      "container_productItem-data"
        }));

        menu.showMenu("info_outline");
    }
};

export default productDetails;
