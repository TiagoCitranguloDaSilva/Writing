
const keys = ['A', 'B', 'C', 'D', 'E'];
const tamanhoRow = 7

let botoesValores = [];

configurarJogo()

function configurarJogo(){
    for(let c = 0; c < tamanhoRow; c++){
        botoesValores.push('')
        if(c < Math.floor(tamanhoRow / 2)){
            atualizarValores('', c)
            continue
        }
        atualizarValores(aleatorizar(), c)
    }
}

function aleatorizar(){
    return keys[Math.floor(Math.random() * keys.length)];
}

function atualizarValores(valor, index){
    botoesValores[index] = valor
    atualizarElementos(valor, index)
}

function atualizarElementos(valor, index){

    let key = document.querySelector('.containerKeys').children[index]
    key.innerHTML = valor
    
}

function teclaPressionada(e){
    if(e.key == botoesValores[Math.floor(tamanhoRow / 2)]){
        proximaTecla()
    }
}

function proximaTecla(){
    for(let c = 0; c < tamanhoRow; c++){
        if(c == tamanhoRow - 1){
            atualizarValores(aleatorizar(), tamanhoRow - 1)
            continue
        }
        atualizarValores(botoesValores[c + 1], c)
    }
}
