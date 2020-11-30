import imageURL from './assets/v2.png'
import {ImageBlock, TitleBlock, TextBlock, TextColumnsBlock} from './classes/blocks'

export const model = [

  new TitleBlock('Title of my project', {
    tag: 'h2',
    styles: 'background: darkred; color: #fff;'
   }),
 
   new TextBlock('lorem sdfsdf lsdfj sdfjsrer', {
    tag: 'p',
    styles: 'background: darkblue; color: yellow; text-align:center;'
   }),


   new ImageBlock(imageURL, {
    imageStyles: 'width: 500px; height: auto;',
    styles: 'padding 2rem 0; display: flex; justify-content:center;'
   }),
   
   new TextColumnsBlock([
    '1 text',
    '2 text',
    '3 text',
    'Lorem ipsum dolor s'
  ], {
    styles: 'padding: 1rem;'
  }),
 
   new TextBlock('lorem sdfsdf lsdfj sdfjsrer', {
    tag: 'p',
    styles: 'background: darkblue; color: yellow; text-align:center;'
   })

]