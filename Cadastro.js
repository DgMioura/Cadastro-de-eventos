//Verificação de data
let dataEvento = new Date('02/02/2022')
let dataHoje = new Date()

if (dataEvento > dataHoje) {
    console.log("Evento válido")
}else {
    console.log("Evento inválido")
}

//Verificação de idade
let idadeParticipante = 18
if (idadeParticipante >= 18) {
    console.log("Cadastro permitido")
}else {
    console.log("Cadastro não permitido, menor que 18 anos")
}
//Lista de Participantes
let listaParticipantes = ["Douglas" , "Juliane" , "Lucas" , "Caio" , "Luciene" , "Roberto" , "José" , "Bruno", "Pamela" , "Rebeca"]
for(let contador = 0; contador < listaParticipantes.length; contador = contador + 1){
    console.log(listaParticipantes[contador]) 
    console.log(contador)
}

let quantidadeParticipantes = 10
if(quantidadeParticipantes <= 10){
    console.log("Cadastro válidado")
}else{
    console.log("Evento lotado, cadastro inválido")
}

