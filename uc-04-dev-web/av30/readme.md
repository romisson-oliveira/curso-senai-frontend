# 📝 AVALIAÇÃO DE DESENVOLVIMENTO WEB: FUNDAMENTOS DO CSS

**Firjan Senai Benfica - QUA03002026Ú092**

**Valor Total:** 30 Pontos

## Gabarito da avaliação


---

## 🛑 PARTE 1: CONCEITOS E FUNDAMENTOS

### *(12 Questões — Valor Total do Bloco: 8,5 pontos)*

*Marque apenas a alternativa correta para cada uma das questões abaixo.*

---

## 1. *(Valor: 1,0 ponto)*

Um desenvolvedor importou dois arquivos CSS externos no `<head>` do seu HTML exatamente nesta ordem:

```html
<link rel="stylesheet" href="ajustes.css">
<link rel="stylesheet" href="estilo-global.css">
```

Sabendo que ambos os arquivos possuem uma regra idêntica para pintar o fundo do `<body>`, qual arquivo ditará a cor final que o usuário verá na tela?

a) O arquivo `ajustes.css`, pois foi o primeiro a ser processado pelo navegador.

b) O arquivo `estilo-global.css`, pois por ler o código de cima para baixo, o navegador aplica a última regra interpretada.

c) Nenhum dos dois, pois o navegador identifica o conflito de arquivos e anula ambas as estilizações.

d) O navegador fará uma mistura matemática das duas cores de fundo automaticamente.

---

## 2. *(Valor: 1,0 ponto)*

Analise os códigos hexadecimais aplicados à propriedade `color`. Qual das alternativas abaixo apresenta uma inconsistência de sintaxe e será **totalmente ignorada** pelo interpretador do navegador?

a) `color: #f3f3f3;`

b) `color: #fff;`

c) `color: #ch44j1;`

d) `color: #000000;`

---

## 3. *(Valor: 0,5 ponto)*

Para conectar um arquivo de estilo externo (`style.css`) ao nosso documento HTML, utilizamos a tag `<link>`. Em qual seção do HTML essa tag deve ser obrigatoriamente inserida?

a) Dentro da tag `<body>`

b) Dentro da tag `<head>`

c) Logo após o fechamento da tag `</html>`

d) Dentro da tag `<main>`

---

## 4. *(Valor: 0,5 ponto)*

No arquivo CSS, qual caractere especial devemos utilizar no início do seletor para indicar que estamos estilizando uma CLASSE?

a) A hashtag (`#`)

b) O ponto (`.`)

c) A barra (`/`)

d) O arroba (`@`)

---

## 5. *(Valor: 1,0 ponto)*

Considere que um parágrafo herdou nativamente estilos de cor do elemento `<body>`. Se você aplicar as seguintes regras abaixo no seu CSS:

```css
p {
  background-color: black;
  color: red;
  background: white;
}
```

Qual será o comportamento de renderização da cor do texto?

a) O texto ficará vermelho e o fundo ficará branco, pois a propriedade abreviada (`background`) limpou e sobrescreveu o `background-color` anterior.

b) O texto ficará vermelho e o fundo ficará preto, pois o navegador ignora a reaplicação da mesma propriedade para o mesmo elemento.

c) O CSS quebrará por completo devido ao conflito entre as linhas 2 e 4.

d) O texto voltará a herdar a cor do body original porque o background resetou o elemento.

---

## 6. *(Valor: 1,0 ponto)*

Qual é a diferença prática fundamental entre os seletores `.menu .item` (com espaço) e `.menu-item` (com hífen) no CSS?

a) Nenhuma, ambos são formas diferentes de escrever seletores de classes compostas.

b) `.menu .item` busca um elemento com a classe `item` que esteja dentro de um elemento com a classe `menu`. Já `.menu-item` busca uma classe única com esse nome exato.

c) `.menu .item` cria um comportamento de ID temporário e `.menu-item` cria uma classe global.

d) O uso do espaço faz com que o navegador aplique o estilo apenas se o usuário clicar no elemento.

---

## 7. *(Valor: 1,0 ponto)*

Em relação à sensibilidade de caixa (*case-sensitivity*) no desenvolvimento web, o que acontece se você declarar:

```html
<div class="MenuPrincipal">
```

e tentar estilizá-la no CSS usando:

```css
.menuprincipal { }
```

a) O estilo funcionará normalmente, pois o CSS é totalmente insensível a letras maiúsculas e minúsculas.

b) O HTML corrigirá o CSS em tempo de execução para garantir a aplicação do estilo.

c) O estilo falhará, pois os nomes de classes e IDs são case-sensitive (diferenciam maiúsculas de minúsculas).

d) O site gerará um erro crítico de compilação e a tela ficará branca.

---

## 8. *(Valor: 0,5 ponto)*

Para modificar a cor de fundo de uma caixa ou de uma página inteira, utilizamos qual propriedade?

a) `color`

b) `background-color`

c) `box-color`

d) `fill-color`

---

## 9. *(Valor: 0,5 ponto)*

Na sintaxe do CSS, qual é a função do sinal de dois-pontos (`:`)?

a) Encerrar uma linha de comando.

b) Separar a propriedade (o que mudar) do seu valor (a nova característica).

c) Abrir o bloco de estilos do seletor.

d) Indicar que o elemento é um ID.

---

## 10. *(Valor: 0,5 ponto)*

Deseja-se aplicar uma cor cinza a TODOS os parágrafos (`<p>`) do site de uma só vez. Qual é o seletor correto a ser usado no CSS?

