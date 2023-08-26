var pedido = [];
var usuarioGuardado = '';
const mostrarLogIn = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'block';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('loginCliente').style.margin= '210px 0 0 35px';
    document.getElementById('loginCliente').style.width= '100%';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('carrito').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
}

const mostrarCrearCuenta = () => {
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'block';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'block';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('carrito').style.display= 'none';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
}

const mostrarCategoriasEmpresas = () => {
    renderizarEmpresas();
    document.getElementById('categoriasEmpresas').style.display= 'block';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('finalizar-compra').style.display= 'none';
}

const mostrarCategoriasProductos = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'block';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
}

const mostrarProductos = () => {
    document.getElementById('productos').style.display= 'block';
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('gracias').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
}

const mostrarProducto = () => {
    document.getElementById('producto').style.display= 'block';
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
}

const mostrarCarrito = () => {
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('carritoIcon').style.display= 'block';
    document.getElementById('finalizar-compra').style.display= 'none';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';
}

const mostrarFinalizarCompra = () => {
    document.getElementById('finalizar-compra').style.display= 'block';
    document.getElementById('carrito').style.display= 'block';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('gracias').style.display= 'none';

}

const mostrarGracias = () => {
    agregarPedido()
    document.getElementById('gracias').style.display= 'block';
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('carritoIcon').style.display= 'none';
    document.getElementById('carrito').style.display= 'none';
    document.getElementById('finalizar-compra').style.display= 'none';
}

const loginUsuario = async () => {
    const correo = document.getElementById('correoUsuario').value;
    const contrasena = document.getElementById('contraUsuario').value;

    json = {
        "correo": `${correo}`,
        "contrasena": `${contrasena}`
    }

    let respuesta = await fetch("http://localhost:8088/usuarios/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    }
    );
    usuarioGuardado = await respuesta.json();
    console.log(usuarioGuardado);
    if(usuarioGuardado.status){
        mostrarCategoriasEmpresas();
    }else{
        alert("Error en correo/contraseña");
    }
}
const cargarUsuarios = async () => {
    let respuesta = await fetch("http://localhost:8088/usuarios",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    usuarios = await respuesta.json();
    return usuarios;
}


const registroUsuario = async () => {
    const users = await cargarUsuarios();
    console.log(users);
    const id = users.result.length + 1;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const contrasenaVerificar = document.getElementById('confirmar').value;

    json = {
        "id": `${id}`, 
        "nombre": `${nombres}`,  
        "apellido": `${apellidos}`,  
        "correo": `${correo}`,  
        "contrasena": `${contrasena}`,  
        "contrasenaVerificar": `${contrasenaVerificar}`
    }
    console.log(json);

    let respuesta = await fetch("http://localhost:8088/usuarios/registrar",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    }
    );
    usuarioGuardado = await respuesta.json();
    if(usuarioGuardado){
        console.log(usuarioGuardado);
        mostrarLogIn();
        alert("¡Bienvenido!");
    }else{
        alert("Contraseñas no coinciden");
    }
}

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
    document.getElementById('categoriasEmpresa').innerHTML = "";
    console.log(empresas);
    let htmlEstrellas = '';
    let htmlSinEstrellas = '';
    htmlEstrellas = `<div><h4><i class="icon fa-solid fa-star"></i></h4></div>`;
    htmlSinEstrellas = `<div><h4><i class="icon fa-regular fa-star"></i></h4></div>`
    empresas.resultado.forEach((empresa) => {
        document.getElementById('categoriasEmpresa').innerHTML +=
        `
        <div onclick="renderizarCategoriasUsuario('${empresa.nombre}')" class="catgEmpresas shadow-lg" >
                <div><img alt="" style="height: 120px; " src="${empresa.imagen}"></div>
                <div class="descripcion-empresa">
                    <div><p>${empresa.nombre}</p></div>
                    <div><h4>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-regular fa-star"></i>
                    </h4></div>
                </div>
            </div>
        `
    });
}

