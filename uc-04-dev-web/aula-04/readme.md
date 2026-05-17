## UC04: Desenvolvimento Web

## 📑 Aula 04: Cores — O Espectro Digital
Nesta aula, abandonamos o limite das cores nomeadas (como `red` ou `blue`) e assumimos o controle total dos pixels da tela. 

Vamos entender como os navegadores interpretam luz e pigmento através de sistemas numéricos (Hexadecimal, RGB, HSL) e aprender a criar efeitos visuais modernos, como transparências inteligentes, gradientes e sombras estruturais.

### 🎯 1. O Conceito: Por que nomes não bastam?

Até agora, usamos cores chamando-as pelo "nome de batismo" (`red`, `blue`, `green`). O CSS possui 147 nomes de cores mapeados, mas o olho humano consegue distinguir cerca de 10 milhões de cores diferentes. 

- **A Dor do Designer:** Se um cliente ou designer pedir para você usar a cor exata da marca dele (por exemplo, um "Verde Esmeralda Imperial"), você não conseguirá resolver escrevendo `color: emerald-green;`. O navegador simplesmente ignorará o código.

- **A Solução:** Para controlar cada nuance de cor, precisamos falar a linguagem matemática do monitor, misturando feixes de luz vermelha, verde e azul.

---

### 🏗️ 2. Anatomia dos Sistemas de Cores

Para dominar o design de uma página, precisamos entender as três principais engrenagens de reprodução de cor no ecossistema web:



1. **Hexadecimal (`#RRGGBB`):** É a mistura de Vermelho (Red), Verde (Green) e Azul (Blue) expressa em base 16 (números de 0 a 9 e letras de A a F). 
   - Onde `00` representa ausência de luz e `FF` representa a intensidade máxima do feixe de luz.

2. **RGB (`rgb(R, G, B)`):** O mesmo conceito de mistura de canais de luz, mas usando números decimais puros de `0` a `255` para cada canal.

3. **HSL (`hsl(H, S%, L%)`):** Uma forma humana de pensar em cor. 
   - **H (Hue/Matiz):** A posição da cor na roda de cores (de 0 a 360 graus).
   - **S (Saturation/Saturação):** O quão viva ou cinzenta a cor é (0% a 100%).
   - **L (Lightness/Luminosidade):** A quantidade de branco ou preto injetada na cor (0% a 100%).

_Não precisa decorar. Existem ferramentas que geram estes códigos para você. Mas é importante saber a ordem._

> Veja os sites de apoio na seção [Links Importantes](../../recursos/cheatsheet/css/cores.md/#-links-importantes)
---

### 🛠️ 3. Mão na Massa: Preparando o Rascunho

*Crie a nova estrutura de diretórios para isolar os experimentos gráficos de hoje:*

```text
[nome]-css/aula04/cores.html
[nome]-css/aula04/rascunho.html
[nome]-css/aula04/style.css
[nome]-css/aula04/readme.md
``` 

- `cores.html`: arquivo base para estruturar os elementos que receberão as estilizações avançadas;
- `rascunho.html`: espaço dinâmico guiado pelo instrutor para testes rápidos de sintaxe e combinação de canais;
- `style.css`: folha de estilo externa responsável por guardar as regras cromáticas;
`readme.md`: este arquivo de documentação e diário de bordo.

Insira o seguinte no seu arquivo `readme.md`:
```md
## Aula 04 - CSS Cores 🎨
- **Sistemas Aprendidos:** Hexadecimal, RGB/RGBA, HSL/HSLA.
- **Efeitos de Profundidade:** Opacity, Gradients (Linear/Radial), Shadows.

## Anotações ✍️
```

- Abaixo do título **Anotações** do seu `readme.md`, sinta-se livre para fazer suas observações para revisão.

---

### 🕹️ 4. Exercícios

Bora praticar?
[Confira a lista de exercícios desta aula](../../exercicios/uc-04-dev-web/aula-04/readme.md)

---

### 🧠 5. Espaço Copilot (Reflexão com a IA)
Abra seu Agente de IA, envie o comando `NOVO:` e explique com suas palavras os seguintes pontos baseados no que você experimentou hoje:

- Em qual situação de desenvolvimento real eu devo escolher usar `rgba()` ao invés de usar a propriedade `opacity`?

- Se eu esquecer de colocar o caractere `#` antes de um código hexadecimal no CSS, como o navegador interpreta aquela linha?

- O que o parâmetro "Alpha" controla dentro das funções `rgba()` e quais são os limites numéricos aceitos por ele?

---

> _Dica de Mestre: Ao chegar em casa, abra o seu arquivo de estudos [**CSS Cheat Sheet | Cores**](../../recursos/cheatsheet/css/cores.md) enviado pelo instrutor. Use-o como consulta rápida e resolva os desafios complementares diretamente no seu caderno de estudos ou suba as respostas no seu rascunho de revisão!_