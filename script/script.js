const quote = document.querySelector('.advice-text')
const icon = document.querySelector('.icon')
const id = document.querySelector('.title span')

fetch('https://api.adviceslip.com/advice')
  .then(r => r.json())
  .then(json => {
    quote.innerText = json.slip.advice
    id.innerText = `#${json.slip.id}`
  })

icon.addEventListener('click', changeAdvice)

function changeAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then(json => {
      quote.innerText = json.slip.advice
      id.innerText = `#${json.slip.id}`
    })
}
