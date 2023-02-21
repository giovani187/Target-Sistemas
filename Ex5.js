function InverterString(palavra){
    var stringInvertida = '';
    for (let indice = palavra.length-1;indice >= 0; indice--){
        stringInvertida += palavra[indice];
    }
    console.log(stringInvertida);
}

InverterString("SAMETSIS TEGRAT");