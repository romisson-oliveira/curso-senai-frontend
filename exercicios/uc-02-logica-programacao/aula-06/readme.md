# Resoluções: Lista de Exercícios de Lógica e Algoritmo

Abaixo estão as resoluções simplificadas para os 9 exercícios da lista, estruturadas com a identificação do I.P.O. e o passo a passo lógico (Algoritmo).
[Confira os enunciados das questões aqui](<./Exercícios_ Desvendando a Lógica e Algoritmo.pdf>)

---

## 01. O Robô Barista

O robô precisa decidir se passa o café ou espera a água esquentar.

| Etapa               | Descrição                                                            |
| :------------------ | :------------------------------------------------------------------- |
| **Entrada (Input)** | Temperatura da água.                                                 |
| **Processamento**   | Verificar se a água já atingiu a temperatura ideal (quente). ex: 100 |
| **Saída (Output)**  | Passar o café OU aguardar.                                           |

**Algoritmo:**

1. Medir a temperatura da água.
2. Guardar o valor medido na variável `temperatura`.
3. **SE** a `temperatura` estiver quente (maior ou igual a 100):
    - Começar a passar o café.
4. **SENÃO**:
    - Esperar a água esquentar.

---

## 02. O Caixa Eletrônico

Cliente pede para sacar R$ 100,00 e o sistema precisa avaliar.

| Etapa               | Descrição                                                           |
| :------------------ | :------------------------------------------------------------------ |
| **Entrada (Input)** | Valor solicitado (R$ 100) e o Saldo da conta.                       |
| **Processamento**   | Verificar se o Saldo da conta é maior ou igual ao Valor solicitado. |
| **Saída (Output)**  | Liberação das notas OU mensagem de erro na tela.                    |

No nosso caso, podem ser aceitos de várias formas:

**Algoritmo 1:**

1. Ler o saldo atual da conta.
2. Guardar o saldo na variável `saldo`.
3. Ler o valor solicitado pelo usuário, que é 100.
4. Guardar o valor em `valorSolicitado`.
5. **SE** o `saldo` for maior ou igual a `valorSolicitado`:
    - Subtrair `valorSolicitado` do `saldo` e liberar as notas.
6. **SENÃO**:
    - Mostrar mensagem: "Saldo insuficiente".

**Algoritmo 2:**

1. Ler o saldo atual da conta.
2. **SE** o saldo for maior ou igual a 100:
    - Subtrair 100 do saldo e liberar as notas.
3. **SENÃO**:
    - Mostrar mensagem: "Saldo insuficiente".

> O Primeiro só é mais detalhado.

---

## 03. Login no Instagram

Decidir se o aplicativo entra no feed ou avisa de erro ao inserir os dados.

| Etapa               | Descrição                                                             |
| :------------------ | :-------------------------------------------------------------------- |
| **Entrada (Input)** | Usuário digitado e Senha digitada.                                    |
| **Processamento**   | Comparar se os dados digitados são iguais aos cadastrados no sistema. |
| **Saída (Output)**  | Redirecionamento para o feed de fotos OU tela tremendo com erro.      |

**Algoritmo:**

1. Receber usuário e senha do aplicativo.
2. **SE** estiverem corretos:
    - Carregar o feed de fotos.
3. **SENÃO**:
    - Tremer a tela e exibir "Senha ou usuário incorretos".

---

## 04. Sensor de Ré (Estacionamento)

O sistema avisa o motorista sobre a proximidade da parede.

| Etapa               | Descrição                                                          |
| :------------------ | :----------------------------------------------------------------- |
| **Entrada (Input)** | Distância medida até a parede.                                     |
| **Processamento**   | Verificar se a distância medida é muito curta (perigo de colisão). |
| **Saída (Output)**  | Emitir som "Bip-Bip" OU ficar em silêncio.                         |

Este enunciado causou muitas dúvidas. Basta entender que a distância do carro para a parede é representado por algum dado (escolho numérico, pois pode aumentar e diminuir), assim, podemos específicar qual valor esta distância deve ter para começar a emitir o som "Bip-Bip" (ex: 50).

As duas formas abaixos seriam aceitas:

**Algoritmo 1:**

1. Ler a distância no sensor.
2. **SE** a distância estiver perigosamente próxima:
    - Começar a emitir "Bip-Bip".
3. **SENÃO**:
    - Ficar em silêncio.

**Algoritmo 2:**

1. Criar uma distância de segurança (variável): `distanciaSegura`.
2. Atribuir um valor numérico para guardar em `distanciaSegura` → ex: 50.
3. Ler a distancia atual do carro para parede → ex: 120.
4. Guardar em uma variável `distanciaAtual`.
5. **SE** `distanciaAtual` for menor ou igual a `distanciaSegura`:
    - Começar a emitir "Bip-Bip".
6. **SENÃO**:
    - Ficar em silêncio.

> A principal diferença entre os dois é que o **primeiro** é uma anotação rápida para nos orientar e traduzir na linguagem de programação real, afinal temos uma sequência lógica do que teremos que fazer.
> Já o **segundo** além de fazer isto, já nos fornece a ideia de "como faremos" por meio dos recursos de uma linguagem (variáveis, condicionais, etc.).
> As duas formas fornece informações necessárias para nos orientar em como montar nosso sistema.

---

## 05. O Fim da Linha (Game Over)

