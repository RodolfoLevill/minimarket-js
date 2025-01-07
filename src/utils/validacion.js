// src/utils/validation.js

/**
 * Valida los datos del producto.
 * @param {Object} datosProducto - Los datos del producto a validar.
 * @returns {boolean} - Retorna true si es válido, false si no lo es.
 */
export function validarDatosProducto(datosProducto) {
    const { nombre, precio, cantidad } = datosProducto;
    if (!nombre || typeof nombre !== 'string') return false;
    if (typeof precio !== 'number' || precio <= 0) return false;
    if (typeof cantidad !== 'number' || cantidad < 0) return false;
    return true;
}

/**
 * Valida los datos de la venta.
 * @param {Object} datosVenta - Los datos de la venta a validar.
 * @returns {boolean} - Retorna true si es válido, false si no lo es.
 */
export function validarDatosVenta(datosVenta) {
    const { idProducto, cantidad } = datosVenta;
    if (!idProducto || typeof idProducto !== 'string') return false;
    if (typeof cantidad !== 'number' || cantidad <= 0) return false;
    return true;
}

/**
 * Valida la cantidad de productos.
 * @param {number} cantidad - La cantidad a validar.
 * @returns {boolean} - Retorna true si es válida, false si no lo es.
 */
export function validarCantidad(cantidad) {
    return typeof cantidad === 'number' && cantidad >= 0;
}