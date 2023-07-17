
let categorias = localStorage.getItem('listaCategorias')
// Operador Ternario
categorias = categorias ? categorias.split(',') : []
verCategoria()


function agregarCategoria() {
    let categoria = document.getElementById('categoria').value
    categoria  = categoria.split(',')
    for (let i = 0; i < categoria.length; i++) {
        if(categoria[i]){
            categorias.push(categoria[i])
            verCategoria()
        }
    }
   
}

function verCategoria() {
    document.getElementById('categoria').value = ''
    let htmlListaCategorias = ''
    for (let i = 0; i < categorias.length; i++) {
        htmlListaCategorias += `<div class="col-10 mb-3"> ${categorias[i]} </div>`
        htmlListaCategorias += `<div class="col"> <a href="#" class="btn btn-danger" onclick="borrarCategoria(${i})"> X </a> </div>`
    }

    localStorage.setItem('listaCategorias', categorias)
    document.getElementById('categorias').innerHTML = htmlListaCategorias
}

function borrarCategoria(categoria) {
    categorias.splice(categoria, 1)
    verCategoria()
}

