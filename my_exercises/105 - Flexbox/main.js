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
    
    var main = document.createElement("main");
    main.className = "main";

    var red = document.createElement("div");
    red.className = "red";
    
    var green = document.createElement("div");
    green.className = "green";
    
    var blue = document.createElement("div");
    blue.className = "blue";

    main.appendChild(red);
    main.appendChild(green);
    main.appendChild(blue);

    root.appendChild(main);
})();
