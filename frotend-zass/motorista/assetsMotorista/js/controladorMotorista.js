function registro(){
    document.getElementById("registros").style.display="block";
    document.getElementById("login").style.display="none";
    document.getElementById('categoriasMotorista').style.display="none";
    document.getElementById("logo").style.display="none";
    document.getElementById("pedidos-disponibles").style.display="none";
    document.getElementById("pedidos-pendientes").style.display="none";
    document.getElementById("pedidos-entregados").style.display="none";
}
function irLogin(){
    document.getElementById("login").style.display="block";
    document.getElementById("registros").style.display="none";
    document.getElementById('categoriasMotorista').style.display="none";
    document.getElementById("pedidos-disponibles").style.display="none";
    document.getElementById("pedidos-pendientes").style.display="none";
    document.getElementById("pedidos-entregados").style.display="none";
    document.getElementById("logo").style.display="none";
    // document.getElementsByClassName('card-productos').style.display="none";
}

const mostrarCategoriasMotoristas = () => {
    document.getElementById("login").style.display="none";
    document.getElementById("registros").style.display="none";
    document.getElementById('categoriasMotorista').style.display="block";
    document.getElementById("pedidos-disponibles").style.display="none";
    document.getElementById("pedidos-pendientes").style.display="none";
    document.getElementById("pedidos-entregados").style.display="none";
    document.getElementById("logo").style.display="none";

}

const mostrarPedidosDisponibles = () => {
    document.getElementById("login").style.display="none";
    document.getElementById("registros").style.display="none";
    document.getElementById('categoriasMotorista').style.display="none";
    document.getElementById("pedidos-disponibles").style.display="block";
    document.getElementById("pedidos-pendientes").style.display="none";
    document.getElementById("pedidos-entregados").style.display="none";
    document.getElementById("logo").style.display="none";
    // document.getElementsByClassName('card-productos').style.display="none";
}

const mostrarPedidosPendientes = () => {
    document.getElementById("login").style.display="none";
    document.getElementById("registros").style.display="none";
    document.getElementById('categoriasMotorista').style.display="none";
    document.getElementById("pedidos-disponibles").style.display="none";
    document.getElementById("pedidos-pendientes").style.display="block";
    document.getElementById("pedidos-entregados").style.display="none";
    document.getElementById("logo").style.display="none";

}

const mostrarPedidosEntregados = () => {
    document.getElementById("login").style.display="none";
    document.getElementById("registros").style.display="none";
    document.getElementById('categoriasMotorista').style.display="none";
    document.getElementById("pedidos-disponibles").style.display="none";
    document.getElementById("pedidos-pendientes").style.display="none";
    document.getElementById("pedidos-entregados").style.display="block";
    document.getElementById("logo").style.display="none";
}

const loginMotorista = async () => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    json = {
        "correo": `${correo}`,
        "contrasena": `${contrasena}`
    }

    let respuesta = await fetch("http://localhost:8088/motoristas/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    }
    );
    motoristaObtenido = await respuesta.json();
    console.log(motoristaObtenido);
    localStorage.setItem('motorista', JSON.stringify(motoristaObtenido.motorista.nombre));
    if(motoristaObtenido.status){
        mostrarCategoriasMotoristas();
    }else{
        alert("Error en correo/contraseña");
    }
}

const registroMotorista = async () => {
    const bikers = await cargarMotoristas();
    console.log(bikers);
    const id = bikers.result.length + 1;
    const nombres = document.getElementById('nombres').value;
    // const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo1').value;
    const contrasena = document.getElementById('contrasena1').value;
    const contrasenaVerificar = document.getElementById('confirmar').value;

    json = {
        "id": `${id}`, 
        "nombre": `${nombres}`,  
        // "apellido": `${apellidos}`,  
        "correo": `${correo}`,  
        "contrasena": `${contrasena}`,  
        "contrasenaVerificar": `${contrasenaVerificar}`
    }

    let respuesta = await fetch("http://localhost:8088/motoristas/registrar",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(json)
    }
    );
    motoristaRegistrado = await respuesta.json();
    if(motoristaRegistrado){
        console.log(motoristaRegistrado);
        irLogin();
        alert("¡Bienvenido!");
    }else{
        alert("Contraseñas no coinciden");
    }
}

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

