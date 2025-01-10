class Cliente {
    constructor(id, rut, nombre, email, telefono, deuda = 0) {
        this.id = id;
        this.rut = rut;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.deuda = deuda;
    }

    agregarDeuda(monto) {
        this.deuda += monto;
    }

    pagarDeuda(monto) {
        this.deuda = Math.max(0, this.deuda - monto);
    }

    obtenerInformacion() {
        return {
            id: this.id,
            rut: this.rut,
            nombre: this.nombre,
            email: this.email,
            telefono: this.telefono,
            deuda: this.deuda,
        };
    }
}

export default Cliente;