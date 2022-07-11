
const controle = document.querySelectorAll('[data-controle]') //são os meus botoes de + e -
const estatisticas = document.querySelectorAll('[data-estatistica]') //trazer todos que tem o  data attributes com data-estatistica

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        //textContent nome do botao e o parentNode mostra quem é o pai 

        atualizaEstatistica(evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]") //controle contador é o meu input
    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function corAleatoria() {
    const cores = ['Amarelo', 'Branco', 'Preto', 'Rosa', 'Vermelho']

    return cores[Math.floor(Math.random() * cores.length)]
}


function trocaImagem() {
    document.querySelector("[data-imagem]").src = "img/Robotron 2000 - " + corAleatoria() + ".png";
}