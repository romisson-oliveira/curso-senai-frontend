## 📑 Aula 06: Largura, Altura e Tipografia Externa

Nesta aula assumimos o controle das dimensões do nosso layout e aprendemos a personalizar a identidade visual do texto importando fontes profissionais diretamente da nuvem.

### 🎯 1. O Conceito: Moldando o Espaço Físico

Até agora, os elementos do nosso site ocupavam o tamanho automático determinado pelo navegador. A partir de hoje, usamos as propriedades **`width` (largura)** e **`height` (altura)** para desenhar os limites exatos de cada componente na tela.

Para fixar esse aprendizado, realizamos uma prática utilizando **6 imagens** inseridas diretamente no nosso HTML. Vivenciamos duas etapas fundamentais de estilização:

1. **O Comando Geral (Fundo de Segurança):** Usamos o seletor de tag pura para aplicar uma largura padrão de `400px` para todas as imagens, garantindo que arquivos gigantes não quebrassem a visualização do site:

```css
img {
  width: 400px;
}
```

2. As Classes de Ajuste (Especificidade em Ação): Criamos classes específicas para delimitar quais imagens deveriam se comportar de forma menor ou maior, sobrepondo o comando geral graças ao peso da especificidade:

```css
.imagem-menor {
  width: 250px;
}

.imagem-maior {
  width: 600px;
}
```

> 💡 Regra de Ouro da Proporção: Aprendemos que ao alterar apenas o `width`, o navegador calcula a altura (`height`) de forma automática (`auto`) para manter a proporção original do arquivo, evitando que a imagem fique esticada ou achatada.

---

### 📏 2. O Universo das Unidades de Medida Absolutas

Para definir tamanhos no CSS, precisamos dar uma unidade numérica ao navegador. Conhecemos o conjunto de unidades absolutas, que possuem valores fixos e independentes de outros elementos:

| Unidade | Nome        | Descrição e Contexto no Desenvolvimento Web                                                                  |
| ------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `px`    | Pixels      | O Rei das Telas. Corresponde ao menor ponto de luz do monitor. É a unidade padrão e mais usada no CSS.       |
| `cm`    | Centímetros | Unidade física real. Pouco usada em telas, útil apenas para folhas de estilo focadas em impressão (`print`). |
| `mm`    | Milímetros  | Unidade física real. Mesma aplicação do centímetro.                                                          |
| `in`    | Polegadas   | Unidade física real (`1 polegada = 2.54cm`).                                                                 |
| `pt`    | Pontos      | Unidade comum na tipografia tradicional de papel (`1/72 de polegada`).                                       |
| `pc`      | Picas       | Unidade tradicional de impressão (`1 pica = 12 pontos`).                                                     |

- 🚨 Por que focamos no Pixel (`px`)? Como monitores e smartphones possuem densidades de tela variadas, réguas físicas como centímetros não funcionam bem no ecossistema digital. O pixel garante o controle exato sobre os quadradinhos de luz da tela do usuário.

---

### 🔤 3. Importando Identidade — Google Fonts
O design de um site ganha vida através da tipografia. Aprendemos que não ficamos presos às fontes nativas do sistema operacional do usuário (como `Arial` ou `Times New Roman`). Podemos importar qualquer fonte gratuita usando o catálogo do Google Fonts.

A integração é dividida em dois passos simples:

1. No HTML (A Conexão): Copiamos as tags `<link>` geradas pela plataforma e colamos dentro do `<head>` do nosso documento (antes de chamar o nosso próprio `style.css`):

```html
<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
<link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
<link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap)" rel="stylesheet">
```
2. No CSS (A Aplicação): Usamos a propriedade `font-family` para indicar qual elemento deve carregar aquela família de letras:

```css
body {
  font-family: 'Inter', sans-serif;
}
```
---

### 🧠 4. Espaço Copilot (Reflexão com a IA)
Abra seu Agente de IA, envie o comando `NOVO`: e explique com suas próprias palavras:

O que acontece com o visual de uma imagem se definirmos um valor fixo em pixels tanto para o width quanto para o height ao mesmo tempo?

Qual a utilidade prática de carregar uma fonte externa pelo HTML usando as tags `<link>` ao invés de torcer para o usuário ter a fonte instalada no computer dele?

---
 
### 🕹️ 5. Exercícios
Pronto para dimensionar suas estruturas?
[Confira a lista de exercícios desta aula](../../exercicios/uc-04-dev-web/aula-06/readme.md)
