
class CarritoDeCompras {
  constructor() {
    this.productos = [];
  }
  agregarProducto(producto) {
    this.producto = producto;
    this.productos.push(producto);
  }

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

let carrito = new CarritoDeCompras();

carrito.agregarProducto({ 'nombre': 'hamburgueza', 'precio': 10 });
carrito.agregarProducto({ 'nombre': 'pizza', 'precio': 30 });

carrito.mostrarProductos();



