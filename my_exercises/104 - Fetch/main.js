/** --- WEBAPP ---
 * DV1609 - Webbapplikationer för mobila enheter
 * Daniel Andersson
 * DAAP19
 * Övningar från videoserien i kursen
 * Fetch()
 */

"use strict";

(function() {
    var root = document.getElementById("root"); // Hämta ut root-elementet.
    var element = document.createElement("p"); // Skapa element. Jag skapar en paragraf (p).

    fetch("http://quotes.rest/qod.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var quote = data.content.quotes[0].quote;
        element.textContent = quote;
    })
    .catch(function(err) {
        console.info(err);
    });

    root.appendChild(element);
})();
