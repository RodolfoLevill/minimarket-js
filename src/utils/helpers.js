// src/utils/helpers.js

/**
 * Formats a precio to a string with two decimal places.
 * @param {number} precio - The precio to format.
 * @returns {string} - The formatted precio.
 */
export function formatearPrecio(precio) {
    return precio.toFixed(2);
}

/**
 * Generates a unique ID.
 * @returns {string} - A unique identifier.
 */
export function generarIdUnico() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

/**
 * Checks if a value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a number, false otherwise.
 */
export function esNumero(value) {
    return typeof value === 'number' && !isNaN(value);
}