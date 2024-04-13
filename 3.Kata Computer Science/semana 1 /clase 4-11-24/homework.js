
class CarritoDeCompras{
  constructor() {
    this.productos = [];
  }
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  mostrarProductos() {
    this.productos.forEach(producto => {
      console.log(producto);
    });
  }
}