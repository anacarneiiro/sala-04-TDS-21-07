function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    // console.log(numero1, numero2)
    var resposta = document.getElementById('resp')
    resposta.textContent = numero1 + numero2  

}

function mul(){
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n9").valueAsNumber
    var resposta = document.getElementById('respond')
    resposta.textContent = numero1 * numero2  

}

function sub(){
    var numero1 = document.getElementById("n6").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    var resposta = document.getElementById('resSub')
    resposta.textContent = numero1 - numero2 
}

function div(){
    var numero1 = document.getElementById("n5").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    var resposta = document.getElementById('resposta')
    if(numero=2 !==0){
        resposta.innerHTML = numero1 / numero2
    }else{
    resposta.textContent = "Não se divide por 0"
}
}