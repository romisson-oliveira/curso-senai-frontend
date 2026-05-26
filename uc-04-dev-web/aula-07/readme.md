## 📑 Aula 07: Comportamento de Exibição (`display`) e Ícones Digitais
Nesta aula entendemos as regras invisíveis que governam a disposição dos elementos na tela e aprendemos a enriquecer a interface do usuário importando e controlando pacotes de ícones modernos.

### 🎯 1. O Conceito: O Comportamento dos Elementos (`display`)

No HTML, cada tag nasce com uma natureza própria de comportamento espacial. Compreender essa natureza é fundamental para evitar que o layout quebre ou que o CSS simplesmente ignore nossos comandos. Descobrimos que o navegador divide os elementos em dois grupos principais de comportamento nativo:

#### 🚧 O Grupo do Bloqueio — `display: block`
Elementos do tipo **block** agem como "ditadores de linha". Eles ignoram se o conteúdo deles é pequeno: eles obrigatoriamente ocupam **100% da largura disponível** na tela e empurram qualquer elemento vizinho para a linha de baixo.
* **Exemplos nativos:** `<h1>` a `<h6>`, `<p>`, `<ul>`, `<li>` e a nossa caixa genérica `<div>`.
* **Superpoder:** Aceitam perfeitamente controle de largura (`width`), altura (`height`), margens e espaçamentos.

#### 🪢 O Grupo da Linha — `display: inline`
Elementos do tipo **inline** são extremamente sociáveis. Eles ocupam **apenas o espaço estritamente necessário** para abraçar o seu conteúdo (seja um texto ou uma palavra) e permitem que outros elementos sentem logo ao seu lado na mesma linha.
* **Exemplos nativos:** `<a>`, `<span>`, `<strong>`, `<em>` e a tag de ícone `<i>`.
* **Fraqueza:** Eles **ignoram** propriedades de largura (`width`) e altura (`height`), e não aceitam margens ou espaçamentos verticais de forma correta.

#### 🛠️ O Melhor dos Dois Mundos — `display: inline-block`
E se precisarmos de um elemento que fique lado a lado com os outros (como um link), mas que também aceite uma largura, altura e preenchimento controlado (como um botão)? É aqui que alteramos manualmente o comportamento dele usando o CSS, declarando a propriedade `display` com o valor `inline-block`. Com essa configuração, o elemento continua aceitando vizinhos na mesma linha, mas passa a respeitar rigorosamente os tamanhos de pixels que definirmos para ele.

---

### ⚡ 2. Importando Componentes Visuais — Bootstrap Icons

Assim como fizemos com as fontes do Google, não precisamos desenhar nossos próprios ícones do zero. Podemos importar bibliotecas profissionais via **CDN (Content Delivery Network)**. Nesta aula, adotamos o ecossistema do **Bootstrap Icons**.

A implementação segue os mesmos dois passos essenciais:

1. **A Ponte no HTML:** Copiamos a tag de link de estilização fornecida pela biblioteca externa e colamos dentro do `<head>` do nosso documento, garantindo que ela seja carregada sempre antes do nosso próprio arquivo de estilos personalizado.
2. **A Aplicação no Corpo:** Para renderizar o ícone na tela, usamos a tag neutra `<i>` (historicamente usada para itálico, mas hoje adotada pelo mercado para representar *icons*) configurada com as duas classes específicas obrigatórias fornecidas pela documentação da ferramenta (como a classe geral da biblioteca combinada à classe do desenho do ícone escolhido).

> 💡 **Fator de Estilização:** Como os ícones importados funcionam como se fossem "fontes de texto", para alterar o tamanho físico deles na tela não usamos a propriedade de largura comum, usamos a propriedade de tamanho de fonte (`font-size`). Da mesma forma, para mudar a cor do preenchimento do ícone, usamos a propriedade de cor de texto padrão (`color`).

---

### 🧠 3. Espaço Copilot (Reflexão com a IA)

Abra seu Agente de IA, envie o comando **`NOVO:`** e explique com suas próprias palavras:

1. Se a tag de link `<a>` nasce por padrão com o comportamento `inline`, por que o navegador ignora se tentarmos colocar uma largura fixa diretamente nela? O que precisamos fazer para corrigir?
2. Por que a tag `<div>` joga qualquer elemento que venha depois dela para a linha de baixo, mesmo que ela esteja completamente vazia ou com um texto minúsculo dentro?

---

### 🕹️ 4. Exercícios: Praticando Comportamentos

[Confira os exercícios](../../exercicios/uc-04-dev-web/aula-07/readme.md);

---

### 🔗 Links importantes
- [Bootstrap Icon](https://icons.getbootstrap.com/#install)
- [Font Awesome CDN](https://cdnjs.com/libraries/font-awesome)
- [Font Awesome Icon](https://fontawesome.com/icons)
- [Documentação sobre display - CSS - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Reference/Properties/display)
- [Pare de chutar e aprenda como funciona o display: block](https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-block-98480c987950)
- [YouTube - Display Block, Inline, Inline-Block e Flex no CSS](https://youtu.be/Lahr9V6Wr5g?si=AqR6lif_hArtDOD8)

