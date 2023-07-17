let pedidos = localStorage.getItem('listaPedido')
pedidos = pedidos ? JSON.parse(pedidos) : []
pedido()

function agregarPedido() {
    let numeroPedido    = document.getElementById('numero').value
    let cantidadProducto = document.getElementById('cantidad').value
    let productos  = document.getElementById('producto').value
    let valorProducto  = document.getElementById('valor').value


    if(numeroPedido && cantidadProducto && productos && valorProducto){
        pedidos.push({ 'numeroPedido': numeroPedido, 'cantidadProducto': cantidadProducto, 'nombreProducto': productos, 'valorProducto': valorProducto  })
        pedido()
    }
}

function pedido() {
    document.getElementById('numero').value       = ''
    document.getElementById('cantidad').value    = ''
    document.getElementById('producto').value      = ''
    document.getElementById('valor').value    = ''

    let html = ''
    pedidos.forEach((elemento, indice) => {
        html += `<div class="col-3 mb-3"> ${elemento.numeroPedido} </div>`
        html += `<div class="col-3 mb-3"> ${elemento.cantidadProducto} </div>`
        html += `<div class="col-2 mb-3">   ${elemento.nombreProducto} </div>`
        html += `<div class="col-2 mb-3">   ${elemento.valorProducto} </div>`
        html += `<div class="col-2"> <a href="#" class="btn btn-danger" onclick="borrarPedidos(${indice})"> X </a> </div>`
    });

    localStorage.setItem('listaPedido', JSON.stringify(pedidos))
    document.getElementById('pedidos').innerHTML = html
}

function borrarPedidos(item) {
    pedidos.splice(item, 1)
    pedido()
}






