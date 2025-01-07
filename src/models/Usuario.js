import bcrypt from 'bcrypt';

class Usuario {
    constructor(id, nombre, email, rol, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol; // e.g., 'admin', 'vendedor'
        this.passwordHash = this.hashPassword(password);
    }

    async hashPassword(password) {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async validarPassword(password) {
        return await bcrypt.compare(password, this.passwordHash);
    }

    actualizarRol(nuevoRol) {
        this.rol = nuevoRol;
    }

    obtenerInformacion() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
            rol: this.rol
        };
    }
}

export default Usuario;