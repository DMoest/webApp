/** --- WEBAPP ---
 * DV1609 - Webbapplikationer för mobila enheter
 * Daniel Andersson
 * DAAP19
 * Övningar från videoserien i kursen
 * XMLHttpRequest
 */

"use strict";

(function() {
    var root = document.getElementById("root"); // Hämta ut root-elementet.
    var element = document.createElement("p"); // Skapa element. Jag skapar en paragraf (p).
    var request = new XMLHttpRequest(); // XMLHttp Request.

    request.addEventListener("load", function() {
        var jsonObj = JSON.parse(this.responseText);
        var quote = jsonObj.contents.quotes[0].quote;
        
        console.info(quote);
        element.textContent = quote;
    });

    request.open("GET", "http://quotes.rest/qod.json");
    request.send();

    root.appendChild(element);
})();