const cargarCategoriasUsuario = async () => {
    let respuesta = await fetch("http://localhost:8088/categorias",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    categoriasUsuario = await respuesta.json();
    console.log(categoriasUsuario);
    return categoriasUsuario;
}

const renderizarCategoriasUsuario = async (empresa) => {
    localStorage.setItem("empresa", JSON.stringify(empresa));
    const categorias = await cargarCategoriasUsuario();
    console.log(categorias);
    document.getElementById('categoriasProducto').innerHTML = "";
    
    categorias.result.forEach((categoria) => {

        document.getElementById('categoriasProducto').innerHTML +=
        `
        <div onclick="renderizarProductosCategoria(${categoria.idCategoria},'${categoria.nombreCategoria}')" class="catg shadow-lg">
                <img alt="" src="${categoria.imagen}">${categoria.nombreCategoria}
            </div>
        `
    });
    mostrarCategoriasProductos();
}

const renderizarProductosCategoria = async (id, categoriaNombre) => {
    const productos = await obtenerProductosCategoria(id);
    console.log(productos);
    document.getElementById('flex').innerHTML = "";
    
    document.getElementById('catDescripcion').innerHTML = '';
    document.getElementById('catDescripcion').innerHTML =
    `
    <div><h4><p class="iniciar" style="font-family: 'Parisienne', cursive; font-size: 40px; top: 14$;">${categoriaNombre}</p></div></h4>
    `

    productos.resultado.forEach((producto) => {

        document.getElementById('flex').innerHTML +=
        `
        <div class=" card-productos shadow" onclick="renderizarProductoPorCategoria(${producto.idProductos})">
                <div class="img"><img class="card-img" src="${producto.img}" class="card-img-top" alt="..."></div>
                <div class="card-text card-body">
                    <h5 class="card-title">${producto.nombreProducto}</h5>
                    <h4>L.${producto.precio}</h4>
                    <h4>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-regular fa-star"></i>
                    </h4>
                </div>
        </div>
        `
    });

    mostrarProductos()
}

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
    const producto = await cargarProductoPorCategoria(id);
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
        `
    
    mostrarProducto()
}

const cargarProductoPorCategoria = async (id) => {
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/producto`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    let productoC = await respuesta.json();
    
    return productoC;
}

const actualizarCantidad = async (id) => {
    console.log(id);
    const cant = document.getElementById('unidades').value;
    console.log(cant);
    const json = {
        "cantidad": `${cant}`
    }
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/producto/actualizar/cantidad`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    const usuarioActualizado = await respuesta.json();
    console.log(usuarioActualizado);
    renderizarCarrito(cant, id);
}

const renderizarCarrito = async (cantidad, idProducto) => {
    console.log(cantidad, idProducto);
    
    const producto = await cargarProducto(idProducto);
    console.log(producto);
    let elegido = producto.resultado;
    
    for (let i = 0; i < cantidad; i++) {
        document.getElementById('productos-elegidos').innerHTML +=
        `
        <div class=" card-productos shadow" onclick="mostrarProducto()">
                <div class="img"><img class="card-img" src="${elegido.img}" class="card-img-top" alt="..."></div>
                <div class="card-text card-body">
                    <h5 class="card-title">${elegido.nombreProducto}</h5>
                    <h4>L.${elegido.precio}</h4>
                    <h4>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-solid fa-star"></i>
                        <i class="icon fa-regular fa-star"></i>
                    </h4>
                </div>
        </div>
        `
        pedido.push(producto.resultado);
    }
    console.log(pedido);
    
    document.getElementById('btnFinalizar').innerHTML = `<button onclick="direccionEnvio()" id="finalizar">Finalizar Compra</button>`
    mostrarCarrito();
}

const direccionEnvio = () => {
    
    mostrarFinalizarCompra()
}

const cargarProducto = async (id) => {
    let respuesta = await fetch(`http://localhost:8088/productos/${id}/producto`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    let producto = await respuesta.json();
    return producto;
}

const agregarPedido = async () => {
    const id = await obtenerPedidos() + 1;
    const usuario = usuarioGuardado.usuario;
    console.log(pedido);
    let pago = 0;
    let precio = 0;
    let impuesto = 0;
    let total = 0;
    let direccion = document.getElementById('direccion').value;
    let establecimiento = JSON.parse(localStorage.getItem('empresa'));
    for (let i = 0; i < pedido.length; i++) {
        precio = Number(pedido[i].precio)
        pago += precio;
    }
    impuesto = pago*(0.15);
    total = pago + impuesto;
    console.log(total);
    const json = {
        "idPedido": `${id}`,   
        "nombreCliente": `${usuario.nombre}`,  
        "pedido": pedido, 
        "impuesto": `${impuesto}`,   
        "total": `${total}`,  
        "fecha": `28/08/2023`,  
        "establecimiento":  `${establecimiento}`,
        "direccion": `${direccion}`,  
        "estadoOrden":  "disponible",
        "idUsuario": `${usuario.id}`
    }
    console.log(json);
    let respuesta = await fetch(`http://localhost:8088/pedidos/guardar`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    const pedidoAgregado = await respuesta.json();
    console.log(pedidoAgregado);
}

const obtenerPedidos = async () => {
    let respuesta = await fetch("http://localhost:8088/pedidos/",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    );
    pedidos = await respuesta.json();
    console.log(pedidos);
    return pedidos.result.length;
}




