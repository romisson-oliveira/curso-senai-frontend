/* 
    NOTA DO INSTRUTOR:
    Gostei da lógica aplicada! Só existem alguns pontos para observação:
        1. Tenha atenção à documentação. Um programador escreve software através da lógica de programação, utilizando as tecnlogias para atingir seus objetivos. Devemos seguir esta lógica para escrever nossos algoritmos (sequência de passos finitos e ordenados). Portanto, atenha-se à documentação e faça exatamente o que se pede.
    
        2. Na UC de Lógica de Programação, vimos o conceito de IPO (input, process and output). Separe as informações corretamente.

            1. Entrada? Perguntar o nome do usuário e guardar este nome (questão 4.1). Você guardou o retorno do usuário corretamente mas errou em escrever a mensagem, faltou um espaço entre "Por" e "Favor". Não vai perder pontos por isso, mas tenha cuidado.

            2. Processamento: pegar o elemento HTML com ID de subnav e guardar ele também em uma variável. Você fez!

            3. Saída: Exibir a mensagem da documentação no elemento que você capturou (subnav). Seu recurso de saída foi um alert ao usuário - não especificado na documentação.

            ✅ Correto é:
                subnav.textContent = "Olá, " + seuNome + "! Seja bem-vindo ao nosso site";

            - O comando acima pega o elemento subnav (que pegamos do HTML pelo ID) e inserimos o texto dentro. Assim, vai mostrar lá na página web.

            
            Não tente adivinhar o que é para fazer. Compreenda qual é o resultado exato que você deve entregar. Se não souber, pergunte.

*/
let seuNome = prompt("Porfavor, digite seu nome:");

// "ola [nome]", seja bem-vindo(a) a sua loja de estética automotiva!
alert("Olá " + seuNome + ", seja bem-vindo(a) a sua loja de estética automotiva!");

const subnav = document.querySelector('#subnav');

subnav.onclick = function() {
    alert("clicou");
}
