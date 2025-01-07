class ControladorVentas {
    constructor(servicioVentas) {
        this.servicioVentas = servicioVentas;
    }

    crearVenta(req, res) {
        const datosVenta = req.body;
        const resultado = this.servicioVentas.procesarVenta(datosVenta);
        res.status(resultado.success ? 201 : 400).json(resultado);
    }

    obtenerVentas(req, res) {
        const ventas = this.servicioVentas.obtenerReporteVentas();
        res.status(200).json(ventas);
    }
}

export default ControladorVentas;