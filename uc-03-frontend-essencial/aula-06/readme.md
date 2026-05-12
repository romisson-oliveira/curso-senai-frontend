## 📝 Resumo da Aula: Revisão e Boas Práticas

Hoje fizemos um mergulho nos erros cometidos na AV30 para transformá-los em aprendizado profissional.
Lembre-se: **Errar faz parte do processo de quem tenta mais!**

### 🚫 Erros Comuns para Evitar (O que aprendemos)

1.  **Hierarquia Torta:** Nunca coloque elementos de conteúdo (como `<h1>`) dentro do `<head>`. O `head` aceita elementos de configuração ou metadados para o contexto do navegador.
2.  **Fidelidade à Documentação:** Se a instrução pede "`meu-artigo.html`", não use "`Meu Artigo.html`". O computador é literal!
3.  **A Ordem dos Fatores Altera o Produto:** Siga a ordem dos elementos pedida no enunciado. Isso treina sua lógica de algoritmos.
    - Se a documentação pediu primeiro uma imagem vindo da internet e depois uma vindo de uma pasta de seu projeto. Siga!
4.  **Pastas com Extensão:** Pastas não são arquivos. Não use `.html` no nome de pastas.
5.  **Corpo Fora do Lugar:** Todo o conteúdo visível deve estar obrigatoriamente dentro da tag `<body>`.
6.  **Listas Sem Itens:** Um `<ul>` ou `<ol>` não pode ter texto direto. Ele deve ter filhos `<li>`.
    - ❌ `<ol>Arroz</ol>`
    - ✅ `<ol><li>Arroz</li></ol>`

### 💡 Novas Ferramentas e Conceitos

- **target="\_blank":** Atributo usado na tag `<a>` para abrir links em uma nova aba. Recurso ideal para quando a referência do hiperlink (`href`) for "um site externo", você não pede seus usuários. Ele ainda terá sua janela aberta no navegador.
- **Imagens GIF:** Funcionam exatamente como o `.jpg` ou `.png` na tag `<img>` devem ser inseridos os "caminho" no atributo `src` da tag `img`.
- **Atributo alt:** Falamos sobre inserir o atributo `alt` com um texto no elemento `img`. Para servir de _alternativa_ caso haja algum problema na nossa imagem este texto será exibido no lugar. Também serve para SEO e para assessibilidade do usuário.
- **Comentários:** Usamos para deixar notas no código que o navegador ignora. Cada linguagem tem seu formato. No HTML:
    - `<!-- comentário -->`.

### 🛠️ VS Code como Aliado

- **Tradução:** `Ctrl + Shift + P` -> "Configure Display Language" -> "Português (Brasil)".
- **Word Wrap (Alt + Z):** Faz o código "quebrar a linha" para não precisar de barra de rolagem lateral.
- **Sugestões (Ctrl + Espaço):** Abre a lista de atributos e valores possíveis (o famoso Emmet).
- **Formatação:** Botão direito no código -> "Format Document" (ajuda na identação).

### 🚀 Mentalidade Dev

- **Versão 0.0.1 (MVP):** Em uma entrega oficial, foque em entregar **primeiro o que foi pedido**. Garanta o básico funcionando.
- **Versão Beta:** Depois de garantir o obrigatório, aí sim crie uma nova versão com suas melhorias e experimentos.
- **Kaizen:** Melhoria contínua. Quem tenta mais, erra mais e, consequentemente, aprende muito mais!

---

_Mantenha seu código limpo e identado. Isso facilita a leitura e evita erros bobos!_
