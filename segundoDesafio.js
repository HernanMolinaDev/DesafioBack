const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    addProduct(product) {
        const products = this.getProducts();
        const newProduct = {
            id: this.generateUniqueId(products),
            ...product,
        };
        products.push(newProduct);
        this.saveProducts(products);
        return newProduct;
    }

    getProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(data) || [];
        } catch (error) {
            return [];
        }
    }

    getProductById(id) {
        const products = this.getProducts();
        return products.find((product) => product.id === id);
    }

    updateProduct(id, updatedProduct) {
        const products = this.getProducts();
        const index = products.findIndex((product) => product.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...updatedProduct };
            this.saveProducts(products);
            return products[index];
        }
        return null; 
    }

    deleteProduct(id) {
        const products = this.getProducts();
        const filteredProducts = products.filter((product) => product.id !== id);
        this.saveProducts(filteredProducts);
        return filteredProducts;
    }

    saveProducts(products) {
        const data = JSON.stringify(products, null, 2);
        fs.writeFileSync(this.path, data, 'utf8');
    }

    generateUniqueId(products) {
        const maxId = products.reduce((max, product) => (product.id > max ? product.id : max), 0);
        return maxId + 1;
    }
}

module.exports = ProductManager;
