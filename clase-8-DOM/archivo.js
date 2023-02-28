//Guardo en variable para almacenar el retorno

let titulo = document.getElementById("titulo_uno");
titulo.innerText = "Texto escrito desde JS"


console.log(titulo);
console.log(titulo.innerText); //agrega texto desde js
titulo.style.color = "red"; //aplica el estilo desde la etiqueta

let parrafos = document.getElementsByClassName("parrafos");

console.log(parrafos);
console.log(parrafos[0]);
console.log(parrafos[1]);
console.log(parrafos[2].innerText); //accede directamente al texto

let li = document.getElementsByTagName("li");

console.log(li);

for( let elemento of li){
    console.log(elemento);
    console.log(elemento.innerText);
}

let contenedor = document.getElementById("contenedor");

contenedor.innerHTML = "<p>Parrafo desde js</p>"; //modifica el texto desde js
contenedor.className = "parrafo-rojo"; //modifica o agrega una clase desde js


let parrafo_js = document.createElement("p");
parrafo_js.innerText = "Parrafo creado desde js";
parrafo_js.className = "parrafo-rojo";
parrafo_js.style.fontSize = "30px";
parrafo_js.style.textAlign = "center";

contenedor.append(parrafo_js); //agrega donde queremos poner el parrafo creado
contenedor.remove(); //remueve