O sistema lida com o personagem recebendo dano de um projétil.

| Etapa               | Descrição                                                          |
| :------------------ | :----------------------------------------------------------------- |
| **Entrada (Input)** | Vida atual do personagem e Dano recebido.                          |
| **Processamento**   | Subtrair o dano da vida atual e verificar se a vida chegou a zero. |
| **Saída (Output)**  | Continuação da partida OU tela de "Game Over".                     |

**Algoritmo:**

1. Descontar o dano recebido da barra de vida.
2. **SE** a vida for menor ou igual a zero:
    - Exibir tela "Game Over".
3. **SENÃO**:
    - Continuar o jogo normalmente.

---

## 06. Fazendo um PIX

Aplicativo transfere os 50 reais para o contato já selecionado.

| Etapa               | Descrição                                                                 |
| :------------------ | :------------------------------------------------------------------------ |
| **Entrada (Input)** | Valor de R$ 50 e Saldo do pagador.                                        |
| **Processamento**   | Checar saldo, subtrair do pagador e enviar ordem de crédito ao recebedor. |
| **Saída (Output)**  | Tela de "PIX enviado com sucesso" (comprovante).                          |

**Algoritmo:**

1. Verificar se há pelo menos 50 reais de saldo.
2. **SE** tiver saldo:
    - Descontar 50 reais da conta e enviar para o amigo.
    - Mostrar o comprovante de sucesso.
3. **SENÃO**:
    - Mostrar erro de transação.

---

## 07. Poste de Luz Inteligente

Postes identificam a luz do sol para economizar energia.

| Etapa               | Descrição                                                     |
| :------------------ | :------------------------------------------------------------ |
| **Entrada (Input)** | Nível de luz solar medido pelo sensor.                        |
| **Processamento**   | Verificar se o nível de luz captado é baixo (ficou de noite). |
| **Saída (Output)**  | Acender a lâmpada OU apagar a lâmpada.                        |

**Algoritmo:**

1. Ler a luz ambiente pelo sensor.
2. **SE** estiver escuro:
    - Acender as lâmpadas da rua.
3. **SENÃO**:
    - Desligar as lâmpadas.

---

## 08. Batalha de RPG

Cálculo de dano recebido pelo monstro no turno de ataque.

| Etapa               | Descrição                                                                        |
| :------------------ | :------------------------------------------------------------------------------- |
| **Entrada (Input)** | Ataque do jogador (10), Defesa do monstro (4) e Vida do monstro.                 |
| **Processamento**   | Calcular o dano real (Ataque - Defesa) e subtrair esse valor da vida do monstro. |
| **Saída (Output)**  | A barra de vida atualizada do monstro.                                           |

**Algoritmo:**

1. Subtrair a defesa (4) do ataque (10) para calcular o dano real (6).
2. Subtrair os 6 pontos de dano da vida do monstro.
3. Atualizar e exibir a nova barra de vida do monstro.

> Neste enunciado, deixei para que aqueles que conhecem melhor as regras de um jogo RPG possam ir além e criar um algoritmo mais detalhado.
> Não é o meu caso! Não conheço muito as regras: o que significa que muitas vezes vocês terão que criar sistemas (sites/app) para clientes onde vocês não tem ideias do que precisam fazer (processamento), sendo necessário **levantar todos os requisitos** de forma detalhada.
> _"FALAREMOS MAIS SOBRE ISTO NA UC DE DESENVOLVIMENTO DE PROJETOS"_. Para que consiga projetar e aplicar as regras de processamento.

---

## 09. Máquina de Latinhas

O refrigerante custa 5 reais e só aceita moedas de 1 real.

| Etapa               | Descrição                                                     |
| :------------------ | :------------------------------------------------------------ |
| **Entrada (Input)** | Moedas de 1 real inseridas.                                   |
| **Processamento**   | Somar o valor recebido e verificar se já atingiu 5 reais.     |
| **Saída (Output)**  | Liberação da lata de refrigerante OU esperar por mais moedas. |

**Algoritmo:**

1. Criar um contador para saber quantas moedas foram inseridas. Inicia com 0.
2. Receber moeda (ENTRADA).
3. **SE** moeda for de 1 real:
    - Adicionar uma unidade ao contador (que é o valor total).
4. **SENÃO**:
    - Envia mensagem dizendo que somente é aceito moeda de 1 real.
    - Devolver a moeda.
5. **SE** o valor total (`contador`) for igual a 5 reais:
    - Liberar a latinha de refrigerante.
6. **SENÃO**:
    - Aguardar o usuário inserir mais moedas.

> No caso acima, precisaríamos repetir o programa da linha 2 até 4 ATÉ que o valor total (`contador`) seja igual a 5.

Escrevemos na forma de decisão única, ou seja, vai executar linha a linha e no fim encerra o programa. E ao reiniciar, a primeira linha vai ser executada, fazendo com o que o contador volte a 0 - perdendo o valor que o usuário inseriu na primeira vez que tentou rodar nosso programa.

Deixei de propósito para dizer para vocês que NÃO PODEMOS PARAR o programa ATÉ que o contador seja igual a 5.
Para apresentar o recurso que temos chamado **laço de repetição**, quando temos que repetir um bloco de comando até que uma situação seja satisfeita.

> "Falaremos mais sobre isto no decorrer do curso".
