import Cliente from './Cliente';

class Venta {
    constructor(id, productoId, cantidad, precio_final, tipo_pago, descuentoEfectivo = 0, cliente = null) {
        this.id = id;
        this.productoId = productoId;
        this.cantidad = cantidad;
        this.precio_final = precio_final;
        this.tipo_pago = tipo_pago;
        this.fecha = new Date();
        this.descuentoEfectivo = descuentoEfectivo; // Opcional, por defecto 0
        this.estado = 'pendiente'; // pendiente, completada, cancelada
        this.cliente = cliente ? cliente : new Cliente(); // Crear nueva instancia si no se proporciona
    }

    calcularTotal(precioProducto) {
        this.precio_final = this.cantidad * precioProducto;
        if (this.tipo_pago === 'efectivo' && this.descuentoEfectivo > 0) {
            this.aplicarDescuentoEfectivo();
        }
        return Math.round(this.precio_final * 100) / 100;
    }

    aplicarDescuentoEfectivo() {
        if (this.descuentoEfectivo > 0) {
            this.precio_final = this.precio_final * (1 - this.descuentoEfectivo / 100);
        }
    }

    actualizarCantidad(nuevaCantidad) {
        if (nuevaCantidad >= 0) {
            this.cantidad = nuevaCantidad;
            return true;
        }
        return false;
    }

    obtenerDetalleVenta() {
        return {
            id: this.id,
            productoId: this.productoId,
            cantidad: this.cantidad,
            total: this.precio_final,
            formaPago: this.tipo_pago,
            fecha: this.fecha,
            descuentoAplicado: (this.tipo_pago === 'efectivo' && this.descuentoEfectivo > 0) ? 
                this.descuentoEfectivo : 0,
            cliente: this.cliente ? this.cliente.obtenerInformacion() : null
        };
    }

    getFecha() {
        return this.fecha.toLocaleDateString();
    }

    validarStock(stockDisponible) {
        return stockDisponible >= this.cantidad;
    }

    cambiarEstado(nuevoEstado) {
        const estadosValidos = ['pendiente', 'completada', 'cancelada'];
        if (estadosValidos.includes(nuevoEstado)) {
            this.estado = nuevoEstado;
            return true;
        }
        return false;
    }

    generarComprobante() {
        return {
            ...this.obtenerDetalleVenta(),
            estado: this.estado,
            numeroComprobante: `V${this.id}-${new Date().getTime()}`,
            fechaEmision: new Date().toLocaleString()
        };
    }

    setDescuentoEfectivo(nuevoDescuento) {
        if (nuevoDescuento >= 0 && nuevoDescuento <= 100) {
            this.descuentoEfectivo = nuevoDescuento;
            return true;
        }
        return false;
    }

    agregarDeudaCliente(monto) {
        if (this.cliente) {
            this.cliente.agregarDeuda(monto);
        }
    }
}

export default Venta;