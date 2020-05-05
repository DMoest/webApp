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







//     showStock: function () {
//         window.mainContainer.innerHTML = "";

        
//         var root = document.getElementById("root");

//         var header = document.createElement("h1");

//         header.textContent = "Lager del 2";
//         mainContainer.appendChild(header);

//         // FETCH:
//         fetch('https://lager.emilfolino.se/v2/products?api_key=' + apiKey)
//             .then(function(response) {
//                 return response.json();
//             })
//             .then(function(result) {
//                 stock.allStockItems = result.data;

//                 // console.info(stock.allStockItems);
                
//                 result.data.forEach(function(product) {
//                     var productElement = document.createElement("p");

//                     productElement.className = "productElement";

//                     productElement.textContent = product.name;
//                     productElement.addEventListener("click", function handleClick(event) {
//                         // console.log(event);
//                         // console.info(product.id);
//                         // console.info(product.article_number);
//                         // console.info(product.name);
//                         // console.log(product.description);
//                         // console.log(product.specifiers);
//                         // console.log(product.stock);
//                         // console.log(product.location);
//                         // console.log(product.price);

//                         return item.showItem(product);
//                     });
//                     window.mainContainer.appendChild(productElement);
//                 });
//                 // console.info(result);
//             });

//         root.appendChild(mainContainer);

//         menu.showMenu("storage");
//     }
// };

// export { stock };
