# UC04: Desenvolvimento Web
## 🕹️ Lista de Exercícios — Aula 06 (Dimensões e Tipografia)

> **Instruções:** Na sua pasta de projetos (`[nome]-css`), crie uma pasta chamada `aula-06`. Dentro dela, crie os arquivos `dimensoes.html` e `style.css` para resolver os desafios abaixo. Não use seletores complexos ou aninhados, foque nas propriedades diretas aprendidas em aula.

---

### 🎨 Exercício 1: O Organizador de Galeria (Larguras e Classes)

**Contexto:** Você recebeu um lote de **6 imagens** de alta resolução para exibir em uma página de portfólio. Se deixadas no tamanho padrão, elas vão estourar a tela do navegador.

**O Desafio:**
1. No seu HTML, insira as 6 imagens (você pode usar links do Unsplash ou imagens locais).
2. No seu CSS, crie uma regra geral para a tag `img` definindo que **todas** as imagens do site devem nascer com uma largura padrão de `400px`.
3. Crie duas classes separadas no seu CSS: `.foto-miniatura` (com largura de `200px`) e `.foto-destaque` (com largura de `650px`).
4. Aplique a classe `.foto-miniatura` nas duas primeiras imagens, a classe `.foto-destaque` nas duas últimas, e deixe as duas imagens do meio sem classe nenhuma.
5. Abra o navegador e observe como a especificidade das classes conseguiu alterar o tamanho de imagens específicas, mesmo existindo uma regra geral para todas elas.

---

### 🔤 Exercício 2: Identidade Visual e Tipografia Externa

**Contexto:** Um site precisa parecer profissional, e usar as fontes padrões do sistema (como `Arial` ou `Times New Roman`) não vai dar o destaque necessário para o cabeçalho e os parágrafos.

**O Desafio:**
1. Acesse o **Google Fonts** ([fonts.google.com](https://fonts.google.com)).
2. Escolha **duas famílias de fontes** diferentes e gratuitas: uma fonte bem marcante e estilizada para os títulos (ex: *Montserrat*, *Playfair Display* ou *Oswald*) e uma fonte limpa e legível para os textos (ex: *Inter*, *Roboto* ou *Open Sans*).
3. Faça a conexão dessas fontes externas no `<head>` do seu arquivo HTML através das tags `<link>`.
4. No seu CSS, aplique a fonte estilizada para todas as tags de título (`<h1>` e `<h2>`) do seu site.
5. Aplique a fonte de leitura para todas as tags de parágrafo (`<p>`) e links (`<a>`).
6. Altere a cor dos textos para garantir que a combinação fique harmoniosa e profissional.

---

### 🕵️‍♂️ Exercício 3: O Teste do Detetive (Quebrando e Consertando a Proporção)

**Contexto:** Muitos desenvolvedores iniciantes cometem o erro de forçar tanto a largura quanto a altura de uma imagem ao mesmo tempo, resultando em fotos totalmente distorcidas.

**O Desafio:**
1. Escolha uma imagem qualquer do seu exercício anterior.
2. Crie uma classe exclusiva para ela chamada `.foto-teste`.
3. No seu CSS, aplique deliberadamente as seguintes dimensões fixas para essa classe ao mesmo tempo: `width: 500px;` e `height: 150px;`.
4. Abra o navegador e observe criticamente o que aconteceu com o aspecto visual e as pessoas/objetos dentro da imagem.
5. Agora, faça o conserto do layout: remova completamente a linha do `height` (altura) ou mude o valor dela para `auto`. 
6. Salve o arquivo, atualize o navegador e repare em como o próprio navegador recalcula as proporções originais da imagem de forma inteligente para salvá-la da distorção.