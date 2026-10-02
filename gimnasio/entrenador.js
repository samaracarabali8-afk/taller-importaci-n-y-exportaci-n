class Entrenadores {
    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.rutinas = [];
    }

    agregarRutina(rutina) {
        this.rutinas.push(rutina);
    }

    verEntrenador() {
        console.log("Entrenador: " + this.nombre);
        console.log("Especialidad: " + this.especialidad);
        console.log("Teléfono: " + this.telefono);

        this.rutinas.forEach(rutina => {
            console.log("Rutina: " + rutina.nombre);
        });
    }
}

export default Entrenadores