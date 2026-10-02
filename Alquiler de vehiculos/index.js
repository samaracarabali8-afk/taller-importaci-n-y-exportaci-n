import Vehiculos from "./vehiculo.js"
import Clientes from "./clientes.js"
import Alquileres from "./alquiler.js"

let vehiculo1 = new Vehiculos(
    "LMN456",
    "Kia",
    "Sportage",
    "Camioneta"
)

let vehiculo2 = new Vehiculos(
    "QRS789",
    "Mazda",
    "Mazda 3",
    "Automóvil"
)

let cliente1 = new Clientes(
    "Juan Martínez",
    "34567",
    "3194567821"
)

let alquiler1 = new Alquileres(
    "04/10/2026",
    "08/10/2026",
    cliente1,
    vehiculo1
)

let alquiler2 = new Alquileres(
    "15/10/2026",
    "18/10/2026",
    cliente1,
    vehiculo2
)

cliente1.agregarAlquiler(alquiler1)
cliente1.agregarAlquiler(alquiler2)

vehiculo1.mostrarVehiculo()
vehiculo2.mostrarVehiculo()

cliente1.mostrarCliente()

alquiler1.mostrarAlquiler()
alquiler2.mostrarAlquiler()