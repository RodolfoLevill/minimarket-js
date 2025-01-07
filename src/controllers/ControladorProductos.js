class ControladorProductos {
    constructor() {
        this.productos = [];
    }

    generarCodigoQR(producto) {
        return `QR-${Date.now()}-${producto.nombre.replace(/\s/g, '')}`;
    }

    agregarProducto(producto) {
        if (!producto.codigo_barras) {
            producto.codigoQR = this.generarCodigoQR(producto);
        }
        this.productos.push(producto);
        return producto;
    }

    eliminarProducto(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }

    obtenerProductos() {
        return this.productos;
    }

    obtenerProductosConQR() {
        return this.productos.filter(producto => producto.codigoQR);
    }

    buscarPorQR(codigoQR) {
        return this.productos.find(producto => producto.codigoQR === codigoQR);
    }
}

export default ControladorProductos;