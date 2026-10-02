 class Rutinas {
    constructor(nombre, objetivo, duracion, entrenador) {
        this.nombre = nombre;
        this.objetivo = objetivo;
        this.duracion = duracion;
        this.entrenador = entrenador;
    }

    verRutina() {
        console.log("Rutina: " + this.nombre);
        console.log("Objetivo: " + this.objetivo);
        console.log("Duración: " + this.duracion);
        console.log("Entrenador: " + this.entrenador.nombre);
    }
}

 export default  Rutinas
