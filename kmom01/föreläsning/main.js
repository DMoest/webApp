(function IIFE() {
    var root = document.getElementById('root');
    var container = document.createElement("div");

    container.className = "container";

    var title = document.createElement("h1");

    title.textContent = "Skolor";

    container.appendChild(title);
    root.appendChild(container);

    let url = "http://api.kolada.se/v2/ou?municipality=1980&title=skola";

    console.log("Before request");

    fetch(url)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        data.values.forEach(function(school) {
            let element = document.createElement("p");

            element.textContent = school.title;

            element.addEventListener("click", );

            container.appendChild(element);
        });
    });
    console.log("After request (at least in code)");

})();


function renderSchool (event, school, container) {
    console.log(school);
    container.innerHTML = "";


    var title = document.createElement("h1");

    title.textContent = school.title;

    var schoolID = document.createElement("p");

    schoolID.textContent = school.id;

    container.appendChild(title);
    container.appendChild(schoolID);
}
