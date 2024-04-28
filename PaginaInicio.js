async function llamadaurl(url){
    let resultado = await fetch(url);
    let datos = await resultado.json();
    return datos;
}
    
async function oferta(){
    
    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics");
    document.getElementById('inicio').textContent = `Cantidad de productos: ${dato.amount_of_products}`;
    
}
    
async function producto(){
     
    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    document.getElementById('nombre1').textContent = `${dato.title}`;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/2");
    document.getElementById('nombre2').textContent = `${dato.title}`;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/3");
    document.getElementById('nombre3').textContent = `${dato.title}`;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/4");
    document.getElementById('nombre4').textContent = `${dato.title}`;
        
}
    
async function imagen(){
    
    let dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");
    document.getElementById("imagen1").src = dato.image_url;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/2");
    document.getElementById("imagen2").src = dato.image_url;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/3");
    document.getElementById("imagen3").src = dato.image_url;
    dato = await llamadaurl("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/4");
    document.getElementById("imagen4").src = dato.image_url;
    
}
oferta();
imagen();
producto();