class Clientes {
    constructor(nombre, documento, telefono) {
        this.nombre = nombre;
        this.documento = documento;
        this.telefono = telefono;
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    verCliente() {
        console.log("Cliente: " + this.nombre);
        console.log("Documento: " + this.documento);
        console.log("Teléfono: " + this.telefono);

        this.pedidos.forEach(pedido => {
            pedido.verPedido();
        });
    }
}

export default  Clientes