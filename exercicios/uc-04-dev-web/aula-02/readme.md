## 🎯 UC04: CSS Interno

_Nesta aula tivemos que trabalhar com css interno_

### 📝 Lista de Exercícios de Fixação

- Instruções: Realize os desafios abaixo dentro da tag `<style>`. Observe as mudanças no navegador a cada linha esrita.

- Abra seu arquivo interno.html e monte a seguinte estrutura básica:
    - Crie a estrutura **`HTML5`** com a linguagem em português: `lang="pt-br"`.
    - Crie 3 títulos `h1` (Vamos observar algo importante sobre isso).
    - Crie 2 títulos `h2`.
    - Crie 3 parágrafos `p` abaixo de cada `h2`.

- No `<head>` do seu HTML, logo abaixo do `<title>`, crie os _elementos html_ abaixo:

```html
<meta name="author" content="Romisson Oliveira" />
<!-- Aqui insira seu nome -->
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
