


let usuario = document.getElementById("nombre_usuario"); 

//va marcando letra por letra
usuario.addEventListener("input", function(e){
    console.log("Eventyo input: ", e.target.value);
});

//CHANGE  Ocurre el evento cuando escribimos dentro del input y presionamos enter.
usuario.addEventListener("input", function(e){

    if(e.target.value == "pepe"){
        console.log("Bienvenido Pepe");
    }
    else{
        console.log("El usuario no encontrado: ", e.target.value);
    }
});



let form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre_form");
    console.log("Bienvenido: ", nombre.value);
})

//TODO LIST
let btn = document.getElementById("boton");

btn.addEventListener("click", function(){
    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    li.innerHTML = `<span>${producto.value}</span>
                    <button class="btn_borrar">Borrar</button>`
    lista.append(li);
    
    let botones_borrar = document.querySelectorAll(".btn_borrar");

    for(let boton of botones_borrar){
        boton.addEventListener("click", borrar_elemento);
    }
});


    
function borrar_elemento(e){
    console.log("Borar este elemento: ", e.target.value);

    let nodo_hijo = e.target;
    let nodo_padre = nodo_hijo.parentNode;
    let nodo_abuelo = nodo_padre.parentNode;

    console.log( nodo_hijo);
    console.log( nodo_padre);
    console.log( nodo_abuelo);

    nodo_padre.remove();
}