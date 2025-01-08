import Venta from './Venta.js';

class HistorialVentas {
    constructor() {
        this.ventas = [];
    }

    agregarVenta(venta) {
        if (venta instanceof Venta) {
            this.ventas.push(venta);
            return true;
        }
        return false;
    }

    obtenerVentas() {
        return this.ventas;
    }

    obtenerVentaPorId(id) {
        return this.ventas.find(venta => venta.id === id);
    }

    obtenerVentasPorCliente(clienteId) {
        return this.ventas.filter(venta => venta.cliente && venta.cliente.id === clienteId);
    }

    obtenerVentasPorEstado(estado) {
        return this.ventas.filter(venta => venta.estado === estado);
    }

    obtenerTotalVentas() {
        return this.ventas.reduce((total, venta) => total + venta.precio_final, 0);
    }

    generarReporteVentasPorCliente(clienteId) {
        const ventasCliente = this.obtenerVentasPorCliente(clienteId);
        return ventasCliente.map(venta => venta.obtenerDetalleVenta());
    }

    generarReporteVentasPorEstado(estado) {
        const ventasEstado = this.obtenerVentasPorEstado(estado);
        return ventasEstado.map(venta => venta.obtenerDetalleVenta());
    }

    generarReporteTotalVentas() {
        const totalVentas = this.obtenerTotalVentas();
        return {
            totalVentas,
            cantidadVentas: this.ventas.length
        };
    }

    generarReporteVentasPorFecha(fechaInicio, fechaFin) {
        const ventasPorFecha = this.ventas.filter(venta => {
            const fechaVenta = new Date(venta.fecha);
            return fechaVenta >= new Date(fechaInicio) && fechaFin <= new Date(fechaFin);
        });
        return ventasPorFecha.map(venta => venta.obtenerDetalleVenta());
    }

    generarReporteVentasPorProducto(productoId) {
        const ventasProducto = this.ventas.filter(venta => venta.productoId === productoId);
        return ventasProducto.map(venta => venta.obtenerDetalleVenta());
    }
}

export default HistorialVentas;
