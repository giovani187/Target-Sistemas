if (PertenceSequenciaFibonacci(35)) {
    console.log("Pertence a sequência")
} else console.log("Não pertence a sequência")

 
function PertenceSequenciaFibonacci(numero) {
    var listaFibonacci = ObterSequenciaFibonacci(numero);
    return listaFibonacci.includes(numero);
}

function ObterSequenciaFibonacci(numero) {
    let SequenciaFibonacci = [0, 1];
    var indice = 2;
    while (SequenciaFibonacci[indice - 1] < numero) {
        SequenciaFibonacci[indice] = SequenciaFibonacci[indice - 1] + SequenciaFibonacci[indice - 2];
        indice++;
    }
    return SequenciaFibonacci;
}