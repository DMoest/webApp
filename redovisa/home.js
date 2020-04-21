/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - SPA Övning
 * Daniel Andersson, DAAP19
*/

"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");
        var image = document.createElement("img");

        title.className = "title";
        title.textContent = "Daniel Andersson";
        image.src = "img/me.png";
        image.alt = "Daniel Andersson";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", jag heter Daniel Andersson och är student i kursen webapp, VT-20.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        

        // --- --- --- FIXA DETTA!!! --- --- ---
        // var md = window.markdownit();
        
        // (function () {
        //         window.mainContainer.innerHTML = "";

        //         fetch("markdown/home.md")
        //             .then(function(response) {
        //                 return response.text();
        //             })
        //             .then(function(result) {
        //                 window.mainContainer.innerHTML = md.render(result);
        //             });
        //     })();
            // --- --- --- --- --- --- ---



        menu.showMenu("person");
    };

    return {
        showHome: showHome
    };
})(home);
