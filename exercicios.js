// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const alturaDoRetangulo = Number(prompt("Insira a altura do retângulo:"))
  const larguraDoRetangulo = Number(prompt("Insira a largura do retângulo:"))
  const areaTotal = alturaDoRetangulo * larguraDoRetangulo
  console.log(areaTotal)
}




// EXERCÍCIO 02
function imprimeIdade(atual, nascimento) {
  // implemente sua lógica aqui
  const AnoAtual = Number(prompt('Qual o ano do Atual Hoje?'))
  const AnoDeNascimento = Number(prompt('Qual o ano do seu nascimento?'))
  const calculoDeIdade = AnoAtual - AnoDeNascimento
  console.log(calculoDeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const pesoAtual = Number(prompt("Qual seu peso atual ?"))
  const alturaAtual = Number(prompt("Qual sua altura atual?"))
  return  pesoAtual / (alturaAtual * alturaAtual)
  
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUser = prompt('Qual o seu nome ?')
  const idadeUser = prompt('Qual a sua idade ?')
  const emailUser = prompt('Digite seu melhor E-email ?')

  console.log(`Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${emailUser}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  var cor1 = prompt('Qual a sua primeira cor favorita ?')
  var cor2= prompt('Qual a sua segunda cor favorita ?')
  var cor3 = prompt('Qual a sua terceira cor favorita ?')
  var todasCores = [cor1 , cor2, cor3]

  console.log(todasCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringModificada = string.toUpperCase()
  return stringModificada

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui



return array[0] 

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  
  return array[array.length - 1]
  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  
  const novoArray = array.slice()  // cria uma cópia do array original
  const ultimo = novoArray.pop() // remove o último elemento do novoArray e o armazena na variável "ultimo"
  const primeiro = novoArray.shift()  // remove o primeiro elemento do novoArray e o armazena na variável "primeiro"
  novoArray.unshift(ultimo)  // adiciona o valor de "ultimo" na primeira posição do novoArray
  novoArray.push(primeiro) // adiciona o valor de "primeiro" na última posição do novoArray
  return novoArray  // retorna o novoArray com o primeiro e último elemento trocados
 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13

 

  

  function checaRenovacaoRG() {

    const anoAtual = Number(prompt('Qual o ano Atual hoje ?'))
    const anoDeNascimento = Number(prompt('Qual o  seu ano de nascimento'))
    const identidade = Number(prompt('Qual o da sua identidade ?'))

  


  const idade = anoAtual - anoDeNascimento
  const tempoDesdeEmissao = anoAtual - identidade
  
  const precisaRenovarMenosDe20 = idade <= 20 && tempoDesdeEmissao >= 5
  const precisaRenovarEntre20e50 = idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10
  const precisaRenovarMaisDe50 = idade > 50 && tempoDesdeEmissao >= 15
  
  const precisaRenovar = precisaRenovarMenosDe20 || precisaRenovarEntre20e50 || precisaRenovarMaisDe50
  
  console.log(precisaRenovar)
 

 
}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  return ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0) 






}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const suaIdade = prompt('Você tem mais de 18 anos? (sim ou não)') === 'sim'

  const suaEscolaridade = prompt('Você possui ensino médio completo? (sim ou não)') === 'sim'

  const suaDisponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? (sim ou não)') === 'sim'
  
  
  const aprovacaoFinal = suaIdade && suaEscolaridade && suaDisponibilidade;
  
  console.log(aprovacaoFinal)



}


