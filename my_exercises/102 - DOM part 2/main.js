/** --- WEBAPP ---
 * DV1609 - Webbapplikationer för mobila enheter
 * Daniel Andersson
 * DAAP19
 * Övningar från videoserien i kursen
 * JavaScript DOM grunderna - part 2
 */

"use strict";

(function() {
    var root = document.getElementById("root"); // Hämta ut root-elementet.
    console.info("Up and running!")

    var element = document.createElement("p"); // Skapa element. Jag skapar en paragraf (p).
    element.className = "paragraf"; // Ge elementet en klass (paragraf).
    element.textContent = "Hej och välkommen till Webbapp"; // Ger elementet innehåll, en sträng.

    var element2 = document.createElement("p"); // Skapar ett till element.

    element2.innerHTML = "Hej och välkommen till <strong>Webbapp</strong>."; // Lägger till text. InnerHTML kan vara bra när man vill lägga till mer text.


    root.appendChild(element); // Lägg till elementet i root.
    root.appendChild(element2); // Lägger till element2 i root.

    console.info("DONE!")
})();
