const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((Error) => {
      console.log("Error", Error);
    });
};
const fillData = (json) => {
  let html = "";
  json.results.forEach(rm => {
    html += '<div class="col">';
    html += '<div class="card h-100" style="width ; 12rem;">';
    html += `<img src="${rm.image}" class="card-img-top" alt="${rm.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${rm.name}</h5>`;
    html += '</div>';
    html += '</div>';
    html += '</div>';
  });
  document.getElementById("dataAlbum").innerHTML = html;
};

getData(API);