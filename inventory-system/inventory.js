// Product Class
class Product {
    constructor(name, productId, price, stock = 0) {
        this.name = name;
        this.productId = productId;
        this.price = price;
        this.stock = stock;
    }

    addStock(quantity) {
        this.stock += quantity;
        console.log(`${quantity} units added to ${this.name}. Total stock: ${this.stock}`);
    }

    sell(quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`${quantity} units of ${this.name} sold. Remaining stock: ${this.stock}`);
        } else {
            console.log(`Insufficient stock for ${this.name}. Only ${this.stock} available.`);
        }
    }
}

// Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`${product.name} added to inventory.`);
    }

    sellProduct(productId, quantity) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            product.sell(quantity);
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }

    checkStock(productId) {
        const product = this.products.find(p => p.productId === productId);
        if (product) {
            console.log(`Stock for ${product.name}: ${product.stock}`);
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }
}

// Testing the Inventory System
const inventory = new Inventory();

const product1 = new Product("Laptop", 101, 75000);
const product2 = new Product("Phone", 102, 25000);

inventory.addProduct(product1);
inventory.addProduct(product2);

product1.addStock(10);
product2.addStock(20);

inventory.sellProduct(101, 3);  // Sell 3 Laptops
inventory.sellProduct(102, 25); // Try to sell more Phones than available

inventory.checkStock(101); // Check Laptop stock
inventory.checkStock(102); // Check Phone stock
