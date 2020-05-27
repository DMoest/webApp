/**
 * Webbapplikationer för mobila enheter
 * KMOM02 - Redovisa
 * Daniel Andersson, DAAP19
*/

/* global mainContainer rootElement */

"use strict";

import { menu } from "./menu.js";

var github = {
    allRepos: [],

    showGithub: function () {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Github Repos";

        window.mainContainer.appendChild(title);

        if (github.allRepos.length === 0)  {
            fetch("https://api.github.com/users/DMoest/repos")
                .then(function (response) {
                    return response.json();
                }).then(function(data) {
                    github.allRepos = data;
                    github.drawRepos();
                }).catch(function(error) {
                    let errorMessage = "The fetch operation failed due to the following error: ";

                    console.log(errorMessage, error.message);
                });
        } else {
            github.drawRepos();
        }

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("folder");
    },

    drawRepos: function () {
        github.allRepos.forEach(function(repo) {
            var repoElement = document.createElement("a");

            // console.info(repoElement);

            repoElement.className = "github--links";

            repoElement.textContent = repo.name;
            window.mainContainer.appendChild(repoElement);
        });

        rootElement.appendChild(mainContainer);

        menu.showMenu("folder");
    },
};

export { github };
