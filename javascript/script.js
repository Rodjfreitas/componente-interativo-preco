let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')

preco.innerText = bar.value


function themeyearly (){
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(30px)"
}

function thememonthly(){
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(0px)"
}

function changePrice(){
let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')

preco.innerText = bar.value

}