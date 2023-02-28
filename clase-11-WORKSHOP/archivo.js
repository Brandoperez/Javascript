let carrito = [];

function agregarCarrito(e){
    console.log("Hola: ", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombre_producto = padre.querySelector("h5").textContent;
    console.log(nombre_producto);

    let precio_producto = padre.querySelector("span").textContent;
    console.log(precio_producto);

    let img_producto = abuelo.querySelector("img").src;
    console.log(img_producto);

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1,
        img: img_producto
    };

    carrito.push(producto);
    console.log(carrito);

    mostrarCarrito();

}

function mostrarCarrito(){
    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for(producto of carrito){
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger borrar-Elemento">Borrar</td>`;

        tabla.append(fila);
    }

    let btn_borrar = document.querySelectorAll(".borrar-elemento");

    for(let btn of btn_borrar){
        btn.addEventListener("click", borrarProducto);
    }
}

function borrarProducto(e){
    console.log("Borrar este elemento: ", e.target);

    let abuelo = e.target.parentNode.parentNode;

    let producto_eliminar = abuelo.querySelector("p").textContent;

        function eliminar_producto(producto){
            return producto.nombre != producto_eliminar
        }

        let resultado_filter = carrito.filter(eliminar_producto);

        carrito = resultado_filter;
        console.log(carrito);

        mostrarCarrito();
        
}

let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for(let boton of btn_compra){
    boton.addEventListener("click", agregarCarrito);
}

let btn_carrito = document.getElementById("mostrar_carrito");
btn_carrito.addEventListener("click", function(){
    let carrito = document.getElementById("carrito");
    if(carrito.style.display != "none"){
        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "block";
    }
})