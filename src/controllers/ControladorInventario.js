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
}

export default ControladorInventario;