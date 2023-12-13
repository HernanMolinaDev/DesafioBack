
class ProductManager {
    #products = [];

    create(data) {
        const { title, photo, price, stock } = data;
        const id = this.#generateUniqueId();
        const newProduct = { id, title, photo, price, stock };
        this.#products.push(newProduct);
        return newProduct;
    }

    read() {
        return this.#products;
    }

    readOne(id) {
        return this.#products.find((product) => product.id === id);
    }

    #generateUniqueId() {
        return Math.random().toString(36).substring(2, 10);
    }
}

class UserManager {
    #users = [];

    create(data) {
        const { name, photo, email } = data;
        const id = this.#generateUniqueId();
        const newUser = { id, name, photo, email };
        this.#users.push(newUser);
        return newUser;
    }

    read() {
        return this.#users;
    }

    readOne(id) {
        return this.#users.find((user) => user.id === id);
    }

    #generateUniqueId() {
        return Math.random().toString(36).substring(2, 10);
    }
}

const productManager = new ProductManager();
const userManager = new UserManager();

const newProduct = productManager.create({
    title: "Producto 1",
    photo: "/path/to/image",
    price: 50,
    stock: 10,
});

const newUser = userManager.create({
    name: "Usuario 1",
    photo: "/path/to/user/image",
    email: "usuario1@example.com",
});

console.log("Productos:", productManager.read());
console.log("Usuarios:", userManager.read());
console.log("Producto por ID:", productManager.readOne(newProduct.id));
console.log("Usuario por ID:", userManager.readOne(newUser.id));

