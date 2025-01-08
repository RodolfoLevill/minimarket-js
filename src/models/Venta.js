import Cliente from './Cliente.js';

class Venta {
    constructor(id, productoId, cantidad, precio_final, tipo_pago, descuento = 0, cliente = null) {
        this.id = id;
        this.productoId = productoId;
        this.cantidad = cantidad;
        this.precio_final = precio_final;
        this.tipo_pago = tipo_pago;
        this.fecha = new Date();
        this.descuento = descuento; // Nuevo campo descuento
        this.estado = 'pendiente';
        this.cliente = cliente ? cliente : new Cliente();
    }

    calcularTotal(precioProducto) {
        this.precio_final = this.cantidad * precioProducto;
        if (this.descuento > 0) {
            this.aplicarDescuento();
        }
        return Math.round(this.precio_final * 100) / 100;
    }

    aplicarDescuento() {
        if (this.descuento > 0) {
            this.precio_final = this.precio_final * (1 - this.descuento / 100);
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
            descuentoAplicado: (this.descuento > 0) ? 
                this.descuento : 0,
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
            this.descuento = nuevoDescuento;
            return true;
        }
        return false;
    }

    agregarDeudaCliente(monto) {
        if (this.cliente) {
            this.cliente.agregarDeuda(monto);
        }
    }

    setDescuento(nuevoDescuento) {
        if (nuevoDescuento >= 0 && nuevoDescuento <= 100) {
            this.descuento = nuevoDescuento;
            return true;
        }
        return false;
    }
}

export default Venta;