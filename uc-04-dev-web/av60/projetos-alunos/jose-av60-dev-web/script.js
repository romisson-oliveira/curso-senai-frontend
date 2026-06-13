/*  
  NOTA DO INSTRUTOR:
  O texto que deve aparecer no recurso prompt deveria ter sido exatamente o que foi fornecido na documentação:
    Por favor, digite seu nome: 

  Você escreve diferente da documentação e isto é um erro. Seu cliente espera que o texto seja exatamente igual ao que ele passou.

  Somos programadores e escrevemos instruções para o computador. E ele executa exatamente da forma que programamos, portanto devemos escrever as instruções corretamente.
*/

let nome = prompt("Porfavor ,digite seu nome :?");



let titulo = document.querySelector("#subnav");

/* 
  N.I - A mensagem que a documentação pediu para ser inserido o nome que usuário digitou. 
  Você capturou este nome e guardou na variável "nome" (linha 11), porém na hora de usar no texto do elemento #subnav que você capturou, não inseriu o nome:

  ✅ Correto:
    titulo.textContent = "Olá, " + nome + "! Seja bem-vindo ao site";

  Exatamente respeitando os espaços e os símbolos inseridos (pontuação).
*/
titulo.textContent = "Seja bem vindo ao nosso site!";