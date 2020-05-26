/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order details
*/

/* global container */

"use strict";

import orders from "../src/orders.js";
import orderList from "./order_listView.js";
import productDetails from "./product_detailsView.js";
import utils from "../utils.js";
import menu from "../menu.js";

let orderDetails = {
    showOrder: function(orderId) {
        let root = document.getElementById("root");
        let order = orders.getOrder(orderId);

        console.info("(orderDetails) Order -> ", order);

        utils.removeNodes("root");

        root.appendChild(utils.createElement({
            type: "a",
            className: "button",
            textContent: "Tillbaka",
            href: "#",
            onclick: orderList.showOrders
        }));

        root.appendChild(utils.createElement({
            type: "div",
            id:  "container",
            className: "container"
        }));

        container.appendChild(utils.createElement({
            type: "h1",
            textContent: order.name,
            className: "container_orderCustomer-header"
        }));

        container.appendChild(utils.createElement({
            type: "div",
            id:  "container_customer",
            className: "container_orderCustomer"
        }));

        var containerCustomer = document.getElementById("container_customer");

        containerCustomer.appendChild(utils.createElement({
            type: "p",
            textContent: "Adress ",
            className: "container_orderCustomer-label"
        }));

        containerCustomer.appendChild(utils.createElement({
            type:           "p",
            textContent:    order.address+ "\n"+ order.zip+ " "+ order.city+ "\n"+ order.country,
            className:      "container_orderCustomer-data"
        }));

        containerCustomer.appendChild(utils.createElement({
            type: "p",
            textContent: "Order ID ",
            className: "container_orderCustomer-label"
        }));

        containerCustomer.appendChild(utils.createElement({
            type:           "p",
            textContent:    order.id,
            className:      "container_orderCustomer-data"
        }));

        containerCustomer.appendChild(utils.createElement({
            type: "p",
            textContent: "Status ",
            className: "container_orderCustomer-label"
        }));

        containerCustomer.appendChild(utils.createElement({
            type: "p",
            textContent: order.status,
            className:      "container_orderCustomer-data"
        }));

        root.appendChild(utils.createElement({
            type: "a",
            className: "button button-confirm",
            textContent: "Packa Order",
            href: "#",
            onclick: orders.updateOrder(order.id)
        }));

        (function() {
            console.info("order ->", order);
            console.info("order.order_items ->", order.order_items);

            // var counter = 0;

            container.appendChild(utils.createElement({
                type: "h3",
                textContent: "Ordern ",
                className: "container_orderItem-subHeader"
            }));

            container.appendChild(utils.createElement({
                type: "div",
                id:  "container_orderItems",
                className: "container_orderItems"
            }));

            var orderItems = order.order_items.map(function(orderItem) {
                console.info("orderItem -> ", orderItem.name);

                let containerOrderItems = document.getElementById("container_orderItems");

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Artikel ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.name,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Artikelnr. ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    id:      "orderItem-productId",
                    textContent: orderItem.product_id,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Antal ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.amount,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Plats ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.location,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Styckpris ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.price,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Pris ",
                    className:      "container_orderItem-label"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.price * orderItem.amount,
                    className:      "container_orderItem-data"
                }));

                containerOrderItems.appendChild(utils.createElement({
                    type: "hr",
                    className:      "container_orderItem-hr"
                }));

                var product = document.getElementById("orderItem-productId");

                product.addEventListener("click", function() {
                    console.info("click!");
                    return productDetails.showProduct(orderItem.id);
                });
            });

            return orderItems;
        })();

        menu.showMenu("info_outline");
    }
};

export default orderDetails;
