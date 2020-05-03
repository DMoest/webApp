/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - Lagerappen
 * Daniel Andersson, DAAP19
*/

"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");
        var image = document.createElement("img");

        title.className = "title";
        title.textContent = "Lagerappen";
        image.src = "img/bolts_n_screws.jpg";
        image.alt = "Warehouse stocks";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            " och välkommen till lagerappen.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);

export { home };
