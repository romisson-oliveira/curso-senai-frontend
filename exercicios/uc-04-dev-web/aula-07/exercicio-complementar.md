# 🕹️ Lista de Exercícios Complementares — Propriedade `display`

> **Diretrizes:** Crie uma estrutura limpa de HTML e CSS para cada exercício. O objetivo é transformar o comportamento nativo das tags para alcançar o layout solicitado.

---

### 🧱 Exercício 1: O Menu de Links Empilhados (`display: block`)

**Contexto:** Você está criando a barra lateral de um painel administrativo (Dashboard). No HTML, você inseriu quatro tags de link (`<a>`) seguidas para servirem como os botões de navegação do sistema. Por padrão, os links nascem um ao lado do outro, o que arruína o design vertical da barra lateral.

**O Desafio:** Sem usar quebras de linha (`<br>`) no HTML e sem colocar os links dentro de outras caixas, altere o comportamento nativo das tags `<a>` no CSS para que cada link se comporte como um bloco egoísta, ocupando toda a largura da barra lateral e empurrando o próximo link obrigatoriamente para a linha de baixo. 

---

### 🪢 Exercício 2: A Nuvem de Tags de Assunto (`display: inline`)

**Contexto:** Em um blog de notícias, precisamos exibir uma "nuvem de assuntos" logo abaixo do artigo principal. No HTML, o desenvolvedor antigo estruturou os assuntos (como "Tecnologia", "Design", "CSS") utilizando tags de parágrafo (`<p>`) separadas para cada palavra. Isso fez com que os assuntos ficassem empilhados verticalmente, ocupando espaço demais na página.

**O Desafio:** Modifique o comportamento das tags `<p>` dessa seção específica no CSS. Elas devem perder o comportamento de bloco e passar a se comportar de forma linear, permitindo que todas as palavras fiquem organizadas lado a lado na mesma linha, separadas apenas por um espaço natural, como se fossem parte de um único texto contínuo.

---

### 📦 Exercício 3: A Vitrine de Cards de Produtos (`display: inline-block`)

**Contexto:** Você está desenvolvendo a página principal de um e-commerce. No HTML, você criou três caixas `<div>` para representar três produtos diferentes. Dentro de cada `<div>`, há uma foto e o preço do produto. Como a `<div>` é um elemento de bloco, os produtos ficaram empilhados um embaixo do outro.

**O Desafio:** Você precisa que os três produtos fiquem alinhados lado a lado na tela para formar uma vitrine bonita. Porém, cada card de produto precisa ter rigorosamente `300px` de largura e `400px` de altura. Altere a propriedade de exibição das `divs` no CSS de forma que elas aceitem essas dimensões fixas de pixels, mas ganhem a habilidade de sentar uma ao lado da outra na mesma linha horizontal.

---

### 👻 Exercício 4: O Cupom Secreto Desativado (`display: none`)

**Contexto:** Em uma página de carrinho de compras, o cliente pode receber um alerta de "Cupom Expirado" ou um card com um "Bônus Secreto". No entanto, esse elemento só deve aparecer na tela quando uma ação específica acontecer no futuro (via JavaScript). Por enquanto, no carregamento inicial da página, esse elemento precisa sumir completamente do mapa.

**O Desafio:** Crie uma `<div>` com uma cor de fundo chamativa e um texto de alerta dentro. No CSS, aplique a propriedade de exibição necessária para fazer essa caixa desaparecer totalmente da tela. Atenção: o elemento não deve apenas ficar invisível; o navegador deve fingir que ele não existe, fazendo com que qualquer outro elemento que estava abaixo dele suba e ocupe o seu espaço perfeitamente.

---

### 🏆 Exercício 5: O Desafio do Botão de Spoiler (Misturando Comportamentos)

**Contexto:** Você está criando um site de resenhas de filmes. Na página, existe um parágrafo de texto normal, seguido por um link (`<a>`) configurado como um botão bonito de "Ver Spoiler", e logo abaixo uma `<div>` contendo o final revelado do filme.

**O Desafio:** 1. Configure o link `<a>` do botão para aceitar um tamanho firme de largura e altura e uma cor de fundo, mas mantendo-o na mesma linha de outros elementos de texto se necessário.
2. Configure a `<div>` do spoiler para ficar completamente oculta da tela assim que a página abre.
3. Adicione uma regra extra no CSS utilizando o efeito de passar o mouse (`:hover`) no botão: quando o usuário posicionar o ponteiro do mouse sobre o botão "Ver Spoiler", a `<div>` oculta deve se transformar instantaneamente e reaparecer na tela logo abaixo, comportando-se como um bloco completo que ocupa a linha toda.

