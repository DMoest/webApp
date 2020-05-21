/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Lagerappen
 * Daniel Andersson, DAAP19
 * module: order details
*/

"use strict";

import orders from "../src/orders.js";
import orderList from "./order_listView.js";
import utils from "../utils.js";
import menu from "../menu.js";

let orderDetails = {
    showOrder: function(orderId) {
        let root = document.getElementById("root");
        let order = orders.getOrder(orderId);
        let lb = utils.createElement({
            type: "BR"
        }); /* LB for LineBreak */

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
            className: "container-order"
        }));

        container.appendChild(utils.createElement({
            type: "div",
            id:  "container-customer",
            className: "container-order-customer"
        }));
        
        container.appendChild(utils.createElement({
            type: "h1",
            textContent: order.name,
            className: "container-order-header"
        }));

        var containerOrder = document.getElementById("container");
        var containerCustomer = document.getElementById("container-customer");
        var containerItems = document.getElementById("container-items");

        container.appendChild(utils.createElement({
            type: "p",
            textContent: "Adress: ",
            className: "container-order-labels"
        }));

        container.appendChild(utils.createElement({
            type:           "p",
            textContent:    order.address+ "\n"+ order.zip+ " "+ order.city+ "\n"+ order.country,
            className:      "container-order-details"
        }));
        
        container.appendChild(utils.createElement({
            type: "p",
            textContent: "Order ID: ",
            className: "container-order-labels"
        }));

        container.appendChild(utils.createElement({
            type:           "p",
            textContent:    order.id,
            className:      "container-order-details"
        }));

        container.appendChild(utils.createElement({
            type: "p",
            textContent: "Status: ",
            className: "container-order-labels"
        }));

        container.appendChild(utils.createElement({
            type: "p",
            textContent: order.status,
            className:      "container-order-details"
        }));

        root.appendChild(utils.createElement({
            type: "a",
            className: "button",
            textContent: "Packa Order",
            href: "#",
            onclick: orderList.showOrders
        }));

        (function(orderId) {
            console.info("order.order_items ->", order.order_items);

            var counter = 0;
            
            container.appendChild(utils.createElement({
                type: "h3",
                textContent: "Beställt ",
                className: "container-order-subHeader"
            }));

            container.appendChild(utils.createElement({
                type: "div",
                id:  "container-order-items",
                className: "container-order-items"
            }));
            
            var orderItems = order.order_items.map(function(orderItem) {
                console.info("orderItem -> ", orderItem.name);

                let orderItemsContainer = document.getElementById("container-order-items");

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Artikel ",
                    className:      "container-order-labels"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.name,
                    className:      "container-order-details"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Artikelnr. ",
                    className:      "container-order-labels"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.product_id,
                    className:      "container-order-details"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Antal ",
                    className:      "container-order-labels"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.amount,
                    className:      "container-order-details"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: "Plats ",
                    className:      "container-order-labels"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "p",
                    textContent: orderItem.location,
                    className:      "container-order-details"
                }));

                orderItemsContainer.appendChild(utils.createElement({
                    type: "hr",
                    className:      "container-order-subHeader"
                }));
            });
        })();

        menu.showMenu("info_outline");
    }
};

export default orderDetails;