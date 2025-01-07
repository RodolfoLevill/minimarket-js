# README.md

# Minimarket JS

Minimarket JS is a simple JavaScript application designed to manage a mini-market's inventory and sales. This project provides a structured way to handle products, sales, and inventory management.

## Project Structure

```
minimarket-js
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── ControladorInventario.js
│   │   │   └── ControladorVentas.js
│   │   ├── models
│   │   │   ├── Inventario.js
│   │   │   ├── Producto.js
│   │   │   ├── Venta.js
│   │   │   └── Cliente.js
│   │   ├── services
│   │   │   ├── ServicioInventario.js
│   │   │   └── ServicioVentas.js
│   │   └── index.js
│   └── package.json
└── frontend
    ├── src
    │   ├── components
    │   │   ├── InventoryList.js
    │   │   ├── SalesList.js
    │   │   └── ProductCard.js
    │   ├── pages
    │   │   ├── Dashboard.js
    │   │   ├── Inventory.js
    │   │   ├── Sales.js
    │   │   ├── MainLayout.js
    │   │   └── Navbar.js
    │   ├── services
    │   │   └── api.js
    │   └── App.js
    ├── public
    │   ├── index.html
    │   └── styles.css
    └── package.json
```

## Features

- **Inventory Management**: Add, remove, and view items in the inventory.
- **Sales Processing**: Create and retrieve sales records.
- **Dashboard**: View key metrics and statistics.
- **Responsive Design**: Modern and responsive UI using Material-UI.
- **User Authentication**: Password handling for users.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd minimarket-js
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
node src/index.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.