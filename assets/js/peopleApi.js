//URL API - el http que vamos a consumir
const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

//Función para obtener los resultados de la API
//Consumir API
const getData = (api) => {
  // fetch es ese request - es decir GET (trae la información de la API.)
  // parámetro (api) tiene la url, "https://jsonplaceholder.typicode.com/users"
  //y esa Url tiene el array con los 10 json, como tal la URL trae json
  // return para que retorne lo que me responio la petición.
  //Pedir (get) (get trae lo de la url) y responde.
  //Request
  return (
    // Promesas
    //Nos promete traenos lo que tenga si o si la API
    //Si sale bien
    //La promesa responde algo (response) nos va a responder lo siguiente => responda json
    fetch(api)
      .then((Response) => Response.json())
      .then((json) => {
        //guardo en la palabra json los (10 json que me trajo la api)
        //console.log(json);
        filldata(json); //Le envio los datos con el paranetro json (10 json) para que los utilice
      })
      //Muestre el error que responda la api, en caso de que no sabemos porque se callo la promesa
      .catch((Error)=>{
          console.log("Error in the API",Error)
      })
  );
};
//Tomar las personas es decir de ese array json (10 json) y dibujarlos en una card
//Llenar datos, recibiendo los datos
const filldata = (json) => {
    //Crear código html dentro del js
    let html = "";
    //ForEach es más rápido a la hora de recorrer ese array
    //pp es people - porque se va a guardar persona por persona cada uno de los items
    // del array, en una card
    json.forEach(pp => {
        html += '<div class="col">'; // Se recomienda comillas simples
        html += '<div class="card h-100">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pp.name}</h5>`
        html += `<p class="card-text">${pp.email}</p>`
        html += '<div class="card-footer">'
        html += `<small class="text-muted">${pp.address.suite}</small>`
        html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
        html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    });

    document.getElementById("dataPeople").innerHTML = html;
};

btnSearch.onclick = function () {
  //Un parametro recibe un valor - variable
  //Se ejecuta la API
  getData(API);
};
