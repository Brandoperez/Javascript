//Obtener datos desde los input
function saludar(){
    let nombre = document.getElementById("nombre_usuario");
    console.log(nombre);
    console.log("Bienvenido al sistema: ", nombre.value);
}


function validar(){
    let nombre = document.getElementById("nombre_usuario");
    let msj = document.getElementById("mensaje");

        if( nombre.value == "pepe"){
            let parrafo = document.createElement("p");
            parrafo.innerText = "Bienvenido al sistema: " + nombre.value;
            parrafo.style.fontSize = "24px";
            parrafo.style.textAlign = "center";
            msj.append(parrafo);
        }
        else{
            document.body.innerHTML = `<h2>Error de usuario</h2>
                                       <p class= "estilo_parrafo">El usuario ${nombre.value} no se encontró</p>
                                       <a href ="archivo2.html">volver</a>`
        }
}

let nombre = document.getElementById("nombre_usuario");
console.log(nombre);
console.log(nombre.value);