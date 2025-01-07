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
}

export default ControladorInventario;