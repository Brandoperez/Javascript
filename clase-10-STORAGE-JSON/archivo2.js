let cliente = [{nombre: "pepe", apellido: "Lopez"}, {nombre: "Ramona", apellido: "Linarez"}];
let cliente_json = JSON.stringify(cliente); //convierte a json
console.log(cliente);
console.log(cliente_json);

localStorage.setItem("clientes", cliente_json);

let recuperando_cliente = localStorage.getItem("clientes");
console.log(recuperando_cliente);

recuperando_cliente = JSON.parse(recuperando_cliente); //Desconvierte el json
console.log(recuperando_cliente);

