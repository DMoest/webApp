/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - SPA Övning
 * Daniel Andersson, DAAP19
*/

var md = window.markdownit();

var report = (function () {
    var showReport = function () {
        window.mainContainer.innerHTML = "";

        fetch("markdown/kmom01.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("assignment");
    };

    return {
        showReport: showReport
    };
})(report);
