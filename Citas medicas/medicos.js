 class Medicos {
    nombre
    documento
    especialidad
    telefono

    constructor(nombre, documento, especialidad, telefono) {
        this.nombre = nombre
        this.documento = documento
        this.especialidad = especialidad
        this.telefono = telefono
    }

    mostrarMedico() {
        console.log("Nombre: " + this.nombre)
        console.log("Documento: " + this.documento)
        console.log("Especialidad: " + this.especialidad)
        console.log("Teléfono: " + this.telefono)
    }
}

export default  Medicos