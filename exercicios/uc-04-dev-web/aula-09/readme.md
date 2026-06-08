# 🛠️ LISTA DE EXERCÍCIOS PREPARATÓRIOS

## Exercício 1: Alinhamento de Menu com Flexbox e Gap

**Objetivo:** Praticar a distribuição horizontal de elementos usando Flexbox sem recorrer a margens manuais.

### HTML

```html
<div class="caixa-pai">
  <div class="item">Opção 1</div>
  <div class="item">Opção 2</div>
  <div class="item">Opção 3</div>
</div>
```

### Desafio CSS

Aplique as regras necessárias na classe `.caixa-pai` para que os itens fiquem alinhados lado a lado, centralizados horizontalmente no meio da tela, e com um espaçamento exato de `25px` entre eles usando a propriedade `gap`.

---

## Exercício 2: O Quebrador de Linhas (Flex Wrap)

**Objetivo:** Entender como fazer elementos flexíveis irem para a linha de baixo de forma automática quando o espaço da tela acaba.

### HTML

```html
<div class="galeria">
  <div class="foto">Foto 1</div>
  <div class="foto">Foto 2</div>
  <div class="foto">Foto 3</div>
  <div class="foto">Foto 4</div>
</div>
```

### Desafio CSS

A classe `.galeria` possui `width: 500px`.

Cada `.foto` possui `width: 200px`.

Ao ativar o `display: flex;` na galeria, as fotos vão se esmagar para caber na mesma linha.

Adicione a propriedade correta no elemento pai para permitir que as fotos que não couberem pulem para a próxima linha de forma organizada.

---

## Exercício 3: Do Computador para o Celular (Media Query)

**Objetivo:** Praticar a inversão do eixo do Flexbox usando filtros de tamanho de tela.

### HTML

```html
<section class="bloco-conteudo">
  <div class="lado-esquerdo">Esquerda</div>
  <div class="lado-direito">Direita</div>
</section>
```

### Desafio CSS

1. No código padrão (Desktop), faça com que as classes `.lado-esquerdo` e `.lado-direito` fiquem lado a lado.

2. Crie uma Media Query com o limite de `max-width: 768px`.

3. Dentro dela, altere o comportamento da classe `.bloco-conteudo` para que os dois blocos passem a ficar empilhados (um embaixo do outro) quando visualizados no celular.

---

## Exercício 4: O Interruptor de Cores (JavaScript Básico)

**Objetivo:** Compreender a lógica de capturar um elemento, escutar o clique e disparar uma modificação visual de classe.

### HTML

```html
<div id="caixa-colorida" class="caixa-azul">
  Olhe minha cor!
</div>

<button id="btn-mudar">
  Mudar Cor
</button>
```

### CSS

```css
.caixa-azul {
  background-color: blue;
  color: white;
  padding: 20px;
}

.caixa-verde {
  background-color: green;
}
```

### Desafio JavaScript

Escreva o código JavaScript que:

1. Selecione o botão.
2. Selecione a div.
3. Escute o evento de clique do botão.
4. Utilize o método `.classList.toggle()` para ligar/desligar a classe `caixa-verde` na div.

**Resultado esperado:** a caixa deve alternar entre azul e verde a cada clique.

