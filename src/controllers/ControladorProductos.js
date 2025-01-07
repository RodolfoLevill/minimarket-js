class ControladorProductos {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }

    obtenerProductos() {
        return this.productos;
    }
}

export default ControladorProductos;