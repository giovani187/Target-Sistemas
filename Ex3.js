const dados = require("./dados.json");

var contador = 0, soma = 0, mediaFaturamento;
var valorMenorFaturamento = dados[0].valor, diaMenorFaturamento = dados[0].dia;
var valorMaiorFaturamento = dados[0].valor, diaMaiorFaturamento = dados[0].dia;

dados.forEach(objeto => {
    if (objeto.valor != 0) {
        contador++;
        soma = soma + objeto.valor;
        if (objeto.valor < valorMenorFaturamento) {
            valorMenorFaturamento = objeto.valor;
            diaMenorFaturamento = objeto.dia;
        } else if (objeto.valor > valorMaiorFaturamento){
            valorMaiorFaturamento = objeto.valor;
            diaMaiorFaturamento = objeto.dia;
        }
    }
});

mediaFaturamento = soma/contador;

console.log("O menor valor de faturamento foi o dia " + diaMenorFaturamento + " com " + valorMenorFaturamento + " de faturamento!")
console.log("O maior valor de faturamento foi o dia " + diaMaiorFaturamento + " com " + valorMaiorFaturamento + " de faturamento!")
console.log("A média mensal de faturamento foi de " + mediaFaturamento)

contador = 0

dados.forEach(objeto => {
    if (objeto.valor > mediaFaturamento)
        contador++;
})

console.log(contador + " dias onde o faturamento diário foi superior ao mensal")



  