## UC04: Desenvolvimento Web

## 💪 Lista de Exercícios de Fixação

> **Instruções:**  
> Realize os desafios separando as funções.  
> O código estrutural vai nos arquivos HTML e as ordens visuais vão exclusivamente no arquivo `style.css`.

---

### 📌 Passo 01: Configuração do HTML Principal (`externo.html`)

- Crie a estrutura básica HTML5 (`lang="pt-br"`).
- Adicione o texto `CSS Externo` no `<title>` desta página.
- Insira seu nome na tag meta author:

```html
<meta name="author" content="Seu Nome" />
```

- Crie:
    - um título `<h1>`;
    - dois `<h2>`;
    - três parágrafos `<p>` distribuídos pela página.
        - dois parágrafos dentro do primeiro subtítulo e um parágrafo dentro do segundo.

---

### 📌 Passo 02: Configuração da Segunda Página (`pagina2.html`)

- Crie outra estrutura HTML5 idêntica.
- Crie um `<title>` para esta página também.
- Coloque um título `<h1>` escrito:

```txt
Página 02 - O Poder do CSS Externo
```

- Crie:
    - um parágrafo `<p>`;
    - um link `<a>` apontando de volta para `externo.html`.

---

## 🎯 Desafio 1: A Conexão Inicial

- Vá ao `<head>` de ambos os arquivos HTML e faça a conexão com o arquivo `style.css` usando a tag `<link>`.

- No arquivo `style.css`, dê a ordem para o `body` ter um `background-color` de sua preferência.

### ✅ Verificação

Abra os dois arquivos no navegador.

**Pergunta:** Ambos ficaram com a mesma cor de fundo?

- [ ] **Sim!** ✅
- [ ] **Não!** ❌

> Se sim, a conexão foi um sucesso.

---

## 🎯 Desafio 2: Identidade Visual Unificada

No arquivo `style.css`:

- estilize o `<h1>` com a cor da Bio-Tech _(identidade visual de um empresa fictícia)_:

```css
#10b981
```

- estilize os parágrafos com uma cor clara.

### ✅ Observação

Navegue entre a página 1 e a página 2 e perceba como a identidade visual permanece igual sem duplicar código CSS.

---

## 🎯 Desafio 3: O Labirinto de Pastas (Organização Profissional)

No VS Code:

1. Crie uma pasta chamada `css` dentro da pasta `aula03`;
2. Mova o arquivo `style.css` para dentro da pasta `css/`.

### ⚠️ O Erro

O site perderá a estilização porque o caminho antigo foi quebrado.

### ✅ A Correção

Corrija o atributo `href` nas duas páginas HTML, dentro da tag `link`:

- Qual **novo** caminho do arquivo `style.css`? 🤔

---

## 🎯 Desafio 4: A Hierarquia Suprema (O Confronto Final)

Na `pagina2.html`:

- adicione uma tag `<style>` interna dentro do `<head>`;
- mande o `<h1>` ficar vermelho:

```css
color: red;
```

No arquivo `style.css` externo:

- mande o `<h1>` ficar azul:

```css
color: blue;
```

### ❓ Resultado

No navegador, qual cor o `<h1>` da página 2 assumiu?

- [ ] Vermelho (CSS Interno)
- [ ] Azul (CSS Externo)

### 🧪 Conclusão

Se mudarmos a ordem das tags `<link>` e `<style>` dentro do `<head>`, o resultado muda?

Teste inverter a posição delas para ver a **Cascata** agir.

---

## 🧠 5. Espaço Copilot (Reflexão com a IA)

Agora, abra seu chat com o Agente de IA, use o comando `NOVO:` e explique o que aprendeu respondendo às perguntas abaixo:

1. Por que manter o CSS em um arquivo separado facilita a vida de uma equipe de desenvolvimento quando o cliente pede para mudar a cor principal do site?

2. O que acontece se errarmos uma única letra no nome do arquivo dentro do atributo `href`? Como o navegador reage?

3. Explique a diferença entre:
    - criar uma pasta para organizar os arquivos CSS;
    - deixar tudo solto na mesma pasta.

---

> Dica de Mestre: Sempre pergunte e ajude seus colegas. Pode parecer confuso, mas juntos vamos descobrindo a lógica de cada estratégia. Pois dependendo do objetivo, entenderá qual decisão tomar.

<cite>
