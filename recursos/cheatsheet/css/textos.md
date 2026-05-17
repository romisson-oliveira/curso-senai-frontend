# 🎮 CSS Cheat Sheet | Texto

---

## ✍️ Texto no CSS

As propriedades de texto servem para alterar:

- tamanho;
- cor;
- alinhamento;
- espaçamento;
- decoração;
- estilo visual.

---

## 🔤 Cor do texto

### Propriedade

`color`

### Serve para

Alterar a cor do texto.

### Exemplo

```css
color: blue;
```

### Agora escreva sozinho

```css
seletor {
   ___________________
}
```

---

## 📏 Tamanho do texto

### Propriedade

`font-size`

### Serve para

Alterar o tamanho do texto.

### Valores comuns

- px
- em
- rem
- %

### Exemplo

```css
font-size: 32px;
```

### Agora escreva sozinho

```css
seletor {
   ___________________
}
```

---

## ✒️ Família da fonte

### Propriedade

`font-family`

### Serve para

Alterar a fonte do texto.

### Exemplo

```css
font-family: Arial;
```

### Exemplo com fallback

```css
font-family: Arial, sans-serif;
```

### Agora escreva sozinho

```css
seletor {
   ______________________________
}
```

### Observação:

- Fontes que possuem nomes com espaço, como **Times New Roman**, são escritas entre aspas:
    - `font-family: "Georgia", "Times New Roman", serif;`
- Quando tiver mais de uma fonte no valor da propriedade `font-family`, como na declaração acima, significa que o CSS deve aplicar no primeiro valor. Se caso não for possível, aplica-se o segundo e assim sucessivamente.

---

## 🅱️ Texto em negrito

### Propriedade

`font-weight`

### Serve para

Alterar a espessura da fonte.

### Valores comuns

- normal
- bold
- 100 até 900

### Exemplo

```css
font-weight: bold;
```

### Agora escreva sozinho

```css
seletor {
   ______________________
}
```

---

## ✨ Texto em itálico

### Propriedade

`font-style`

### Serve para

Alterar o estilo da fonte.

### Valores comuns

- normal
- italic

### Exemplo

```css
font-style: italic;
```

### Agora escreva sozinho

```css
seletor {
   ______________________
}
```

---

## 📍 Alinhamento do texto

### Propriedade

`text-align`

### Serve para

Alinhar o texto.

### Valores comuns

- left
- center
- right
- justify

### Exemplo

```css
text-align: center;
```

### Agora escreva sozinho

```css
seletor {
   _______________________
}
```

---

## 📐 Altura da linha

### Propriedade

`line-height`

### Serve para

Alterar o espaçamento entre linhas.

### Exemplo

```css
line-height: 1.5;
```

### Agora escreva sozinho

```css
seletor {
   ______________________
}
```

---

## ↔️ Espaçamento entre letras

### Propriedade

`letter-spacing`

### Serve para

Alterar o espaço entre letras.

### Exemplo

```css
letter-spacing: 2px;
```

### Agora escreva sozinho

```css
seletor {
   __________________________
}
```

---

## ↔️ Espaçamento entre palavras

### Propriedade

`word-spacing`

### Serve para

Alterar o espaço entre palavras.

### Exemplo

```css
word-spacing: 10px;
```

### Agora escreva sozinho

```css
seletor {
   ________________________
}
```

---

## 🔠 Letras maiúsculas e minúsculas

### Propriedade

`text-transform`

### Serve para

Transformar letras.

### Valores comuns

- uppercase
- lowercase
- capitalize

### Exemplo

```css
text-transform: uppercase;
```

### Agora escreva sozinho

```css
seletor {
   ______________________________
}
```

---

## 📏 Decoração do texto

### Propriedade

`text-decoration`

### Serve para

Adicionar decoração ao texto.

### Valores comuns

- underline
- overline
- line-through
- none

### Exemplo

```css
text-decoration: underline;
```

### Agora escreva sozinho

```css
seletor {
   ______________________________
}
```

---

## 🌫️ Sombra no texto

### Propriedade

`text-shadow`

### Serve para

Adicionar sombra ao texto.

### Exemplo

```css
text-shadow: 2px 2px 5px gray;
```

### Agora escreva sozinho

```css
seletor {
   _________________________________
}
```

---

## 📦 Quebra de linha

### Propriedade

`white-space`

### Serve para

Controlar quebra de linha e espaços.

### Valores comuns

- normal
- nowrap
- pre

### Exemplo

```css
white-space: nowrap;
```

### Agora escreva sozinho

```css
seletor {
   ________________________
}
```

---

## ✂️ Texto cortado

### Propriedade

`text-overflow`

### Serve para

Controlar textos grandes.

### Valores comuns

- clip
- ellipsis

### Exemplo

```css
text-overflow: ellipsis;
```

### Agora escreva sozinho

```css
seletor {
   ___________________________
}
```

---

## 💡 Dica importante

### Ordem do shorthand `font`

```css
font: style weight size family;
```

### Exemplo

```css
font: italic bold 20px Arial;
```

---

## ❌ Erro comum

### Esquecer unidade no `font-size`

ERRADO:

```css
font-size: 20;
```

CERTO:

```css
font-size: 20px;
```

---

## ❌ Erro comum

### Usar muitas fontes diferentes

Isso pode:

- poluir o layout;
- dificultar leitura;
- deixar o site confuso.

Dica:

- Use no máximo duas fontes: uma para títulos e outra para textos em geral.

---

## 🧪 Exercícios

### Exercício 1

Crie:

- texto azul;
- tamanho 30px.

```css
____________________ {



}
```

---

### Exercício 2

Crie:

- texto centralizado;
- negrito.

```css
____________________ {



}
```

---

### Exercício 3

Crie:

- texto maiúsculo;
- sublinhado.

```css
____________________ {



}
```

---

### Exercício 4

Crie:

- sombra no texto;
- espaçamento entre letras.

```css
____________________ {



}
```

---

## 📋 Resumo rápido

| Propriedade       | Função                |
| ----------------- | --------------------- |
| `font-size`       | Tamanho do texto      |
| `font-family`     | Fonte                 |
| `font-weight`     | Espessura da fonte    |
| `font-style`      | Estilo da fonte       |
| `text-align`      | Alinhamento           |
| `line-height`     | Espaço entre linhas   |
| `letter-spacing`  | Espaço entre letras   |
| `word-spacing`    | Espaço entre palavras |
| `text-transform`  | Transforma letras     |
| `text-decoration` | Decoração do texto    |
| `text-shadow`     | Sombra no texto       |

---

## 🏆 Desafio

Monte um título com:

- texto centralizado;
- tamanho grande;
- sombra;
- letras maiúsculas;
- espaçamento entre letras.

```css
.titulo {






}
```
