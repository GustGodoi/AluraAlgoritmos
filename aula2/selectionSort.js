// Selection Sort - Algorítmo
// Algorítmo para ordenação de elementos de uma dvida coleção

// Importando dados dos livros
const livros = require("../aula1/listaLivros");
const menorValor = require("../aula1/menorValor");

// Utilizando um for clássico
// for (let atual = 0; atual < livros.length - 1; atual++) {
//     let menor = menorValor(livros, atual);
//     let livroAtual = livros[atual];
//     console.log('posição atual', atual);
//     console.log('livro atual', livros[atual]);
//     let livroMenorPreco = livros[menor];
//     console.log('livro menor preço', livros[menor]);
    
//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// }

// Utilizando o forEach
livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice);
    let livroAtual = livros[indice];

    console.log('posição atual', indice);
    console.log('livro atual', livros[indice]);
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);
    
    livros[indice] = livroMenorPreco;
    livros[menor] = livroAtual;
});

console.log(livros);