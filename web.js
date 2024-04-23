async function llamadaurl(url){
let resultado = await fetch(url);
let datos = await resultado.json();
return datos;
console.log(datos);
}
async function oferta(){

    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics");
document.getElementById('oferta').textContent = `Cantidad de productos: ${dato.amount_of_products}`;

}
oferta();

async function producto(){
 
    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    document.getElementById('nombreProducto').textContent = `Nombre:${dato.title}`;
    
}
producto();
async function caracteristicas(){

    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    let ul = document.getElementById('caracteristicas');
    let caracteristicasArray = dato.description.split('.'); 

    caracteristicasArray.forEach(caracteristica => {
        let li = document.createElement('li');
        li.textContent = caracteristica.trim(); 
        ul.appendChild(li); 
    });
}
caracteristicas();

async function imagen(){

    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    document.getElementById("imagen-notebook").src = dato.image_url;
}
imagen();
async function link(){
    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    document.getElementById("link").href = dato.factory_url;
    console.log(dato.factory_url);
}

