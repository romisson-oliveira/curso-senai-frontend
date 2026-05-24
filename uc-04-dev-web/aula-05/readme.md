## UC04: Desenvolvimento Web

**Atenção:** Temos exemplos abaixo para explicar a relação entre os principais seletores css. São exemplos hipotéticos, portanto não existe tag nativas do html chamado `alunos`. Serve apenas para dar contexto para que você consiga entender a lógica.

## 📑 Aula 05: Seletores — O Espectro Digital
Nesta aula conversamos sobre os seletores em CSS. Relembramos os conceitos de **Regras CSS**, sendo o conjunto de um seletor, bloco de comando (`{ }`) , declaração css (propriedade e valor) e separador (`;`):

```css
seletor {
  propriedade: valor;
}
```

Vimos que para conseguir selecionar os elementos que temos no corpo do documento, precisamos entender sobre *especificidade*, isto é, o quanto devemos ser específicos no que diz respeito a quem devemos selecionar.

### 🎯 1. O Conceito: Quem você quer selecionar?

Um regra css é um comando para definir a estilização de um ou mais elementos html.

Até agora, usamos seletore globais e genéricos que pegavam um conjunto de elementos html da mesma "natureza". 
Utilizamos **seletores de tags**:

```html
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
```
- No exemplo acima, criamos dois parágrafos e vamos pegá-los para trocar as cores dos textos para vermelho:

```css
p {
  color: red;
}
```
- Acima aplicamos a cor vermelho **a todos os elementos** `p` do nosso documento.

#### 🏫 Escola Toda - TAG

> Todos os alunos devem utilizar o jaleco azul escuro!

Repare no comando acima! 
- Tem uma ordem clara: "usar o jaleco azul escuro!".
- Tem um seletor: a quem servirá está ordem? À **todos os alunos**.

Portanto, supondo que `alunos` são **tags html**, logo para selecioná-los no css e emitir o comando para definir o visual deles, usaremos apenas o nome do seletor: `alunos`:

```css
alunos {
  jaleco: azul-escuro;
}
```
Não importa se tenho 10, 100 ou 1000 alunos. Todos que receberem a ordem (regra) devem seguir.

#### 👥 Um grupo - CLASS

> Somente alunos dos cursos de qualificação devem utilizar o cordão do crachá com a cor vermelha!

Repare no comando acima:
- Também temos uma ordem clara: **utilizar o cordão do crachá com a cor vermelha**.
- Também observamos que a ordem pertence apenas a **grupo de `alunos`**.

Ao analizar, os elementos `alunos` (na nossa suposição sendo uma tag html), agora sabemos que eles ainda devem `jaleco-azul`, afinal receberam a ordem geral. Porém, devemos separar os alunos por grupos, por classe. 
No nosso contexto, chamaremos este grupo de `class`. Logo esta será um palavra reservada para este significado. Basta inserir este atributo na sua tag de abertura com o valor que você vai identificar a `class`.

> 💡 **Observação:** `class` neste nosso contexto não significa classe no contexto das linguaguens de programação que trabalham com Programação Orientadas à Objetos (POO, em inglês). Trata-se apenas de uma forma de agrupar elementos html que possuem o mesmo conjunto de regras css. Podemos, inclusive, pegar estas classes no JavaScript, porém lá temos as `class` possui outro significado. E para referenciar as `class` do html, usamos a mesma estrutura de seleção que você verá a seguir.

Agora, vamos representar nossa *tag hipotética* com html para ver como classificar um `aluno` em um grupo ou classe:

```html
<aluno>Arya Stark</aluno>   <!-- Este ao lado é um aluno, mas não tem classe -->
<aluno class="qualificacao">John Snow</aluno>   <!--  Este aluno faz parte de uma classe --->
<aluno class="qualificacao">Verme Cinzento</aluno>  <!-- 😂 -->
```

