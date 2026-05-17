# 🎮 CSS Cheat Sheet | Cores

---

## 🎨 Cores no CSS

As cores servem para alterar:

- textos;
- fundos;
- bordas;
- sombras;
- detalhes visuais.

O CSS aceita vários formatos de cor:

- nomes;
- hexadecimal;
- rgb();
- rgba();
- hsl();
- hsla();

---

### 🖌️ Cor do texto

#### Propriedade

`color`

#### Serve para

Alterar a cor do texto.

#### Aceita

- nomes
- hex
- rgb()
- hsl()

#### Exemplo

```css
color: red;
```

#### Agora escreva sozinho

```css
seletor {
   ___________________
}
```

---

## 🖼️ Cor de fundo

### Propriedade

`background-color`

### Serve para

Alterar a cor de fundo do elemento.

### Aceita

- nomes
- hex
- rgb()
- hsl()

### Exemplo

```css
background-color: blue;
```

### Agora escreva sozinho

```css
seletor {
   ______________________________
}
```

---

## 🧱 Cor da borda

### Propriedade

`border-color`

### Serve para

Alterar a cor da borda.

### Aceita

- nomes
- hex
- rgb()
- hsl()

### Exemplo

```css
border-color: green;
```

### Agora escreva sozinho

```css
seletor {
   ________________________
}
```

---

## 🔢 Cor com hexadecimal

### Formato

`#RRGGBB`

### Serve para

Definir cores usando hexadecimal.

### Exemplos comuns

```css
#ff0000  /* vermelho */
#00ff00  /* verde */
#0000ff  /* azul */
#000000  /* preto */
#ffffff  /* branco */
```

### Exemplo completo

```css
color: #ff0000;
```

### Agora escreva sozinho

```css
seletor {
   _______________________
}
```

---

## 🌈 Cor com RGB

### Formato

`rgb(red, green, blue)`

### Serve para

Misturar vermelho, verde e azul.

### Valores

0 até 255

### Exemplo

```css
color: rgb(255, 0, 0);
```

### Agora escreva sozinho

```css
seletor {
   _______________________________
}
```

---

## 🌈 Cor com RGBA

### Formato

`rgba(red, green, blue, alpha)`

### Serve para

Adicionar transparência à cor.

### Alpha

Vai de:

- 0 → totalmente transparente
- 1 → totalmente visível

### Exemplo

```css
background-color: rgba(0, 0, 0, 0.5);
```

### Agora escreva sozinho

```css
seletor {
   ______________________________________
}
```

---

## 🎛️ Cor com HSL

### Formato

`hsl(hue, saturation, lightness)`

### Serve para

Criar cores usando:

- matiz;
- saturação;
- luminosidade.

### Exemplo

```css
color: hsl(0, 100%, 50%);
```

### Agora escreva sozinho

```css
seletor {
   ______________________________
}
```

---

## 🎛️ Cor com HSLA

### Formato

`hsla(hue, saturation, lightness, alpha)`

### Serve para

Adicionar transparência ao HSL.

### Exemplo

```css
background-color: hsla(240, 100%, 50%, 0.3);
```

### Agora escreva sozinho

```css
seletor {
   _______________________________________
}
```

---

## 👻 Transparência

### Propriedade

`opacity`

### Serve para

Alterar a transparência do elemento inteiro.

### Valores

- 0
- até
- 1

### Exemplo

```css
opacity: 0.5;
```

### Agora escreva sozinho

```css
seletor {
   __________________
}
```

---

## 🌅 Gradiente linear

### Função

`linear-gradient()`

### Serve para

Criar um gradiente em linha reta.

### Exemplo

```css
background: linear-gradient(red, blue);
```

### Exemplo com direção

```css
background: linear-gradient(to right, red, blue);
```

### Agora escreva sozinho

```css
seletor {
   ___________________________________________
}
```

---

## 🌞 Gradiente radial

### Função

`radial-gradient()`

### Serve para

Criar gradiente circular.

### Exemplo

