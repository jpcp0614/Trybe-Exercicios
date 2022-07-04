function average (media) {
  if (media >= 7 && media <= 10) {
    return 'aprovado'
  } else if (media >= 0 && media < 4) {
    return 'reprovado direto'
  } else if (media < 0 || media > 10) {
    return 'digitar valor da média novamente'
  }
  return 'em recuperação'
}

module.exports = average;