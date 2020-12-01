import {model} from './model'
import {Site} from './classes/site'
import {SideBar} from './classes/sidebar'

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
  console.log(`Added new block`)
}

new SideBar('#panel', updateCallback)
site.render(model)