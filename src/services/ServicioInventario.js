import Inventario from '../models/Inventario';

const inventario = new Inventario();

export const agregarProductoAlInventario = (producto) => {
    inventario.addItem(producto);
};

export const eliminarProductoDelInventario = (productoId) => {
    inventario.removeItem(productoId);
};

export const actualizarProductoEnInventario = (productoId, productoActualizado) => {
    inventario.updateProduct(productoId, productoActualizado);
};

export const obtenerInventario = () => {
    return inventario.getInventario();
};

export const buscarProductoPorId = (productoId) => {
    return inventario.getProductById(productoId);
};

export const listarProductosPorCategoria = (categoria) => {
    return inventario.getProductsByCategory(categoria);
};