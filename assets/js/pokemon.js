const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

const getData = (api) => {
return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
fillData(json.results);
})
    .catch((Error) => {
console.log("Error", Error);
    });
};
const fillData = (data) => {
let html = "";
data.forEach(ep => {
    return fetch (ep.url)
        .then((Response) => Response.json())
        .then((data) => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width ; 12rem;">';
    html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${ep.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ep.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    document.getElementById("dataAlbum").innerHTML = html;
}).catch((Error) => {
    console.log("Error 3", Error);
        });
});

};

getData(API);
