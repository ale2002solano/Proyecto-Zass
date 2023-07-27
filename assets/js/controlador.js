const mostrarCategoriasEmpresas = () => {
    document.getElementById('categoriasEmpresas').style.display= 'block';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('Producto').style.display= 'none';
}

const mostrarCategoriasProductos = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'block';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('Producto').style.display= 'none';
}

const mostrarProducto = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('Producto').style.display= 'block';
}