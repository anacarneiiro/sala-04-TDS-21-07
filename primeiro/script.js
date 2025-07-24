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
    if (numero=2 !== 0){
        resposta.innerHTML = numero1 / numero2
    }else{
    resposta.textContent = "Não se divide por 0"
}
}
//arow function 
const media= () => {
    var numero1 = parseFloat(document.getElementById("m1").value)
    var numero2 = parseFloat(document.getElementById("m2").value)
    var numero3 = parseFloat(document.getElementById("m3").value)
    var numero4 = parseFloat(document.getElementById("m4").value)
    var numero5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById('media')
    media.innerHTML = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    var validaço = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    if(validaço >=7){
        media.style.color ='green'
        media.style.backgroundColor = 'lightgreen'
    }else{
        media.style.color = 'red'
        media.style.backgroundColor = 'lightpink'
    }
    }
