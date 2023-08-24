function adminEmpresas(){
    document.getElementById("admin-empresa").style.display="block";
    document.getElementById("admin-producto-categoria").style.display="none";
    document.getElementById("admin-ordenes").style.display="none";
    document.getElementById("admin-motorista").style.display="none";
}
function adminProductos(){
    document.getElementById("admin-producto-categoria").style.display="block";
    document.getElementById("admin-empresa").style.display="none";
    document.getElementById("admin-motorista").style.display="none";
    document.getElementById("productos").style.display="none";
    document.getElementById("categorias-productos").style.display="none";
    document.getElementById("admin-ordenes").style.display="none";
}
function adminMotoristas(){
    document.getElementById("admin-motorista").style.display="block";
    document.getElementById("admin-producto-categoria").style.display="none";
    document.getElementById("admin-empresa").style.display="none";
    document.getElementById("admin-ordenes").style.display="none";
}
function adminOrdenes(){
    document.getElementById("admin-ordenes").style.display="block";
    document.getElementById("admin-producto-categoria").style.display="none";
    document.getElementById("admin-empresa").style.display="none";
    document.getElementById("admin-motorista").style.display="none";
}

function empresasProductos(){
    document.getElementById("categorias-productos").style.display="block";
}

function camisasProductos(){
    document.getElementById("camisa").style.display="block";
    document.getElementById("pantalones").style.display="none";
    document.getElementById("accesorios").style.display="none";
    document.getElementById("zapatos").style.display="none";
    document.getElementById("productos").style.display="block";
}
function pantalonesProductos(){
    document.getElementById("pantalones").style.display="block";
    document.getElementById("camisa").style.display="none";
    document.getElementById("accesorios").style.display="none";
    document.getElementById("zapatos").style.display="none";
    document.getElementById("productos").style.display="block";
}
function accesoriosProductos(){
    document.getElementById("accesorios").style.display="block";
    document.getElementById("pantalones").style.display="none";
    document.getElementById("camisa").style.display="none";
    document.getElementById("zapatos").style.display="none";
    document.getElementById("productos").style.display="block";
}
function zapatosProductos(){
    document.getElementById("zapatos").style.display="block";
    document.getElementById("pantalones").style.display="none";
    document.getElementById("camisa").style.display="none";
    document.getElementById("accesorios").style.display="none";
    document.getElementById("productos").style.display="block";
}
function formatoOrdenes(){
    document.getElementById("formato").style.display="block";
}

function nuevaApp(){
    indiceAppSeleccionada = null;
    document.getElementById("nombre-app").value = null;
    document.getElementById("desarrollador" ).value = null;
    document.getElementById("calificacion").value = null;
    document.getElementById("lista-imagenes").value = null;
  
    document.getElementById("btn-guardar").style.display="block";//OCULTO
    document.getElementById("btn-actualizar").style.display="none";//MOSTRANDO
  
  }