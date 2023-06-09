const { map, set } = require('lodash')

for (letra of 'Cod3r') {
  console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']

for (let i in assuntosEcma) {
  // exibe apenas os indices
  console.log(i)
}

for (let assunto of assuntosEcma) {
  console.log(assunto)
}

const assuntosMap = new Map([
  ['map', { abordado: true }],
  ['set', { abordado: true }],
  ['promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

for (let [ch, vl] of assuntosMap) {
  console.log(ch, vl)
}

const s = new set(['a', 'b', 'c'])
for (letra of s) {
  console.log(letra)
}
