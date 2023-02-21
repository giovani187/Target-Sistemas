const estados = [
    { nome: 'SP', valor: 67836.43 },
    { nome: 'RJ', valor: 36678.66 },
    { nome: 'MG', valor: 29229.88 },
    { nome: 'ES', valor: 27165.48 },
    { nome: 'Outros', valor: 19849.53 },
  ];

  const valorTotalFaturamento = estados.reduce((valorTotalFaturamento, estados) => valorTotalFaturamento = valorTotalFaturamento + estados.valor, 0)

  for (let i = 0; i < estados.length; i++) {
    const estado = estados[i];
    const percentual = (estado.valor / valorTotalFaturamento) * 100;
    console.log(estado.nome + ' - ' + percentual.toFixed(2) + '%')
  }