a) `.p { color: gray; }`

b) `#p { color: gray; }`

c) `p { color: gray; }`

d) `*p { color: gray; }`

---

## 11. *(Valor: 0,5 ponto)*

Qual propriedade CSS é utilizada para alterar a cor do texto de um elemento?

a) `font-color`

b) `text-color`

c) `color`

d) `foreground-color`

---

## 12. *(Valor: 0,5 ponto)*

Qual propriedade CSS é utilizada para alterar o peso de uma fonte?

a)

```css
font-family: Arial, sans-serif;
```

b)

```css
font-size: 20px;
```

c)

```css
font-height: bold;
```

d)

```css
font-weight: bold;
```

---

# 🕵️‍♂️ PARTE 2: DETETIVE DO CÓDIGO

### *(6 Questões — Valor: 2,0 pontos cada — Total do Bloco: 12,0 pontos)*

*Instruções: Analise os trechos de HTML e CSS. Identifique o erro que impede o estilo de funcionar e justifique a correção. Caso o código esteja 100% correto, escreva "Código Correto".*

---

## 13. O Mistério do Fechamento Oculto

### CSS

```css
h1 {
  font-size: 36px;
  color: purple;

p {
  color: gray;
}
```

**Resposta/Justificativa:**

---

---

## 14. A Invocação Fantasma

### HTML

```html
<div class="box-alerta">Mensagem de sistema.</div>
```

### CSS

```css
box-alerta {
  background-color: lightcoral;
  color: black;
}
```

**Resposta/Justificativa:**

---

---

## 15. A Mistura de Identidades

### HTML

```html
<span id="usuario-logado">Professor Thiago</span>
```

### CSS

```css
.usuario-logado {
  font-size: 18px;
  color: green;
}
```

**Resposta/Justificativa:**

---

---

## 16. O Alvo Múltiplo

### HTML

```html
<section class="container active">
  <p>Conteúdo ativo na tela.</p>
</section>
```

### CSS

```css
.container.active p {
  color: darkcyan;
}
```

**Resposta/Justificativa:**

---

---

## 17. Caixa de Destaque

### HTML

```html
<div id="destaque">Conteúdo Especial</div>
```

### CSS

```css
#destaque {
  background-color: yellow;
}
```

**Resposta/Justificativa:**

---

---

## 18. Espaço Indiscreto

### HTML

```html
<span class="menu-item">Home</span>
```

### CSS

```css
.menu item {
  color: orange;
}
```

**Resposta/Justificativa:**

---

---

# 👑 PARTE 3: ESPECIFICIDADE E DISCURSIVAS

### *(4 Questões — Valor Total do Bloco: 9,5 pontos)*

---

## 19. O Cabo de Guerra do CSS *(Valor: 2,5 pontos)*

Um desenvolvedor escreveu as seguintes regras no seu arquivo `style.css`:

```css
p {
  color: red;
}

#texto-destaque {
  color: blue;
}

.sub-texto {
  color: green;
}
```

No arquivo HTML, a tag foi declarada assim:

```html
<p id="texto-destaque" class="sub-texto">
  Qual será a minha cor final?
</p>
```

Com base nas regras de especificidade (hierarquia de seletores), qual será a cor final do texto exibida no navegador? Justifique o motivo da vitória desse seletor.

**Resposta/Justificativa:**

---

---

## 20. O Efeito Cascata *(Valor: 2,5 pontos)*

Observe o arquivo CSS abaixo aplicável a um mesmo documento:

```css
h2 {
  color: purple;
}

h2 {
  color: orange;
}
```

Se houver uma tag `<h2>` no HTML, qual cor ela assumirá na tela (Roxo ou Laranja)? Explique o conceito do CSS que dita essa regra.

**Resposta/Justificativa:**

---

---

## 21. Class vs. ID *(Valor: 2,5 pontos)*

Explique, com suas próprias palavras, a diferença prática entre o uso do atributo `class` e do atributo `id` no HTML. Quando um desenvolvedor deve escolher usar uma Classe em vez de um ID?

**Resposta/Justificativa:**

---

---

## 22. Por que usar Estilo Externo? *(Valor: 2,0 pontos)*

Nas primeiras aulas, vimos que é possível escrever CSS direto dentro das tags HTML usando o atributo `style` (CSS Inline). Por que criar um arquivo separado (`.css`) e importá-lo é considerado uma prática muito melhor no dia a dia de um programador? Cite pelo menos uma vantagem.

**Resposta/Justificativa:**

---

---

# 🔑 GABARITO OFICIAL 

## PARTE 1

1. **B**
2. **C**
3. **B**
4. **B**
5. **A**
6. **B**
7. **C**
8. **B**
9. **B**
10. **C**
11. **C**
12. **D**

## PARTE 2

**13.** Erro de Sintaxe (chave não fechada).
**14.** Falta o ponto (`.`) para indicar classe.
**15.** Foi usado seletor de classe para um elemento que possui `id`.
**16.** Código Correto.
**17.** Código Correto.
**18.** O espaço faz o navegador procurar uma tag `<item>` dentro de `.menu`. O correto é `.menu-item`.

## PARTE 3

**19.** Cor final: Azul. O seletor de ID possui maior especificidade que classe e tag.

**20.** Cor final: Laranja. Ambos possuem o mesmo peso; vence a última regra declarada (efeito cascata).

**21.** ID identifica um único elemento. Classe pode ser reutilizada em vários elementos.

**22.** Facilita manutenção, organização do código e aproveitamento do cache do navegador.
