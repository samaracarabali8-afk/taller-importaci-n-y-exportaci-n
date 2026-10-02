 class Citas {
    fecha
    hora
    motivo
    paciente
    medico

    constructor(fecha, hora, motivo, paciente, medico) {
        this.fecha = fecha
        this.hora = hora
        this.motivo = motivo
        this.paciente = paciente
        this.medico = medico
    }

    mostrarCita() {
        console.log("Fecha: " + this.fecha)
        console.log("Hora: " + this.hora)
        console.log("Motivo: " + this.motivo)
        console.log("Paciente: " + this.paciente.nombre)
        console.log("Médico: " + this.medico.nombre)
        console.log("Especialidad: " + this.medico.especialidad)
    }
}

export default  Citas