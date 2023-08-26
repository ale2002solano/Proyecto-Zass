function adminEmpresas(){
    renderizarEmpresas();
    document.getElementById("admin-empresa").style.display="block";
    document.getElementById("admin-producto-categoria").style.display="none";
    document.getElementById("admin-ordenes").style.display="none";
    document.getElementById("admin-motorista").style.display="none";
}
function adminProductos(){
    renderizarEmpresasProductos();
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
    ObtenerCategoriasProductos(); 
    renderizarCategoriasProductos();
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

// function nuevaApp(){
//     indiceAppSeleccionada = null;
//     document.getElementById("nombre-app").value = null;
//     document.getElementById("desarrollador" ).value = null;
//     document.getElementById("calificacion").value = null;
//     document.getElementById("lista-imagenes").value = null;
  
//     document.getElementById("btn-guardar").style.display="block";//OCULTO
//     document.getElementById("btn-actualizar").style.display="none";//MOSTRANDO
  
//   }

//ESTABLECER ESTADO DE LA ORDEN
var divs = document.querySelectorAll("div");
var input=document.getElementById("estado-orden");

divs.forEach(function(div){
    div.addEventListener("click", function(){
        var idclick=this.id;
        if(idclick=="1"){
            input.value="Disponible";
        }else if(idclick=="2"){
            input.value="Pendiente";
        }else if(idclick=="3"){
            input.value="Entregada";
        }
    });
});
//FIN ESTABLECER ESTADO DE LA ORDEN

//ADMINISTRAR EMPRESAS
const cargarEmpresas = async () => {
    let respuesta = await fetch("http://localhost:8088/empresas",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    empresas = await respuesta.json();
    return empresas;
}

const renderizarEmpresas = async () => {
    console.log("renderizado");
    const empresas = await cargarEmpresas();
    document.getElementById('empresas').innerHTML = "";
    console.log(empresas);
    htmlstar = `<div><h4><i class="icon fa-solid fa-star"></i></h4></div>`;
    htmlstarless = `<div><h4><i class="icon fa-regular fa-star"></i></h4></div>`
    empresas.resultado.forEach((empresa) => {
        document.getElementById('empresas').innerHTML +=
        `
        <div onclick="renderizarCategoriasProductos('${empresa.nombre}')" class="catgEmpresas shadow-lg" >
        <div class="card-empresa" style="width: 18rem;">
        <img src="${empresa.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${empresa.nombre}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, culpa.</p>
          <div><h4>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-regular fa-star"></i>
         </h4></div>
          <br>
          <button class="btn btn-outline-danger btn-sm" style="float:right"><i class="fas fa-trash-alt"></i></button>
          <button class="btn btn-outline-success btn-sm" style="float:right"><i class="fa-regular fa-pen-to-square"></i></button>
        </div>
      </div>
      </div>
      `
        
    });
}
//FIN ADMINISTRAR EMPRESAS

//ADMINISTRAR PRODUCTOS
const renderizarEmpresasProductos = async () => {
    console.log("renderizado");
    const empresas = await cargarEmpresas();
    document.getElementById('empresasProducto').innerHTML = "";
    console.log(empresas);
    empresas.resultado.forEach((empresa) => {
        document.getElementById('empresasProducto').innerHTML +=
        `
        <div onclick="renderizarCategoriasProductos('${empresa.nombre}')" class="catgEmpresas shadow-lg" >
        <div class="card-empresa-producto" onclick="empresasProductos();">
        <img src="${empresa.imagen}" class="card-img-producto" alt="...">
        <div class="card-body">
          <h5 class="card-title-empresa-producto">${empresa.nombre}</h5>
          <br>
        </div>
      </div>
      </div>
      ` 
    });   
}

//OBTENER CATEGORIA DE PRODUCTOS
const ObtenerCategoriasProductos = async () => {
    let respuesta = await fetch("http://localhost:8088/categorias",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    CatgProductos = await respuesta.json();
    console.log(CatgProductos);
    return CatgProductos;
}
const renderizarCategoriasProductos = async (empresa) => {
    localStorage.setItem("empresa", JSON.stringify(empresa));
    const categorias = await ObtenerCategoriasProductos();
    console.log(categorias);
    document.getElementById("categorias").innerHTML = "";
    
    categorias.result.forEach((categoria) => {

        document.getElementById("categorias").innerHTML +=
        `
        <div class="catg-1" onclick="camisasProductos();">
            <img src="${categoria.imagen}" id="img-catg">
            ${categoria.nombreCategoria}
          </div>
        `
    });
}
//OBTENER PRODUCTOS POR CATEGORIA
const ObtenerProductosPorCatg = async () => {
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/categoria`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    productosCatg = await respuesta.json();
    console.log(productosCatg);
    return productosCatg;
}

const renderizarProductoPorCategoria = async (id) => {
    const producto = await ObtenerProductosPorCatg(id);
    console.log(producto);
    let product = producto.resultado;
    document.getElementById('producto').innerHTML = "";
    
        document.getElementById('producto').innerHTML +=
        `
        <div onclick="mostrarCategoriasProductos()" class="catg-producto shadow-lg" >
            <div><img alt="" style="height: 120px; " src="${product.img}"></div>
            <div class="descripcion-empresa">
                <div><p>${product.nombreProducto}</p></div>
                <div><p>L.${product.precio}</p></div>
                <div><h4>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-regular fa-star"></i>
                </h4></div>
            </div>
        </div>

        <div id="producto-carrito" class="shadow-lg">
            <div id="cantidad">Cantidad</div>
            <div id="carrito2">
                <div id="cant">
                    <div><i id="plus" class="fa-regular fa-square-plus" style="color: #009694;"></i></div>
                    <div><input id="unidades" placeholder="Unidades"></div>
                </div>
                <div><button id="añadir" onclick="actualizarCantidad(${product.idProductos})">Añadir al carrito</button></div>
            </div>
        </div>
        `}

// FIN ADMINISTRAR PRODUCTOS