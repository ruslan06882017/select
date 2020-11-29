import {model} from './model'
import templates from './templates'
const site = document.querySelector('#site')


model.forEach(block => {
  const generate = templates[block.type]
  if (generate){
    let html = generate(block)
    site.insertAdjacentHTML('beforeend', html)
  }
})
