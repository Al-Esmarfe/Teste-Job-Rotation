const faturamentoMensal = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const totalMensal = Object.values(faturamentoMensal).reduce((acc, curr) => acc + curr, 0);
  
  const representacaoEstados = {};
  
  for (let estado in faturamentoMensal) {
    representacaoEstados[estado] = (faturamentoMensal[estado] / totalMensal) * 100;
  }
  
  console.log(representacaoEstados);
  