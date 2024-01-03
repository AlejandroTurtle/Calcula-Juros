import pergunta from "readline-sync";

const divida = pergunta.question("Informe o valor da divida: ");

let taxajuros = 0
const juros10 = 10
const juros5 = 5





if (divida <= 0) {
  console.log("Por favor digite um número válido")
} else {

  const dias = pergunta.question("Informe quantos dias se passaram desde o vencimento do boleto:");

  if (dias >= 15) {
    taxajuros = 0.1 * divida
    console.log("Taxa de juros: "+ juros10 + "%")
    }
    
    
    else {
    taxajuros = 0.05 * divida 
    console.log("Taxa de juros: "+ juros5 + "%")
    
    }




let valortotal = parseFloat(divida) + parseFloat(taxajuros)


console.log("Valor original da divida: " + divida);
console.log("Dias atrasados: " + dias);
console.log("O valor total com juros é: " + valortotal);


}















