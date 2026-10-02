import Pacientes from "./pacientes.js"
import Medicos from "./medicos.js"
import Citas from "./citas.js"

let paciente1 = new Pacientes(
    "Mariana López",
    "67890",
    32,
    "3123456789"
)

let medico1 = new Medicos(
    "Felipe Ramírez",
    "23456",
    "Cardiología",
    "3176543210"
)

let medico2 = new Medicos(
    "Natalia Castro",
    "98765",
    "Odontología",
    "3147896321"
)

let cita1 = new Citas(
    "06/10/2026",
    "08:00 AM",
    "Dolor en el pecho",
    paciente1,
    medico1
)

let cita2 = new Citas(
    "10/10/2026",
    "02:00 PM",
    "Dolor dental",
    paciente1,
    medico2
)

paciente1.agregarCita(cita1)
paciente1.agregarCita(cita2)

paciente1.mostrarPaciente()

medico1.mostrarMedico()
medico2.mostrarMedico()

cita1.mostrarCita()
cita2.mostrarCita()