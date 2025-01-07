import Usuario from '../models/Usuario.js';

class ControladorUsuarios {
    constructor() {
        this.usuarios = [];
    }

    async agregarUsuario(usuarioData) {
        const { id, nombre, email, rol, password } = usuarioData;
        const usuario = new Usuario(id, nombre, email, rol, password);
        usuario.passwordHash = await usuario.hashPassword(password);
        this.usuarios.push(usuario);
        return usuario;
    }

    eliminarUsuario(usuarioId) {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== usuarioId);
    }

    obtenerUsuarios() {
        return this.usuarios;
    }

    actualizarUsuario(usuarioId, datosActualizados) {
        const usuarioIndex = this.usuarios.findIndex(usuario => usuario.id === usuarioId);
        if (usuarioIndex !== -1) {
            this.usuarios[usuarioIndex] = { ...this.usuarios[usuarioIndex], ...datosActualizados };
            return this.usuarios[usuarioIndex];
        }
        return null;
    }

    obtenerUsuarioPorId(usuarioId) {
        return this.usuarios.find(usuario => usuario.id === usuarioId);
    }

    async validarUsuario(email, password) {
        const usuario = this.usuarios.find(usuario => usuario.email === email);
        if (usuario && await usuario.validarPassword(password)) {
            return usuario;
        }
        return null;
    }
}

export default ControladorUsuarios;