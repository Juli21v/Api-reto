const API = "https://jsonplaceholder.typicode.com/photos";

//Obteniendo de la API o sea la URL
const getData = (api) => {
  //Retorna el resultado de la API ya que el fetch se encarga de
  //consumir la API o sea (api) que tiene la URL
  return fetch(api)
    .then((Response) => Response.json()) //Guarda esos json en esta palabrita (json) <-- hay 5mil fotos
    .then((json) => {
      fillData(json); //Sen envian esas 5mil fotos a la función fillData para ya dibujarlos en el HTML
    })
    .catch((Error) => {
      console.log("Error", Error); //En caso e que haya un error
    });
};
const fillData = (data) => {
  //data es el mismo json, aquí se reciben esas 5mil fotos
  let html = ""; //Creamos la variable HTML donde crearemos el card
  let limit = 20; //Aquí creamos un límite de 20 fotos porque sí ponemos 5mil fotos se estalla todo.
  for (let i = 0; i < limit; i++) {
    //Utilizamos un for normal porque tiene un límite, cuando no tiene límite se usa el foreach, ej: 10, 20, 50 json.
    html += '<div class="col">'; // Se recomienda comillas simples
    html += '<div class="card h-100" style="width ; 12rem;">';
    html += `<img src="${data[i].url}" class="card-img-top" alt="${data[i].title}">`; //5mil fotos en la posición i o sea: 1, 2, 3, 4, 5.
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data[i].title}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  }
  document.getElementById("dataAlbum").innerHTML = html; //Se toma el div donde se van a poner las 10 card y se le coloca el html.
};
//Se invoca la función automáticamente ya que no tenemos el botón
//Se le envia la variable API
getData(API);