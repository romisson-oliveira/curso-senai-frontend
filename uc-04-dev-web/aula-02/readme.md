## UC04: Desenvolvimento Web

## 📑 Aula 02: CSS Interno — A Central de Comando
Nesta aula, saímos do "corpo a corpo" do CSS Inline e subimos para o "palanque" do CSS Interno. Vamos aprender a dar ordens coletivas e entender a estrutura que faz o CSS funcionar.

### 🎯 1. O Conceito: General vs. Soldados

Para entender a diferença entre o que fizemos na aula passada e o que faremos hoje:

- CSS Inline (Aula 01): É como se um general tivesse que ir ao ouvido de cada soldado e dizer: "Vire à esquerda". Dá muito trabalho e gera confusão.
- CSS Interno (Aula 02): O general sobe em um palanque (a tag `<style>`) e grita para todos de uma vez:
  - "Quem for soldado, vire à esquerda!". Todos os elementos do mesmo tipo obedecem simultaneamente.

---

### 🏗️ 2. Anatomia de uma Declaração CSS

*Toda regra CSS segue este padrão rigoroso. Se um sinal estiver fora do lugar, a ordem não é cumprida.*

```css
seletor {
    propriedade: valor;
}
```

- **Seletor:** Quem eu quero estilizar? (Ex: `p`, `h1`, `body`).
- **Chaves** `{ }`: Onde começa e onde termina o pacote de ordens para aquele seletor.
- **Propriedade:** O que eu quero mudar? (Ex: color, background-color).
- **Dois Pontos** `:` → O separador que indica o que a propriedade vai receber.
- **Valor:** A nova característica (Ex: `blue`, `black`, `20px`).
- **Ponto e Vírgula** `;` → O ponto final da ordem. Obrigatório para separar várias ordens.

---

### 🛠️ 3. Mão na Massa: Preparando o Rascunho

*Com sua estrutura de projeto pronta, crie um novo arquivo no referente caminho:*

```text
[nome]-css/aula02/interno.html
[nome]-css/aula02/rascunho.html
[nome]-css/aula02/readme.md
```

- `interno.html`: este arquivo serve para executar os exercícios da aula de hoje;
- `rascunho.html`: este será o arquivo para praticar em sala de aula, para testar, para se divertir, executar exercícios que o instrutor ditar;
- `readme.md`: este arquivo serve para explicar o que é o projeto e para que serve. No nosso contexto, vamos usar para documentar os processos. Assim, inserindo anotações para revisão e para alimentar nosso copiloto com o contexto das aulas.

Insira o seguinte no seu arquivo `readme.md`:

```md
## Aula 02 - CSS Interno 🖼️
- **Localização:** Dentro da tag `<style>` no `<head>`.
- **Vantagem:** Organização e controle de vários elementos ao mesmo tempo.
- **Sintaxe:**

```
- Após inserir o código acima no seu `readme.md`, copie o bloco abaixo e cole abaixo do item `**Sintaxe**` no mesmo arquivo:
  
<pre>&#96;&#96;&#96;css
seletor {
    propriedade: valor;
}
&#96;&#96;&#96;

## Anotações 📝

</pre>
- Estamos criando uma estrutura básica de pastas e nossas anotações.
  
> _Abaixo do título **Anotações** do seu `readme.md`, explique com suas palavras o que você aprendeu. Isto ajuda a fixar o conteúdos na memória._

---

### 📝 4. Lista de Exercícios de Fixação

- Instruções: Realize os desafios abaixo dentro da tag `<style>`. Observe as mudanças no navegador a cada linha esrita.

- Abra seu arquivo interno.html e monte a seguinte estrutura básica:

  - Crie a estrutura **`HTML5`** com a linguagem em português: `lang="pt-br"`.
  - Crie 3 títulos `h1` (Vamos observar algo importante sobre isso).
  - Crie 2 títulos `h2`.
  - Crie 3 parágrafos `p` abaixo de cada `h2`.

- No `<head>` do seu HTML, logo abaixo do `<title>`, crie os *elementos html* abaixo:

```html
<meta name="author" content="Romisson Oliveira">  <!-- Aqui insira seu nome -->
<style>
    /* Suas ordens CSS virão aqui dentro */
</style>
```


#### Desafio 1: A Ordem Coletiva

- Mude a cor de todos os parágrafos (`p`) para uma cor à sua escolha e mude o tamanho da fonte para `18px`.

#### Desafio 2: O Fundo do Palco

- Use o seletor `body` para mudar a cor de fundo (`background-color`) de toda a página para uma cor escura
  - (Ex: `black`, `navy` ou `#1e293b`).

#### Desafio 3: Itens de Lista

- Crie um lista não ordenada (`ul`) com 3 itens (`li`).
- Se você tiver uma lista `ul`, mude apenas a cor das etiquetas `li`.

#### Desafio 4: A Queda de Braço (Especificidade)

- Escolha um parágrafo que já tenha CSS Inline da aula passada. Tente mudar a cor dele pelo CSS Interno.
- Pergunta: Quem ganhou a briga?
  - [ ] A cor do **Inline**?
  - [ ] A cor do **Interno**?


#### Desafio 5: Economia de Código (Agrupamento)

- Faça com que o `h1` e o `h2` tenham a mesma cor de fundo usando apenas uma regra CSS
  - (Dica: use vírgula entre os seletores).

#### Desafio 6: O Erro Proposital (Depuração)

- Apague um ponto e vírgula `;` de uma regra que tenha duas propriedades ou apague uma chave `}`.
  - Veja o que acontece com o estilo da página e tente consertar.

---

### 🧠 5. Espaço Copilot (Reflexão com a IA)

Agora, use o comando **`NOVO`**: no seu Agente de IA e explique com suas palavras os seguintes pontos para validar seu conhecimento:

1. Por que o CSS Interno é melhor que o Inline para sites com muitos parágrafos?
2. O que você notou de estranho em ter três tags h1 em uma mesma página? (Dica: Pense em como um robô leria um livro com três títulos principais).
3. Qual foi a maior dificuldade que você encontrou ao escrever a sintaxe (chaves, pontos, etc)?

---

> *Dica do Mestre: Documentar o que você aprendeu é o primeiro passo para se tornar um desenvolvedor sênior. Use este `README` para consultar sempre que esquecer a sintaxe!*
