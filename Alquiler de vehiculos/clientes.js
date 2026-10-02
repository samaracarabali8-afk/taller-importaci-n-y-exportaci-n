 class Clientes {
    nombre
    documento
    telefono
    alquileres

    constructor(nombre, documento, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.telefono = telefono
        this.alquileres = []
    }

    agregarAlquiler(alquiler) {
        this.alquileres.push(alquiler)
    }

    mostrarCliente() {
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Teléfono: " + this.telefono)
        console.log("Cantidad de alquileres: " + this.alquileres.length)
    }
}

export default Clientes