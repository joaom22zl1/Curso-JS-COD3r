let dobro = function (a) {
  return 2 * a
}

dobro = a => {
  return 2 * a
}

dobro = a => 2 * a // retorno implícito

console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro

console.log(ola())

teste = num => console.log(num + 5)

teste(5)
