class Inventario {
    constructor() {
        this.productos = [];
    }

    addItem(producto) {
        this.productos.push(producto);
    }

    removeItem(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }

    getInventario() {
        return this.productos;
    }

    getProductById(productoId) {
        return this.productos.find(producto => producto.id === productoId);
    }

    getProductsByCategory(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    updateProduct(productoActualizado) {
        const index = this.productos.findIndex(producto => producto.id === productoActualizado.id);
        if (index !== -1) {
            this.productos[index] = productoActualizado;
        }
    }

    updateStock(productoId, nuevoStock) {
        const producto = this.getProductById(productoId);
        if (producto) {
            producto.stock = nuevoStock;
        }
    }
}

export default Inventario;