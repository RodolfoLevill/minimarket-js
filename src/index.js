import express from 'express';
import cors from 'cors';
import ControladorInventario from './controllers/ControladorInventario.js';
import ServicioInventario from './services/ServicioInventario.js';
import ServicioVentas from './services/ServicioVentas.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Ensure CORS is enabled

// Inicializar servicios y controladores
const servicioInventario = new ServicioInventario();
const controladorInventario = new ControladorInventario(servicioInventario);
const servicioVentas = new ServicioVentas();

// Rutas de inventario
app.get('/api/inventario', (req, res) => {
    try {
        const inventario = controladorInventario.obtenerInventario();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/inventario', (req, res) => {
    try {
        const nuevoProducto = controladorInventario.agregarProducto(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.put('/api/inventario/:id', (req, res) => {
    try {
        const producto = controladorInventario.actualizarProducto(req.params.id, req.body);
        res.json(producto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/api/inventario/:id', (req, res) => {
    try {
        controladorInventario.eliminarProducto(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Rutas de ventas
app.post('/api/ventas', (req, res) => {
    try {
        const { idProducto, cantidad } = req.body;
        const venta = servicioVentas.procesarVenta(idProducto, cantidad);
        res.status(201).json(venta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/ventas', (req, res) => {
    try {
        const ventas = servicioVentas.obtenerReporteVentas();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Manejador de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor minimarket corriendo en http://localhost:${PORT}`);
});

export default app;