- `Arya Starck`, `John Snow` e `Verme Cinzento` são todos `alunos`.
- Porém apenas `Snow` e `Cinzento` fazem parte da classe de `qualificacao`. 

Para selecionar uma classe no css, usamos o símbolo de ponto (`.`) seguido do nome da classe (`qualificacao`), confira:

```css
.qualificacao {
  cordao-cracha: vermelho;
}
```
#### Identificador Único - ID

> O aluno John Show da turma de qualificação `QUA092` deve comparecer à pedagogia.

Agora vai haver momentos em que queremos identificar apenas **um elemento específico**. 

Neste caso, usamos o atributo `id` para isto.
Já deu para entender que o identificador é único. Portanto, o `id` funciona como o **CPF** ou a **Matrícula** do elemento. Ele é absolutamente único. Enquanto uma classe pode vestir vários alunos com o mesmo uniforme, o ID serve para chamar apenas uma pessoa específica pelo nome.

Seguindo o comando da chamada da pedagogia, vamos ver como aplicar isso no nosso HTML:

```html
<aluno>Arya Stark</aluno>   

<aluno class="qualificacao">Verme Cinzento</aluno>  

<aluno id="jon-snow" class="qualificacao">John Snow</aluno> 
```

Para selecionar um ID no CSS e aplicar uma regra exclusiva a ele, usamos o símbolo da hashtag (`#`) seguido do nome do ID, veja:

```css
#jon-snow {
  chamar: pedagogia;
}
```

---

### 📐 2. A Balança da Especificidade (Quem manda mais?)

Agora que conhecemos os três seletores principais (Tag, Classe e ID), o que acontece se o mesmo elemento receber ordens conflitantes?

Imagine o caso do nosso aluno **John Snow**:
1. A regra da **Tag** (`alunos`) diz: *"Todos usam jaleco azul-escuro"*.
2. A regra da **Classe** (`.qualificacao`) diz: *"Usem cordão de crachá vermelho"*.
3. A regra do **ID** (`#jon-snow`) diz: *"Você vai usar um jaleco dourado hoje"*.

No navegador, o John Snow usará o jaleco **dourado**. Isso acontece porque o CSS possui um sistema de pontos de peso (Hierarquia de Especificidade):

| Seletor | Analogia | Peso Técnico | Quem ganha? |
| :--- | :--- | :--- | :--- |
| **ID** (`#`) | CPF / Matrícula Única | `0, 1, 0, 0` | 🏆 **Campeão Absoluto** |
| **Classe** (`.`) | Uniforme do Grupo | `0, 0, 1, 0` | Segundo Lugar |
| **Tag** (puro) | Escola Inteira | `0, 0, 0, 1` | Base Geral |

> 🚨 **A Regra de Ouro da Seleção Direta:** Uma ordem dada diretamente para um elemento (seja por Tag, Classe ou ID) sempre vai esmagar uma ordem que ele recebeu por "herança" do elemento pai. Se você quiser mudar a cor de um texto que está dentro de uma caixa, o jeito mais seguro é apontar diretamente para ele!

---

### 🧠 3. Espaço Copilot (Reflexão com a IA)

Abra seu Agente de IA, envie o comando **`NOVO:`** e explique com suas próprias palavras:

1. Por que não devemos repetir o mesmo `id` em mais de um elemento na mesma página HTML, mesmo que o CSS funcione?
2. Se eu aplicar a propriedade `color` em uma `div` pai, por que os títulos `h2` dentro dela às vezes ignoram essa cor?

---

> 📅 **Nota de Transição (Aula 06):** Na aula seguinte, realizamos a correção e prática dos exercícios de seletores e iniciamos o estudo do comportamento dimensional das caixas, aprendendo sobre **Largura (`width`)** e **Altura (`height`)** através de unidades de medidas absolutas (pixels).

### 🕹️ 4. Exercícios

Bora praticar?
[Confira a lista de exercícios desta aula](../../exercicios/uc-04-dev-web/aula-05/readme.md)