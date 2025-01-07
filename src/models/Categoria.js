class Categoria {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    obtenerId() {
        return this.id;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerDescripcion() {
        return this.descripcion;
    }

    setId(id) {
        this.id = id;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
}

module.exports = Categoria;
