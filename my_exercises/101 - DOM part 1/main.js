/** --- WEBAPP ---
 * DV1609 - Webbapplikationer för mobila enheter
 * Daniel Andersson
 * DAAP19
 * Övningar från videoserien i kursen
 * JavaScript DOM grunderna - part 1
 */

"use strict";

(function() {
    var root = document.getElementById("root"); // Hämta ut root-elementet.
    console.info("Up and running!")

    var element = document.createElement("p"); // Skapa element. Jag skapar en paragraf (p).
    element.className = "paragraf"; // Ge elementet en klass (paragraf).
    element.textContent = "Hej och välkommen till Webbapp"; // Ger elementet innehåll, en sträng.

    root.appendChild(element); // Lägg till elementet i root.

    console.info("DONE!")
})();
