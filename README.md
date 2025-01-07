# README.md

# Minimarket JS

Minimarket JS is a simple JavaScript application designed to manage a mini-market's inventory and sales. This project provides a structured way to handle products, sales, and inventory management.

## Project Structure

```
minimarket-js
├── src
│   ├── index.js
│   ├── controllers
│   │   ├── inventory.js
│   │   ├── sales.js
│   │   └── products.js
│   ├── models
│   │   ├── Product.js
│   │   ├── Sale.js
│   │   └── Inventory.js
│   ├── services
│   │   ├── inventoryService.js
│   │   └── salesService.js
│   └── utils
│       ├── validation.js
│       └── helpers.js
├── package.json
└── README.md
```

## Features

- **Inventory Management**: Add, remove, and view items in the inventory.
- **Sales Processing**: Create and retrieve sales records.
- **Product Management**: Add, remove, and list products.

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