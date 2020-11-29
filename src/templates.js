import {row, col} from './utils'
import imageURL from './assets/v2.jpg'

function title(block){
  const {tag, styles } = block.options
  return row(col(`<${tag}> ${block.value} </${tag}>`), styles)
}


function text(block){
  const {tag, styles } = block.options
  return row(col(`<${tag}> ${block.value} </${tag}>`), styles)
}


function textColumns(block){
  const {styles } = block.options
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return row(col(`
  ${html.join('')}
  `), styles)
}


function image(block){
  const {tag, styles, imageStyles} = block.options
  return row(`<${tag} src="${block.value}" style="${imageStyles}">`, styles)
}

const templates = {title, text, textColumns, image}
export default templates