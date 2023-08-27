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
    renderizarMotoristas();
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
    document.getElementById("admin-ordenes").style.display="none";
}

function camisasProductos(){
    renderizarCategoriasProductos();
    document.getElementById("camisa").style.display="block";
    document.getElementById("productos").style.display="block";
    document.getElementById("admin-ordenes").style.display="none";
}

function Ordenes(){
    renderizarPedidosDisponibles();
}
function Ordenes2(){
    renderizarPedidosPendientes();
}
function Ordenes3(){
    renderizarPedidosEntregados();
}

function formatoOrdenes(){
    document.getElementById("formato").style.display="block";
}

function agregarEmpresa(){
    AgregarEmpresa();
}

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
        <div onclick="renderizarProductosCategoria(${categoria.idCategoria});">
        <div class="catg-1" onclick="camisasProductos();">
            <img src="${categoria.imagen}" id="img-catg">
            ${categoria.nombreCategoria}
          </div>
        </div>
        `
    });
}
//OBTENER PRODUCTOS POR CATEGORIA
const obtenerProductosCategoria = async (id) => {
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/categoria`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    let productosCat = await respuesta.json();
    return productosCat;
}
const renderizarProductoPorCategoria = async (id) => {
    const producto = await ObtenerProductosPorCatg(id);
    console.log(producto);
    let product = producto.resultado;
}

