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

function mostrarConsulta(){
    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for(resultadoConsulta of consulta){
        let fila = document.createElement("tr");
        fila.innerHTML = `
                          <td>${usuario.nombre}</td>
                          <td>${usuario.apellido}</td>
                          <td>${usuario.edada}</td>
                          <td>${resultadoConsulta.monto}</td>
                          <td>${resultadoConsulta.cuotas}</td>
                          <td>${resultadoConsulta.total}</td>`;

        tabla.append(fila);
    }}


let consulta = [];
function consultarPrestamo(e){
    /*let monto = document.getElementById("txtCantidad");
    let cuotas = document.getElementById("selCuotas").target;
    let total = monto + calcularPrestamo(monto, cuotas);

    let resultadoConsulta = {
        monto: monto,
        cuotas: cuotas,
        total: total
    };

    consulta.push(resultadoConsulta);
    calcularPrestamo();
    mostrarConsulta();*/
    console.log(consultarPrestamo);

}
let btn_consultar = document.getElementById("btn_consultar");
btn_consultar.addEventListener("click", consultarPrestamo);





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
        


