const nomeUsuario = prompt("Digite o seu nome:");

const campoSubnav = document.querySelector("#subnav");

campoSubnav.textContent =
    nomeUsuario && nomeUsuario.trim()
            ? `Olá, ${nomeUsuario}! Seja bem-vindo ao nosso site.`
                    : "Olá, visitante! Seja bem-vindo ao nosso site.";