const ObtenerProductosPorCatg = async () => {
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/producto`,
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
const renderizarProductosCategoria = async (id) => {
    const productos = await obtenerProductosCategoria(id);
    console.log(productos);
    document.getElementById("camisas").innerHTML = "";

    productos.resultado.forEach((producto) => {

        document.getElementById("camisas").innerHTML +=
        `
        <div class="card-empresa" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-titulo">${producto.nombreProducto}</h5>
            <p class="card-text">L.${producto.precio}</p>
            <button class="btn btn-outline-danger btn-sm" style="float:right"><i class="fas fa-trash-alt"></i></button>
            <button class="btn btn-outline-success btn-sm" style="float:right"><i class="fa-regular fa-pen-to-square"></i></button>
          </div>
        </div>
        `
    });
}
// FIN ADMINISTRAR PRODUCTOS


//ADMINISTRAR MOTORISTAS
const cargarMotoristas = async () => {
    let respuesta = await fetch("http://localhost:8088/motoristas",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    motoristas = await respuesta.json();
    return motoristas;
}
const renderizarMotoristas = async () => {
    console.log("renderizado");
    const motoristas = await cargarMotoristas();
    document.getElementById("motoristas").innerHTML = "";
    console.log(motoristas);
    motoristas.result.forEach((motorista) => {
        document.getElementById("motoristas").innerHTML +=
        document.getElementById("motoristas").innerHTML +=
        `
        <div class="card-motoristas" style="width: 25rem;">
        <img src="assetsAdmin/img/user.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${motorista.nombre}${" "}${motorista.apellido}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, culpa.</p>
          <p>Correo electronico: ${motorista.correo}</p>
          <br>
          <button class="btn btn-outline-danger btn-sm" style="float:right"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      `
        
    });
}
//FIN ADMIN MOTORISTAS

//ADMINISTRAR PEDIDOS DISPONIBLES,ENTREGADOS, PENDIENTES
const cargarPedidosDisponibles = async () => {
    let respuesta = await fetch("http://localhost:8088/pedidos/disponibles",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    disponibles = await respuesta.json();
    console.log(disponibles);
    if(disponibles.status){
        return disponibles;
    }else{
        alert('Por los momentos no hay pedidos disponibles')
    }
}
const renderizarPedidosDisponibles = async () => {
    const disponibles = await cargarPedidosDisponibles()
    console.log(disponibles);
    document.getElementById('form').innerHTML = "";

    let html = '';
    disponibles.result.forEach((disponible) => {
        let pedidos = disponible.pedido;
        pedidos.forEach((descripcion)=>{
            html += 
                `
                <tr>
                <td> ${descripcion.cantidad}</td>
                <td>${descripcion.nombreProducto}</td>
                <td>L. ${descripcion.precio}</td>
              </tr>
                `
        })        

        document.getElementById('form').innerHTML +=
        `
        <div id="formato-ordenes">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Nombre cliente:</th>
              <td>${disponible.nombreCliente}</td>
            </tr>
            <tr>
            <th scope="row">Carrito/Pedido:</th>
            <td>
            <div id="tabla-ordenes">
              <table class="carrito">
                <tbody>
                  <tr>
                    <th>Cant.</th>
                    <th>Descrip.</th>
                    <th>Precio.</th>
                  </tr>
                  ${html}
                </tbody>
              </table>
              </div>
            </td>
            </tr>
            <tr>
              <th scope="row">Impuesto:</th>
              <td>L.${disponible.impuesto}</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td>L.${disponible.total}</td>
            </tr>
            <tr>
              <th scope="row">Fecha:</th>
              <td>${disponible.fecha}</td>
            </tr>
            <tr>
              <th scope="row">Estado orden:</th>
              <td>${disponible.estadoOrden}</td>
            </tr>
            <tr>
              <th scope="row">Establecimiento:</th>
              <td>${disponible.establecimiento}</td>
            </tr>
            <tr>
              <th scope="row">Domicilio:</th>
              <td>${disponible.direccion}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `
    });
}

const cargarPedidosPendientes = async () => {
    let respuesta = await fetch("http://localhost:8088/pedidos/pendientes",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    pendientes = await respuesta.json();
    console.log(pendientes);
    if(pendientes.status){
        return pendientes;
    }else{
        alert('Por los momentos no hay pedidos pendientes')
    }
}
const renderizarPedidosPendientes = async () => {
    const pendientes = await cargarPedidosPendientes()
    console.log(pendientes);
    document.getElementById('form').innerHTML = "";

    let html = '';
    pendientes.result.forEach((pendiente) => {
        let pedidos = pendiente.pedido;
        pedidos.forEach((descripcion)=>{
            html += 
                `
                <tr>
                <td> ${descripcion.cantidad}</td>
                <td>${descripcion.nombreProducto}</td>
                <td>${descripcion.precio}</td>
              </tr>
                `
        })        

        document.getElementById('form').innerHTML +=
        `
        <div id="formato-ordenes">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Nombre cliente:</th>
              <td>${pendiente.nombreCliente}</td>
            </tr>
            <tr>
            <th scope="row">Carrito/Pedido:</th>
            <td>
            <div id="tabla-ordenes">
              <table class="carrito">
                <tbody>
                  <tr>
                    <th>Cant.</th>
                    <th>Descrip.</th>
                    <th>Precio.</th>
                  </tr>
                  ${html}
                </tbody>
              </table>
              </div>
            </td>
            </tr>
            <tr>
              <th scope="row">Impuesto:</th>
              <td>${pendiente.impuesto}</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td>${pendiente.total}</td>
            </tr>
            <tr>
              <th scope="row">Fecha:</th>
              <td>${pendiente.fecha}</td>
            </tr>
            <tr>
              <th scope="row">Estado orden:</th>
              <td>${pendiente.estadoOrden}</td>
            </tr>
            <tr>
              <th scope="row">Establecimiento:</th>
              <td>${pendiente.establecimiento}</td>
            </tr>
            <tr>
              <th scope="row">Domicilio:</th>
              <td>${pendiente.direccion}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `
    });
}

const cargarPedidosEntregados = async () => {
    let respuesta = await fetch("http://localhost:8088/pedidos/entregados",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    entregados = await respuesta.json();
    console.log(entregados);
    if(entregados.status){
        return entregados;
    }else{
        alert('Por los momentos no hay pedidos entregados')
    }
}
const renderizarPedidosEntregados = async () => {
    const entregados = await cargarPedidosEntregados()
    console.log(entregados);
    document.getElementById('form').innerHTML = "";

    let html = '';
    entregados.result.forEach((entregado) => {
        let pedidos = entregado.pedido;
        pedidos.forEach((descripcion)=>{
            html += 
                `
                <tr>
                <td> ${descripcion.cantidad}</td>
                <td>${descripcion.nombreProducto}</td>
                <td>${descripcion.precio}</td>
              </tr>
                `
        })        

        document.getElementById('form').innerHTML +=
        `
        <div id="formato-ordenes">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Nombre cliente:</th>
              <td>${entregado.nombreCliente}</td>
            </tr>
            <tr>
            <th scope="row">Carrito/Pedido:</th>
            <td>
            <div id="tabla-ordenes">
              <table class="carrito">
                <tbody>
                  <tr>
                    <th>Cant.</th>
                    <th>Descrip.</th>
                    <th>Precio.</th>
                  </tr>
                  ${html}
                </tbody>
              </table>
              </div>
            </td>
            </tr>
            <tr>
              <th scope="row">Impuesto:</th>
              <td>${entregado.impuesto}</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td>${entregado.total}</td>
            </tr>
            <tr>
              <th scope="row">Fecha:</th>
              <td>${entregado.fecha}</td>
            </tr>
            <tr>
              <th scope="row">Estado orden:</th>
              <td>${entregado.estadoOrden}</td>
            </tr>
            <tr>
              <th scope="row">Establecimiento:</th>
              <td>${entregado.establecimiento}</td>
            </tr>
            <tr>
              <th scope="row">Domicilio:</th>
              <td>${entregado.direccion}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `
    });
}

//AGREGAR
const AgregarEmpresa = async () => {
    const bikers = await cargarEmpresas();
    console.log(bikers);
    const id = bikers.resultado.length + 1;
    const nombres = document.getElementById('nombre-empresa').value;
    const calificacion = document.getElementById('calificacion').value;
    const imagen = document.getElementById('imagen').value;

    json = {
        "idEmpresa": `${id}`, 
        "nombre": `${nombres}`,    
        "calificacion": `${calificacion}`,  
        "imagen": `${imagen}`
    }

    let respuesta = await fetch("http://localhost:8088/empresas/guardar",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    }
    );
    empresaGuardada = await respuesta.json();
    if(empresaGuardada){
        console.log(empresaGuardada);
        alert("¡Empresa agregada!");
    }else{
        alert("No se guardo empresa");
    }
}
//ELIMINAR
const eliminarEmpresa = async (id) => {
    let respuesta = await fetch(`http://localhost:8088/empresas/${id}/empresa/eliminar`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(steph)
        }
    );
    let empresaEliminada = await respuesta.json();
    console.log(empresaEliminada);
}