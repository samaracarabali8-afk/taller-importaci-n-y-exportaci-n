class Pacientes {
    nombre
    documento
    edad
    telefono
    citas

    constructor(nombre, documento, edad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.edad = edad
        this.telefono = telefono
        this.citas = []
    }

    agregarCita(cita) {
        this.citas.push(cita)
    }

    mostrarPaciente() {
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Edad: " + this.edad)
        console.log("Teléfono: " + this.telefono)
        console.log("Cantidad de citas: " + this.citas.length)
    }
}

export default  Pacientes