const renderizarPedidosDisponibles = async () => {
    const disponibles = await cargarPedidosDisponibles()
    console.log(disponibles);
    document.getElementById('pedidos-disp').innerHTML = '';

    let html = '';
    disponibles.result.forEach((disponible) => {
    let cont = 0;
        let pedidos = disponible.pedido;
        
        pedidos.forEach((descripcion)=>{
            cont++;
            html += 
                `
                <h6>Producto ${cont}</h6>
                <p>Descripcion: ${descripcion.nombreProducto}, cantidad: ${descripcion.cantidad} </p>
                `
        })        

        document.getElementById('pedidos-disp').innerHTML +=
        `
        <div class="tamaño-pedidos shadow-lg" >
                <div class="descripcion-empresa">
                    <div><h5>Descripcion de pedido:</h5>
                        <p>
                            <h5>Nombre de ciente:</h5> ${disponible.nombreCliente}
                            <h5>Productos:</h5> ${html}
                            <h5>Empresa:</h5> ${disponible.establecimiento}
                            <div><h5>Direccion:</h5><p>${disponible.direccion}</p></div>
                            </p>
                    </div>
                </div>
                <div class="fin">
                    <img alt="" style="height: 70px; " src="../modoAdministrativo/assetsAdmin/img/orden-disponible.png">
                    <div><button class="button-tomar-pedido" onclick="pedidoPendiente(${disponible.idPedido})" >Tomar pedido</button></div>
                </div>
            </div>
        `
    html = '';
    });
    mostrarPedidosDisponibles()
}

const renderizarPedidosEntregados = async () => {
    const entregados = await cargarPedidosEntregados()
    console.log(entregados);
    document.getElementById('pedidos-entreg').innerHTML = '';

    let descripcion = [];
    let html = '';
    entregados.result.forEach((disponible) => {
    let cont = 0;
        let pedidos = disponible.pedido;
        pedidos.forEach((descripcion)=>{
            cont++;
            html += 
                `
                <h6>Producto ${cont}</h6>
                <p>Descripcion: ${descripcion.nombreProducto}, cantidad: ${descripcion.cantidad} </p>
                `
        })        

        document.getElementById('pedidos-entreg').innerHTML +=
        `
        <div class="tamaño-pedidos shadow-lg" >
                <div class="descripcion-empresa">
                    <div><h5>Descripcion de pedido:</h5>
                        <p>
                            <h5>Nombre de ciente:</h5> ${disponible.nombreCliente}
                            <h5>Productos:</h5> ${html}
                            <h5>Empresa:</h5> ${disponible.establecimiento}
                            <div><h5>Direccion:</h5><p>${disponible.direccion}</p></div>
                            <h5>Motorista:</h5> ${disponible.motorista}
                            </p>
                    </div>
                </div>
                <div class="fin">
                        <img alt="" style="height: 70px; " src="../modoAdministrativo/assetsAdmin/img/orden-entregada.png">
                        <div><button class="button-tomar-pedido">Entregado</button></div>
                </div>
            </div>
        `
    });
    html = '';
    mostrarPedidosEntregados()
}

const renderizarPedidosPendientes = async () => {
    const pendientes = await cargarPedidosPendientes()
    console.log(pendientes);
    document.getElementById('pedidos.pend').innerHTML = '';

    let html = '';
    pendientes.result.forEach((disponible) => {
    let cont = 0;
        let pedidos = disponible.pedido;
        pedidos.forEach((descripcion)=>{
            cont++;
            html += 
                `
                <h6>Producto ${cont}</h6>
                <p>Descripcion: ${descripcion.nombreProducto}, cantidad: ${descripcion.cantidad} </p>
                `
        });        

        document.getElementById('pedidos.pend').innerHTML +=
        `
        <div class="tamaño-pedidos shadow-lg" >
                <div class="descripcion-empresa">
                    <div><h5>Descripcion de pedido:</h5>
                            <h5>Nombre de ciente:</h5> <p>${disponible.nombreCliente}</p>
                            <h5>Productos:</h5> <p>${html}</p>
                            <h5>Empresa:</h5> <p>${disponible.establecimiento}</p>
                            <div><h5>Direccion:</h5><p>${disponible.direccion}</p></div>
                            <h5>Motorista:</h5> <p>${disponible.motorista}</p>
                    </div>
                </div>
                <div class="fin">
                    <img alt="" style="height: 70px; " src="../modoAdministrativo/assetsAdmin/img/orden-pendiente.png">
                    <div><button class="button-tomar-pedido" onclick="pedidoEntregado('${disponible.idPedido}')" >Entregado</button></div>
                </div>
            </div>
        `
    });
    mostrarPedidosPendientes()
}

const pedidoPendiente = (id) => {
    console.log(id);
    let motorista = JSON.parse(localStorage.getItem('motorista'));
    let json = {
        "estadoOrden": "pendiente",
        "motorista": `${motorista}`
    }
    console.log(json);
    actualizarPedido(id, json);
}


const pedidoEntregado = (id) => {
    console.log(id);
    let json = {
        "estadoOrden": "entregado"
    }
    actualizarPedido(id, json);
}

const actualizarPedido = async (id, json) => {
    let respuesta = await fetch(`http://localhost:8088/pedidos/${id}/pedido/actualizar`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(json)
        }
    );
    const pedidoActualizado = await respuesta.json();
    console.log(pedidoActualizado);
}