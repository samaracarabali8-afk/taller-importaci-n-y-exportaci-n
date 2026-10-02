import Platos from "./platos.js";
import Clientes from "./clientes.js";
import Pedidos from "./pedidos.js";


let hamburguesa = new Platos(
    "Hamburguesa",
    "Comida rápida",
    18000,
    true
);

let pizza = new Platos(
    "Pizza",
    "Italiana",
    25000,
    true
);

let pasta = new Platos(
    "Pasta",
    "Italiana",
    22000,
    true
);

let cliente1 = new Clientes(
    "Samara",
    "12345",
    "3001234567"
);

let pedido1 = new Pedidos(
    "2/10/2026",
    1,
    cliente1
);

let pedido2 = new Pedidos(
    "2/10/2026",
    2,
    cliente1
);

pedido1.agregarPlato(hamburguesa);
pedido1.agregarPlato(pizza);

pedido2.agregarPlato(pizza);
pedido2.agregarPlato(pasta);

cliente1.agregarPedido(pedido1);
cliente1.agregarPedido(pedido2);

cliente1.verCliente();