// Insertion Sort

const livros = require("../aula1/listaLivros");
const troca = require('./troca');

function insertionSort(arrItens) {
    for (let atual = 1; atual < arrItens.length; atual++) {
        let analise = atual;

        while(analise > 0 && arrItens[analise].preco < arrItens[analise - 1].preco) {
            troca(arrItens, analise);

            analise--
        };
    };

    console.log("arrItens: ", arrItens);
};

insertionSort(livros);