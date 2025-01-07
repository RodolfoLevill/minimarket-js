class Producto {
    constructor(id, nombre, descripcion, precio_base, stock, categoria, codigo_barras, imagen, unidad_de_medida, fecha_vencimiento = null, proveedor, numero_proveedor, descuento = 0, porcentaje_ganancia) {
        if (precio_base < 0) throw new Error('El precio no puede ser negativo');
        if (stock < 0) throw new Error('El stock no puede ser negativo');
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio_base = precio_base;
        this.stock = stock;
        this.categoria = categoria;
        this.codigo_barras = codigo_barras;
        this.imagen = imagen; 
        this.unidad_de_medida = unidad_de_medida;
        this.fecha_vencimiento = fecha_vencimiento ? new Date(fecha_vencimiento) : null;
        this.proveedor = proveedor;
        this.numero_proveedor = numero_proveedor;
        this.descuento = descuento;
        this.porcentaje_ganancia = porcentaje_ganancia || 0;
        this.fecha_ingreso = new Date();
        this.stockMinimo = 5; // Umbral de stock bajo
    }

    actualizarStock(cantidad) {
        this.stock = Math.max(0, this.stock + cantidad);
    }

    aplicarDescuento(porcentaje) {
        this.precio_base -= this.precio_base * (porcentaje / 100);
    }

    estaVencido() {
        if (!this.fecha_vencimiento) return false;
        const hoy = new Date();
        return hoy > this.fecha_vencimiento;
    }

    mostrarInformacion() {
        return `
            ID: ${this.id}
            Nombre: ${this.nombre}
            Descripción: ${this.descripcion}
            precio_base: ${this.precio_base}
            Stock: ${this.stock}
            Categoría: ${this.categoria}
            Código de Barras: ${this.codigo_barras}
            Imagen: ${this.imagen}
            Unidad de Medida: ${this.unidad_de_medida}
            Fecha de Vencimiento: ${this.fecha_vencimiento ? this.fecha_vencimiento.toLocaleDateString() : 'No aplica'}
            Fecha de Ingreso: ${this.fecha_ingreso.toLocaleDateString()}
            Proveedor: ${this.proveedor}
            Número de Proveedor: ${this.numero_proveedor}
            Descuento: ${this.descuento}
            Porcentaje de Ganancia: ${this.porcentaje_ganancia}
        `;
    }

    obtenerAntiguedad() {
        const hoy = new Date();
        const diferencia = hoy - this.fecha_ingreso;
        return Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Retorna días
    }

    obtenerPrecioFinal() {
        // Si no hay descuento, usar directamente el precio base
        const precioConDescuento = this.descuento ? 
            this.precio_base * (1 - this.descuento / 100) : 
            this.precio_base;
        
        const precioFinal = precioConDescuento * (1 + this.porcentaje_ganancia / 100);
        return Math.round(precioFinal * 100) / 100;
    }

    getDiasParaVencer() {
        if (!this.fecha_vencimiento) return null;
        const hoy = new Date();
        const diferencia = this.fecha_vencimiento - hoy;
        return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    }

    tieneStockBajo() {
        return this.stock <= this.stockMinimo;
    }

    validarCodigoBarras() {
        // Validación básica: debe ser un número y tener entre 8 y 13 dígitos
        const codigoLimpio = this.codigo_barras.replace(/\D/g, '');
        return codigoLimpio.length >= 8 && codigoLimpio.length <= 13;
    }

    actualizarPrecioBase(nuevoPrecio) {
        if (nuevoPrecio < 0) throw new Error('El precio no puede ser negativo');
        this.precio_base = nuevoPrecio;
    }
}

export default Producto;