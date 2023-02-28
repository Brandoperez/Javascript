localStorage.setItem("nombre_usuario", "pepe");

let clave = "edad_usuario";

localStorage.setItem(clave, "30");
localStorage.setItem("colores", ["rojo", "verde", "azul"]);

let nombre_usuario = localStorage.getItem("nombre_usuario");
let edad_usuario = localStorage.getItem("edad_usuario");
let colores = localStorage.getItem("colores");

console.log(nombre_usuario);
console.log(edad_usuario);
console.log(colores);

sessionStorage.setItem("nombre_usuario", "Guillermo");


for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("La key es: ", clave);
    console.log("El valor es: ", localStorage.getItem(clave));
}

//Remove Elimina un elemento

localStorage.removeItem("colores");
//localStorage.clear(); //borra todo

let cliente = {nombre: "Pedro", apellido: "Perez"}
localStorage.setItem("cliente_uno", cliente);
console.log(localStorage.getItem("cliente_uno"));