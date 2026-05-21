## UC04: Desenvolvimento Web

### 💪 Lista de Exercícios de Fixação

- **Instruções:** Monte a estrutura HTML contendo contêineres (`<div>`) e textos (`<h1>`, `<h2>`, `<p>`) no arquivo `cores.html`. Toda a pintura e lógica visual deve ser codificada dentro do arquivo `style.css`.

#### Passo 01: Estrutura HTML de Testes

1. No seu arquivo `cores.html`, monte a estrutura padrão HTML5 em português, com título da página (`title`) e nome do `author`.

2. Crie um título principal com o texto `Meu Artigo Bonito`.

3. Crie 3 caixas estruturais (`<div>`) e coloque um título e um parágrafo legível dentro de cada uma delas.

- Uma `div` é um elemento html responsável por agrupar elementos html. Para usar, basta abrir uma tag de abertura `<div>`, inserir seu título e parágrafos e fechar no fim `</div>`.

> _Não se preocupe com div agora. Use-o apenas para começar a se acostumar._

---

### Desafio 1: Decifrando o Código do Designer

_O designer do projeto enviou as especificações exatas da paleta de cores em formatos variados. Aplique as regras estritamente através do seu arquivo `style.css`:_

- Fundo da página (`body`): Deve usar o Hexadecimal `#121214` (um cinza quase preto comum em temas escuros).

- Texto dos títulos: Deve usar o RGB puro `rgb(0, 255, 127)`.

- Texto dos parágrafos: Devem usar o sistema rgba com `230, 230, 230, 1` (um branco levemente acinzentado para não cansar as vistas).

- Borda das **Caixas**: Deve usar a lógica rgba com `0, 255, 127, 0.3`.

---

### Desafio 2: O Efeito Vidro e Relevo (Transparência e Sombras)
_Agora que o site tem uma cor de fundo escura, vamos usar seletores simples para criar efeitos visuais modernos de transparência e profundidade:_ 

* Faixas de Destaque (`h2`): Queremos que todos os `h2` ganhem um fundo sutil. Dê a eles um `background-color` usando `rgba(255, 255, 255, 0.1)`.
    - O que acontece: Isso cria um fundo branco com apenas 10% de visibilidade (90% transparente), gerando um efeito de "vidro fumê" sobre o fundo escuro do site.

- Moldura dos Destaques (`h2`): Adicione uma cor de borda (`border-color`) nesses mesmos `h2` usando qualquer cor no formato nomeado ou hexadecimal.

- Efeito de Relevo (`p`): Para fazer os parágrafos se destacarem, adicione a propriedade `text-shadow: 1px 1px 3px black`;.
   - O que acontece: Uma sombra preta discreta surgirá atrás de cada letra, dando uma sensação de que o texto está saltando da tela.

--- 