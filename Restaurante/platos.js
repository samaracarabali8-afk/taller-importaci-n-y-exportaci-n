 class Platos {
    constructor(nombre, categoria, precio, disponibilidad) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }

    verPlato() {
        console.log("Plato: " + this.nombre);
        console.log("Categoría: " + this.categoria);
        console.log("Precio: " + this.precio);
        console.log("Disponible: " + this.disponibilidad);
    }
}

export default  Platos