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

    actualizarProductoEnInventario(id, productoData) {
        // Debug logging
        console.log('Actualizando producto con ID:', id, typeof id);
        console.log('IDs en inventario:', this.inventario.map(item => ({id: item.id, type: typeof item.id})));
        
        // Ensure numeric IDs
        const idToFind = Number(id);
        const index = this.inventario.findIndex(item => Number(item.id) === idToFind);
        
        console.log('ID buscado:', idToFind, 'Índice encontrado:', index);
        console.log('Inventario:', this.inventario);
        
        if (index === -1) {
            throw new Error(`Producto no encontrado (ID: ${idToFind})`);
        }
        
        const productoActualizado = {
            ...this.inventario[index],
            ...productoData,
            id: idToFind // Maintain numeric ID
        };
        
        this.inventario[index] = productoActualizado;
        console.log('Producto actualizado:', productoActualizado);
        return productoActualizado;
    }
}

export default ServicioInventario;