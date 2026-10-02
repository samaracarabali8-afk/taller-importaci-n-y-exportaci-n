 class Clientes {
    constructor(nombre, documento, telefono, edad) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.edad = edad;
        this.rutinas = [];
    }

    asignarRutina(rutina) {
        this.rutinas.push(rutina);
    }

    verCliente() {
        console.log("Cliente: " + this.nombre);
        console.log("Documento: " + this.documento);
        console.log("Teléfono: " + this.telefono);
        console.log("Edad: " + this.edad);

        this.rutinas.forEach(rutina => {
            rutina.verRutina();
        });
    }
}

export default Clientes