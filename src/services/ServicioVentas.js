import Venta from '../models/Venta.js';
import Inventario from '../models/Inventario.js';

class ServicioVentas {
    constructor() {
        this.ventas = [];
        this.inventario = new Inventario();
    }

    procesarVenta(idProducto, cantidad) {
        const producto = this.inventario.getProductById(idProducto);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        
        if (producto.cantidad < cantidad) {
            throw new Error('Stock insuficiente');
        }

        const precioTotal = producto.precio * cantidad;
        const venta = new Venta({
            id: Date.now(),
            idProducto,
            cantidad,
            precioTotal,
            fecha: new Date()
        });

        this.inventario.updateProduct({ ...producto, cantidad: producto.cantidad - cantidad });
        this.ventas.push(venta);

        return venta;
    }

    obtenerReporteVentas(fechaInicio = null, fechaFin = null) {
        if (!fechaInicio && !fechaFin) {
            return this.ventas;
        }

        return this.ventas.filter(venta => {
            const fechaVenta = new Date(venta.fecha);
            return (!fechaInicio || fechaVenta >= fechaInicio) && 
                   (!fechaFin || fechaVenta <= fechaFin);
        });
    }

    obtenerTotalVentas() {
        return this.ventas.reduce((total, venta) => total + venta.precioTotal, 0);
    }

    obtenerVentaPorId(idVenta) {
        return this.ventas.find(venta => venta.id === idVenta);
    }

    anularVenta(idVenta) {
        const indiceVenta = this.ventas.findIndex(venta => venta.id === idVenta);
        if (indiceVenta === -1) {
            throw new Error('Venta no encontrada');
        }

        const venta = this.ventas[indiceVenta];
        const producto = this.inventario.getProductById(venta.idProducto);
        this.inventario.updateProduct({ ...producto, cantidad: producto.cantidad + venta.cantidad });

        this.ventas.splice(indiceVenta, 1);
        return true;
    }
}

export default ServicioVentas;