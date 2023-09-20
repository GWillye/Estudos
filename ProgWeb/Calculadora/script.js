/*
 *  Script com a lógica da calculadora.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de uma calculadora que é um dispositivo eletrônico
 *  projetado para realizar cálculos matemáticos de maneira eficiente e rápida.
 *
 *  O passo-a-passo de funcionamento de uma calculadora básica:
 *
 *    1. Visor: O visor é a tela na calculadora que mostrará os números e os resultados das operações. Certifique-se de que o visor esteja limpo e inicializado com zero "0".
 *    2. Digite os números: Use o teclado numérico para inserir os números que deseja calcular. Os números geralmente estão dispostos de 0 a 9 e são representados por botões individuais.
 *    3. Escolha a operação: Para realizar uma operação (adição, subtração, multiplicação ou divisão), você precisará pressionar o botão correspondente à operação desejada. Os símbolos comuns são: "+", "-", "*" e "/".
 *    4. Digite mais números, se necessário: Se você estiver realizando uma operação que requer mais de um número (por exemplo, uma adição ou multiplicação), digite os números restantes após escolher a operação.
 *    5. Calcule o resultado: Para obter o resultado da operação, pressione o botão "igual" (=). A calculadora processará os números e mostrará o resultado no visor.
 *    6. Limpe o visor, se necessário: Se você deseja realizar outra operação ou fazer um novo cálculo, geralmente há um botão "AC" (All Clear) que permite limpar tudo o visor.
 *    7. Limpe o primeiro elemento (da direita para a esquerda) do visor, se necessário: Se você deseja realizar remover o último elemento digitado no visor, há um botão "Del" (Delete) que permite limpar ultimo elemento inserido no visor.
 *    8. Alterar sinal, se necessário: Se você deseja realizar a troca de sinal (positivo ou negativo), há um botão "mais ou menos" (+/-) que permite alterar o sinal do elemento para positivo ou negativo.
 *    9. Decimais: Se você estiver realizando uma operação que requer a inclusão de número decimal, há um botão "ponto" (.) para inserir a casa de decimal.
 *
 *    Ps: Lembre-se de tratar os casos de erro:
 *    - Verifique se o divisor na função ou fórmula não é zero (0), pois nenhum número real pode ser dividido por 0 (zero).
 *
 */

/*1. Variáveis de Controle:
   - O código começa selecionando diversos elementos HTML usando a função "document.querySelector" e "document.querySelectorAll". Esses elementos são necessários para interagir com a interface da calculadora. 
     Os elementos selecionados são armazenados em variáveis para uso posterior. 
     Ex: 
     let elementoResultado = document.querySelector(".js-resultado");
   */

// TODO (implementar)

/**
 * 2. Função "adicionaElementoAoInputResultado":
 *    - Esta função é responsável por adicionar um número ou operador ao campo de entrada da calculadora. Antes de adicionar o número ou operador, ela chama a função para para verificar se o símbolo já está presente no resultado.
 *      Além disso, ela verifica se o símbolo é o primeiro a ser inserido e evita a adição se for o caso.
 */
function adicionaElementoAoInputResultado() {
  // TODO (implementar)
}

/**
 * 3. Função "verificaSimboloInicial":
   - Essa função verifica se o símbolo recebido como parâmetro é o primeiro a ser inserido no resultado. Se for o caso, e não for um número, a função retorna "true" para evitar que um operador seja inserido no início.
 */

function verificaSimboloInicial() {
  // TODO (implementar)
}

/**
 * 
 * 4. Função "verificarSimboloDuplicado":
   - Esta função verifica se há símbolos duplicados no resultado. Ela examina o último caractere no campo de entrada e o novo símbolo a ser inserido. Se ambos não forem números e não forem zeros, chama a função para remover o último caractere e evitar duplicações.
 */
function verificarSimboloDuplicado() {
  // TODO (implementar)
}

/*
* 5. Função "executarCalculo:
   - Esta função é responsável por calcular o resultado da expressão matemática presente no campo de entrada. Ela usa a função "eval()" para avaliar a expressão e, em seguida, atualiza o campo de entrada com o resultado. Se ocorrer algum erro durante a avaliação, ela exibe um alerta. 
   - Syntax função eval()
    - eval(string)
     - string: Uma expressão, variável, instrução ou sequência de instruções JavaScript 
   */
function executarCalculo() {
  // TODO (implementar)
}

/*
*  6 . Função "limparResultado":
   - Essa função limpa o campo de entrada, ou seja, remove todos os números e operadores presentes nele.
*/
function limparResultado() {
  // TODO (implementar)
}

/*
7. Função "trocarSinalDaConta":
   - Essa função inverte o sinal do número no campo de entrada. Ela verifica se o valor atual é um número (positivo ou negativo) e, se for, inverte o sinal. 
 */
function trocarSinalDaConta() {
  // TODO (implementar)
}

/*  
* 8. Função "deletarUltimaLetraDoResultado":
   - Esta função remove o último caractere do campo de entrada. É usada quando o usuário pressiona o botão de deletar.
*/
function deletarUltimaLetraDoResultado() {
  // TODO (implementar)
}

/*
*   9. Função "gerenciarEscutadores":
   - Esta função atribui ouvintes de eventos (event listeners) a vários elementos HTML, como números, operadores e botões de ação. 
      Quando o usuário clica em um desses elementos, a função correspondente é chamada para manipular a entrada do usuário.
   - Você deve implementar todos os listeners para resultado, limpar resultado, inverter sinal, deletar último elemento digitado.   
      Exemplo:
    - Syntax Event Listeners:
     element.addEventListener(event, function, useCapture)
     element.addEventListener("click", myFunction1);
   */
function gerenciarEscutadores() {
  // TODO (implementar)
}

/*
10. Chamada de "gerenciarEscutadores":
    - No final do código, a função "gerenciarEscutadores" é chamada, configurando todos os ouvintes de eventos para que a calculadora 
      responda aos cliques dos usuários.
*/

// TODO (implementar)
