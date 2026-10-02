import Clientes from "./clientes.js";
import Entrenadores from "./entrenador.js";
import Rutinas from "./rutinas.js";

let entrenador1 = new Entrenadores(
    "Juan",
    "Musculación",
    "3897679990"
);

let entrenador2 = new Entrenadores(
    "Sofia",
    "Entrenamiento funcional",
    "37667899977"
);

let rutina1 = new Rutinas(
    "Fuerza",
    "Aumentar masa muscular",
    "65 minutos",
    entrenador1
);

let rutina2 = new Rutinas(
    "Resistencia",
    "Mejorar condición física",
    "50 minutos",
    entrenador2
);

entrenador1.agregarRutina(rutina1);
entrenador2.agregarRutina(rutina2);

let cliente1 = new Clientes(
    "Samara",
    "178789",
    "30087666789",
    27
);

cliente1.asignarRutina(rutina1);
cliente1.asignarRutina(rutina2);

cliente1.verCliente();
entrenador1.verEntrenador();
entrenador2.verEntrenador();