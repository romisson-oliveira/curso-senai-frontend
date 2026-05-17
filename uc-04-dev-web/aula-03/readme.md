## UC04: Desenvolvimento Web

## 📑 Aula 03: CSS Externo — O Decreto Global

Nesta aula, quebramos as fronteiras de uma única página. Saímos do "palanque" do CSS Interno e vamos criar um arquivo separado (`.css`), uma verdadeira **Central de Inteligência** capaz de estilizar dezenas, centenas ou milhares de páginas HTML ao mesmo tempo com uma única linha de código.

### 🎯 1. O Conceito: O Manual do Império

Para entender a evolução definitiva do CSS:

- **CSS Inline (Aula 01):** O general vai ao ouvido de cada soldado cochichar uma ordem. (Inviável para um exército).
- **CSS Interno (Aula 02):** O general grita no palanque para os soldados daquele quartel específico. (Melhorou, mas e se o império tiver 50 quartéis?).
- **CSS Externo (Aula 03):** O Rei escreve um **Manual de Conduta Global** (o arquivo `.css`) e envia uma cópia impressa para todos os quartéis do império (as páginas HTML). Se o Rei mudar uma linha no manual, todos os quartéis mudam de comportamento instantaneamente.

---

### 🏗️ 2. Anatomia da Integração Externa

Para conectar o nosso arquivo de estilos ao HTML, usamos uma etiqueta de conexão chamada `<link>` dentro da nossa cabeça (`<head>`).
Ela não tem tag de fechamento.

```html
<link rel="stylesheet" href="style.css" />
```

- Acima como chamamos um arquivo `.css` externo, confira o que significa cada coisa:
    - `<link>`: A etiqueta HTML que avisa o navegador que vamos puxar um arquivo de fora.
    - `rel="stylesheet"`: Atributo obrigatório. Explica a relação do arquivo com o HTML (Relação: Folha de Estilo).
    - `href="caminho/arquivo.css`: O endereço físico de onde o seu arquivo CSS está escondido no seu projeto.

---

### 🛠️ 3. Mão na Massa: Preparando o Rascunho

Atualize a estrutura do seu projeto criando a pasta da aula de hoje com os seguintes arquivos:

```text
[nome]-css/aula03/externo.html
[nome]-css/aula03/pagina2.html
[nome]-css/aula03/rascunho.html
[nome]-css/aula03/style.css
[nome]-css/aula03/readme.md
```

- `externo.html`: o arquivo principal para testar a conexão externa;
- `pagina2.html`: uma segunda página simples para provar o poder do estilo global;
- `style.css`: a nossa folha de estilo pura. Atenção: Aqui dentro NÃO se usa a tag `<style>`, apenas código CSS direto;
- `readme.md:` sua central de documentação e anotações.

Insira o seguinte no seu arquivo `readme.md`:

```md
## Aula 03 - CSS Externo 🌎

- **Localização:** Arquivo separado com a extensão `.css`, conectado através da tag `<link>` no `<head>`.
- **Vantagem:** Total separação entre conteúdo (HTML) e design (CSS). Permite alterar o visual de todo o site modificando um único arquivo.
- **Sintaxe de Conexão:**
  <!-- Aqui insira o elmento html que vimos em Anatomia da Integração Externa acima -->
```

- Agora adicione este bloco abaixo na última linha do seu `readme.md`:

```md
## Anotações ✍️
```

- Abaixo do título **Anotações** do seu `readme.md`, descreva com suas palavras
  qual a sensação de ver duas páginas mudarem de cor ao mesmo tempo.

---

### 🕹️ Exercícios

Bora praticar?

[Confira o exercício clicando aqui](../../exercicios/uc-04-dev-web/aula-03/readme.md)
