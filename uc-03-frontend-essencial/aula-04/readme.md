## 📚 Aula 04: UC-03 - Front End Essencial

**✅ Tema:** Estrutura HTML, Caminhos de Arquivos (Paths), Atributos e Links (Âncoras)

---

### 🧠 O que vimos hoje?

Percebi que muitos tiveram dificuldade na aula de hoje para entender sobre o **caminho de um arquivo ou pasta** e como usar os **atributos** das tags.
Se você achou confuso, respire fundo: está tudo bem!
É super normal estranhar isso na primeira vez que ouvimos falar.

Para ajudar a clarear as ideias, preparei uma explicação detalhada e visual.

Mas antes, vamos ver como estruturar nosso html:

#### 🏗️ A Estrutura Oficial do HTML5 (A "Casa" do Código)

Até agora, nós estávamos jogando tags soltas e o navegador estava "adivinhando" o que queríamos fazer. Mas sites profissionais precisam seguir regras claras para que o navegador, o Google (buscadores) e o CSS funcionem perfeitamente. Hoje aprendemos a montar o esqueleto oficial de uma página web!

No VS Code, podemos gerar essa estrutura rapidamente digitando `!` e apertando `Enter`.
O resultado é este:

```
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página</title>
</head>
<body>
    <!-- Aqui vai o conteúdo -->
</body>
</html>
```

##### Entendendo cada parte:

- `<!DOCTYPE html>`: É um aviso! Diz para o navegador: "Ei, vou usar a versão mais moderna do HTML (HTML5)!".

- `<html>`: É a tag mãe (a raiz do projeto). Tudo o que existe no seu site tem que estar dentro dela.

- `<head>`: É o "cérebro invisível". Aqui ficam as configurações da página que o usuário não vê diretamente no site, mas que são essenciais (como o idioma, os caracteres especiais no `<meta charset="UTF-8">` e o `<title>` que aparece na aba do navegador).

- `<body>`: É o "corpo visível". Tudo aquilo que você quer que apareça na tela (textos, imagens, listas, links) obrigatoriamente precisa ser escrito dentro desta tag!

---

#### 📍 O que é o "Caminho" de um arquivo?

- Todo arquivo (imagem, PDF, música ou arquivo `.html`) precisa ser "guardado" em algum lugar do computador (geralmente no seu HD ou SSD).
- Para o computador conseguir abrir esse arquivo, ele precisa saber o **endereço exato** de onde ele mora. Nós chamamos esse endereço ou "trilha" de **Caminho** (ou _Path_, em inglês).

**Por que é importante saber isso?**
Porque no Front-End vocês trabalharão com vários arquivos ao mesmo tempo. O seu site não será apenas um arquivo, mas sim uma pasta cheia de documentos, imagens e códigos conectados. Vocês precisam saber como ensinar o navegador a navegar entre esses arquivos.

#### ⚓ A Tag de Link (`<a>`) e os Atributos

Hoje aprendemos a criar links usando o elemento **Anchor** (Âncora). A estrutura básica dele é:

- **Abertura:** `<a>`
- **Conteúdo:** O texto ou imagem onde o usuário vai clicar (ex: "Clique Aqui").
- **Fechamento:** `</a>`

Mas só colocar a tag `<a>` não é suficiente. O navegador vai perguntar: _"Beleza, eu criei o link, mas quando o usuário clicar, para qual endereço eu devo levá-lo?"_

É aqui que entram os **Atributos**! Um atributo é uma instrução extra (uma informação adicional) que colocamos _dentro da tag de abertura_ para mudar o comportamento dela. No caso da tag `<a>`, o atributo principal é o **`href`** (Referência de Hipertexto). Ele guarda a instrução que diz para onde o link deve apontar.

#### 🗺️ Entendendo o "GPS" dos Caminhos

Pense no `href` como o **GPS do navegador**. O ponto de partida é sempre o arquivo onde você está escrevendo o código agora.
Veja os cenários que você encontrará no dia a dia:

**1. O link é para um site na internet (URL Externa):**
Você coloca o endereço completo.

- **Código:** `<a href="https://youtube.com">Ir para o YouTube</a>`

**2. Arquivos na mesma pasta (Mesmo nível):**
Quando o arquivo de destino está "morando" na mesma pasta que o seu arquivo atual. Você não precisa entrar nem sair de lugar nenhum, basta chamar o nome do arquivo.

- **Código:** `<a href="sobre.html">Ir para Sobre</a>`
- **Árvore do Projeto:**

```text
📂 projeto/
 ├── 📄 index.html   <-- (Você está escrevendo aqui)
 └── 📄 sobre.html   <-- (O GPS apenas aponta para o lado)
```

**3. Entrar em uma pasta (Nível Abaixo):**
Quando o arquivo de destino está guardado dentro de uma pasta que está ao seu lado. Usamos o nome da pasta seguido de / (que significa "entrar"). O `./` no início é opcional, mas ajuda a dizer "comece por aqui".

- **Código:** `<a href="./src/contato.html">Fale Conosco</a>`

- **Árvore do Projeto:**

```text
📂 projeto/
 ├── 📄 index.html        <-- (Você está aqui)
 └── 📂 src/              <-- (O GPS diz: "Entre nesta pasta...")
      └── 📄 contato.html  <-- (...e encontre este arquivo")
```

**4. Sair de uma pasta (Nível Acima):**
Este é o que exige mais atenção! Quando você está dentro de uma pasta e quer pegar um arquivo que ficou lá fora (na pasta pai). Usamos o código `../` para dizer ao GPS: "Saia desta pasta e volte um nível para trás".

- **Código:** `<a href="../index.html">Voltar para a Home</a>`

- **Árvore do Projeto:**

```text
📂 projeto/
 ├── 📄 index.html        <-- (O arquivo está lá fora!)
 └── 📂 src/
      └── 📄 portfolio.html <-- (Você está escrevendo aqui dentro)
```

---

### 🔗 Links Importantes

- Documentação:
    - [Elemento Anchor - Tag `a`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements/a)
    - [Caminhos: entenda as diferenças entre absoluto e relativo](https://www.alura.com.br/artigos/caminhos-entenda-diferencas-entre-absolutos-relativos?srsltid=AfmBOopJdt4fjo--O_xYbkBND7TF5zzfJHET10vYkMIHs2nv-j0g5ojK)

### 🕹️ Exercícios

- [Clique aqui para ir até o enunciado.](../../exercicios/uc-03-frontend-essencial/aula-04/readme.md)
