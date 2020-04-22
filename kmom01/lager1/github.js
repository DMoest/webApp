/**
 * Webbapplikationer för mobila enheter
 * KMOM01 - SPA Övning
 * Daniel Andersson, DAAP19
*/

"use strict";

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        // Modern way with fetch
        fetch("https://api.github.com/users/DMoest/repos")
        .then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("p");

                repoElement.textContent = repo.name;
                mainContainer.appendChild(repoElement);
            });

            rootElement.appendChild(window.mainContainer);

            showMenu("github");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "GitHub";

        var githubRequest = new XMLHttpRequest();

        githubRequest.addEventListener("load", renderGithubRepos);
        githubRequest.open("GET", "https://api.github.com/users/DMoest/repos");
        githubRequest.send();

        window.mainContainer.appendChild(title);

        window.rootElement.appendChild(window.mainContainer);

        window.menu.showMenu("folder");
    };

    return {
        showGithub: showGithub
    };
})(github);
