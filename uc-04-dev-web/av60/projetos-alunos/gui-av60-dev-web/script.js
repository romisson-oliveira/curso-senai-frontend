let nomeUsuario = prompt("Por favor, digite o seu nome:");
// alert("Olá, " + nomeUsuario + "!");

let subnav = document.querySelector("#subnav");

subnav.textContent = `Olá, ${nomeUsuario}! Seja bem-vindo.`;

