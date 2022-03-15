
/*function agregarNumero(){
    let referenciaInput = document.getElementById("campo1") //para acceder a campo1
    let valoresInput = referenciaInput.value //accedermos al valor
    valoresInput.parseInt()
    num.push(valoresInput)
    console.log(valoresInput)
    console.log(num.length)
}*/

num = []

function agregarNumero(){
    let numero = parseInt(campo1.value)
    num.push(numero)
    console.log(numero)
    console.log(num.length)
    campo2.value = num
}

function sacarAleatorio(){
    let aleat = Math.floor(Math.random() * num.length)
    console.log(aleat)
    campo3.value = num[aleat]
}