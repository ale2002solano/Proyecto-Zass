const mostrarLogIn = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'block';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('logo').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('loginCliente').style.margin= '210px 0 0 35px';
    document.getElementById('loginCliente').style.width= '100%';
}

const mostrarCrearCuenta = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('logo').style.display= 'none';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'block';


}

const mostrarCategoriasEmpresas = () => {
    document.getElementById('categoriasEmpresas').style.display= 'block';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('logo').style.display= 'block';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
}

const mostrarCategoriasProductos = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'block';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('logo').style.display= 'block';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';

}

const mostrarProductos = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'block';
    document.getElementById('logo').style.display= 'block';
    document.getElementById('producto').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
}

const mostrarProducto = () => {
    document.getElementById('categoriasEmpresas').style.display= 'none';
    document.getElementById('loginCliente').style.display= 'none';
    document.getElementById('categoriasProductos').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
    document.getElementById('productos').style.display= 'none';
    document.getElementById('producto').style.display= 'block';
    document.getElementById('logo').style.display= 'none';
    document.getElementById('crearCuenta').style.display= 'none';
}