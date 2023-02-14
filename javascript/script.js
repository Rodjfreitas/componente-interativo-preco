let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')

preco.innerText = bar.value


function themeyearly (){
  let textoMes = document.querySelector('.texM') 
  let textoAno = document.querySelector('.texY')  
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(30px)"
  let discount = document.querySelector('.discount')
  discount.style.border = '1px solid var(--Discount-Text)'
  discount.style.borderRadius = '15px'
  discount.style.color = 'var(--Discount-Text)'
  discount.style.textDecoration = 'line-through'

  textoAno.style.textDecoration = "underline"
  textoMes.style.textDecoration = "none"

  let preco = document.querySelector('#price')
  let bar = document.querySelector('#rangeInput') 
  preco.innerText = `${bar.value - (bar.value * 0.25)}` 
  preco.style.color = 'var(--Discount-Text)'
  //preco.style.textDecoration = 'line-through'

  
}

function thememonthly(){
  let textoMes = document.querySelector('.texM') 
  let textoAno = document.querySelector('.texY')
  let ball = document.querySelector('.ball')
  ball.style.transform = "translateX(0px)"
  
  let discount = document.querySelector('.discount')
  discount.style.border = 'none'
  discount.style.borderRadius = 'none'
  discount.style.color = 'black'
  discount.style.textDecoration = 'none'

  textoAno.style.textDecoration = "none"
  textoMes.style.textDecoration = "underline"

  let preco = document.querySelector('#price')
  let bar = document.querySelector('#rangeInput') 
  preco.innerText = bar.value 
  preco.style.color = 'var(--Text-CTA-Background)'
  //preco.style.textDecoration = 'none'
}



function changePrice(){
//apresenta o valor indicado na barra em um campo h1 da página
let preco = document.querySelector('#price')
let bar = document.querySelector('#rangeInput')
preco.innerText = bar.value

//forçara o input radio sempre voltar para a opção sem desconto ao alterá-lo
let radios = document.getElementsByName('seletor')
radios[0].checked = true

thememonthly()

}

function alertMsg(){
  window.alert('Este botão não direciona a nenhum ambiente!')
}