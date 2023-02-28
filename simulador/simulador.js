let listado_usuarios = [];

function nuevoUsuario(){
    let nombre = document.getElementById("txtNombre");
    let apellido = document.getElementById("txtApellido");
    let edad = document.getElementById("txtEdad");


        let usuario = {nombre:nombre.value, apellido:apellido.value, edad:edad.value}

        listado_usuarios.push(usuario)

        let usuario_json = JSON.stringify(listado_usuarios);
        localStorage.setItem("listado_usuarios", usuario_json);
}

let btn_registarse = document.getElementById("btn_registarse");
btn_registarse.addEventListener("click", nuevoUsuario);
btn_registarse.addEventListener("click", validarUsuario);


function validarUsuario(){
    let arrUsuario = localStorage.getItem("listado_usuarios");
    arrUsuario = JSON.parse(arrUsuario);

    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = document.getElementById("txtEdad").value;


    let msg = document.getElementById("mensaje")

        if(nombre != "" && apellido != "" && edad >= 18){
            let mensaje = document.createElement("div");
                mensaje.innerHTML = `<p class="alert alert-success">Registro exitoso</p>`;

                msg.append(mensaje);

        }else{
            let mensaje = document.createElement("div");
                mensaje.innerHTML = `<p class="alert alert-danger">Debes ser mayor de edad para continuar</p>`;

                msg.append(mensaje);

        }
}




function calcularPrestamo(monto, cuotas){
    if(cuotas == 3){
        let interes = monto * 0.10;
        return interes;
    }
    else if(cuotas == 6){
        let interes = monto * 0.20;
        return interes;
    }
    else if(cuotas == 9){
        let interes = monto * 0.45;
        return interes;
    }
    else if(cuotas == 12){
        let interes = monto * 0.70;
        return interes;
    }

}

let consulta = [];
function consultarPrestamo(e){
    let monto = parseInt(document.getElementById("txtCantidad").value);
    let cuotas = document.getElementById("selCuotas").value;
    let total = monto + calcularPrestamo(monto, cuotas);

    let resultadoConsulta = {
        monto: monto,
        cuotas: cuotas,
        total: total
    };

    consulta.push(resultadoConsulta);
    
}


function mostrarConsulta(){
    let tabla = document.getElementById("tabla");

    for(resultadoConsulta of consulta){
        let fila = document.createElement("tr");
        fila.innerHTML = `
                          <td>${listado_usuarios.nombre}</td>
                          <td>${listado_usuarios.apellido}</td>
                          <td>${listado_usuarios.edad}</td>
                          <td>${resultadoConsulta.monto}</td>
                          <td>${resultadoConsulta.cuotas}</td>
                          <td>${resultadoConsulta.total}</td>`;
                          
                          tabla.append(fila);
        }
        console.log(monto)
    
}

    


let btn_consultar = document.getElementById("btn_consultar");
btn_consultar.addEventListener("click", consultarPrestamo);

console.log(consulta);
