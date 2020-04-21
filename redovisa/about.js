/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - SPA Övning
 * Daniel Andersson, DAAP19
*/

"use strict";

var md = window.markdownit();

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        fetch("markdown/about.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("assignment");
    };

    return {
        showAbout: showAbout
    };
})(about);






// (function () {
//     var showAbout = function () {
//         window.mainContainer.innerHTML = "";

//         var title = document.createElement("h1");

//         title.className = "title";
//         title.textContent = "Kursen webapp";

//         var greeting = document.createElement("p");
//         var timeOfDayGreeting = "Hej";
        
//         var

//         var now = new Date();

//         if (now.getHours() <= 10) {
//             timeOfDayGreeting = "Godmorgon";
//         } else if (now.getHours() >= 17) {
//             timeOfDayGreeting = "God kväll";
//         }

//         greeting.textContent = "";

//         window.mainContainer.appendChild(title);
//         window.mainContainer.appendChild(greeting);

//         window.rootElement.appendChild(window.mainContainer);

//         menu.showMenu("school");
//     };

//     return {
//         showAbout: showAbout
//     };
// })(about);
