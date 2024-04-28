
document.addEventListener('DOMContentLoaded', function() 
{
    function obtenerParametroURL(nombre) {
        nombre = nombre.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + nombre + '(=([^&#]*)|&|#|$)'),
            resultados = regex.exec(window.location.href);
        if (!resultados) return null;
        if (!resultados[2]) return '';
        return decodeURIComponent(resultados[2].replace(/\+/g, ' '));
    }

    var productoId = obtenerParametroURL('productosId');
    var urlApi = "https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/" + productoId;

async function llamadaurl(url){
let resultado = await fetch(url);
let datos = await resultado.json();
return datos;
}
async function contenedor(urlApi){
    let dato = await llamadaurl(urlApi);
    document.getElementById('titulo').textContent = `${dato.title}`;
    document.getElementById('titulo2').textContent = `${dato.title}`;
    document.getElementById('imagen-notebook').src = `${dato.image_url}`;
    document.getElementById('link').href = `${dato.factory_url}`;

    for(tipoNotebook of dato.notebooksTypes) 
    {
        let li = document.createElement('li');
        li.textContent = `Cantidad Ram: ${tipoNotebook.ramAmount} | Precio: ARS ${tipoNotebook.price}`;
        document.getElementById('precio').appendChild(li);
    }
    
}

async function caracteristicas(urlApi){

    let dato = await llamadaurl(urlApi);
    let ul = document.getElementById('caracteristicas');
    let caracteristicasArray = dato.description.split('.'); 

    caracteristicasArray.forEach(caracteristica => {
        let li = document.createElement('li');
        li.textContent = caracteristica.trim(); 
        ul.appendChild(li); 
    });
}
contenedor(urlApi);
caracteristicas(urlApi);
});
