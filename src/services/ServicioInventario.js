class ServicioInventario {
    constructor() {
        this.inventario = [];
    }

    obtenerInventario() {
        return this.inventario || [];
    }

    agregarProductoAlInventario(producto) {
        const nuevoProducto = {
            ...producto,
            id: producto.id
        };
        this.inventario.push(nuevoProducto);
        return nuevoProducto;
    }

    eliminarProductoDelInventario(id) {
        this.inventario = this.inventario.filter(item => item.id !== id);
    }

    obtenerProductosConQR() {
        return this.inventario.filter(producto => producto.codigoQR) || [];
    }
}

export default ServicioInventario;