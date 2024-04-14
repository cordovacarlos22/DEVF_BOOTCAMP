/* The class CarritoDeCompras represents a shopping cart that can add products and display them with
their prices, as well as calculate and display the total cost. */

class CarritoDeCompras {
 /**
  * The above function is a constructor in JavaScript that initializes an empty array called
  * "productos".
  */
  constructor() {
    this.productos = [];
  }
 /**
  * The function "agregarProducto" adds a new product to an array of products.
  * @param producto - The `agregarProducto` function you provided seems to be a method for adding a
  * product to a list of products. The `producto` parameter represents the product that you want to add
  * to the list. When calling this function, you would pass an object representing the product you want
  * to add, including
  */
  agregarProducto(producto) {
    this.producto = producto;
    this.productos.push(producto);
  }

  /**
   * The function "mostrarProductos" displays a list of products with their prices and calculates the
   * total cost.
   */
  mostrarProductos() {
    let total = 0
    this.productos.map((item,) => {
      console.log(`- ${item.nombre}: $${item.precio}`)
    })
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio
    }
    console.log(`Total: $${total}`)  
  }
}

/* `let carrito = new CarritoDeCompras();` is creating a new instance of the `CarritoDeCompras` class
and assigning it to the variable `carrito`. This line of code initializes a new shopping cart object
that can be used to add products, display them, and calculate the total cost. */
let carrito = new CarritoDeCompras();

/* The code `carrito.agregarProducto({ 'nombre': 'hamburgueza', 'precio': 10 });` and
`carrito.agregarProducto({ 'nombre': 'pizza', 'precio': 30 });` is adding two products to the
shopping cart represented by the `carrito` object. */
carrito.agregarProducto({ 'nombre': 'hamburgueza', 'precio': 10 });
carrito.agregarProducto({ 'nombre': 'pizza', 'precio': 30 });
/* The `carrito.mostrarProductos();` line of code is calling the `mostrarProductos` method of the
`carrito` object, which is an instance of the `CarritoDeCompras` class. This method displays a list
of products that have been added to the shopping cart along with their prices. It also calculates
and displays the total cost of all the products in the cart. */

carrito.mostrarProductos();



