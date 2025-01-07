import Inventario from '../models/Inventario.js';

class ServicioInventario {
    constructor() {
        this.inventario = new Inventario();
    }

    agregarProductoAlInventario(producto) {
        this.inventario.addItem(producto);
    }

    eliminarProductoDelInventario(productoId) {
        this.inventario.removeItem(productoId);
    }

    actualizarProductoEnInventario(productoActualizado) {
        this.inventario.updateProduct(productoActualizado);
    }

    obtenerInventario() {
        return this.inventario.getInventario();
    }

    buscarProductoPorId(productoId) {
        return this.inventario.getProductById(productoId);
    }

    listarProductosPorCategoria(categoria) {
        return this.inventario.getProductsByCategory(categoria);
    }
}

export default ServicioInventario;