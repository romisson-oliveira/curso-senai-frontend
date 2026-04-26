/*
    * Declarando variável do tipo 'let'.
    * Variáveis 'let' não precisam ser iniciadas (atribuídas) no momento em que são declaradas.

*/
let nome;

// Podemos atribuir um valor depois de criada:
nome = "Jane Doe";

/*
 * Podemos declarar variávies do tipo 'let' e já inicializar ela, ou seja, declarar um valor para ela:
 */
let outroNome = "John Doe";

console.log(nome, outroNome); // Exibindo os dados que estão dentro nome e outroNome
// saída >> "Jane Doe John Doe"

// ***********************************************

/*
 * Declarando variável do tipo 'const'.
 * Variáveis 'const' SEMPRE devem ser iniciadas (atribuídas) no momento em que são declaradas.
 */
const nota = 5.6; // Repare que não usamos vírgula para casas decimais, mas sim ponto.

console.log(nota); // saída > 5.6

// NÃO PODEMOS REATRIBUIR UM VALOR em uma variável 'const'.
nota = 8.9;

/* 
    A instrução acima, retorna um erro:
        > VM599:1 Uncaught TypeError: Assignment to constant variable.
*/
