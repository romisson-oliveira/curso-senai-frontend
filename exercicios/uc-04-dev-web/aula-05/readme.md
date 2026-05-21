## UC04: Desenvolvimento Web

## 💪 Lista de Exercícios de Fixação

### 📄 Código Base: HTML (Copiem este arquivo)
_Criem uma pasta `aula-05` e crie dois arquivo:_

* `seletor.html`;
* `style.css`;

Copie esta estrutura html para seu arquivo `seletor.html`:
```html
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=
  , initial-scale=1.0">
  <title>Seletores CSS</title>
</head>
<body>
  <h1 id="titulo-principal">Portal de Notícias Bio-Tech</h1>

    <h2 class="categoria">Tecnologia</h2>
    <p class="noticia-urgente">Nova Inteligência Artificial aprende a programar sozinha.</p>
    <p>Especialistas dizem que a automação vai mudar o mercado de trabalho em 2026.</p>

    <h2 class="categoria">Espaço</h2>
    <p>Astrônomos descobrem um novo planeta que pode conter água líquida.</p>
    <p class="noticia-urgente">Sonda espacial perde o contato com a Terra após tempestade solar.</p>

    <a href="#" class="link-comum">Ver todas as notícias</a>
    <a href="#" id="botao-alerta" class="link-comum">🚨 Ativar Notificações Urgentes</a>
</body>
</html>
```

# 📝 Lista de Exercícios: Desafios de Seleção

## 🎯 Regra do Jogo
Você não pode usar caminhos como:

```css
html body h1
```

Use apenas o seletor direto do elemento que você quer atingir:

- Tag
- Classe
- ID

---

## Desafio 1: O Alvo Geral (Seletor de Tag)

Mude a cor de todos os parágrafos (`p`) da página para um cinza escuro (`#333333`) e mude o tamanho da fonte para `18px`. 
* Não esqueça o símbolo `#` no valor da cor;

### 🎯 Objetivo
Perceber que o seletor de tag afeta o site inteiro de forma genérica.

---

## Desafio 2: O Uniforme do Grupo (Seletor de Classe)

Pinte o texto de todas as notícias que possuem a classe `.noticia-urgente` de vermelho (`red`) e mude o peso da fonte para negrito (`font-weight: bold;`).

### 🎯 Objetivo
Ver que a classe consegue pinçar elementos específicos espalhados pela página, ignorando os parágrafos comuns.

---

## Desafio 3: A Identidade Única (Seletor de ID)

O título principal do site precisa de um destaque absoluto. Use o ID `#titulo-principal` para mudar a cor dele para azul marinho (`navy`) e mude a fonte para letras maiúsculas (`text-transform: uppercase;`).

### 🎯 Objetivo
Fixar que o ID é usado para um elemento exclusivo.

---

## Desafio 4: Padronizando Elementos Diferentes (Classe)

Use a classe `.categoria` para mudar a cor de fundo (`background-color`) dos dois títulos `h2` para um tom cinza claro e adicione uma cor de texto diferente.

### 🎯 Objetivo
Fixar a sintaxe do ponto (`.`) no CSS para aplicar estilos em massa.

---

## Desafio 5: O Confronto de Forças (Especificidade)

Olhe para o último link do HTML (`🚨 Ativar Notificações Urgentes`). Ele possui uma classe (`link-comum`) e um ID (`botao-alerta`) ao mesmo tempo.

Faça o seguinte teste no seu CSS:

1. Escreva uma regra para a classe `.link-comum` mudando a cor do texto para verde (`green`).
2. Logo abaixo, escreva uma regra para o ID `#botao-alerta` mudando a cor do texto para laranja (`orange`).

### ❓ Pergunta de reflexão
Qual cor o botão assumiu no navegador? Quem ganhou a disputa, a Classe ou o ID?