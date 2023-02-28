function saludar(){
    console.log("Hola cara e bola");
}

let btn_saludar = document.getElementById("btn_saludar");

btn_saludar.addEventListener("click", saludar);

//MOUSEDOW Se ejecuta cuando doy click
let btn_dos = document.getElementById("btn_dos"); 
btn_dos.addEventListener("mousedown", function(e){
    console.log("Se escucho el mousedow");
    console.log(e);

    console.log(e.button);

    if(e.button == 0){
        console.log("Boton Izquierdo");
    }
    else if(e.button == 1){
        console.log("Ruedita");
    }
    else if(e.button == 2){
        console.log("Boton Derecho");
    }
    else{
        console.log("Otro botón")
    }
});

//MOUSEUP  cuando suelto el click

btn_dos.addEventListener("mouseup", function(e){
    console.log("Se escucho el mouseup");
    console.log("Se soltó el boton: ", e.button);
}
);

//MOUSEOVER MOUSEOUT  paso el mouse y cambia la imagen

let img_leon = document.getElementById("img_leon");
img_leon.addEventListener("mouseover", function(){
    img_leon.src = "../image/02.png";
})

img_leon.addEventListener("mouseout", function(){
    img_leon.src = "../image/01.jpg";
})

//Keydow  al precionar una tecla

window.addEventListener("keydown", function(e){
    console.log(e.key);

    if( e.key == "ArrowUp"){
        document.body.style.background = "gray";
    }
    else if(e.key == "ArrowDown"){
        document.body.style.background = "white";
    }
})