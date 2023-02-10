let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')

preco.innerText = bar.value


function themeyearly (){
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(30px)"
  let discount = document.querySelector('.discount')
  discount.style.border = '1px solid red'
  discount.style.borderRadius = '15px'
  discount.style.color = 'red'
  discount.style.textDecoration = 'line-through'

  
}

function thememonthly(){
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(0px)"
  
  let discount = document.querySelector('.discount')
  discount.style.border = 'none'
  discount.style.borderRadius = 'none'
  discount.style.color = 'black'
  discount.style.textDecoration = 'none'
}

function changePrice(){
let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')

preco.innerText = bar.value

}