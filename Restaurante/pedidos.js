 class Pedidos {
    constructor(fecha, numero, cliente) {
        this.fecha = fecha;
        this.numero = numero;
        this.cliente = cliente;
        this.platos = [];
    }

    agregarPlato(plato) {
        this.platos.push(plato);
    }

    verPedido() {
        console.log("Número de pedido: " + this.numero);
        console.log("Fecha: " + this.fecha);
        console.log("Cliente: " + this.cliente.nombre);

        this.platos.forEach(plato => {
            plato.verPlato();
        });
    }
}

export default  Pedidos