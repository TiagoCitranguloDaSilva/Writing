
const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const tamanhoRow = 7
const containerKeys = document.querySelector('.containerKeys')

let botoesValores = [];

configurarJogo()

function configurarJogo() {
    for (let c = 0; c < tamanhoRow + 1; c++) {
        botoesValores.push('')
        if (c < Math.floor(tamanhoRow / 2)) {
            atualizarValores('', c)
            continue
        }
        atualizarValores(aleatorizar(), c)
    }
}

function aleatorizar() {
    return keys[Math.floor(Math.random() * keys.length)];
}

function atualizarValores(valor, index) {
    botoesValores[index] = valor
    atualizarElementos(valor, index)
}

function atualizarElementos(valor, index) {

    if (index >= tamanhoRow) {
        return
    }
    let key = containerKeys.children[index]
    key.innerHTML = valor
    if(valor == valor.toUpperCase()){
        key.classList.add('maiusculo')
    }else if(key.classList.contains('maiusculo')){
        key.classList.remove('maiusculo')
    }

}

function teclaPressionada(e) {
    if (e.key == botoesValores[Math.floor(tamanhoRow / 2)]) {
        proximaTecla()
    }
}

function proximaTecla() {

    document.querySelectorAll(".containerKeys .key").forEach(key => {

        key.classList.add("rodar")
        setTimeout(() => {
            key.classList.remove("rodar")
        }, 100)
    });

    for (let c = 0; c < tamanhoRow; c++) {
        if (c == tamanhoRow - 1) {
            atualizarValores(aleatorizar(), tamanhoRow - 1)
            continue
        }
        atualizarValores(botoesValores[c + 1], c)
    }

}
