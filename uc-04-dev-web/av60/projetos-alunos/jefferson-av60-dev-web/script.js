/*
    ---- COMENTÁRIO DO INSTRUTOR -----
    Gostei da sua lógica! Foi além do proposto e fez um tratamento do que o usuário insere.
    No dia a dia, nós, programadores, temos que pensar em diversas situações e escrever nossos scripts pensando nestas situações.

    ✍️ Só um ponto para melhoria:
        Repare você repete o mesmo comando duas vezes dentro dos blocos if/else:
            const caixa = document.querySelector("#subnav");

        Pois bem, basta criar esta "caixa" no início, fora do bloco. Assim, ela será um variável (constante, para ser exato) com escopo global. Assim, ela vai existir dentro de qualquer bloco. E no if/else basta usar o comando que você inseriu: 
            caixa.textContent = ".....";

        Estude sobre escopo e entenderá do que estou falando.
*/

const nomeUsuario = prompt("Qual é o seu nome?");

if (nomeUsuario !== null && nomeUsuario !== "") {

    alert("Olá, " + nomeUsuario + "! Seja bem-vindo!");

    const caixa = document.querySelector("#subnav")
    caixa.textContent = "Olá" + nomeUsuario + "! Seja Bem-Vindo Ao Nosso Site"


} else {
    alert("Você não digitou nenhum nome.");

    const caixa = document.querySelector("#subnav")
 caixa.textContent = "Olá usuario ! Seja Bem-Vindo Ao Nosso Site"

}

/* 
    Outra sugestão de melhoria:
        Em Javascript o símbolo de ponto e vírgula no final do comando é opcional. Portanto, defina uma linha de trabalho: usar ou não usar.
        Se escolher usar, use ao final de todos os comandos, se escolher não usar, não use no final de nenhum comando.

        É uma padronização. Com o tempo, você vai se acostumando com algumas boas práticas.
*/