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
    document.getElementsByClassName('card-productos').style.display="none";
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
    document.getElementsByClassName('card-productos').style.display="none";

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
