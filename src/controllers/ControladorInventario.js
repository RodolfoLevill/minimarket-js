import ServicioInventario from '../services/ServicioInventario.js';

class ControladorInventario {
    constructor() {
        this.servicioInventario = new ServicioInventario();
    }

    agregarProducto(item) {
        return this.servicioInventario.agregarProductoAlInventario(item);
    }

    eliminarProducto(itemId) {
        return this.servicioInventario.eliminarProductoDelInventario(itemId);
    }

    obtenerInventario() {
        return this.servicioInventario.obtenerInventario();
    }

    actualizarProducto(itemId, datosActualizados) {
        return this.servicioInventario.actualizarProductoEnInventario(itemId, datosActualizados);
    }

    obtenerProductoPorId(itemId) {
        return this.servicioInventario.buscarProductoPorId(itemId);
    }

    obtenerProductosConQR() {
        return this.productos.filter(producto => producto.codigoQR);
    }

    buscarPorQR(codigoQR) {
        return this.productos.find(producto => producto.codigoQR === codigoQR);
    }

    generarCodigoQR(producto) {
        return `QR-${Date.now()}-${producto.nombre.replace(/\s/g, '')}`;
    }
}

export default ControladorInventario;