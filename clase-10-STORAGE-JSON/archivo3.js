let arr_usuarios = []

function alta_usuario(){
    let nombre_usuario = document.getElementById("nombre");
    let pass_usuario = document.getElementById("pass");

    let usuario = {nombre: nombre_usuario.value , password: pass_usuario.value};
    arr_usuarios.push(usuario);
    

    let arreglo_json = JSON.stringify(arr_usuarios);
    localStorage.setItem("arr_usuarios", arreglo_json);

}

function login_usuario(){
    let arr = localStorage.getItem("arr_usuarios");
    arr = JSON.parse(arr);

    let nombre_usuario = document.getElementById("nombre").value;
    let pass_usuario = document.getElementById("pass").value;

    for(let usuario of arr){
        if(nombre_usuario == usuario.nombre && pass_usuario == usuario.password){
            document.body.innerHTML = `<h1>Bienvenido al sistema ${usuario.nombre}</h1>
                                        <a href="archivo3.html">Volver</a>`;
                                        break
        }else{
            document.body.innerHTML = `<h1>No puede ingresar al sistema ${nombre_usuario}</h1>
                                    <a href="archivo3.html">Volver</a>`
        }
    }
}

let btn_registro = document.getElementById("btn_registro");
btn_registro.addEventListener("click", alta_usuario);

let btn_login = document.getElementById("btn_login");
btn_login.addEventListener("click", login_usuario);

