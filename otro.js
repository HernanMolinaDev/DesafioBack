class ProductManager {
    constructor() {
        this.products = [];
    }

    generateUniqueId() {

        return Math.random().toString(36).substring(2, 10);
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        const existingProduct = this.products.find((p) => p.code === product.code);

        if (existingProduct) {
            throw new Error("El código de producto ya está en uso");
        }

        const newProduct = {
            id: this.generateUniqueId(),
            ...product,
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProductById(productId) {
        const product = this.products.find((p) => p.id === productId);

        if (!product) {
            throw new Error("Producto no encontrado");
        }

        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());


const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
};

const addedProduct = productManager.addProduct(newProduct);
console.log("Producto agregado:", addedProduct);


console.log(productManager.getProducts());


try {
    productManager.addProduct(newProduct);
} catch (error) {
    console.error(error.message);
}


const productIdToFind = addedProduct.id;
try {
    const foundProduct = productManager.getProductById(productIdToFind);
    console.log("Producto encontrado por ID:", foundProduct);
} catch (error) {
    console.error(error.message);
}
