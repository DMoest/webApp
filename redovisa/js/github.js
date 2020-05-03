/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global mainContainer rootElement menu */

"use strict";

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        // Modern way with fetch
        fetch("https://api.github.com/users/DMoest/repos")
            .then(function (response) {
                return response.json();
            }).then(function(data) {
                // console.info(data);

                data.forEach(function(repo) {
                    var repoElement = document.createElement("a");

                    console.info(repoElement);

                    repoElement.className = "github--links";
                    repoElement.href = "https://api.github.com/users/DMoest/repos";

                    repoElement.textContent = repo.name;
                    mainContainer.appendChild(repoElement);
                });

                rootElement.appendChild(window.mainContainer);

                menu.showMenu("folder");
            }).catch(function(error) {
                let errorMessage = "The fetch operation failed due to the following error: ";

                console.log(errorMessage, error.message);
            });

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Github Repos";

        // var githubRequest = new XMLHttpRequest();

        // githubRequest.addEventListener("load", renderGithubRepos);
        // githubRequest.open("GET", "https://api.github.com/users/DMoest/repos");
        // githubRequest.send();

        window.mainContainer.appendChild(title);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("folder");
    };

    return {
        showGithub: showGithub
    };
})(github);