```css
background: radial-gradient(red, yellow);
```

### Agora escreva sozinho

```css
seletor {
   ______________________________________
}
```

---

## 🌑 Sombras com cor

### Propriedade

`box-shadow`

### Serve para

Adicionar sombra ao elemento.

### Exemplo

```css
box-shadow: 0 0 10px black;
```

### Agora escreva sozinho

```css
seletor {
   _________________________________
}
```

---

## ✍️ Sombra no texto

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
   __________________________________
}
```

---

## 💡 Dica importante

### Ordem do hexadecimal

```txt
#RRGGBB
```

- RR → vermelho
- GG → verde
- BB → azul

---

## Erro comum

### Esquecer o `#`

ERRADO:

```css
color: ff0000;
```

CERTO:

```css
color: #ff0000;
```

---

## ❌ Erro comum

### Usar opacity no elemento inteiro

```css
opacity: 0.5;
```

Isso deixa:

- texto;
- imagens;
- fundo;

transparentes juntos.

Às vezes é melhor usar:

```css
rgba()
```

---

## 🧪 Exercícios

### Exercício 1

Crie:

- texto vermelho;
- fundo preto.

```css
____________________ {
}
```

---

### Exercício 2

Crie:

- borda azul;
- fundo amarelo.

```css
____________________ {
}
```

---

### Exercício 3

Crie:

- fundo com transparência;
- usando rgba().

```css
____________________ {
}
```

---

### Exercício 4

Crie:

- um gradiente;
- da esquerda para direita.

```css
____________________ {
}
```

---

## 📋 Resumo rápido

| Propriedade        | Função          |
| ------------------ | --------------- |
| `color`            | Cor do texto    |
| `background-color` | Cor de fundo    |
| `border-color`     | Cor da borda    |
| `opacity`          | Transparência   |
| `box-shadow`       | Sombra          |
| `text-shadow`      | Sombra no texto |

---

## 🏆 Desafio

Monte um card com:

- fundo escuro;
- texto branco;
- borda colorida;
- sombra;
- gradiente.

```css
.card {
}
```

---

##  🔗 Links Importantes

### Sites Para Pegar e Gerar Cores:

- [HSL Picker](https://www.hslpicker.com/)
- [Text Shadow CSS Generator](https://html-css-js.com/css/generator/text-shadow/)
- [Box Shadow CSS Generator](https://html-css-js.com/css/generator/box-shadow/)
- [RBG Color Picker](https://rgbcolorpicker.com/)
- [RGBA Color Picker](https://rgbacolorpicker.com/)
- [Extensão CollorZilla - Para pegar cor no navegador](https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=pt-BR)

### Ferramentas para utilizar em conjunto com a tabela de Cores HTML e CSS

_Explorar paletas de cores pode facilitar bastante o processo de criação visual. Confira abaixo algumas ferramentas úteis:_

- [**Material UI Colors:**](https://materialui.co/colors)
   - Esse site reúne cores amplamente utilizadas no padrão Material Design. As combinações costumam ser modernas, elegantes e bastante presentes em interfaces atuais. Um detalhe útil é que, ao clicar sobre uma cor, o código hexadecimal é copiado automaticamente, permitindo colar diretamente no HTML ou CSS sem perder tempo.   
- [**Color Hunt:**](https://colorhunt.co/)
   - Plataforma com diversas coleções de paletas criadas por designers e usuários da comunidade. É uma boa opção para encontrar combinações prontas e escolher estilos que combinem com o visual do seu projeto.
- [**Adobe Color:**](https://color.adobe.com/br/create/color-wheel)
   - Ferramenta oficial da Adobe voltada para criação e harmonização de cores. Ao selecionar uma tonalidade, o sistema sugere automaticamente cores compatíveis, ajudando na construção de paletas equilibradas e profissionais.

_Depois de definir suas cores utilizando as ferramentas acima, você pode recorrer à tabela de cores HTML para consultar e copiar valores em hexadecimal, nomes de cores ou códigos RGB diretamente para o seu projeto._
 